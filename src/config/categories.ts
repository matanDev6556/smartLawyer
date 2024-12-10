import { LegalCategory, LegalCategoryInfo } from '../types/legal';

export const LEGAL_CATEGORIES: LegalCategoryInfo[] = [
  // Existing categories remain unchanged
  {
    id: LegalCategory.CONTRACT_CREATION,
    title: 'יצירת חוזים',
    description:
      'כתיבת חוזה מותאם אישית על בסיס סוג החוזה, שמות הצדדים, ותנאים מרכזיים',
    icon: 'FileText',
    requiredFields: ['סוג החוזה', 'שמות הצדדים', 'תנאים מרכזיים'],
  },
  {
    id: LegalCategory.GENERAL_ADVICE,
    title: 'ייעוץ משפטי כללי',
    description: 'מתן מענה לשאלה משפטית או הסבר על סוגיות משפטיות',
    icon: 'HelpCircle',
    requiredFields: ['שאלה משפטית'],
  },
  {
    id: LegalCategory.CONTRACT_REVIEW,
    title: 'בדיקת חוזים',
    description: 'ניתוח חוזה קיים, איתור סיכונים, ומתן המלצות לשיפור',
    icon: 'Search',
    requiredFields: ['תוכן החוזה'],
  },
  {
    id: LegalCategory.LEGAL_LETTERS,
    title: 'מכתבים משפטיים',
    description: 'ניסוח מסמכים כמו מכתבי דרישה, מכתבי תגובה או התראות משפטיות',
    icon: 'Mail',
    requiredFields: ['סוג המכתב', 'פרטי הנמען', 'תוכן הדרישה'],
  },
  {
    id: LegalCategory.FREE_FORM,
    title: 'טקסט חופשי',
    description: 'שאל כל שאלה משפטית בצורה חופשית וקבל מענה מותאם אישית',
    icon: 'MessageSquare',
    requiredFields: ['תוכן השאלה'],
  },
  {
    id: LegalCategory.SUMMARY,
    title: 'סיכום משפטי',
    description:
      'סיכום וניתוח של מסמך משפטי קיים, כולל הצגת הנקודות העיקריות והמסקנות',
    icon: 'FileText',
    requiredFields: ['תוכן המסמך'],
  },
  // New categories
  {
    id: LegalCategory.INTELLECTUAL_PROPERTY,
    title: 'קניין רוחני',
    description:
      'ייעוץ בנושאי פטנטים, זכויות יוצרים, סימני מסחר וסודות מסחריים',
    icon: 'Lightbulb',
    requiredFields: ['סוג הקניין הרוחני', 'תיאור הנכס', 'שאלה ספציפית'],
  },
  {
    id: LegalCategory.EMPLOYMENT_LAW,
    title: 'דיני עבודה',
    description:
      'ייעוץ בנושאי חוזי עבודה, זכויות עובדים, פיטורין והטרדות במקום העבודה',
    icon: 'Briefcase',
    requiredFields: ['סוג הבעיה', 'פרטי המקרה'],
  },
  {
    id: LegalCategory.REAL_ESTATE,
    title: 'נדל"ן',
    description: 'ייעוץ בנושאי עסקאות נדל"ן, חוזי שכירות, ובעיות עם שכנים',
    icon: 'Home',
    requiredFields: ['סוג העסקה', 'פרטי הנכס', 'שאלה ספציפית'],
  },
  {
    id: LegalCategory.FAMILY_LAW,
    title: 'דיני משפחה',
    description: 'ייעוץ בנושאי גירושין, משמורת ילדים, מזונות ואימוץ',
    icon: 'Users',
    requiredFields: ['סוג הבעיה', 'פרטי המקרה'],
  },
  {
    id: LegalCategory.STARTUP_LEGAL,
    title: 'ייעוץ משפטי לסטארטאפים',
    description:
      'ייעוץ בנושאי הקמת חברה, גיוס כספים, הסכמי מייסדים ואופציות לעובדים',
    icon: 'Rocket',
    requiredFields: ['שלב הסטארטאפ', 'תחום העיסוק', 'שאלה ספציפית'],
  },
];
