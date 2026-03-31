import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import ProjectList from './components/sections/ProjectList';
import ContactSection from './components/sections/ContactSection';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-200">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <ProjectList />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
