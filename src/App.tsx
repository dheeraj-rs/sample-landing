import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Pipeline from './components/Pipeline';
import Templates from './components/Templates';
import Builder from './components/Builder';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="min-h-screen bg-black">
      <Header onNavigate={setCurrentPage} currentPage={currentPage} />
      {currentPage === 'home' && (
        <>
          <Hero onStartBuilding={() => setCurrentPage('builder')} />
          <Features />
          <Pipeline />
          <Templates onUseTemplate={() => setCurrentPage('builder')} />
        </>
      )}
      {currentPage === 'builder' && <Builder />}
      {currentPage === 'home' && <Footer />}
    </div>
  );
}

export default App;
