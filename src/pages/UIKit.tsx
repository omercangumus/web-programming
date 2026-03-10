import ThemeToggle from '../components/ThemeToggle';
import Button from '../components/Button';
import Input from '../components/Input';
import Card from '../components/Card';
import Alert from '../components/Alert';

export default function UIKit() {
  return (
    <div className="min-h-screen bg-bg text-text p-8 sm:p-12 transition-colors">
      <ThemeToggle />

      <div className="max-w-5xl mx-auto space-y-16">
        <header className="border-b border-border pb-8">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">
            UI Kit (LAB-4 Tailwind Bileşenleri)
          </h1>
          <p className="mt-4 text-text-muted">Bu sayfada, LAB-4 kapsamında oluşturulan Tailwind CSS bileşenlerinin en az 8 farklı varyantı sergilenmektedir.</p>
          <div className="mt-6">
            <a href="/" className="text-primary hover:text-primary-light font-medium underline underline-offset-4">
              &larr; Portföye Dön
            </a>
          </div>
        </header>

        {/* --- Button Variants --- */}
        <section>
          <h2 className="text-2xl font-semibold text-primary-light mb-6 border-b border-border/50 pb-2">Bütonlar (Buttons)</h2>
          <div className="flex flex-wrap items-center gap-6">
            {/* V1: Primary Button */}
            <div className="flex flex-col gap-2">
              <span className="text-sm text-text-faint">1. Primary / md</span>
              <Button variant="primary" size="md">Kaydet</Button>
            </div>
            
            {/* V2: Secondary Button */}
            <div className="flex flex-col gap-2">
              <span className="text-sm text-text-faint">2. Secondary / sm</span>
              <Button variant="secondary" size="sm">İptal</Button>
            </div>
            
            {/* V3: Danger Button Disabled */}
            <div className="flex flex-col gap-2">
              <span className="text-sm text-text-faint">3. Danger / lg / disabled</span>
              <Button variant="danger" size="lg" disabled>Sil</Button>
            </div>

            {/* V4: Ghost Button */}
            <div className="flex flex-col gap-2">
              <span className="text-sm text-text-faint">4. Ghost / md</span>
              <Button variant="ghost" size="md">Detaylar</Button>
            </div>
          </div>
        </section>

        {/* --- Input Variants --- */}
        <section>
          <h2 className="text-2xl font-semibold text-primary-light mb-6 border-b border-border/50 pb-2">Girdivler (Inputs)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* V5: Normal Input */}
            <div>
              <span className="inline-block text-sm text-text-faint mb-2">5. Standart Input (Yardım Metinli)</span>
              <Input 
                label="Kullanıcı Adı" 
                placeholder="ornek_kullanici" 
                helpText="Sadece küçük harf ve alt çizgi kullanabilirsiniz."
              />
            </div>

            {/* V6: Error Input */}
            <div>
              <span className="inline-block text-sm text-text-faint mb-2">6. Hatalı Input</span>
              <Input 
                label="E-posta" 
                type="email" 
                defaultValue="yanlis.email@"
                error="Lütfen geçerli bir e-posta adresi giriniz."
              />
            </div>
          </div>
        </section>

        {/* --- Alert Variants --- */}
        <section>
          <h2 className="text-2xl font-semibold text-primary-light mb-6 border-b border-border/50 pb-2">Uyarılar (Alerts)</h2>
          <div className="space-y-4">
            {/* V7: Success Alert */}
            <div>
               <span className="inline-block text-sm text-text-faint mb-2">7. Success Alert (Kapatılabilir)</span>
               <Alert variant="success" dismissible>
                 <strong>Başarılı!</strong> Profiliniz başarıyla güncellendi.
               </Alert>
            </div>

            {/* V8: Warning Alert */}
            <div>
               <span className="inline-block text-sm text-text-faint mb-2">8. Warning Alert</span>
               <Alert variant="warning">
                 <strong>Uyarı:</strong> Bu işlem geri alınamaz. Lütfen emin olmadan devam etmeyin.
               </Alert>
            </div>
          </div>
        </section>

        {/* --- Card Variants --- */}
        <section>
          <h2 className="text-2xl font-semibold text-primary-light mb-6 border-b border-border/50 pb-2">Kartlar (Cards)</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* V9: Elevated Card */}
            <div className="flex flex-col gap-2">
              <span className="text-sm text-text-faint">9. Elevated Card</span>
              <Card 
                variant="elevated" 
                title="Siber Güvenlik Analizi"
                image="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80"
                imageAlt="Siber güvenlik temsili görsel"
                footer={<Button variant="ghost" className="w-full">Raporu Görüntüle</Button>}
              >
                <p>Sisteminizde yapılan son sızma testlerinin sonuçları ve kritik güvenlik zafiyetleri raporu incelenmek üzere hazırdır.</p>
              </Card>
            </div>

            {/* V10: Outlined Card */}
            <div className="flex flex-col gap-2">
               <span className="text-sm text-text-faint">10. Outlined Card</span>
               <Card 
                variant="outlined" 
                title="Yeni Bildiriminiz Var"
                footer={
                  <div className="flex gap-2">
                    <Button variant="primary" size="sm">Oku</Button>
                    <Button variant="secondary" size="sm">Arşivle</Button>
                  </div>
                }
              >
                <p>Ekip arkadaşınız "Proje X" üzerinde yaptığınız deşiklikleri onayladı ve prod ortamına deploy işlemi başladı.</p>
              </Card>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
