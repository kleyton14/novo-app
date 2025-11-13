'use client';

import { Country, Recipe } from '@/lib/recipes-data';
import { ArrowLeft, Star } from 'lucide-react';

interface RecipeListProps {
  country: Country;
  onBack: () => void;
  onRecipeClick: (recipe: Recipe) => void;
}

export function RecipeList({ country, onBack, onRecipeClick }: RecipeListProps) {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-gray-400 hover:text-amber-500 transition-colors mb-6 group"
      >
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        <span className="text-sm font-medium">Voltar aos países</span>
      </button>

      <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 mb-6">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-6xl">{country.flag}</span>
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-medium text-amber-500 bg-amber-500/10 px-3 py-1 rounded-full">
                #{country.rank} no Ranking Mundial
              </span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-2">{country.name}</h2>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
              <span className="text-lg font-semibold text-amber-500">{country.totalRating}</span>
              <span className="text-sm text-gray-400">• {country.recipes.length} receitas exclusivas</span>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        {country.recipes
          .sort((a, b) => b.rating - a.rating)
          .map((recipe, index) => (
            <button
              key={recipe.id}
              onClick={() => onRecipeClick(recipe)}
              className="group w-full bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-5 hover:border-amber-500/50 transition-all duration-300 hover:scale-[1.01] hover:shadow-xl hover:shadow-amber-500/5"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 flex-1">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-amber-500/10 text-amber-500 font-bold text-sm">
                    {index + 1}
                  </div>
                  <div className="text-left flex-1">
                    <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-amber-500 transition-colors">
                      {recipe.name}
                    </h3>
                    <p className="text-sm text-gray-400 line-clamp-1">{recipe.description}</p>
                    <div className="flex items-center gap-3 mt-2 text-xs text-gray-500">
                      <span>{recipe.prepTime}</span>
                      <span>•</span>
                      <span>{recipe.servings} porções</span>
                      <span>•</span>
                      <span className={`px-2 py-0.5 rounded-full ${
                        recipe.difficulty === 'Fácil' ? 'bg-green-500/10 text-green-500' :
                        recipe.difficulty === 'Médio' ? 'bg-yellow-500/10 text-yellow-500' :
                        'bg-red-500/10 text-red-500'
                      }`}>
                        {recipe.difficulty}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1 ml-4">
                  <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                  <span className="text-lg font-bold text-amber-500">{recipe.rating}</span>
                </div>
              </div>
            </button>
          ))}
      </div>
    </div>
  );
}
