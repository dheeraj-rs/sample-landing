import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  onNavigate?: (page: string) => void;
  currentPage?: string;
}

export default function Header({ onNavigate, currentPage = 'home' }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavigation = (page: string) => {
    onNavigate?.(page);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button onClick={() => handleNavigation('home')} className="flex items-center cursor-pointer hover:opacity-80 transition-opacity">
            <span className="text-2xl font-bold text-white">D-Admin</span>
          </button>

          <div className="hidden md:flex items-center space-x-8">
            {currentPage === 'home' && (
              <>
                <a href="#features" className="text-gray-300 hover:text-white transition-colors">
                  Features
                </a>
                <button onClick={() => handleNavigation('builder')} className="text-gray-300 hover:text-white transition-colors">
                  3D Builder
                </button>
                <a href="#templates" className="text-gray-300 hover:text-white transition-colors">
                  Templates
                </a>
                <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">
                  Pricing
                </a>
              </>
            )}
            {currentPage === 'builder' && (
              <>
                <a href="#features" className="text-gray-300 hover:text-white transition-colors">
                  Features
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Pricing
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </a>
              </>
            )}
            <button className="px-6 py-2 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-colors">
              Sign Out
            </button>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800">
          <div className="px-4 py-4 space-y-3">
            {currentPage === 'home' && (
              <>
                <a
                  href="#features"
                  className="block text-gray-300 hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Features
                </a>
                <button
                  onClick={() => handleNavigation('builder')}
                  className="block w-full text-left text-gray-300 hover:text-white transition-colors"
                >
                  3D Builder
                </button>
                <a
                  href="#templates"
                  className="block text-gray-300 hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Templates
                </a>
                <a
                  href="#pricing"
                  className="block text-gray-300 hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Pricing
                </a>
              </>
            )}
            {currentPage === 'builder' && (
              <>
                <a
                  href="#features"
                  className="block text-gray-300 hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Features
                </a>
                <a
                  href="#"
                  className="block text-gray-300 hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Pricing
                </a>
                <a
                  href="#"
                  className="block text-gray-300 hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </a>
              </>
            )}
            <button className="w-full px-6 py-2 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-colors">
              Sign Out
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
