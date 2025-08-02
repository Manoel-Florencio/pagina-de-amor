import React, { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';

const quotes = [
  "\"O amor não é apenas olhar um para o outro, é olhar juntos na mesma direção.\"",
  "\"Em todos os mundos possíveis, eu te escolheria de novo.\"",
  "\"Você não foi só alguém que entrou na minha vida — foi a parte que faltava em mim, que agora faz tudo ter sentido.\"",
  "\"Mesmo longe, meu amor por você continua aqui… firme, verdadeiro, esperando o tempo certo de florescer de novo.\"",
  "\"A nossa história não é feita de promessas vazias, mas de encontros de alma que nem o tempo consegue apagar.\"",
  "\"Te amar me transformou… e tudo o que mais quero é continuar crescendo contigo, lado a lado, coração com coração.\"",
  "\"Você é e sempre será meu amor. A minha vontade de viver algo verdadeiro, bonito e eterno.\""
];

export default function QuotesCarousel() {
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-[#0e0e12] relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border border-[#d16b86] rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-20 w-16 h-16 border border-[#f2c57c] rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/4 w-12 h-12 border border-[#5e2a3a] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#f9f4f4] mb-16">
          Frases que Marcaram Nossa História
        </h2>

        <div className="max-w-4xl mx-auto text-center">
          <div className="relative h-48 flex items-center justify-center">
            <Quote className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 w-12 h-12 text-[#d16b86] opacity-30" />
            
            <p className="text-2xl md:text-4xl text-[#f9f4f4] font-light italic leading-relaxed transition-all duration-1000 transform">
              {quotes[currentQuote]}
            </p>
          </div>

          {/* Indicadores */}
          <div className="flex justify-center space-x-2 mt-8">
            {quotes.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentQuote(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentQuote 
                    ? 'bg-[#d16b86] scale-125' 
                    : 'bg-[#cfcfcf]/30 hover:bg-[#cfcfcf]/50'
                }`}
              />
            ))}
          </div>

          <div className="mt-12 p-6 bg-gradient-to-r from-[#5e2a3a]/20 to-[#d16b86]/20 rounded-full backdrop-blur-sm border border-[#d16b86]/10">
            <p className="text-[#cfcfcf] italic">
              "Cada palavra aqui é um pedaço do que sinto por você."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}