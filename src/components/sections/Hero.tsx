import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-gradient-to-r from-blue-700 via-purple-700 to-indigo-800 text-white py-32 sm:py-40">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] opacity-20 mix-blend-overlay bg-cover bg-center"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6">
          Merhaba, ben <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300">Ömer Can Gümüş</span>
        </h1>
        <p className="text-xl sm:text-2xl font-medium text-blue-100 max-w-3xl mx-auto">
          Yazılım Mühendisliği Öğrencisi & AIOps / DevOps Developer
        </p>
      </div>
    </section>
  );
};

export default Hero;
