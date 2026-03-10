import { useState, useEffect } from 'react';
import UIKit from './pages/UIKit';
import ThemeToggle from './components/ThemeToggle';
import Card from './components/Card';
import Input from './components/Input';
import Button from './components/Button';

function Portfolio() {
  return (
    <div className="min-h-screen bg-bg text-text transition-colors">
      <ThemeToggle />
      
      {/* Atlama Bağlantısı - Klavye kullanıcıları için */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[1000] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2">
        Ana içeriğe atla
      </a>

      {/* ===== HEADER ===== */}
      <header className="text-center px-4 pt-12 pb-8 sm:pt-16 sm:pb-12">
        <h1 className="text-3xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400 font-bold mb-6 animate-[fadeInDown_0.8s_ease-out]">
          Ömer Can Gümüş — Kişisel Portföy
        </h1>

        <nav aria-label="Ana navigasyon">
          <ul className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 list-none">
            <li>
              <a href="#hakkimda" className="text-text-faint px-4 py-2 text-sm font-medium rounded-md border border-transparent hover:bg-primary-muted hover:border-border-accent hover:text-text focus:bg-primary-muted focus:border-border-accent focus:text-text transition-all focus:outline-none focus:ring-2 focus:ring-primary">Hakkımda</a>
            </li>
            <li>
              <a href="#projeler" className="text-text-faint px-4 py-2 text-sm font-medium rounded-md border border-transparent hover:bg-primary-muted hover:border-border-accent hover:text-text focus:bg-primary-muted focus:border-border-accent focus:text-text transition-all focus:outline-none focus:ring-2 focus:ring-primary">Projelerim</a>
            </li>
            <li>
              <a href="#iletisim" className="text-text-faint px-4 py-2 text-sm font-medium rounded-md border border-transparent hover:bg-primary-muted hover:border-border-accent hover:text-text focus:bg-primary-muted focus:border-border-accent focus:text-text transition-all focus:outline-none focus:ring-2 focus:ring-primary">İletişim</a>
            </li>
            <li>
              {/* Link to UI Kit */}
              <a href="/UIKit" className="text-accent px-4 py-2 text-sm font-bold rounded-md border border-accent/30 hover:bg-accent/10 hover:border-accent transition-all focus:outline-none focus:ring-2 focus:ring-accent ml-0 sm:ml-4">UI Kit Sayfası</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* ===== MAIN ===== */}
      <main id="main-content" className="w-full max-w-6xl mx-auto px-4 sm:px-8 pb-16 space-y-12">

        {/* --- Hakkımda Bölümü --- */}
        <section id="hakkimda" aria-labelledby="hakkimda-heading" className="bg-surface/50 backdrop-blur-md border border-border rounded-2xl p-6 sm:p-10 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <h2 id="hakkimda-heading" className="text-2xl text-primary-light tracking-wide mb-6">Hakkımda</h2>

          <figure className="text-center my-6 sm:my-8">
            <img
              src="/profile.jpg"
              alt="Ömer Can Gümüş'ün profil fotoğrafı"
              width={160}
              height={160}
              className="w-40 h-40 rounded-full border-[3px] border-border-accent object-cover mx-auto"
            />
            <figcaption className="mt-3 text-xs text-primary-light italic">Ömer Can Gümüş — Yazılım Mühendisliği Öğrencisi</figcaption>
          </figure>

          <p className="text-base text-text-muted leading-relaxed mb-6">
            Fırat Üniversitesi Yazılım Mühendisliği bölümünde öğrenim görmekteyim.
            Web teknolojileri, bulut bilişim ve DevOps alanlarına ilgi duyuyorum.
          </p>

          <h3 className="text-lg text-text-faint mt-6 mb-3">Becerilerim</h3>
          <ul className="flex flex-wrap gap-2 mt-3 p-0 list-none">
            {['HTML5 & CSS3', 'JavaScript / TypeScript', 'React', 'Git & GitHub', 'Docker & DevOps', 'Node.js', 'PostgreSQL'].map(skill => (
               <li key={skill} className="text-xs text-text-muted px-3 py-1.5 bg-primary-muted border border-border-accent rounded-full hover:bg-primary/20 transition-colors">
                 {skill}
               </li>
            ))}
          </ul>
        </section>

        {/* --- Projelerim Bölümü --- */}
        <section id="projeler" aria-labelledby="projeler-heading" className="bg-surface/50 backdrop-blur-md border border-border rounded-2xl p-6 sm:p-10 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <h2 id="projeler-heading" className="text-2xl text-primary-light tracking-wide mb-8">Projelerim</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card 
              title="Web Lab Hello"
              image="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80"
              imageAlt="Web Lab Hello projesi — kod editörü"
              footer={
                <div className="flex flex-wrap gap-2 text-xs text-text-faint">
                  <span className="bg-primary-muted border border-border-accent rounded-md px-2 py-0.5">React</span>
                  <span className="bg-primary-muted border border-border-accent rounded-md px-2 py-0.5">TypeScript</span>
                  <span className="bg-primary-muted border border-border-accent rounded-md px-2 py-0.5">Vite</span>
                </div>
              }
            >
              <p className="text-sm">Vite + React + TypeScript ile oluşturulmuş kişisel tanıtım sayfası. LAB-1 kapsamında geliştirilmiş, semantik HTML5 ve erişilebilirlik standartlarına uygun olarak LAB-2'de genişletilmiştir.</p>
            </Card>

            <Card 
              title="Cloud Native Reliability Platform"
              image="https://images.unsplash.com/photo-1667986684700-4f92b564d06a?w=600&q=80"
              imageAlt="Cloud Native Reliability Platform"
              footer={
                <div className="flex flex-wrap gap-2 text-xs text-text-faint">
                  <span className="bg-primary-muted border border-border-accent rounded-md px-2 py-0.5">Docker</span>
                  <span className="bg-primary-muted border border-border-accent rounded-md px-2 py-0.5">Terraform</span>
                  <span className="bg-primary-muted border border-border-accent rounded-md px-2 py-0.5">AWS</span>
                </div>
              }
            >
              <p className="text-sm">Bulut tabanlı güvenilirlik platformu. Mikroservis mimarisi ve konteyner teknolojileri kullanılarak geliştirilmiş, SRE prensipleri doğrultusunda yapılandırılmıştır.</p>
            </Card>

            <Card 
              title="SiberMiras"
              image="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80"
              imageAlt="SiberMiras projesi"
              footer={
                <div className="flex flex-wrap gap-2 text-xs text-text-faint">
                  <span className="bg-primary-muted border border-border-accent rounded-md px-2 py-0.5">Node.js</span>
                  <span className="bg-primary-muted border border-border-accent rounded-md px-2 py-0.5">PostgreSQL</span>
                  <span className="bg-primary-muted border border-border-accent rounded-md px-2 py-0.5">Security</span>
                </div>
              }
            >
              <p className="text-sm">Siber güvenlik alanında farkındalık yaratmayı amaçlayan eğitim platformu. Kullanıcıların dijital miras ve güvenlik alışkanlıkları hakkında bilinçlenmesi için tasarlanmıştır.</p>
            </Card>
          </div>
        </section>

        {/* --- İletişim Bölümü --- */}
        <section id="iletisim" aria-labelledby="iletisim-heading" className="bg-surface/50 backdrop-blur-md border border-border rounded-2xl p-6 sm:p-10 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <h2 id="iletisim-heading" className="text-2xl text-primary-light tracking-wide mb-6">İletişim</h2>

          <form action="#" method="POST" noValidate>
            <fieldset className="border border-border-accent rounded-xl p-6 sm:p-8">
              <legend className="text-base font-semibold text-text-faint px-3">İletişim Formu</legend>

              <div className="space-y-5">
                <Input 
                  label="Ad Soyad"
                  id="name"
                  name="name"
                  required
                  placeholder="Adınızı giriniz"
                />

                <Input 
                  label="E-posta"
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="örnek@email.com"
                />

                <div className="flex flex-col gap-1 w-full">
                  <label htmlFor="subject" className="text-sm font-medium text-text-muted">Konu</label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-2 bg-surface border border-border rounded-md text-text transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary-light"
                  >
                    <option value="" className="bg-[#1e1b4b] text-text">Seçiniz...</option>
                    <option value="genel" className="bg-[#1e1b4b] text-text">Genel</option>
                    <option value="is-birligi" className="bg-[#1e1b4b] text-text">İş Birliği</option>
                    <option value="diger" className="bg-[#1e1b4b] text-text">Diğer</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1 w-full">
                  <label htmlFor="message" className="text-sm font-medium text-text-muted">Mesaj</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    minLength={10}
                    rows={5}
                    placeholder="Mesajınızı yazınız..."
                    className="w-full px-4 py-2 bg-surface border border-border rounded-md text-text transition-colors placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary-light resize-y"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <Button type="submit" variant="primary" size="lg">Gönder</Button>
                </div>
              </div>
            </fieldset>
          </form>
        </section>
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="text-center py-10 px-4">
        <p className="text-xs text-primary font-medium tracking-wide">&copy; 2026 Ömer Can Gümüş — Fırat Üniversitesi Yazılım Mühendisliği</p>
      </footer>
    </div>
  );
}

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    // Listen for manual navigation to update UI without reload if necessary
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };
    
    window.addEventListener('popstate', onLocationChange);
    return () => window.removeEventListener('popstate', onLocationChange);
  }, []);

  // Simple manual routing based on path
  if (currentPath === '/UIKit') {
    return <UIKit />;
  }

  // Fallback to Portfolio
  return <Portfolio />;
}

export default App;
