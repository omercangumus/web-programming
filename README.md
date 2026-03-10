# Web Tasarımı ve Programlama — Kişisel Portföy

## Hakkında

Bu proje, **Web Tasarımı ve Programlama** dersi kapsamında LAB-1, LAB-2 ve LAB-3 ödevleri olarak hazırlanmıştır. Vite + React + TypeScript kullanılarak oluşturulmuş, semantik HTML5, erişilebilirlik (a11y) standartlarına uygun ve tam responsive bir kişisel portföy sayfasıdır.

## Geliştirici

- **Ad Soyad:** Ömer Can Gümüş
- **Öğrenci No:** 245541008
- **Bölüm:** Yazılım Mühendisliği
- **Üniversite:** Fırat Üniversitesi

## Kullanılan Teknolojiler

- [Vite](https://vitejs.dev/) - Hızlı geliştirme ortamı
- [React](https://react.dev/) - UI kütüphanesi
- [TypeScript](https://www.typescriptlang.org/) - Tip güvenli JavaScript
- Semantik HTML5
- Modern CSS — Flexbox, CSS Grid, Custom Properties

## Lab Geçmişi

| Lab | Branch | Konu |
|-----|--------|------|
| LAB-1 | `main` | Vite + React + TypeScript proje kurulumu |
| LAB-2 | `feature/semantic-html` | Semantik HTML5, erişilebilirlik (a11y), form temelleri |
| LAB-3 | `feature/responsive-layout` | Modern CSS, Responsive Layout (Flex/Grid), Tasarım Sistemi |
| LAB-4 | `feature/tailwind-ui-kit` | Tailwind CSS v4, Utility-First Component Mimarisi, Dark Mode |

## Özellikler

### LAB-4 — Tailwind CSS & UI Component Yaklaşımı
- **Tailwind v4:** Eski CSS dosyaları (`App.css`, `tokens.css`) tamamen kaldırılarak yerine Tailwind CSS v4 entegre edilmiştir.
- **Component Mimarisi:** Utility-class karmaşasını önlemek adına `Button`, `Input`, `Card`, `Alert` gibi React bileşenleri üretilmiştir.
- **Dark Mode:** `@custom-variant dark` ve `document.documentElement.classList.toggle('dark')` kullanılarak temalar arası manuel geçiş sistemi kurulmuştur (Ay / Güneş butonu).
- **UI Kit Sayfası:** Oluşturulan bileşenlerin 8'den fazla farklı varyantını sergileyen özel `/UIKit` sayfası hazırlanmıştır.
- **Kesintisiz Geçiş:** Önceki ödevlerde yazılan flex ve grid sistemleri Tailwind utility sınıflarına (`flex-col`, `grid-cols-2`, vb.) dönüştürülmüş ve responsive tasarım (sm, md, lg) başarıyla korunmuştur.

### LAB-2 — Semantik HTML & Erişilebilirlik
- **Semantik Yapı:** `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- **Erişilebilirlik:** Skip link, ARIA etiketleri, anlamlı alt metinleri, focus yönetimi
- **İletişim Formu:** HTML5 doğrulama, `fieldset`/`legend`, `label`/`for-id`, `aria-describedby`
- **Heading Hiyerarşisi:** Tek `<h1>`, bölümler `<h2>`, alt bölümler `<h3>`

### LAB-3 — Modern CSS & Responsive Layout
- **Design Tokens:** `src/styles/tokens.css` — renk, spacing, radius, gölge, font değişkenleri *(LAB-4 ile index.css @theme bloğuna taşındı)*
- **Fluid Typography:** `clamp(min, rem + vw, max)` ile medya sorgusu gerektirmeyen akıcı font boyutları
- **Flexbox Nav:** Mobile-First — `flex-direction: column` (mobil) → `row` (640px+), `gap` tabanlı boşluklar
- **CSS Grid:** `repeat(auto-fit, minmax(280px, 1fr))` ile medya sorgusu olmadan responsive kart düzeni
- **`object-fit: cover`:** Proje görselleri 16:9 oranında çerçevelenmiş
- **3 Breakpoint:** Mobil (0–639px) · Tablet (640px+) · Masaüstü (1024px+, `max-width: 1200px`)
- **CSS Kararları:** `CSS-KARARLARI.md` dosyasında tasarım kararları belgelenmiştir

## Lighthouse Puanı (LAB-2)

| Kategori | Puan | Tarih |
|----------|------|-------|
| ♿ Erişilebilirlik (Accessibility) | **100 / 100** ✅ | 24 Şubat 2026 |
| 🏆 En İyi Uygulamalar (Best Practices) | **100 / 100** ✅ | 24 Şubat 2026 |

> **Not:** Lighthouse 13.0.1 — Chromium 145.0.0.0 ile test edilmiştir.

## Ekran Görüntüleri (LAB-3 & LAB-4)

| Görünüm | Ekran |
|---------|---------|
| 📱 Mobil | 375px |
| 📟 Tablet | 768px |
| 🖥️ Masaüstü | 1280px |
| 🎨 UI Kit | Dark & Light Mode |

Görüntüler `screenshots/` klasöründe mevcuttur (Örn: `lab4-uikit-light.png`, `lab4-portfolio.png`).

## Kurulum

```bash
npm install
npm run dev
```

## Lisans

Bu proje eğitim amaçlı oluşturulmuştur.
