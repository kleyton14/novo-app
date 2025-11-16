"use client";

import { useEffect, useState } from 'react';
import { getRecipes } from '@/lib/recipes';
import { Recipe } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, Clock, Users } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function RecipesPage() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadRecipes();
  }, []);

  async function loadRecipes() {
    setLoading(true);
    const data = await getRecipes();
    setRecipes(data);
    setLoading(false);
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-pink-50 dark:from-gray-900 dark:to-gray-800 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">Carregando receitas...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-pink-50 dark:from-gray-900 dark:to-gray-800 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              Minhas Receitas
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Gerencie suas receitas favoritas
            </p>
          </div>
          <Link href="/recipes/new">
            <Button className="bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white">
              <Plus className="w-5 h-5 mr-2" />
              Nova Receita
            </Button>
          </Link>
        </div>

        {recipes.length === 0 ? (
          <Card className="text-center py-12">
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Nenhuma receita encontrada. Crie sua primeira receita!
              </p>
              <Link href="/recipes/new">
                <Button className="bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white">
                  <Plus className="w-5 h-5 mr-2" />
                  Criar Receita
                </Button>
              </Link>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recipes.map((recipe) => (
              <Link key={recipe.id} href={`/recipes/${recipe.id}`}>
                <Card className="hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer h-full">
                  {recipe.image_url && (
                    <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                      <Image
                        src={recipe.image_url}
                        alt={recipe.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-xl">{recipe.title}</CardTitle>
                    {recipe.description && (
                      <CardDescription className="line-clamp-2">
                        {recipe.description}
                      </CardDescription>
                    )}
                  </CardHeader>
                  <CardFooter className="flex gap-4 text-sm text-gray-600 dark:text-gray-400">
                    {recipe.prep_time && (
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{recipe.prep_time} min</span>
                      </div>
                    )}
                    {recipe.servings && (
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{recipe.servings} porções</span>
                      </div>
                    )}
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
