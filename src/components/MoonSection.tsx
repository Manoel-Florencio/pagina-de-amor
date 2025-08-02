import React from 'react';
import { Moon, Star } from 'lucide-react';

export default function MoonSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#0e0e12] via-[#1a1a2e] to-[#0e0e12] relative overflow-hidden">
      {/* Estrelas de fundo */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <Star
            key={i}
            className="absolute text-[#f2c57c] opacity-40 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 8 + 8}px`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          <div className="mb-8">
            <Moon className="w-24 h-24 text-[#f2c57c] mx-auto mb-6 animate-pulse" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-[#f9f4f4] mb-8">
            A Lua do Nosso Amor
          </h2>

          <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#5e2a3a]/50 to-[#d16b86]/30 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-[#d16b86]/20">
            <p className="text-xl md:text-2xl text-[#cfcfcf] leading-relaxed mb-8">
              "No dia <span className="text-[#f2c57c] font-bold">29 de dezembro de 2023</span>, 
              a lua brilhava em sua <span className="text-[#d16b86] font-bold">fase cheia</span>...
            </p>
            
            <p className="text-2xl md:text-3xl text-[#f9f4f4] font-light italic">
              "Na noite em que nossos corações se uniram, a lua brilhou quase completa no céu, como se o universo quisesse iluminar o começo da nossa história com todo o seu amor."
            </p>

            <div className="mt-12 grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-white/5 rounded-xl">
                <div className="text-3xl font-bold text-[#f2c57c] mb-2">98%</div>
                <div className="text-[#cfcfcf]">Iluminada</div>
              </div>
              <div className="text-center p-6 bg-white/5 rounded-xl">
                <div className="text-3xl font-bold text-[#d16b86] mb-2">∞</div>
                <div className="text-[#cfcfcf]">Nosso Amor</div>
              </div>
              <div className="text-center p-6 bg-white/5 rounded-xl">
                <div className="text-3xl font-bold text-[#f2c57c] mb-2">1</div>
                <div className="text-[#cfcfcf]">Destino</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}