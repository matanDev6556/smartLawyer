import { LegalCategory } from '../types/legal';
import { categoryService } from './categoryService';

export class CategoryContextGenerator {
  private legalContext = `
    אתה יועץ משפטי מומחה בעל ידע נרחב בחוק הישראלי. תפקידך:
    1. לספק מידע משפטי מדויק ועדכני
    2. להסביר מושגים משפטיים בצורה ברורה ופשוטה
    3. לציין תמיד שהמידע הוא כללי ולא מהווה ייעוץ משפטי מחייב
    4. להפנות לייעוץ משפטי מקצועי כשנדרש
    5. לציין חוקים ותקנות רלוונטיים כשאפשר
  `;

  generateContext(category: LegalCategory): string {
    return this.legalContext;
  }

  generateCategoryPrompt(
    category: LegalCategory, 
    details: Record<string, string>
  ): string {
    const categoryInfo = categoryService.getCategoryById(category);
    if (!categoryInfo) throw new Error('קטגוריה לא חוקית');

    switch (category) {
      case LegalCategory.CONTRACT_CREATION:
        return `אנא צור חוזה עבור: ${details['סוג החוזה']}
                צדדים לחוזה: ${details['שמות הצדדים']}
                תנאים מרכזיים: ${details['תנאים מרכזיים']}`;

      case LegalCategory.GENERAL_ADVICE:
        return `אנא ספק ייעוץ משפטי לשאלה הבאה: ${details['שאלה משפטית']}`;

      case LegalCategory.CONTRACT_REVIEW:
        return `אנא נתח את החוזה הבא ואתר סיכונים אפשריים:
                ${details['תוכן החוזה']}`;

      case LegalCategory.LEGAL_LETTERS:
        return `אנא נסח מכתב משפטי:
                סוג: ${details['סוג המכתב']}
                נמען: ${details['פרטי הנמען']}
                תוכן: ${details['תוכן הדרישה']}`;

      case LegalCategory.FREE_FORM:
        return details['תוכן השאלה'];
      
      case LegalCategory.SUMMARY:
        return `אנא סכם את המסמך המשפטי הבא והציג את הנקודות העיקריות:
                ${details['תוכן המסמך']}`;

      case LegalCategory.INTELLECTUAL_PROPERTY:
        return `אנא ספק ייעוץ בנושא קניין רוחני:
                סוג הקניין הרוחני: ${details['סוג הקניין הרוחני']}
                תיאור הנכס: ${details['תיאור הנכס']}
                שאלה ספציפית: ${details['שאלה ספציפית']}`;

      case LegalCategory.EMPLOYMENT_LAW:
        return `אנא ספק ייעוץ בנושא דיני עבודה:
                סוג הבעיה: ${details['סוג הבעיה']}
                פרטי המקרה: ${details['פרטי המקרה']}`;

      case LegalCategory.REAL_ESTATE:
        return `אנא ספק ייעוץ בנושא נדל"ן:
                סוג העסקה: ${details['סוג העסקה']}
                פרטי הנכס: ${details['פרטי הנכס']}
                שאלה ספציפית: ${details['שאלה ספציפית']}`;

      case LegalCategory.FAMILY_LAW:
        return `אנא ספק ייעוץ בנושא דיני משפחה:
                סוג הבעיה: ${details['סוג הבעיה']}
                פרטי המקרה: ${details['פרטי המקרה']}`;

      case LegalCategory.STARTUP_LEGAL:
        return `אנא ספק ייעוץ משפטי לסטארטאפים:
                שלב הסטארטאפ: ${details['שלב הסטארטאפ']}
                תחום העיסוק: ${details['תחום העיסוק']}
                שאלה ספציפית: ${details['שאלה ספציפית']}`;

      default:
        throw new Error('קטגוריה לא נתמכת');
    }
  }
}