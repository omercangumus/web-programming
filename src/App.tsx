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

        <nav aria-label="Ana navigasyon">
          <ul className="nav-list">
            <li><a href="#hakkimda">Hakkımda</a></li>
            <li><a href="#projeler">Projelerim</a></li>
            <li><a href="#iletisim">İletişim</a></li>
          </ul>
        </nav>
      </header>

      {/* ===== MAIN ===== */}
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
          <ul className="skills-list">
            <li>HTML5 &amp; CSS3</li>
            <li>JavaScript / TypeScript</li>
            <li>React</li>
            <li>Git &amp; GitHub</li>
            <li>Docker &amp; DevOps</li>
          </ul>
        </section>

        {/* --- Projelerim Bölümü --- */}
        <section id="projeler" aria-labelledby="projeler-heading">
          <h2 id="projeler-heading">Projelerim</h2>

          <article className="project-card">
            <h3>Web Lab Hello</h3>
            <p>
              Vite + React + TypeScript ile oluşturulmuş kişisel tanıtım sayfası.
              LAB-1 kapsamında geliştirilmiştir.
            </p>
            <p><strong>Teknolojiler:</strong> React, TypeScript, Vite</p>
          </article>

          <article className="project-card">
            <h3>Cloud Native Reliability Platform</h3>
            <p>
              Bulut tabanlı güvenilirlik platformu. Mikroservis mimarisi ve
              konteyner teknolojileri kullanılarak geliştirilmiştir.
            </p>
            <p><strong>Teknolojiler:</strong> Docker, Terraform, AWS</p>
          </article>
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
