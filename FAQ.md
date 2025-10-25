# Frequently Asked Questions (SSS - Sıkça Sorulan Sorular)

## Genel Sorular

### Bu sistem gerçekten ücretsiz mi?
Evet! Tüm kullanılan servisler ücretsiz:
- GitHub Pages: Ücretsiz web hosting
- Google Calendar API: Sınırsız ücretsiz kullanım
- EmailJS: Ayda 200 e-posta ücretsiz (daha fazlası için ücretli plan)

### Kaç berber ekleyebilirim?
Sistem varsayılan olarak 3 berber için yapılandırılmış, ancak `config.js` ve `index.html` dosyalarını düzenleyerek daha fazla berber ekleyebilirsiniz.

### Mobil uyumlu mu?
Evet! Site tamamen responsive tasarım ile oluşturulmuştur ve tüm mobil cihazlarda mükemmel çalışır.

## Kurulum Soruları

### Google Calendar API anahtarımı nasıl alabilirim?
1. https://console.cloud.google.com/ adresine gidin
2. Yeni proje oluşturun
3. Google Calendar API'yi etkinleştirin
4. Kimlik bilgileri oluşturun → API anahtarı
5. Anahtarınızı kopyalayın

### Takvimler neden herkese açık olmalı?
Müsait/meşgul bilgilerini görebilmek için takvimlerinizin "free/busy" bilgilerinin herkese açık olması gerekir. Randevu detayları gizli kalır, sadece saat dolu/boş bilgisi paylaşılır.

### EmailJS kurulumu zor mu?
Hayır! Sadece 3 adım:
1. EmailJS'e kaydol
2. E-posta servisini bağla (Gmail önerilir)
3. Şablon oluştur ve anahtarları kopyala

## Kullanım Soruları

### Müşteriler randevuyu iptal edebilir mi?
Şu anda sistem sadece randevu oluşturma özelliğine sahip. İptal için müşteriler sizi aramalı. İsterseniz Google Calendar'dan manuel olarak iptal edebilirsiniz.

### Randevu hatırlatmaları gönderilir mi?
E-posta onayı otomatik gönderilir. Hatırlatma için Google Calendar'ın kendi hatırlatma özelliğini kullanabilirsiniz.

### Ödeme alabilir miyim?
Bu basit sistem sadece randevu almak için tasarlanmıştır. Ödeme almak için Stripe, PayPal gibi ödeme entegrasyonları eklemeniz gerekir.

## Teknik Sorular

### Sunucuya ihtiyacım var mı?
Hayır! GitHub Pages ücretsiz hosting sağlar. Sadece dosyaları GitHub'a yüklemeniz yeterli.

### Veritabanı kullanıyor mu?
Hayır. Tüm veriler Google Calendar'da saklanır.

### İnternetsiz çalışır mı?
Hayır. Google Calendar API ve EmailJS internet bağlantısı gerektirir.

### Birden fazla dil desteği var mı?
Şu anda sadece Türkçe. Ancak HTML dosyasını düzenleyerek başka diller ekleyebilirsiniz.

### Özelleştirme yapabilir miyim?
Elbette! Tüm kaynak kodlar açık. İstediğiniz gibi değiştirebilirsiniz:
- Renkler: `styles.css`
- Çalışma saatleri: `config.js`
- Hizmetler: `index.html`

## Güvenlik Soruları

### API anahtarlarım güvende mi?
API anahtarları tarayıcıda görünür olacaktır. Google Calendar API anahtarını kısıtlayarak (sadece Calendar API için) güvenliği artırabilirsiniz. Kritik veriler için backend kullanmanız önerilir.

### HTTPS ile çalışır mı?
Evet! GitHub Pages otomatik olarak HTTPS sağlar.

### GDPR uyumlu mu?
Müşteri verilerini topladığınız için GDPR'a uygun gizlilik politikası eklemeniz önerilir.

## Sorun Giderme

### "API not loaded" hatası alıyorum
- API anahtarınızın doğru olduğundan emin olun
- Google Cloud Console'da Calendar API'nin aktif olduğunu kontrol edin
- Tarayıcı konsolunda (F12) detaylı hata mesajlarını inceleyin

### Müsait saatler görünmüyor
- Takvim ID'lerinin doğru olduğundan emin olun
- Takvimlerin "herkese açık" olduğunu kontrol edin
- Seçilen günün çalışma günü olduğundan emin olun

### E-posta gitmiyor
- EmailJS kimlik bilgilerini kontrol edin
- E-posta servisinin bağlı olduğundan emin olun
- Aylık 200 e-posta limitini aşmadığınızdan emin olun

### GitHub Pages'te site açılmıyor
- Repository'nin "public" olduğundan emin olun
- Settings → Pages'te doğru branch'in seçildiğini kontrol edin
- 5-10 dakika bekleyin, yayın biraz zaman alabilir

## Destek

### Daha fazla yardıma ihtiyacım var
1. `SETUP_GUIDE.md` dosyasını okuyun
2. `test.html` sayfasını açarak kurulumunuzu test edin
3. Tarayıcı konsolundaki (F12) hata mesajlarını kontrol edin
4. GitHub Issues'da soru sorun

### Katkıda bulunmak istiyorum
Pull request'ler memnuniyetle karşılanır! Lütfen kodunuzun mevcut stil ile uyumlu olduğundan emin olun.
