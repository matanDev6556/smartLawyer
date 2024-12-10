export enum LegalCategory {
  CONTRACT_CREATION = 'יצירת חוזה',
  GENERAL_ADVICE = 'ייעוץ כללי',
  CONTRACT_REVIEW = 'בדיקת חוזה',
  LEGAL_LETTERS = 'מכתבים משפטיים',
  SUMMARY = 'סיכום מסמך משפטי',
  INTELLECTUAL_PROPERTY = 'קניין רוחני',
  EMPLOYMENT_LAW = 'דיני עבודה',
  REAL_ESTATE = 'נדל"ן',
  FAMILY_LAW = 'דיני משפחה',
  STARTUP_LEGAL = 'ייעוץ משפטי לסטארטאפים',
  FREE_FORM = 'שאלה חופשית',
}

export interface LegalCategoryInfo {
  id: LegalCategory;
  title: string;
  description: string;
  icon: string;
  requiredFields: string[];
}

export interface LegalRequest {
  category: LegalCategory;
  details: Record<string, string>;
  sourceUrl?: string;
}

export interface LegalResponse {
  content: string;
  category: LegalCategory;
  timestamp: number;
}

export interface Message {
  id: string;
  isBot: boolean;
  text: string;
  timestamp: number;
  category?: LegalCategory;
}
