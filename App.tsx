import React, { useState } from 'react';
import { ViewState } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Menu } from './components/Menu';
import { AiChef } from './components/AiChef';
import { Contact } from './components/Contact';
import { CartProvider } from './context/CartContext';
import { CartSidebar } from './components/CartSidebar';

function App() {
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [highlightedItemId, setHighlightedItemId] = useState<string | null>(null);

  const handleRecommendationClick = (itemId: string) => {
    setHighlightedItemId(itemId);
    setCurrentView('menu');
    // Allow time for render then scroll
    setTimeout(() => {
      const element = document.getElementById(`menu-item-${itemId}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
  };

  const handleSetView = (view: ViewState) => {
    if (view !== 'menu') {
      setHighlightedItemId(null); // Clear highlight if leaving menu logic implies reset
    }
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-brand-dark text-white font-sans selection:bg-brand-orange selection:text-brand-dark">
        <Navbar currentView={currentView} setView={handleSetView} />
        <CartSidebar />
        
        <main>
          {currentView === 'home' && (
            <>
              <Hero setView={handleSetView} />
              {/* Preview of menu on home page */}
              <div className="relative">
                <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-brand-dark to-transparent z-10 pointer-events-none" />
                <Menu />
              </div>
              <Contact />
            </>
          )}
          
          {currentView === 'menu' && (
            <Menu highlightedItemId={highlightedItemId} />
          )}
          
          {currentView === 'ai-chef' && (
            <AiChef onRecommendationClick={handleRecommendationClick} />
          )}

          {currentView === 'contact' && (
            <Contact />
          )}
        </main>

        <footer className="bg-black py-8 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Brasa & Pão. Todos os direitos reservados.
            </p>
            <p className="text-gray-600 text-xs mt-2">
              Imagens meramente ilustrativas.
            </p>
          </div>
        </footer>
      </div>
    </CartProvider>
  );
}

export default App;