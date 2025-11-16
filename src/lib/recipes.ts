import { supabase } from './supabase';
import { Recipe, RecipeFormData } from './types';

// Buscar todas as receitas
export async function getRecipes(): Promise<Recipe[]> {
  const { data, error } = await supabase
    .from('recipes')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Erro ao buscar receitas:', error);
    return [];
  }

  return data || [];
}

// Buscar uma receita específica
export async function getRecipe(id: string): Promise<Recipe | null> {
  const { data, error } = await supabase
    .from('recipes')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error('Erro ao buscar receita:', error);
    return null;
  }

  return data;
}

// Upload de imagem para o Supabase Storage
export async function uploadRecipeImage(file: File, userId: string): Promise<string | null> {
  const fileExt = file.name.split('.').pop();
  const fileName = `${userId}/${Date.now()}.${fileExt}`;

  const { error: uploadError } = await supabase.storage
    .from('recipe-images')
    .upload(fileName, file);

  if (uploadError) {
    console.error('Erro ao fazer upload da imagem:', uploadError);
    return null;
  }

  const { data } = supabase.storage
    .from('recipe-images')
    .getPublicUrl(fileName);

  return data.publicUrl;
}

// Criar nova receita
export async function createRecipe(formData: RecipeFormData, userId: string): Promise<Recipe | null> {
  let imageUrl: string | null = null;

  // Upload da imagem se fornecida
  if (formData.image) {
    imageUrl = await uploadRecipeImage(formData.image, userId);
  }

  const { data, error } = await supabase
    .from('recipes')
    .insert({
      title: formData.title,
      description: formData.description,
      ingredients: formData.ingredients,
      instructions: formData.instructions,
      image_url: imageUrl,
      prep_time: formData.prep_time,
      cook_time: formData.cook_time,
      servings: formData.servings,
      user_id: userId,
    })
    .select()
    .single();

  if (error) {
    console.error('Erro ao criar receita:', error);
    return null;
  }

  return data;
}

// Atualizar receita existente
export async function updateRecipe(
  id: string,
  formData: Partial<RecipeFormData>,
  userId: string
): Promise<Recipe | null> {
  let imageUrl: string | undefined;

  // Upload de nova imagem se fornecida
  if (formData.image) {
    const uploadedUrl = await uploadRecipeImage(formData.image, userId);
    if (uploadedUrl) {
      imageUrl = uploadedUrl;
    }
  }

  const updateData: any = {
    ...formData,
    updated_at: new Date().toISOString(),
  };

  if (imageUrl) {
    updateData.image_url = imageUrl;
  }

  // Remove o campo image pois não existe na tabela
  delete updateData.image;

  const { data, error } = await supabase
    .from('recipes')
    .update(updateData)
    .eq('id', id)
    .eq('user_id', userId)
    .select()
    .single();

  if (error) {
    console.error('Erro ao atualizar receita:', error);
    return null;
  }

  return data;
}

// Deletar receita
export async function deleteRecipe(id: string, userId: string): Promise<boolean> {
  const { error } = await supabase
    .from('recipes')
    .delete()
    .eq('id', id)
    .eq('user_id', userId);

  if (error) {
    console.error('Erro ao deletar receita:', error);
    return false;
  }

  return true;
}
