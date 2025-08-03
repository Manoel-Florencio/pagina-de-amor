import React from "react";
import { Music, Heart, ExternalLink } from "lucide-react";

export default function PlaylistSection() {
  // CONFIGURE AQUI O LINK DA SUA PLAYLIST DO SPOTIFY
  const SPOTIFY_PLAYLIST_URL =
    "https://open.spotify.com/playlist/7H3byRpY1q6DTUzz3lKDiw?si=SxtPW4wQTu6sT9Mm13g7og&pi=7w9Bg0PvQ0Cxs";

  // Extrair o ID da playlist do URL para criar o embed
  const getPlaylistId = (url: string) => {
    const match = url.match(/playlist\/([a-zA-Z0-9]+)/);
    return match ? match[1] : null;
  };

  const playlistId = getPlaylistId(SPOTIFY_PLAYLIST_URL);

  // Função para abrir a playlist no Spotify
  const openInSpotify = () => {
    window.open(SPOTIFY_PLAYLIST_URL, "_blank");
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#1a1a2e] via-[#0e0e12] to-[#1a1a2e]">
      <div className="container mx-auto px-6">
        {/* Cabeçalho da seção */}
        <div className="text-center mb-16">
          <Music className="w-16 h-16 text-[#d16b86] mx-auto mb-6 animate-bounce" />
          <h2 className="text-4xl md:text-5xl font-bold text-[#f9f4f4] mb-4">
            Ouça o que me inspira
          </h2>
          <p className="text-xl text-[#cfcfcf] italic max-w-2xl mx-auto">
            "Cada batida dessas músicas é um pedaço da nossa história. Uma
            trilha sonora que embala nossos momentos especiais."
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Container principal da playlist */}
          <div className="bg-gradient-to-r from-[#5e2a3a]/20 to-[#d16b86]/20 backdrop-blur-sm rounded-3xl p-8 border border-white/10 shadow-2xl">
            {/* Título e descrição da playlist */}
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-[#f9f4f4] mb-3">
                Playlist do Nosso Amor
              </h3>
              <p className="text-[#cfcfcf] text-lg mb-6">
                Uma coleção especial de músicas que definem nossos momentos
                juntos
              </p>

              {/* Botão para abrir no Spotify */}
              <button
                onClick={openInSpotify}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#1DB954] hover:bg-[#1ed760] text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <ExternalLink className="w-5 h-5" />
                Abrir no Spotify
              </button>
            </div>

            {/* Embed direto do Spotify */}
            {playlistId ? (
              <div className="relative">
                {/* Container responsivo para o iframe */}
                <div className="bg-black/20 rounded-2xl p-4 backdrop-blur-sm border border-white/5">
                  <iframe
                    src={`https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator&theme=0`}
                    width="100%"
                    height="380"
                    frameBorder="0"
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    className="
                     rounded-xl
                     w-full
                     h-[500px]          
                     md:h-[400px]       
                     sm:h-[300px] "
                     title="Playlist do Spotify"
                  />
                </div>

                {/* Efeitos visuais decorativos */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#d16b86] rounded-full opacity-60 animate-pulse"></div>
                <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-[#1DB954] rounded-full opacity-40 animate-pulse delay-1000"></div>
              </div>
            ) : (
              /* Fallback caso não consiga extrair o ID */
              <div className="text-center py-12">
                <Heart className="w-16 h-16 text-[#d16b86] mx-auto mb-4" />
                <p className="text-[#cfcfcf] text-lg mb-2">
                  Não foi possível carregar a playlist
                </p>
                <p className="text-[#cfcfcf]/70 text-sm">
                  Verifique se o link da playlist está correto no código
                </p>
                <button
                  onClick={openInSpotify}
                  className="mt-4 inline-flex items-center gap-2 px-6 py-3 bg-[#1DB954] hover:bg-[#1ed760] text-white rounded-full font-semibold transition-all duration-300"
                >
                  <ExternalLink className="w-5 h-5" />
                  Abrir Playlist
                </button>
              </div>
            )}

            {/* Seção adicional com informações */}
            <div className="mt-8 text-center">
              <p className="text-[#cfcfcf]/80 text-sm">
                💝 Criado com amor para momentos especiais
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
