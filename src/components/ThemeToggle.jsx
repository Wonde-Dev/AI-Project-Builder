import { useState, useEffect } from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    // Initialize based on localStorage or system preference
    const saved = localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') return saved;
    return 'system';
  });

  useEffect(() => {
    const updateTheme = () => {
      const root = document.documentElement;
      
      if (theme === 'system') {
        localStorage.removeItem('theme');
        const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (systemDark) {
          root.classList.add('dark');
        } else {
          root.classList.remove('dark');
        }
      } else {
        localStorage.setItem('theme', theme);
        if (theme === 'dark') {
          root.classList.add('dark');
        } else {
          root.classList.remove('dark');
        }
      }
    };

    updateTheme();

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      if (theme === 'system') {
        updateTheme();
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  const cycleTheme = () => {
    const themes = ['light', 'dark', 'system'];
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  const getIcon = () => {
    switch (theme) {
      case 'light':
        return <Sun className="w-5 h-5 text-yellow-500" />;
      case 'dark':
        return <Moon className="w-5 h-5 text-blue-400" />;
      case 'system':
        return <Monitor className="w-5 h-5 text-gray-600 dark:text-gray-400" />;
      default:
        return null;
    }
  };

  const getTooltipText = () => {
    switch (theme) {
      case 'light':
        return 'Light mode (click to change)';
      case 'dark':
        return 'Dark mode (click to change)';
      case 'system':
        return 'System preference (click to change)';
      default:
        return 'Toggle theme';
    }
  };

  return (
    <button
      onClick={cycleTheme}
      className="relative p-2.5 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 group"
      aria-label="Toggle theme"
    >
      {getIcon()}

      {/* Tooltip */}
      <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        {getTooltipText()}
      </span>

      {/* Ripple effect */}
      <span className="absolute inset-0 rounded-lg bg-white/20 dark:bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </button>
  );
};

export default ThemeToggle;