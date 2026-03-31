import React from 'react';
import ContactForm from '../forms/ContactForm';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white border-t border-gray-100 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-gray-50 to-white -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">İletişime Geçin</h2>
          <p className="text-lg text-gray-600 mx-auto max-w-2xl">
            Yeni bir proje fikriniz mi var veya AIOps / DevOps alanında birlikte mi çalışmak istiyorsunuz? Bana mesaj gönderin.
          </p>
        </div>

        <div className="flex justify-center">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
