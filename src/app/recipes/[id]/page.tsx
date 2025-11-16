"use client";

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { getRecipe, deleteRecipe, updateRecipe } from '@/lib/recipes';
import { supabase } from '@/lib/supabase';
import { Recipe } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Clock, Users, Edit, Trash2, ChefHat } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function RecipeDetailPage() {
  const router = useRouter();
  const params = useParams();
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [loading, setLoading] = useState(true);
  const [isOwner, setIsOwner] = useState(false);

  useEffect(() => {
    loadRecipe();
  }, [params.id]);

  async function loadRecipe() {
    setLoading(true);
    const data = await getRecipe(params.id as string);
    setRecipe(data);

    // Verificar se o usuário é o dono da receita
    const { data: { user } } = await supabase.auth.getUser();
    if (user && data?.user_id === user.id) {
      setIsOwner(true);
    }

    setLoading(false);
  }

  async function handleDelete() {
    if (!confirm('Tem certeza que deseja deletar esta receita?')) {
      return;
    }

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    const success = await deleteRecipe(params.id as string, user.id);
    if (success) {
      alert('Receita deletada com sucesso!');
      router.push('/recipes');
    } else {
      alert('Erro ao deletar receita.');
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-pink-50 dark:from-gray-900 dark:to-gray-800 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">Carregando receita...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!recipe) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-pink-50 dark:from-gray-900 dark:to-gray-800 p-8">
        <div className="max-w-4xl mx-auto">
          <Card className="text-center py-12">
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Receita não encontrada.
              </p>
              <Link href="/recipes">
                <Button>Voltar para Receitas</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-pink-50 dark:from-gray-900 dark:to-gray-800 p-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/recipes">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar
          </Button>
        </Link>

        <Card className="overflow-hidden">
          {recipe.image_url && (
            <div className="relative h-96 w-full">
              <Image
                src={recipe.image_url}
                alt={recipe.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          <CardHeader>
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <CardTitle className="text-4xl mb-4">{recipe.title}</CardTitle>
                {recipe.description && (
                  <p className="text-gray-600 dark:text-gray-400 text-lg">
                    {recipe.description}
                  </p>
                )}
              </div>
              {isOwner && (
                <div className="flex gap-2">
                  <Link href={`/recipes/${recipe.id}/edit`}>
                    <Button variant="outline" size="icon">
                      <Edit className="w-4 h-4" />
                    </Button>
                  </Link>
                  <Button variant="outline" size="icon" onClick={handleDelete}>
                    <Trash2 className="w-4 h-4 text-red-500" />
                  </Button>
                </div>
              )}
            </div>

            <div className="flex gap-6 mt-4 text-gray-600 dark:text-gray-400">
              {recipe.prep_time && (
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>Preparo: {recipe.prep_time} min</span>
                </div>
              )}
              {recipe.cook_time && (
                <div className="flex items-center gap-2">
                  <ChefHat className="w-5 h-5" />
                  <span>Cozimento: {recipe.cook_time} min</span>
                </div>
              )}
              {recipe.servings && (
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  <span>{recipe.servings} porções</span>
                </div>
              )}
            </div>
          </CardHeader>

          <CardContent className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Ingredientes
              </h2>
              <div className="bg-orange-50 dark:bg-gray-800 rounded-lg p-6">
                <pre className="whitespace-pre-wrap font-sans text-gray-700 dark:text-gray-300">
                  {recipe.ingredients}
                </pre>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Modo de Preparo
              </h2>
              <div className="bg-pink-50 dark:bg-gray-800 rounded-lg p-6">
                <pre className="whitespace-pre-wrap font-sans text-gray-700 dark:text-gray-300">
                  {recipe.instructions}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
