import { LegalCategory, LegalCategoryInfo } from '../types/legal';
import { LEGAL_CATEGORIES } from '../config/categories';

class CategoryService {
  getCategories(): LegalCategoryInfo[] {
    return LEGAL_CATEGORIES;
  }

  getCategoryById(id: LegalCategory): LegalCategoryInfo | undefined {
    return LEGAL_CATEGORIES.find((category) => category.id === id);
  }

  validateCategoryInput(
    category: LegalCategory,
    details: Record<string, string>
  ): boolean {
    const categoryInfo = this.getCategoryById(category);
    if (!categoryInfo) return false;

    return categoryInfo.requiredFields.every(
      (field) => details[field] && details[field].trim().length > 0
    );
  }
}

export const categoryService = new CategoryService();
