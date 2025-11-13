'use client';

import { Recipe } from '@/lib/recipes-data';
import { X, Clock, Users, ChefHat, Star } from 'lucide-react';
import { useEffect } from 'react';

interface RecipeModalProps {
  recipe: Recipe;
  onClose: () => void;
}

export function RecipeModal({ recipe, onClose }: RecipeModalProps) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl shadow-2xl">
        <button
          onClick={onClose}
          className="sticky top-4 right-4 float-right z-10 p-2 bg-gray-900/90 hover:bg-amber-500/20 border border-gray-800 hover:border-amber-500/50 rounded-full transition-all duration-300 group"
        >
          <X className="w-5 h-5 text-gray-400 group-hover:text-amber-500" />
        </button>

        <div className="p-8">
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center gap-1 bg-amber-500/10 px-3 py-1 rounded-full">
                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                <span className="text-sm font-bold text-amber-500">{recipe.rating}</span>
              </div>
              <span className={`text-xs px-3 py-1 rounded-full ${
                recipe.difficulty === 'Fácil' ? 'bg-green-500/10 text-green-500' :
                recipe.difficulty === 'Médio' ? 'bg-yellow-500/10 text-yellow-500' :
                'bg-red-500/10 text-red-500'
              }`}>
                {recipe.difficulty}
              </span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-3">{recipe.name}</h2>
            <p className="text-lg text-gray-300">{recipe.description}</p>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 text-center">
              <Clock className="w-6 h-6 text-amber-500 mx-auto mb-2" />
              <p className="text-xs text-gray-500 mb-1">Tempo</p>
              <p className="text-sm font-semibold text-white">{recipe.prepTime}</p>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 text-center">
              <Users className="w-6 h-6 text-amber-500 mx-auto mb-2" />
              <p className="text-xs text-gray-500 mb-1">Porções</p>
              <p className="text-sm font-semibold text-white">{recipe.servings}</p>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 text-center">
              <ChefHat className="w-6 h-6 text-amber-500 mx-auto mb-2" />
              <p className="text-xs text-gray-500 mb-1">Dificuldade</p>
              <p className="text-sm font-semibold text-white">{recipe.difficulty}</p>
            </div>
          </div>

          <div className="mb-8 relative h-64 sm:h-80 rounded-xl overflow-hidden border border-gray-800">
            <img
              src={recipe.image}
              alt={recipe.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-amber-500 rounded-full" />
              Ingredientes
            </h3>
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
              <ul className="space-y-3">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
                    <span>{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-amber-500 rounded-full" />
              Modo de Preparo
            </h3>
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
              <ol className="space-y-4">
                {recipe.instructions.map((instruction, index) => (
                  <li key={index} className="flex gap-4">
                    <span className="flex items-center justify-center w-8 h-8 bg-amber-500/10 text-amber-500 font-bold text-sm rounded-full flex-shrink-0">
                      {index + 1}
                    </span>
                    <p className="text-gray-300 pt-1">{instruction}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
