import './App.css'

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>Web Tasarimi ve Programlama</h1>
        <h2>LAB-1</h2>
      </header>

      <main className="card">
        <div className="info">
          <p><strong>Ad Soyad:</strong> Ömer Can Gümüş</p>
          <p><strong>Ogrenci No:</strong> 220290059</p>
        </div>

        <div className="about">
          <p>
            Merhaba! Ben Ömer Can Gümüş. Fırat Üniversitesi Yazılım Mühendisliği
            bölümünde öğrenim görmekteyim. Bu proje, Web Tasarımı ve Programlama
            dersi kapsamında LAB-1 ödevi olarak hazırlanmıştır.
          </p>
        </div>

        <div className="tech-stack">
          <h3>Kullanilan Teknolojiler</h3>
          <ul>
            <li>⚡ Vite</li>
            <li>⚛️ React</li>
            <li>📘 TypeScript</li>
          </ul>
        </div>
      </main>

      <footer className="footer">
        <p>&copy; 2026 Ömer Can Gümüş — Fırat Üniversitesi</p>
      </footer>
    </div>
  )
}

export default App
