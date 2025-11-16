"use client";

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { getRecipe, updateRecipe } from '@/lib/recipes';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Upload } from 'lucide-react';
import Link from 'next/link';

export default function EditRecipePage() {
  const router = useRouter();
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const [loadingData, setLoadingData] = useState(true);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    ingredients: '',
    instructions: '',
    prep_time: 0,
    cook_time: 0,
    servings: 0,
    image: null as File | null,
  });

  useEffect(() => {
    loadRecipe();
  }, [params.id]);

  async function loadRecipe() {
    setLoadingData(true);
    const recipe = await getRecipe(params.id as string);
    
    if (recipe) {
      setFormData({
        title: recipe.title,
        description: recipe.description || '',
        ingredients: recipe.ingredients,
        instructions: recipe.instructions,
        prep_time: recipe.prep_time || 0,
        cook_time: recipe.cook_time || 0,
        servings: recipe.servings || 0,
        image: null,
      });
      
      if (recipe.image_url) {
        setImagePreview(recipe.image_url);
      }
    }
    
    setLoadingData(false);
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({ ...formData, image: file });
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        alert('Você precisa estar logado para editar uma receita');
        router.push('/');
        return;
      }

      const recipe = await updateRecipe(params.id as string, formData, user.id);
      
      if (recipe) {
        alert('Receita atualizada com sucesso!');
        router.push(`/recipes/${params.id}`);
      } else {
        alert('Erro ao atualizar receita. Tente novamente.');
      }
    } catch (error) {
      console.error('Erro:', error);
      alert('Erro ao atualizar receita. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  if (loadingData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-pink-50 dark:from-gray-900 dark:to-gray-800 p-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">Carregando...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-pink-50 dark:from-gray-900 dark:to-gray-800 p-8">
      <div className="max-w-3xl mx-auto">
        <Link href={`/recipes/${params.id}`}>
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar
          </Button>
        </Link>

        <Card>
          <CardHeader>
            <CardTitle className="text-3xl">Editar Receita</CardTitle>
            <CardDescription>
              Atualize as informações da sua receita
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="title">Título da Receita *</Label>
                <Input
                  id="title"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="Ex: Bolo de Chocolate"
                />
              </div>

              <div>
                <Label htmlFor="description">Descrição</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Uma breve descrição da receita..."
                  rows={3}
                />
              </div>

              <div>
                <Label htmlFor="image">Imagem da Receita</Label>
                <div className="mt-2">
                  <label htmlFor="image" className="cursor-pointer">
                    <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center hover:border-orange-500 transition-colors">
                      {imagePreview ? (
                        <img src={imagePreview} alt="Preview" className="max-h-48 mx-auto rounded-lg" />
                      ) : (
                        <div>
                          <Upload className="w-12 h-12 mx-auto text-gray-400 mb-2" />
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Clique para fazer upload de uma nova imagem
                          </p>
                        </div>
                      )}
                    </div>
                  </label>
                  <input
                    id="image"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="ingredients">Ingredientes *</Label>
                <Textarea
                  id="ingredients"
                  required
                  value={formData.ingredients}
                  onChange={(e) => setFormData({ ...formData, ingredients: e.target.value })}
                  placeholder="Liste os ingredientes (um por linha)"
                  rows={6}
                />
              </div>

              <div>
                <Label htmlFor="instructions">Modo de Preparo *</Label>
                <Textarea
                  id="instructions"
                  required
                  value={formData.instructions}
                  onChange={(e) => setFormData({ ...formData, instructions: e.target.value })}
                  placeholder="Descreva o passo a passo..."
                  rows={8}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="prep_time">Tempo de Preparo (min)</Label>
                  <Input
                    id="prep_time"
                    type="number"
                    min="0"
                    value={formData.prep_time}
                    onChange={(e) => setFormData({ ...formData, prep_time: parseInt(e.target.value) || 0 })}
                  />
                </div>

                <div>
                  <Label htmlFor="cook_time">Tempo de Cozimento (min)</Label>
                  <Input
                    id="cook_time"
                    type="number"
                    min="0"
                    value={formData.cook_time}
                    onChange={(e) => setFormData({ ...formData, cook_time: parseInt(e.target.value) || 0 })}
                  />
                </div>

                <div>
                  <Label htmlFor="servings">Porções</Label>
                  <Input
                    id="servings"
                    type="number"
                    min="0"
                    value={formData.servings}
                    onChange={(e) => setFormData({ ...formData, servings: parseInt(e.target.value) || 0 })}
                  />
                </div>
              </div>

              <div className="flex gap-4">
                <Button
                  type="submit"
                  disabled={loading}
                  className="flex-1 bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white"
                >
                  {loading ? 'Salvando...' : 'Salvar Alterações'}
                </Button>
                <Link href={`/recipes/${params.id}`} className="flex-1">
                  <Button type="button" variant="outline" className="w-full">
                    Cancelar
                  </Button>
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
