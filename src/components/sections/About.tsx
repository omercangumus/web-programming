import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Hakkımda</h2>
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-lg text-gray-600 leading-relaxed text-left sm:text-center">
          <p className="mb-4">
            Merhaba! Ben Fırat Üniversitesi <strong>Yazılım Mühendisliği</strong> bölümünde eğitimime devam eden tutkulu bir geliştiriciyim. 
          </p>
          <p>
            Şu anda <strong>Beko'da</strong> yarı zamanlı <em>AIOps Mühendisi</em> olarak çalışıyor, yapay zeka operasyonları, 
            bulut bilişim ve DevOps süreçlerinin entegrasyonu üzerine yeni nesil çözümler üretiyorum.
            Kariyerimi modern altyapı mimarileri, veri bilimi ve süreklilik odaklı yazılım yaşam döngüleri (CI/CD) üzerine inşa ediyorum.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
