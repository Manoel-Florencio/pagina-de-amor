import React from 'react';
import { Heart, MessageCircle, Rss as Kiss, Calendar, MapPin, Mountain, Sparkles } from 'lucide-react';

const timelineEvents = [
  {
    icon: Sparkles,
    title: "Quando nos conhecemos",
    date: "Primeiro encontro",
    description: "Te conheci numa sessão que você foi visitar o meu núcleo. Naquele dia, você estava passando por um momento difícil, por causa da gravidez da sua irmã e de uma crise de ansiedade. Sem saber de nada, fui puxado pela intuição e comecei a conversar com você.Nossas palavras tocaram num ponto que te confortou, e lembro como aquilo te acalmou. Foi ali que tudo começou a florescer entre nós. Conversamos sobre tanta coisa… e no meio disso tudo, surgiu o nome do nosso guia espiritual, Mestre Gabriel — como se ele já estivesse cuidando da gente desde o início.Aquela conexão foi forte, verdadeira. E desde então, só cresce.",
    color: "from-[#d16b86] to-[#f2c57c]"
  },
  {
    icon: MessageCircle,
    title: "Primeira conversa marcante",
    date: "Primeiras palavras",
    description: "Nosso primeiro encontro de verdade foi no Balneário. E foi ali que tudo começou a tomar forma de algo maior. A gente conversou por horas sobre o que mais toca nossos corações: os ensinos da União. O assunto girou em torno da HOasca, a Conselheira do Rei e cada um trouxe sua visão, sua vivência, seu sentir. Trocamos ensinamentos finos, profundos e foi como se os pensamentos e o coração de um reconhecesse a do outro. A conversa fluiu tanto que o tempo passou e a gente nem percebeu. Foi nesse momento que eu senti: tinha algo especial acontecendo ali. Nosso amor começou a florescer em meio à sabedoria, à sintonia e à verdade.",
    color: "from-[#5e2a3a] to-[#d16b86]"
  },
  {
    icon: Kiss,
    title: "Primeiro beijo",
    date: "Momento mágico",
    description: "Naquela mesma noite do nosso primeiro encontro, quando cheguei em casa, te convidei pra entrar e tomar um copo de água só pra gente continuar conversando um pouco mais. E então, do nada, a energia acabou. Ficamos ali, iluminados apenas pela luz de velas e do celular, mergulhados em uma conversa que foi crescendo, ganhando profundidade, alma, sentimento. Nossos pensamentos estavam cada vez mais conectados, e o que a gente sentia também. Foi ali, naquele instante de simplicidade e verdade, que aconteceu nosso primeiro beijo. Um beijo que não foi só físico, mas de alma. Um momento especial, que abriu ainda mais nossa conexão e nos permitiu conhecer um ao outro de uma forma nova e intensa. Um momento que vem ficar guardado pra sempre na minha memória, com carinho, com brilho, com amor.",
    color: "from-[#d16b86] to-[#5e2a3a]"
  },
  {
    icon: Heart,
    title: "Pedido de namoro",
    date: "Oficializando o amor",
    description: "Você estava viajando a trabalho e chegou no dia 29 de dezembro. Mesmo depois de um dia cheio, nos encontramos à noite, e eu já tinha preparado algo especial pra te receber. Te entreguei um buquê de flores, um anel que simboliza nossa escolha, nosso carinho, nosso compromisso. E junto, deixei uma carta com uma frase que representa tudo o que sinto por você: 'Encontrei em você o que faltava em mim.' Essa verdade tem acompanhado cada passo do nosso namoro. Naquele momento, tudo fez ainda mais sentido. Você disse sim — e no dia 29 de dezembro, uma data já tão significativa pra gente, mês em que nasceu nosso afilhado — selamos o começo oficial da nossa caminhada juntos. Um momento simples, profundo e cheio de amor.",
    color: "from-[#f2c57c] to-[#d16b86]"
  },
  {
    icon: MapPin,
    title: "Momentos de Lazer",
    date: "Aventura a dois",
    description: "Desde o início, descobrimos algo que nos unia ainda mais: o amor pela aventura. Essa foi uma das semelhanças que nos aproximou, e que seguimos cultivando em tantos momentos especiais. Vivemos momentos únicos nas sessões e preparos da União do Vegetal, principalmente no nosso querido Núcleo Águas Claras — sempre rodeados de natureza, de sentido e de amor. Mas também criamos lembranças inesquecíveis nas nossas próprias viagens: trilhas, cachoeiras, passeios por Presidente Figueiredo A gente colocava o pé na estrada e o coração na sintonia. Tinha vezes que a trilha era puxada, mas nossa conexão era tão forte, o sentimento tão grande, que até o medo se dissolvia. E quando a gente olhava pra trás, pensava: “Caramba, fomos corajosos demais!”. Mas no fundo, sabíamos: não era só coragem — era amor e confiança um no outro. São momentos que ficam marcados na alma. E que venham muitos outros como esses, porque viver tudo isso ao seu lado é uma das maiores alegrias da minha vida.",
    color: "from-[#5e2a3a] to-[#f2c57c]"
  },
  {
    icon: Mountain,
    title: "Obstáculos superados",
    date: "Fortalecendo o amor",
    description: "A gente já passou por muita coisa juntos. Enfrentamos obstáculos, momentos difíceis… mas vencemos cada um deles com coragem, paciência e, acima de tudo, com amor. Cada desafio que superamos nos trouxe crescimento. Aprendemos muito, sobre nós mesmos, sobre o outro, sobre como caminhar juntos. Nosso relacionamento, desde o começo, veio pra somar, evoluir e transformar. Não foi fácil. Teve dias em que tudo parecia mais pesado… mas ali estava o incentivo um do outro, a mão estendida, o olhar de apoio. E isso fez toda a diferença. Hoje, olhando pra trás, dá pra ver: não somos mais os mesmos de quando começamos. Somos mais fortes, mais maduros e mais conscientes. E seguimos assim: aprendendo, crescendo e vencendo, juntos.",
    color: "from-[#d16b86] to-[#5e2a3a]"
  },
  {
    icon: Heart,
    title: "Momento atual",
    date: "Aqui e agora",
    description: "Hoje, não estamos juntos mas seguimos nos falando, seguimos conectados, porque a gente sabe que o que sentimos um pelo outro é verdadeiro. É algo que vem de Deus, e isso nunca se perde. A gente sabe que o nosso fim não veio por falta de amor. Pelo contrário, o amor continua vivo, presente, forte dentro de mim. E mesmo que agora não seja o momento certo, eu não desisto de algo que Deus colocou na minha vida com tanto cuidado, com tanta luz. Eu acredito que, no tempo certo mais maduros, mais prontos, mais alinhados com a vida, nós vamos nos reencontrar de verdade. Se Deus e o Mestre quiserem… e eu sinto que eles querem, porque nós queremos. Esse é o meu sentimento por você, meu amor, minha princesa. Você é minha vida. É a flor que eu quero cuidar, cultivar e que floresça na minha vida pra que a gente possa caminhar juntos, formar nossa família, viver com paz, amor, prosperidade e alegria. Essa é a minha maior vontade. E pode ter certeza: eu vou fazer por onde conseguir isso. Por mim. Por você. Por nós.",
    color: "from-[#f2c57c] to-[#d16b86]"
  }
];

export default function Timeline() {
  return (
    <section className="py-20 bg-[#0e0e12] relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#f9f4f4] mb-16">
          Linha do Tempo do Nosso Amor
        </h2>

        <div className="relative">
          {/* Linha central */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#d16b86] to-[#5e2a3a] opacity-30" />

          {timelineEvents.map((event, index) => {
            const Icon = event.icon;
            const isLeft = index % 2 === 0;

            return (
              <div key={index} className={`relative flex items-center mb-16 ${isLeft ? 'justify-start' : 'justify-end'}`}>
                {/* Conteúdo */}
                <div className={`w-full md:w-5/12 ${isLeft ? 'pr-8' : 'pl-8'}`}>
                  <div className={`bg-gradient-to-br ${event.color} p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105`}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-white/20 rounded-full">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{event.title}</h3>
                        <p className="text-white/80 text-sm">{event.date}</p>
                      </div>
                    </div>
                    <p className="text-white/90 leading-relaxed">{event.description}</p>
                  </div>
                </div>

                {/* Ponto central */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#d16b86] rounded-full border-4 border-[#0e0e12] z-10" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}