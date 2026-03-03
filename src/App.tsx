import './App.css'

function App() {
  return (
    <>
      {/* Atlama Bağlantısı - Klavye kullanıcıları için */}
      <a href="#main-content" className="skip-link">
        Ana içeriğe atla
      </a>

      {/* ===== HEADER ===== */}
      <header className="site-header">
        <h1>Ömer Can Gümüş — Kişisel Portföy</h1>

        {/* NAV — Mobile-First: column → row (640px+) */}
        <nav aria-label="Ana navigasyon">
          <ul className="nav-list">
            <li><a href="#hakkimda">Hakkımda</a></li>
            <li><a href="#projeler">Projelerim</a></li>
            <li><a href="#iletisim">İletişim</a></li>
          </ul>
        </nav>
      </header>

      {/* ===== MAIN ===== */}
      {/* Masaüstü (1024px+): max-width: 1200px; margin: 0 auto — App.css'de tanımlı */}
      <main id="main-content">

        {/* --- Hakkımda Bölümü --- */}
        <section id="hakkimda" aria-labelledby="hakkimda-heading">
          <h2 id="hakkimda-heading">Hakkımda</h2>

          <figure className="profile-figure">
            <img
              src="/profile.jpg"
              alt="Ömer Can Gümüş'ün profil fotoğrafı"
              width={160}
              height={160}
            />
            <figcaption>Ömer Can Gümüş — Yazılım Mühendisliği Öğrencisi</figcaption>
          </figure>

          <p>
            Fırat Üniversitesi Yazılım Mühendisliği bölümünde öğrenim görmekteyim.
            Web teknolojileri, bulut bilişim ve DevOps alanlarına ilgi duyuyorum.
          </p>

          <h3>Becerilerim</h3>
          {/* Flexbox + flex-wrap: beceri etiketleri yatayda hizalanır, sığmayınca alta geçer */}
          <ul className="skills-list">
            <li>HTML5 &amp; CSS3</li>
            <li>JavaScript / TypeScript</li>
            <li>React</li>
            <li>Git &amp; GitHub</li>
            <li>Docker &amp; DevOps</li>
            <li>Node.js</li>
            <li>PostgreSQL</li>
          </ul>
        </section>

        {/* --- Projelerim Bölümü --- */}
        <section id="projeler" aria-labelledby="projeler-heading">
          <h2 id="projeler-heading">Projelerim</h2>

          {/*
            CSS Grid: repeat(auto-fit, minmax(280px, 1fr))
            Medya sorgusu olmadan responsive! Içerik genişliğine göre
            otomatik olarak 1, 2 veya 3 sütuna geçer.
          */}
          <div className="project-grid">

            <article className="project-card">
              <img
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80"
                alt="Web Lab Hello projesi — kod editörü ekran görüntüsü"
              />
              <div className="project-card-body">
                <h3>Web Lab Hello</h3>
                <p>
                  Vite + React + TypeScript ile oluşturulmuş kişisel tanıtım sayfası.
                  LAB-1 kapsamında geliştirilmiş, semantik HTML5 ve erişilebilirlik
                  standartlarına uygun olarak LAB-2'de genişletilmiştir.
                </p>
                <div className="project-tech">
                  <span>React</span>
                  <span>TypeScript</span>
                  <span>Vite</span>
                </div>
              </div>
            </article>

            <article className="project-card">
              <img
                src="https://images.unsplash.com/photo-1667986684700-4f92b564d06a?w=600&q=80"
                alt="Cloud Native Reliability Platform — bulut altyapı diyagramı"
              />
              <div className="project-card-body">
                <h3>Cloud Native Reliability Platform</h3>
                <p>
                  Bulut tabanlı güvenilirlik platformu. Mikroservis mimarisi ve
                  konteyner teknolojileri kullanılarak geliştirilmiş, SRE prensipleri
                  doğrultusunda yapılandırılmıştır.
                </p>
                <div className="project-tech">
                  <span>Docker</span>
                  <span>Terraform</span>
                  <span>AWS</span>
                </div>
              </div>
            </article>

            <article className="project-card">
              <img
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80"
                alt="SiberMiras projesi — siber güvenlik teması"
              />
              <div className="project-card-body">
                <h3>SiberMiras</h3>
                <p>
                  Siber güvenlik alanında farkındalık yaratmayı amaçlayan eğitim platformu.
                  Kullanıcıların dijital miras ve güvenlik alışkanlıkları hakkında
                  bilinçlenmesi için tasarlanmıştır.
                </p>
                <div className="project-tech">
                  <span>Node.js</span>
                  <span>PostgreSQL</span>
                  <span>Security</span>
                </div>
              </div>
            </article>

          </div>
        </section>

        {/* --- İletişim Bölümü --- */}
        <section id="iletisim" aria-labelledby="iletisim-heading">
          <h2 id="iletisim-heading">İletişim</h2>

          <form action="#" method="POST" noValidate>
            <fieldset>
              <legend>İletişim Formu</legend>

              <div className="form-group">
                <label htmlFor="name">Ad Soyad</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  minLength={2}
                  placeholder="Adınızı giriniz"
                  aria-describedby="name-error"
                />
                <small id="name-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="email">E-posta</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="örnek@email.com"
                  aria-describedby="email-error"
                />
                <small id="email-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Konu</label>
                <select
                  id="subject"
                  name="subject"
                  required
                  aria-describedby="subject-error"
                >
                  <option value="">Seçiniz...</option>
                  <option value="genel">Genel</option>
                  <option value="is-birligi">İş Birliği</option>
                  <option value="diger">Diğer</option>
                </select>
                <small id="subject-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mesaj</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  minLength={10}
                  rows={5}
                  placeholder="Mesajınızı yazınız..."
                  aria-describedby="message-error"
                ></textarea>
                <small id="message-error" className="error-msg" role="alert"></small>
              </div>

              <button type="submit">Gönder</button>
            </fieldset>
          </form>
        </section>
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="site-footer">
        <p>&copy; 2026 Ömer Can Gümüş — Fırat Üniversitesi Yazılım Mühendisliği</p>
      </footer>
    </>
  )
}

export default App
