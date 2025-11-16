export interface Recipe {
  id: string;
  title: string;
  description: string | null;
  ingredients: string;
  instructions: string;
  image_url: string | null;
  prep_time: number | null;
  cook_time: number | null;
  servings: number | null;
  created_at: string;
  updated_at: string;
  user_id: string | null;
}

export interface RecipeFormData {
  title: string;
  description: string;
  ingredients: string;
  instructions: string;
  image?: File;
  prep_time: number;
  cook_time: number;
  servings: number;
}
