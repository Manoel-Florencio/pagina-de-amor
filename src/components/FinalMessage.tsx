import React, { useState } from 'react';
import { Heart, Bell, Sparkles } from 'lucide-react';

export default function FinalMessage() {
  const [isClicked, setIsClicked] = useState(false);

  const handleButtonClick = () => {
    setIsClicked(true);
    // Aqui você pode adicionar uma ação especial quando o botão for clicado
    setTimeout(() => {
      alert('Meu coração sempre será seu — porque foi ao seu lado que ele aprendeu a amar de verdade. E se ainda existe amor, existe caminho. Que a gente se encontre outra vez, mais fortes, mais inteiros, e prontos pra viver o amor que Deus escreveu pra nós. 💕');
    }, 1000);
  };

  return (
    <section className="py-20 bg-gradient-to-t from-[#0e0e12] via-[#1a1a2e] to-[#0e0e12] relative overflow-hidden min-h-screen flex items-center">
      {/* Efeito de partículas românticas */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-[#d16b86] opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 16 + 8}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Ícone principal */}
          <div className="mb-8">
            <div className="relative inline-block">
              <Sparkles className="w-20 h-20 text-[#f2c57c] mx-auto animate-pulse" />
              <div className="absolute inset-0 w-20 h-20 border-2 border-[#d16b86] rounded-full animate-spin" style={{ animationDuration: '3s' }} />
            </div>
          </div>

          {/* Mensagem principal */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-6xl font-bold text-[#f9f4f4] mb-8 leading-tight">
              Esse site é só um pedacinho 
              <span className="block text-[#d16b86]">do que sinto</span>
            </h2>
            
            <p className="text-2xl md:text-3xl text-[#cfcfcf] font-light italic mb-8">
              Porque o resto... é infinito.
            </p>

            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#d16b86] to-transparent mx-auto mb-12" />
          </div>

          {/* Declaração final */}
          <div className="bg-gradient-to-r from-[#5e2a3a]/30 to-[#d16b86]/30 backdrop-blur-sm rounded-3xl p-8 md:p-12 mb-12 border border-[#d16b86]/20">
            <p className="text-xl md:text-2xl text-[#f9f4f4] leading-relaxed">
              Você transformou minha vida em algo <span className="text-[#f2c57c] font-bold">mágico</span>. 
              Cada dia ao seu lado é uma nova página da nossa história, 
              e eu quero escrever <span className="text-[#d16b86] font-bold">infinitas páginas</span> com você.
            </p>
          </div>

          {/* Botão final */}
          <div className="space-y-6">
            <button
              onClick={handleButtonClick}
              className={`group relative overflow-hidden bg-gradient-to-r from-[#d16b86] to-[#5e2a3a] text-white px-12 py-6 rounded-full text-xl font-bold shadow-2xl hover:shadow-[#d16b86]/40 transition-all duration-500 transform hover:scale-110 ${
                isClicked ? 'animate-pulse scale-110' : ''
              }`}
            >
              <span className="relative z-10 flex items-center gap-3">
                Me dá uma chance de recomeçar com você?
                <Bell className={`w-6 h-6 ${isClicked ? 'animate-spin' : 'group-hover:animate-bounce'}`} />
              </span>
              
              {/* Efeito de brilho */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </button>

            {isClicked && (
              <div className="animate-fade-in">
                <p className="text-[#f2c57c] text-lg font-medium">
                  ✨ Obrigado por fazer parte da minha vida! ✨
                </p>
              </div>
            )}
          </div>

          {/* Assinatura */}
          <div className="mt-16 pt-8 border-t border-[#d16b86]/20">
            <p className="text-[#cfcfcf] italic">
              Feito com muito ❤️ e código por alguém que te ama infinitamente
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}




