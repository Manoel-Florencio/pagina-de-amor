import React, { useState } from 'react';
import HeroSection from './components/HeroSection';
import Timeline from './components/Timeline';
import MoonSection from './components/MoonSection';
import LoveLetters from './components/LoveLetters';
import PhotoGallery from './components/PhotoGallery';
import QuotesCarousel from './components/QuotesCarousel';
import PlaylistSection from './components/PlaylistSection';
import FinalMessage from './components/FinalMessage';

function App() {
  const [showMainContent, setShowMainContent] = useState(false);

  const handleStartJourney = () => {
    setShowMainContent(true);
    // Scroll suave para a próxima seção
    setTimeout(() => {
      const element = document.getElementById('main-content');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-[#0e0e12] text-white overflow-x-hidden">
      {/* Hero Section - sempre visível */}
      <HeroSection onStartJourney={handleStartJourney} />
      
      {/* Conteúdo principal - aparece após clicar no botão */}
      {showMainContent && (
        <div id="main-content">
          <Timeline />
          <MoonSection />
          <LoveLetters />
          <PhotoGallery />
          <QuotesCarousel />
          <PlaylistSection />
          <FinalMessage />
        </div>
      )}
    </div>
  );
}

export default App;