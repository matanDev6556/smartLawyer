import { LegalCategory } from '../../types/legal';
import { categoryService } from '../../services/categoryService';
import { GeneralForm } from './GeneralForm';

interface CategoryFormProps {
  category: LegalCategory;
  onSubmit: (details: Record<string, string>, sourceUrl?: string) => void;
  isLoading: boolean;
}

export function CategoryForm({
  category,
  onSubmit,
  isLoading,
}: CategoryFormProps) {
  const categoryInfo = categoryService.getCategoryById(category);
  if (!categoryInfo) return null;

  return (
    <GeneralForm
      fields={categoryInfo.requiredFields}
      onSubmit={onSubmit}
      isLoading={isLoading}
    />
  );
}
