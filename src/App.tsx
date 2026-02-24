import './App.css'

function App() {
  return (
    <>
      {/* Skip Link - Klavye kullanicilari icin */}
      <a href="#main-content" className="skip-link">
        Ana icerige atla
      </a>

      {/* ===== HEADER ===== */}
      <header className="site-header">
        <h1>Ömer Can Gümüş — Kisisel Portföy</h1>

        <nav aria-label="Ana navigasyon">
          <ul className="nav-list">
            <li><a href="#hakkimda">Hakkimda</a></li>
            <li><a href="#projeler">Projelerim</a></li>
            <li><a href="#iletisim">Iletisim</a></li>
          </ul>
        </nav>
      </header>

      {/* ===== MAIN ===== */}
      <main id="main-content">

        {/* --- Hakkimda Section --- */}
        <section id="hakkimda" aria-labelledby="hakkimda-heading">
          <h2 id="hakkimda-heading">Hakkimda</h2>

          <figure className="profile-figure">
            <img
              src="https://avatars.githubusercontent.com/u/omercangumus"
              alt="Ömer Can Gümüş'ün profil fotografi"
              width={160}
              height={160}
            />
            <figcaption>Ömer Can Gümüş — Yazilim Muhendisligi Ogrencisi</figcaption>
          </figure>

          <p>
            Firat Universitesi Yazilim Muhendisligi bolumunde ogrenim gormekteyim.
            Web teknolojileri, bulut bilisim ve DevOps alanlarina ilgi duyuyorum.
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

        {/* --- Projelerim Section --- */}
        <section id="projeler" aria-labelledby="projeler-heading">
          <h2 id="projeler-heading">Projelerim</h2>

          <article className="project-card">
            <h3>Web Lab Hello</h3>
            <p>
              Vite + React + TypeScript ile olusturulmus kisisel tanitim sayfasi.
              LAB-1 kapsaminda gelistirilmistir.
            </p>
            <p><strong>Teknolojiler:</strong> React, TypeScript, Vite</p>
          </article>

          <article className="project-card">
            <h3>Cloud Native Reliability Platform</h3>
            <p>
              Bulut tabanli guvenilirlik platformu. Mikroservis mimarisi ve
              konteyner teknolojileri kullanilarak gelistirilmistir.
            </p>
            <p><strong>Teknolojiler:</strong> Docker, Terraform, AWS</p>
          </article>
        </section>

        {/* --- Iletisim Section --- */}
        <section id="iletisim" aria-labelledby="iletisim-heading">
          <h2 id="iletisim-heading">Iletisim</h2>

          <form action="#" method="POST" noValidate>
            <fieldset>
              <legend>Iletisim Formu</legend>

              <div className="form-group">
                <label htmlFor="name">Ad Soyad</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  minLength={2}
                  placeholder="Adinizi giriniz"
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
                  placeholder="ornek@email.com"
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
                  <option value="">Seciniz...</option>
                  <option value="genel">Genel</option>
                  <option value="is-birfigi">Is Birligi</option>
                  <option value="diger">Diger</option>
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
                  placeholder="Mesajinizi yaziniz..."
                  aria-describedby="message-error"
                ></textarea>
                <small id="message-error" className="error-msg" role="alert"></small>
              </div>

              <button type="submit">Gonder</button>
            </fieldset>
          </form>
        </section>
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="site-footer">
        <p>&copy; 2026 Ömer Can Gümüş — Firat Universitesi Yazilim Muhendisligi</p>
      </footer>
    </>
  )
}

export default App
