'use client';

import { useState } from 'react';
import { ChefHat, Globe, Star, ArrowRight, Check, X } from 'lucide-react';
import { AuthButton } from '@/components/custom/AuthButton';

type Step = 'landing' | 'quiz' | 'checkout';

interface QuizAnswer {
  question: string;
  answer: string;
}

export default function Home() {
  const [step, setStep] = useState<Step>('landing');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<QuizAnswer[]>([]);

  const questions = [
    {
      question: 'Qual é o seu nível de experiência na cozinha?',
      options: ['Iniciante', 'Intermediário', 'Avançado', 'Chef Profissional']
    },
    {
      question: 'Quantas vezes por semana você cozinha?',
      options: ['1-2 vezes', '3-4 vezes', '5-6 vezes', 'Todos os dias']
    },
    {
      question: 'Qual tipo de culinária mais te interessa?',
      options: ['Asiática', 'Europeia', 'Latina', 'Todas']
    },
    {
      question: 'Você tem restrições alimentares?',
      options: ['Nenhuma', 'Vegetariano', 'Vegano', 'Sem glúten']
    },
    {
      question: 'Quanto tempo você tem para cozinhar?',
      options: ['Menos de 30min', '30-60min', '1-2 horas', 'Sem pressa']
    }
  ];

  const handleQuizAnswer = (answer: string) => {
    const newAnswers = [...quizAnswers, { question: questions[currentQuestion].question, answer }];
    setQuizAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setStep('checkout');
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setQuizAnswers([]);
    setStep('landing');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Header com Auth */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ChefHat className="w-8 h-8 text-amber-400" />
            <span className="text-xl font-bold text-white">World Cuisine</span>
          </div>
          <AuthButton />
        </div>
      </header>

      {/* Landing Page */}
      {step === 'landing' && (
        <div className="relative pt-20">
          {/* Hero Section */}
          <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-10"></div>
            
            <div className="relative max-w-5xl mx-auto text-center">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 rounded-full px-6 py-3 mb-8">
                <ChefHat className="w-5 h-5 text-amber-400" />
                <span className="text-amber-400 font-medium">35 Países • 175+ Receitas Autênticas</span>
              </div>

              <h1 className="text-5xl sm:text-7xl font-bold text-white mb-6 leading-tight">
                Domine as Culinárias
                <span className="block bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                  do Mundo Inteiro
                </span>
              </h1>

              <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
                Acesso completo ao maior guia de receitas internacionais ranqueadas. 
                Das melhores culinárias do mundo direto para sua cozinha.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <button
                  onClick={() => setStep('quiz')}
                  className="group bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-2xl shadow-amber-500/50 flex items-center justify-center gap-2"
                >
                  Começar Agora
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all duration-300 border border-white/20">
                  Ver Demonstração
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
                <div className="text-center">
                  <div className="text-4xl font-bold text-amber-400 mb-2">35</div>
                  <div className="text-gray-400">Países</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-amber-400 mb-2">175+</div>
                  <div className="text-gray-400">Receitas</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-amber-400 mb-2">4.9</div>
                  <div className="text-gray-400 flex items-center justify-center gap-1">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    Avaliação
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="py-24 px-4 sm:px-6 lg:px-8 bg-black/50">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-white text-center mb-16">
                O Que Você Vai Receber
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:scale-105 transition-transform">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center mb-6">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">35 Culinárias Ranqueadas</h3>
                  <p className="text-gray-400">
                    Das melhores culinárias do mundo, ranqueadas por especialistas internacionais.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:scale-105 transition-transform">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center mb-6">
                    <ChefHat className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">175+ Receitas Autênticas</h3>
                  <p className="text-gray-400">
                    Cada receita com notas de avaliação, ingredientes completos e passo a passo detalhado.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:scale-105 transition-transform">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center mb-6">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Sistema de Avaliação</h3>
                  <p className="text-gray-400">
                    Cada prato avaliado de 0 a 10 pelos próprios países de origem.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-6">
                Pronto Para Começar Sua Jornada Culinária?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Responda 5 perguntas rápidas e descubra seu perfil culinário
              </p>
              <button
                onClick={() => setStep('quiz')}
                className="group bg-gradient-to-r from-amber-500 to-orange-600 text-white px-12 py-5 rounded-xl font-semibold text-xl hover:scale-105 transition-all duration-300 shadow-2xl shadow-amber-500/50 inline-flex items-center gap-3"
              >
                Fazer Quiz Gratuito
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Quiz Section */}
      {step === 'quiz' && (
        <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 pt-32">
          <div className="max-w-2xl w-full">
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-400 text-sm">Pergunta {currentQuestion + 1} de {questions.length}</span>
                <span className="text-amber-400 text-sm font-medium">{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
              </div>
              <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-amber-500 to-orange-600 transition-all duration-500"
                  style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Question Card */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 sm:p-12">
              <h2 className="text-3xl font-bold text-white mb-8">
                {questions[currentQuestion].question}
              </h2>

              <div className="space-y-4">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuizAnswer(option)}
                    className="w-full bg-gray-800/50 hover:bg-gradient-to-r hover:from-amber-500/20 hover:to-orange-600/20 border border-gray-700 hover:border-amber-500/50 rounded-xl p-6 text-left text-white font-medium transition-all duration-300 hover:scale-105"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            {/* Back Button */}
            {currentQuestion > 0 && (
              <button
                onClick={() => setCurrentQuestion(currentQuestion - 1)}
                className="mt-6 text-gray-400 hover:text-white transition-colors"
              >
                ← Voltar
              </button>
            )}
          </div>
        </div>
      )}

      {/* Checkout Section */}
      {step === 'checkout' && (
        <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 pt-32">
          <div className="max-w-4xl w-full">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full mb-6">
                <Check className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-white mb-4">
                Perfeito! Aqui está Sua Oferta Personalizada
              </h2>
              <p className="text-xl text-gray-300">
                Baseado no seu perfil culinário
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Quiz Results */}
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-6">Seu Perfil</h3>
                <div className="space-y-4">
                  {quizAnswers.map((qa, index) => (
                    <div key={index} className="border-l-2 border-amber-500 pl-4">
                      <div className="text-sm text-gray-400 mb-1">{qa.question}</div>
                      <div className="text-white font-medium">{qa.answer}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing Card */}
              <div className="bg-gradient-to-br from-amber-500/10 to-orange-600/10 backdrop-blur-sm border-2 border-amber-500/50 rounded-2xl p-8">
                <div className="text-center mb-6">
                  <div className="inline-block bg-gradient-to-r from-amber-500 to-orange-600 text-white text-sm font-bold px-4 py-1 rounded-full mb-4">
                    OFERTA ESPECIAL
                  </div>
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <span className="text-3xl text-gray-500 line-through">R$ 297</span>
                    <span className="text-5xl font-bold text-white">R$ 97</span>
                  </div>
                  <p className="text-amber-400 font-medium">Pagamento único • Acesso vitalício</p>
                </div>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 text-white">
                    <Check className="w-5 h-5 text-amber-400 flex-shrink-0" />
                    <span>35 Culinárias Ranqueadas</span>
                  </div>
                  <div className="flex items-center gap-3 text-white">
                    <Check className="w-5 h-5 text-amber-400 flex-shrink-0" />
                    <span>175+ Receitas Autênticas</span>
                  </div>
                  <div className="flex items-center gap-3 text-white">
                    <Check className="w-5 h-5 text-amber-400 flex-shrink-0" />
                    <span>Sistema de Avaliação Completo</span>
                  </div>
                  <div className="flex items-center gap-3 text-white">
                    <Check className="w-5 h-5 text-amber-400 flex-shrink-0" />
                    <span>Atualizações Gratuitas</span>
                  </div>
                  <div className="flex items-center gap-3 text-white">
                    <Check className="w-5 h-5 text-amber-400 flex-shrink-0" />
                    <span>Garantia de 30 Dias</span>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-2xl shadow-amber-500/50 mb-4">
                  Garantir Meu Acesso Agora
                </button>

                <p className="text-center text-sm text-gray-400">
                  🔒 Pagamento 100% seguro
                </p>
              </div>
            </div>

            {/* Guarantee Section */}
            <div className="mt-12 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Garantia Incondicional de 30 Dias
              </h3>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Se você não ficar completamente satisfeito com o conteúdo, devolvemos 100% do seu dinheiro. 
                Sem perguntas, sem complicações.
              </p>
            </div>

            {/* Reset Button */}
            <div className="text-center mt-8">
              <button
                onClick={resetQuiz}
                className="text-gray-400 hover:text-white transition-colors"
              >
                ← Refazer Quiz
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
