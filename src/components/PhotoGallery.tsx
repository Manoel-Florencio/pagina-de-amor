import React, { useState } from 'react';
import { Heart, X } from 'lucide-react';

const photos = [
  {
    src: "/img/foto1.jpg",
    caption: "Nosso Jeito de Ser Felizes",
    description: "Na leveza desse abraço, encontrei o meu lar."
  },
  {
    src: "/img/foto2.jpg",
    caption: " Só Nós Dois e o Tempo Parado",
    description: "Esse sorriso que me conquistou desde o primeiro momento e ainda me faz perder o fôlego."
  },
  {
    src: "/img/foto3.jpg",
    caption: "O Dia da Nossa Aliança e do Nosso Afilhado",
    description: "O amor se firmou entre nós, abençoado por esse benzinho tão querido que hoje é parte da nossa história."
  },
  {
    src: "/img/foto4.jpg",
    caption: "Sorrisos Que Se Encontraram",
    description: "Te olhar assim de perto sempre me faz lembrar do quanto eu te amo."
  },
  {
    src: "/img/foto5.jpg",
    caption: "Nosso Mundo Simples e Cheio de Amor",
    description: "O lugar onde gostamos de ficar juntos, criando memórias e planejando o futuro e cada momento contigo se transforma em eternidade."
  },
  {
    src: "/img/foto6.JPEG",
    caption: "Meu Trio Favorito",
    description: "Ao seu lado e do nosso afilhado, tudo tem mais cor e sentido."
  }
];

export default function PhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gradient-to-b from-[#0e0e12] to-[#1a1a2e]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#f9f4f4] mb-16">
          Galeria dos Nossos Momentos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl cursor-pointer transform transition-all duration-300 hover:scale-105"
              onClick={() => setSelectedPhoto(index)}
            >
              <img
                src={photo.src}
                alt={photo.caption}
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <Heart className="w-4 h-4 text-[#d16b86]" />
                  <h3 className="text-white font-semibold">{photo.caption}</h3>
                </div>
                <p className="text-white/80 text-sm">{photo.description}</p>
              </div>

              {/* Moldura especial para fotos destacadas */}
              {(index === 1 || index === 3) && (
                <div className="absolute inset-0 border-4 border-[#f2c57c]/50 rounded-2xl pointer-events-none" />
              )}
            </div>
          ))}
        </div>

        {/* Modal da foto */}
        {selectedPhoto !== null && (
          <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
            <div className="relative max-w-4xl w-full">
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 text-white hover:text-[#d16b86] transition-colors bg-black/50 rounded-full p-2 z-10"
              >
                <X className="w-6 h-6" />
              </button>
              
              <img
                src={photos[selectedPhoto].src}
                alt={photos[selectedPhoto].caption}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              
              <div className="mt-4 text-center">
                <h3 className="text-xl font-bold text-[#f9f4f4] mb-2">
                  {photos[selectedPhoto].caption}
                </h3>
                <p className="text-[#cfcfcf]">{photos[selectedPhoto].description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}