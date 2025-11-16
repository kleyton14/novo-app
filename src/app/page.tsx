'use client';

import { useState } from 'react';
import { countriesData, Country, Recipe } from '@/lib/recipes-data';
import { CountryCard } from './components/CountryCard';
import { RecipeList } from './components/RecipeList';
import { RecipeModal } from './components/RecipeModal';
import { ChefHat, Search } from 'lucide-react';

type View = 'countries' | 'recipes';

export default function Home() {
  const [view, setView] = useState<View>('countries');
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleCountryClick = (country: Country) => {
    setSelectedCountry(country);
    setView('recipes');
  };

  const handleBackToCountries = () => {
    setView('countries');
    setSelectedCountry(null);
  };

  const handleRecipeClick = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleCloseModal = () => {
    setSelectedRecipe(null);
  };

  const filteredCountries = countriesData.filter(country =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-black/80 backdrop-blur-xl border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl">
                <ChefHat className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-white">World Cuisine</h1>
                <p className="text-sm text-gray-400">As melhores culinárias do mundo</p>
              </div>
            </div>
          </div>

          {view === 'countries' && (
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Buscar país..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-gray-900 border border-gray-800 rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500/50 transition-colors"
              />
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {view === 'countries' ? (
          <div>
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-2">
                Top {filteredCountries.length} Culinárias do Mundo
              </h2>
              <p className="text-gray-400">
                Explore as receitas mais autênticas e bem avaliadas de cada país
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredCountries.map((country) => (
                <CountryCard
                  key={country.id}
                  country={country}
                  onClick={() => handleCountryClick(country)}
                />
              ))}
            </div>

            {filteredCountries.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">Nenhum país encontrado</p>
              </div>
            )}
          </div>
        ) : selectedCountry ? (
          <RecipeList
            country={selectedCountry}
            onBack={handleBackToCountries}
            onRecipeClick={handleRecipeClick}
          />
        ) : null}
      </main>

      {/* Recipe Modal */}
      {selectedRecipe && (
        <RecipeModal recipe={selectedRecipe} onClose={handleCloseModal} />
      )}

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-500 text-sm">
            <p className="mb-2">© 2024 World Cuisine. Todas as receitas são autênticas e tradicionais.</p>
            <p className="text-xs text-gray-600">
              Ranking baseado em avaliações de especialistas culinários internacionais
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
