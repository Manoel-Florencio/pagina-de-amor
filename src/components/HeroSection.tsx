import React, { useState } from 'react';
import { Heart, ArrowDown } from 'lucide-react';

interface HeroSectionProps {
  onStartJourney: () => void;
}

export default function HeroSection({ onStartJourney }: HeroSectionProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleStartJourney = () => {
    setIsAnimating(true);
    setTimeout(() => {
      onStartJourney();
    }, 800);
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#0e0e12] via-[#1a1a2e] to-[#0e0e12] relative overflow-hidden flex items-center justify-center">
      {/* Partículas/Estrelas de fundo */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#f2c57c] rounded-full opacity-60 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Conteúdo principal */}
      <div className={`relative z-10 text-center px-6 transition-all duration-800 ${isAnimating ? 'scale-110 opacity-0' : 'scale-100 opacity-100'}`}>
        <div className="mb-8 animate-bounce">
          <Heart className="w-16 h-16 text-[#d16b86] mx-auto mb-4 animate-pulse" />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-[#f9f4f4] mb-6 leading-tight">
          Essa é a nossa história
        </h1>
        
        <p className="text-xl md:text-2xl text-[#cfcfcf] mb-12 font-light">
          Escrita por mim, vivida com você.
        </p>

        <button
          onClick={handleStartJourney}
          className="group bg-gradient-to-r from-[#d16b86] to-[#5e2a3a] text-[#f9f4f4] px-8 py-4 rounded-full text-lg font-medium hover:shadow-xl hover:shadow-[#d16b86]/25 transition-all duration-300 transform hover:scale-105"
        >
          <span className="flex items-center gap-3">
            Começar nossa jornada <br /> Manoel & Aline
            <Heart className="w-5 h-5 group-hover:animate-bounce" />
          </span>
        </button>

        <div className="mt-16 animate-bounce">
          <ArrowDown className="w-8 h-8 text-[#cfcfcf] opacity-60 mx-auto" />
        </div>
      </div>
    </section>
  );
}