import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code2, Sparkles, Rocket, Users, Home, Cpu } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'Features', href: '#features', icon: Sparkles },
    { name: 'How It Works', href: '#how-it-works', icon: Cpu },
    { name: 'Pricing', href: '#pricing', icon: Rocket },
    { name: 'Testimonials', href: '#testimonials', icon: Users },
  ];

  const scrollToSection = (sectionId) => {
    setIsOpen(false);
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 group"
            onClick={() => scrollToSection('#home')}
          >
            <div className="relative">
              <Code2 className="w-8 h-8 text-blue-600 dark:text-blue-400 group-hover:rotate-12 transition-transform duration-300" />
              <div className="absolute -inset-1 bg-blue-500 rounded-full blur opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              CodeFlow AI
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = location.hash === link.href;
              return (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group overflow-hidden
                    ${isActive 
                      ? 'text-blue-600 dark:text-blue-400' 
                      : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                    }
                  `}
                >
                  <span className="relative z-10 flex items-center space-x-1">
                    <Icon className="w-4 h-4" />
                    <span>{link.name}</span>
                  </span>
                  <span className={`absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100
                    ${isActive ? 'scale-x-100' : ''}
                  `} />
                </button>
              );
            })}
          </div>

          {/* Right Side - Theme Toggle & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <button className="relative group px-6 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium overflow-hidden">
              <span className="relative z-10 flex items-center space-x-2">
                <Rocket className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                <span>Start Building</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-2 border-t border-gray-200 dark:border-gray-800">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="w-full flex items-center space-x-2 px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                >
                  <Icon className="w-5 h-5" />
                  <span>{link.name}</span>
                </button>
              );
            })}
            <button className="w-full mt-4 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium flex items-center justify-center space-x-2">
              <Rocket className="w-5 h-5" />
              <span>Start Building</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;