import { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check initial state
    if (document.documentElement.classList.contains('dark')) {
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const isDarkModeNow = document.documentElement.classList.toggle('dark');
    setIsDark(isDarkModeNow);
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 p-2 rounded-full bg-surface border border-border hover:bg-surface-hover transition-colors shadow-sm dark:text-yellow-400 text-blue-900 focus:ring-2 focus:ring-primary focus:outline-none"
      aria-label="Karanlık / Aydınlık Tema Geçişi"
    >
      {isDark ? '☀️' : '🌙'}
    </button>
  );
}
