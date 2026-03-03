# CSS Tasarım Kararları

LAB-3 Modern CSS, Responsive Layout (Flex/Grid) ve Tasarım Sistemi — Bilinçli Tasarım Kararları

---

## Breakpoint Seçimi

**Mobil öncelik (0–639px)**, **Tablet (640px+)**, **Masaüstü (1024px+)** olmak üzere üç kırılım noktası seçildi.
640px sınırı, çoğu büyük telefon (iPhone Plus) ile küçük tablet arasındaki doğal geçişi yakalar.
1024px sınırı ise iPad yatay modu ile laptop ekranı arasındaki köprüdür; bu noktadan itibaren `max-width: 1200px` ile içerik sonsuz uzamaması sağlandı.

---

## Layout Tercihleri (Flex vs Grid)

**Navigasyon ve beceri etiketleri** için **Flexbox** tercih edildi; tek eksenli (yatay/dikey) sıralama ve `flex-wrap` yeterli.
**Proje kartları** için **CSS Grid** tercih edildi; `repeat(auto-fit, minmax(280px, 1fr))` sayesinde medya sorgusu yazmadan kart sayısına göre otomatik sütun oluşturuldu.
Kart iç yapısı ise yine Flexbox `flex-direction: column` + `flex-grow: 1` kullanılarak farklı uzunluktaki içeriklerin kart yüksekliğini eşit tutması sağlandı.

---

## Design Tokens

Tüm renkler, boşluklar, yarıçaplar, gölgeler ve yazı tipleri `src/styles/tokens.css` içinde CSS Custom Properties (değişkenler) olarak tanımlandı.
Bu yaklaşım sayesinde gelecekte tema değiştirme ya da tasarım güncellemeleri tek bir dosyadan yapılabilmekte; stillerin bakımı ve tutarlılığı kolaylaşmaktadır.

---

## Responsive Stratejiler

**Mobile-First** felsefesiyle tüm stiller mobil ekran için yazıldı, ardından sadece `min-width` sorgularıyla büyük ekranlara genişletildi.
**Fluid Typography** için `clamp(min, rem + vw, max)` formatı kullanıldı; `vw` asla tek başına kullanılmadı, her zaman `rem` ile karıştırıldı — bu, çok küçük ekranlarda yazının okunaksız küçülmesini önler.
`object-fit: cover` proje görselleri için zorunlu olarak uygulandı; farklı boyuttaki görüntülerin oranı bozulmuyor, 16/9 `aspect-ratio` ile çerçeve sabit kalıyor.
