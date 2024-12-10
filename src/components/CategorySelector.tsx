import { LegalCategory } from '../types/legal';
import { Button } from '@/components/ui/button';
import {
  FileText,
  HelpCircle,
  Search,
  Mail,
  MessageSquare,
  Lightbulb,
  Briefcase,
  Home,
  Users,
  Rocket,
} from 'lucide-react';

interface CategorySelectorProps {
  onSelect: (category: LegalCategory) => void;
  selectedCategory?: LegalCategory;
}

const categoryIcons = {
  [LegalCategory.CONTRACT_CREATION]: { Icon: FileText, alt: 'יצירת חוזה' },
  [LegalCategory.GENERAL_ADVICE]: { Icon: HelpCircle, alt: 'ייעוץ כללי' },
  [LegalCategory.CONTRACT_REVIEW]: { Icon: Search, alt: 'בדיקת חוזה' },
  [LegalCategory.LEGAL_LETTERS]: { Icon: Mail, alt: 'כתיבת מכתבים משפטיים' },
  [LegalCategory.FREE_FORM]: { Icon: MessageSquare, alt: 'שאלות חופשיות' },
  [LegalCategory.SUMMARY]: { Icon: FileText, alt: 'סיכום משפטי' },
  [LegalCategory.INTELLECTUAL_PROPERTY]: {
    Icon: Lightbulb,
    alt: 'קניין רוחני',
  },
  [LegalCategory.EMPLOYMENT_LAW]: { Icon: Briefcase, alt: 'דיני עבודה' },
  [LegalCategory.REAL_ESTATE]: { Icon: Home, alt: 'נדל"ן' },
  [LegalCategory.FAMILY_LAW]: { Icon: Users, alt: 'דיני משפחה' },
  [LegalCategory.STARTUP_LEGAL]: { Icon: Rocket, alt: 'ייעוץ לסטארטאפים' },
};

export const CategorySelector: React.FC<CategorySelectorProps> = ({
  onSelect,
  selectedCategory,
}) => {
  return (
    <nav aria-label="בחירת קטגוריה משפטית">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
        {Object.entries(categoryIcons).map(([category, { Icon, alt }]) => {
          const isSelected = selectedCategory === category;
          return (
            <Button
              key={category}
              onClick={() => onSelect(category as LegalCategory)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelect(category as LegalCategory);
                }
              }}
              tabIndex={0}
              variant={isSelected ? 'default' : 'outline'}
              className={`h-auto py-4 px-4 flex flex-col items-center justify-center text-center transition-all duration-200 ${
                isSelected
                  ? 'bg-blue-500 text-white shadow-lg transform scale-105'
                  : 'hover:bg-blue-50'
              }`}
              aria-pressed={isSelected}
              aria-label={`בחר קטגוריה: ${alt}`}
            >
              {Icon && <Icon className="w-6 h-6 mb-2" aria-hidden="true" />}
              <span className="text-sm font-medium">{alt}</span>
            </Button>
          );
        })}
      </div>
    </nav>
  );
};
