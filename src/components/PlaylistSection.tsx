import React, { useState, useEffect } from 'react';
import { Music, Heart, Play, ExternalLink } from 'lucide-react';

interface SpotifyPlaylistData {
  title: string;
  thumbnail_url: string;
  html: string;
}

export default function PlaylistSection() {
  // CONFIGURE AQUI O LINK DA SUA PLAYLIST DO SPOTIFY
  const SPOTIFY_PLAYLIST_URL = 'https://open.spotify.com/playlist/7H3byRpY1q6DTUzz3lKDiw?si=M98wmogyRreck4sCz4HgZA&pi=LeZfK0QUSEqS5';
  
  const [playlistData, setPlaylistData] = useState<SpotifyPlaylistData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Função para buscar dados da playlist usando oEmbed API
  const fetchPlaylistData = async (url: string) => {
    setLoading(true);
    setError('');
    
    try {
      const encodedUrl = encodeURIComponent(url);
      const response = await fetch(`https://open.spotify.com/oembed?url=${encodedUrl}`);
      
      if (!response.ok) {
        throw new Error('Não foi possível carregar os dados da playlist');
      }
      
      const data = await response.json();
      setPlaylistData(data);
    } catch (err) {
      setError('Erro ao carregar playlist. Verifique se o link está correto.');
      console.error('Erro ao buscar dados da playlist:', err);
    } finally {
      setLoading(false);
    }
  };

  // Carregar dados da playlist automaticamente quando o componente for montado
  useEffect(() => {
    if (SPOTIFY_PLAYLIST_URL) {
      fetchPlaylistData(SPOTIFY_PLAYLIST_URL);
    }
  }, []);

  // Função para abrir a playlist no Spotify
  const openInSpotify = () => {
    window.open(SPOTIFY_PLAYLIST_URL, '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#1a1a2e] via-[#0e0e12] to-[#1a1a2e]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Music className="w-16 h-16 text-[#d16b86] mx-auto mb-6 animate-bounce" />
          <h2 className="text-4xl md:text-5xl font-bold text-[#f9f4f4] mb-4">
            Playlist do Nosso Amor
          </h2>
          <p className="text-xl text-[#cfcfcf] italic">
            "Cada batida dessas músicas é um pedaço da gente."
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Estado de carregamento */}
          {loading && (
            <div className="text-center py-12">
              <div className="animate-spin w-12 h-12 border-4 border-[#d16b86] border-t-transparent rounded-full mx-auto mb-4"></div>
              <p className="text-[#cfcfcf] text-lg">Carregando playlist...</p>
            </div>
          )}

          {/* Estado de erro */}
          {error && !loading && (
            <div className="text-center py-12">
              <Heart className="w-16 h-16 text-red-400 mx-auto mb-4" />
              <p className="text-red-400 text-lg mb-2">{error}</p>
              <p className="text-[#cfcfcf]/70 text-sm">
                Verifique se o link da playlist está correto no código.
              </p>
            </div>
          )}

          {/* Exibição da playlist do Spotify */}
          {playlistData && !loading && (
            <>
              <div className="bg-gradient-to-r from-[#5e2a3a] to-[#d16b86] rounded-3xl p-8 mb-8 shadow-2xl">
                <div className="flex flex-col sm:flex-row items-center gap-6 text-white">
                  {/* Imagem da playlist */}
                  <div className="flex-shrink-0">
                    <img
                      src={playlistData.thumbnail_url}
                      alt={playlistData.title}
                      className="w-24 h-24 sm:w-32 sm:h-32 rounded-xl shadow-lg object-cover"
                    />
                  </div>
                  
                  {/* Informações da playlist */}
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-2xl font-bold mb-2">{playlistData.title}</h3>
                    <p className="text-white/80 mb-4">Playlist do Spotify</p>
                    
                    {/* Botões de ação */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        onClick={openInSpotify}
                        className="flex items-center justify-center gap-2 px-6 py-3 bg-[#1DB954] hover:bg-[#1ed760] text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
                      >
                        <Play className="w-5 h-5" />
                        Ouvir no Spotify
                      </button>
                      
                      <button
                        onClick={openInSpotify}
                        className="flex items-center justify-center gap-2 px-6 py-3 bg-white/20 hover:bg-white/30 text-white rounded-full font-semibold transition-all duration-300"
                      >
                        <ExternalLink className="w-5 h-5" />
                        Abrir Playlist
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Embed da playlist */}
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 mb-8 border border-white/10">
                <h4 className="text-lg font-semibold text-[#f9f4f4] mb-4 text-center">
                  Preview da Playlist
                </h4>
                <div 
                  className="w-full"
                  dangerouslySetInnerHTML={{ __html: playlistData.html }}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

