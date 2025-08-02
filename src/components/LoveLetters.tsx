import React, { useState, useEffect } from 'react';
import { Heart, ChevronLeft, ChevronRight } from 'lucide-react';

const letters = [
  {
    title: "Desde que te conheci",
    content: " Amor da minha vida , Desde o dia em que nossos caminhos se cruzaram, algo dentro de mim mudou. Eu não precisei de muito tempo pra entender que você era diferente. Era como se minha alma tivesse encontrado o que estava procurando há tempos, sem saber. Foi no meio de uma conversa, de um instante simples, que eu senti: você me entende, me acalma, me completa. É difícil explicar com palavras o que é esse amor que sinto por você. Ele não se mede, não se esgota — só cresce, mesmo quando o mundo tenta dizer o contrário. Você é minha paz, minha inspiração, minha flor rara. E eu agradeço a Deus por ter te colocado na minha vida. ",
    date: "Com todo meu amor"
  },
  {
    title: "Nosso amor é verdadeiro",
    content: " Meu amor, Mesmo com a distância, mesmo com os desafios, eu sinto você aqui comigo. Nosso amor não é frágil. Ele é forte, ele é verdadeiro. Ele não depende das circunstâncias. Eu sei que o que vivemos é raro. E sei também que não foi por falta de amor que as coisas tomaram outro rumo. Mas o que permanece é a certeza do sentimento limpo, puro, profundo. Eu não desisto de nós, porque o que temos veio de Deus. E o que vem Dele é pra durar. Eu te amo com o coração inteiro. E enquanto eu respirar, estarei aqui, torcendo por nós. ",
    date: "Para sempre seu"
  },
  {
    title: "Você me fez crescer",
    content: " Minha princesa, Amar você me ensinou tanto, me mostrou o que é crescer com alguém, o que é evoluir lado a lado, respeitando o tempo, os medos, as fases. Com você, eu aprendi a ouvir mais, a sentir mais, a ser mais paciente, mais forte, mais verdadeiro comigo mesmo. Nosso relacionamento foi, e é uma ponte pra um lugar melhor dentro de mim. E por isso, mesmo nas dificuldades, eu agradeço. Porque tudo o que vivemos valeu, e continua valendo. Você me ajudou a ser um homem melhor. ",
    date: "Gratidao por tudo"
  },
  {
    title: "Promessa de um recomeço",
    content: " Meu amor, Um dia, ainda vamos olhar para tudo isso que passamos e sorrir. Porque saberemos que valeu a pena. Que cada passo, cada silêncio, cada reencontro, fazia parte de um plano maior. Eu não desisto de você, nem do nosso sonho. Só estou aqui, esperando o tempo certo — o tempo em que nossas vidas estarão alinhadas, prontas pra viver o que sempre sentimos: um amor real, maduro e cheio de propósito. E quando esse dia chegar, estarei aqui, de braços abertos, com todo o amor do mundo pra te dar. ",
    date: "Seu para sempre"
  },
  {
    title: "Você é o meu lar",
    content: " Minha vida , Você é aquele lugar pra onde meu coração sempre quer voltar. É no seu abraço que eu encontro descanso, é na sua voz que eu escuto o amor, é nos seus olhos que eu vejo futuro. Não importa quanto tempo passe, nem o que aconteça o que eu sinto por você é constante, firme, bonito. Você é minha casa, minha escolha, minha flor. E enquanto eu viver, vou cuidar desse amor com verdade, com fé e com esperança de te ter ao meu lado outra vez pra construir tudo aquilo que já começamos a sonhar.",
    date: "Você é minha vida"
  }
];

export default function LoveLetters() {
  const [currentLetter, setCurrentLetter] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const letter = letters[currentLetter];

  useEffect(() => {
    setIsTyping(true);
    setDisplayedText('');
    
    let index = 0;
    const timer = setInterval(() => {
      if (index < letter.content.length) {
        setDisplayedText(prev => prev + letter.content[index]);
        index++;
      } else {
        setIsTyping(false);
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, [currentLetter, letter.content]);

  const nextLetter = () => {
    setCurrentLetter((prev) => (prev + 1) % letters.length);
  };

  const prevLetter = () => {
    setCurrentLetter((prev) => (prev - 1 + letters.length) % letters.length);
  };

  return (
    <section className="py-20 bg-[#0e0e12]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#f9f4f4] mb-16">
          Cartas do Coração
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#f9f4f4] to-[#cfcfcf] rounded-3xl p-8 md:p-12 shadow-2xl relative">
            {/* Decoração de papel antigo */}
            <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-[#d16b86]/30" />
            <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-[#d16b86]/30" />
            <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-[#d16b86]/30" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-[#d16b86]/30" />

            <div className="text-center mb-8">
              <Heart className="w-8 h-8 text-[#d16b86] mx-auto mb-4" />
              <h3 className="text-2xl md:text-3xl font-bold text-[#5e2a3a] mb-2">
                {letter.title}
              </h3>
            </div>

            <div className="min-h-[200px] flex items-center justify-center">
              <p className="text-lg md:text-xl text-[#0e0e12] leading-relaxed text-center italic font-medium">
                {displayedText}
                {isTyping && <span className="animate-pulse">|</span>}
              </p>
            </div>

            <div className="text-center mt-8">
              <p className="text-[#5e2a3a] font-semibold">{letter.date}</p>
            </div>

            {/* Controles de navegação */}
            <div className="flex justify-between items-center mt-8">
              <button
                onClick={prevLetter}
                className="p-3 bg-[#d16b86] text-white rounded-full hover:bg-[#5e2a3a] transition-colors duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <div className="flex space-x-2">
                {letters.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentLetter(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                      index === currentLetter ? 'bg-[#d16b86]' : 'bg-[#cfcfcf]'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextLetter}
                className="p-3 bg-[#d16b86] text-white rounded-full hover:bg-[#5e2a3a] transition-colors duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-[#cfcfcf] italic">
              "Para você, com amor. Sempre."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}