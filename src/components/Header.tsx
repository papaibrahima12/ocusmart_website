import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="relative">
              {/* <Eye className={`w-8 h-8 transition-colors duration-300 ${
                isScrolled ? 'text-blue-600' : 'text-white'
              }`} />
              <div className={`absolute inset-0 w-8 h-8 rounded-full transition-all duration-300 ${
                isScrolled ? 'bg-gradient-to-r from-blue-500/20 to-teal-500/20' : 'bg-gradient-to-r from-white/20 to-teal-300/20'
              } blur-sm`}></div> */}
              <img 
                  src="/public/ocusmart_logo.png" 
                  alt="OcuSmart Logo" 
                  className="w-28 h-28 object-contain"
                />
            </div>
            {/* <span className={`text-xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              OcuSmart
            </span> */}
          </div>

          <nav className="hidden md:flex space-x-8">
            {[
              { name: 'Accueil', id: 'hero' },
              { name: 'À propos', id: 'about' },
              { name: 'Solutions', id: 'solutions' },
              { name: 'Équipe', id: 'team' },
              { name: 'Ambitions', id: 'ambitions' },
              { name: 'Contact', id: 'contact' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors duration-300 hover:text-blue-400 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-200">
            <nav className="px-4 py-4 space-y-2">
              {[
                { name: 'Accueil', id: 'hero' },
                { name: 'À propos', id: 'about' },
                { name: 'Solutions', id: 'solutions' },
                { name: 'Équipe', id: 'team' },
                { name: 'Ambitions', id: 'ambitions' },
                { name: 'Contact', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;