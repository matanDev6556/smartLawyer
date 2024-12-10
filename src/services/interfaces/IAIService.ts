import { LegalCategory } from '../../types/legal';

export interface IAIService {
  generateResponse(
    category: LegalCategory,
    details: Record<string, string>,
    context?: string
  ): Promise<{
    content: string;
    category: LegalCategory;
    timestamp: number;
  }>;
}
