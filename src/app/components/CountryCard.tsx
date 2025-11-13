'use client';

import { Country } from '@/lib/recipes-data';
import { ChevronRight } from 'lucide-react';

interface CountryCardProps {
  country: Country;
  onClick: () => void;
}

export function CountryCard({ country, onClick }: CountryCardProps) {
  return (
    <button
      onClick={onClick}
      className="group relative w-full bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 hover:border-amber-500/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-amber-500/10"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="text-5xl">{country.flag}</span>
          <div className="text-left">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-medium text-amber-500 bg-amber-500/10 px-2 py-1 rounded-full">
                #{country.rank}
              </span>
              <span className="text-xs text-gray-500">Ranking Mundial</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-1">{country.name}</h3>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <span className="text-amber-500 text-sm">★</span>
                <span className="text-sm font-medium text-amber-500">{country.totalRating}</span>
              </div>
              <span className="text-xs text-gray-500">•</span>
              <span className="text-xs text-gray-400">{country.recipes.length} receitas</span>
            </div>
          </div>
        </div>
        <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-amber-500 group-hover:translate-x-1 transition-all" />
      </div>
    </button>
  );
}
