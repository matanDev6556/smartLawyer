import {
  GoogleGenerativeAI,
  GenerativeModel,
  GenerationConfig,
} from '@google/generative-ai';
import { env } from '../config/env';
import { LegalCategory, LegalResponse } from '../types/legal';
import { IAIService } from './interfaces/IAIService';
import { CategoryContextGenerator } from './contextGenerator';
import { categoryService } from './categoryService';

export class GeminiService implements IAIService {
  private model: GenerativeModel;
  private contextGenerator: CategoryContextGenerator;
  private config: GenerationConfig;

  constructor(
    contextGenerator: CategoryContextGenerator,
    config?: GenerationConfig
  ) {
    const genAI = new GoogleGenerativeAI(env.GEMINI_API_KEY);
    console.log('API Key:', import.meta.env.VITE_GEMINI_API_KEY);

    this.config = config || {
      temperature: 0.7,
      topK: 1,
      topP: 0.8,
      maxOutputTokens: 2048,
    };

    this.model = genAI.getGenerativeModel({
      model: 'gemini-1.5-pro',
      generationConfig: this.config,
    });

    this.contextGenerator = contextGenerator;
  }

  async generateResponse(
    category: LegalCategory,
    details: Record<string, string>,
    sourceUrl?: string
  ): Promise<LegalResponse> {
    if (!categoryService.validateCategoryInput(category, details)) {
      throw new Error('חסרים פרטים נדרשים');
    }

    try {
      const context = this.contextGenerator.generateContext(category);
      const categoryPrompt = this.contextGenerator.generateCategoryPrompt(
        category,
        details
      );

      const prompt = `
        ${context}
        
        קטגוריה: ${categoryService.getCategoryById(category)?.title}
        ${categoryPrompt}
        ${sourceUrl ? '\nמקור מידע נוסף: ' + sourceUrl : ''}
        
        אנא ספק תשובה מפורטת ומקצועית בעברית.
      `;

      const result = await this.model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();

      if (!text) {
        throw new Error('התקבלה תשובה ריקה מהמערכת');
      }

      return {
        content: `${text}\n\nהערה: המידע הנ"ל הינו כללי בלבד ואינו מהווה תחליף לייעוץ משפטי מקצועי. מומלץ להתייעץ עם עורך דין מוסמך לקבלת ייעוץ מחייב.`,
        category,
        timestamp: Date.now(),
      };
    } catch (error) {
      console.error('Gemini API Error:', error);
      throw new Error(
        'מצטערים, אירעה שגיאה בקבלת המידע המשפטי. אנא נסו שוב מאוחר יותר.'
      );
    }
  }
}

// יצירת אינסטנס של השירות
const contextGenerator = new CategoryContextGenerator();
export const geminiService = new GeminiService(contextGenerator);
