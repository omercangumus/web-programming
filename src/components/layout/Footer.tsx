import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-8 border-t border-gray-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gray-400 text-sm">
          &copy; {currentYear} Ömer Can Gümüş. Tüm hakları saklıdır.
        </p>
        <p className="text-gray-500 text-xs mt-2">
          Web Tasarımı ve Programlama LAB-6 Görevi
        </p>
      </div>
    </footer>
  );
};

export default Footer;
