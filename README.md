# Berberian Berber - Randevu Sistemi

Türkiye'deki berber dükkanları için **tamamen ücretsiz** randevu alma sistemi. 3 farklı berber için Google Calendar entegrasyonu ve otomatik e-posta bildirimleri içerir.

## 🌟 Özellikler

- 📅 Google Calendar ile randevu yönetimi
- 💌 Otomatik e-posta bildirimleri (müşteri ve berber)
- 📱 Mobil uyumlu tasarım
- 🔗 QR kod ile kolay erişim
- 🆓 Tamamen ücretsiz (hosting, API, e-posta)
- 🇹🇷 Türkçe arayüz
- 👥 3 berber için ayrı takvimler

## 🚀 Kurulum

### 1. Google Calendar API Kurulumu

1. [Google Cloud Console](https://console.cloud.google.com/) adresine gidin
2. Yeni bir proje oluşturun veya mevcut birini seçin
3. "APIs & Services" > "Enable APIs and Services" 'e tıklayın
4. "Google Calendar API" 'yi arayın ve etkinleştirin
5. "Credentials" > "Create Credentials" > "API Key" seçin
6. API anahtarını kopyalayın

### 2. Google Calendars Oluşturma

Her berber için ayrı bir Google Calendar oluşturun:

1. [Google Calendar](https://calendar.google.com/) 'a gidin
2. Sol tarafta "Other calendars" yanındaki "+" işaretine tıklayın
3. "Create new calendar" seçin
4. Her berber için (örn: "Berberian - Ahmet Usta") ayrı takvim oluşturun
5. Her takvimin ayarlarına gidin:
   - "Integrate calendar" bölümünden Calendar ID'yi kopyalayın
   - "Share with specific people" kısmından takvimi herkese açık yapın (Make available to public) - sadece serbest/meşgul bilgisi için

### 3. EmailJS Kurulumu

Ücretsiz e-posta gönderimi için:

1. [EmailJS](https://www.emailjs.com/) 'e kaydolun (ücretsiz)
2. Email Service ekleyin (Gmail, Outlook, vb.)
3. Email Template oluşturun:

**Template Örneği:**
```
Konu: Randevu Onayı - {{barber_name}}

Sayın {{customer_name}},

Randevunuz başarıyla oluşturuldu!

📅 Tarih: {{date}}
🕐 Saat: {{time}}
💈 Berber: {{barber_name}}
✂️ Hizmet: {{service}}

Randevunuz için teşekkür ederiz!

İletişim: {{phone}}

Berberian Berber
```

4. Service ID, Template ID ve Public Key'i kopyalayın

### 4. Config Dosyasını Düzenleme

`config.js` dosyasını açın ve aşağıdaki değerleri güncelleyin:

```javascript
GOOGLE_API_KEY: 'your-google-api-key-here',

CALENDARS: {
    barber1: {
        id: 'calendar-id-1@group.calendar.google.com',
        name: 'Ahmet Usta',
        email: 'barber1@yourdomain.com'
    },
    barber2: {
        id: 'calendar-id-2@group.calendar.google.com',
        name: 'Mehmet Usta',
        email: 'barber2@yourdomain.com'
    },
    barber3: {
        id: 'calendar-id-3@group.calendar.google.com',
        name: 'Ali Usta',
        email: 'barber3@yourdomain.com'
    }
},

EMAILJS: {
    SERVICE_ID: 'your-service-id',
    TEMPLATE_ID: 'your-template-id',
    PUBLIC_KEY: 'your-public-key'
}
```

### 5. GitHub Pages ile Ücretsiz Hosting

1. Bu repository'yi kendi GitHub hesabınıza fork edin veya yükleyin
2. Repository Settings > Pages 'e gidin
3. Source olarak "main" branch'i seçin
4. Save'e tıklayın
5. Siteniz `https://your-username.github.io/berberian/` adresinde yayına girecek

## 📱 QR Kod Oluşturma

Siteniz yayına girdikten sonra:

1. [QR Code Generator](https://www.qr-code-generator.com/) gibi ücretsiz bir servise gidin
2. Sitenizin URL'ini girin
3. QR kodu indirin ve dükkanda görünür bir yere asın

## 🎨 Özelleştirme

### Çalışma Saatlerini Değiştirme

`config.js` dosyasında:

```javascript
BUSINESS_HOURS: {
    start: '09:00',      // Açılış saati
    end: '19:00',        // Kapanış saati
    slotDuration: 30,    // Randevu süresi (dakika)
    breakTime: {
        start: '13:00',  // Öğle arası başlangıç
        end: '14:00'     // Öğle arası bitiş
    }
}
```

### Çalışma Günlerini Değiştirme

```javascript
WORKING_DAYS: [1, 2, 3, 4, 5, 6], // 0=Pazar, 1=Pazartesi, ..., 6=Cumartesi
```

### Hizmetleri Değiştirme

`index.html` dosyasında service dropdown'ını düzenleyin:

```html
<select id="service" name="service" required>
    <option value="haircut">Saç Kesimi (30 dk)</option>
    <option value="beard">Sakal Tıraşı (20 dk)</option>
    <!-- Yeni hizmetler ekleyebilirsiniz -->
</select>
```

## 🔧 Kullanım

1. Müşteri QR kodu tarar veya linke tıklar
2. Berber, tarih ve saat seçer
3. İletişim bilgilerini girer
4. "Randevu Al" butonuna tıklar
5. Otomatik olarak:
   - Google Calendar'a randevu eklenir
   - Müşteriye onay e-postası gönderilir
   - Berbere bildirim gönderilir

## 💡 İpuçları

- Takvimlerinizi düzenli kontrol edin
- Müşterilere hatırlatma mesajı gönderin (manuel)
- QR kodu dükkanda görünür bir yere koyun
- Google Maps işletme sayfanıza website linki ekleyin

## 🆓 Maliyet

Tüm servisler ücretsiz:
- ✅ GitHub Pages Hosting (ücretsiz)
- ✅ Google Calendar API (ücretsiz)
- ✅ EmailJS (ayda 200 e-posta ücretsiz)
- ✅ QR kod oluşturma (ücretsiz)

## 📞 Destek

Sorun yaşarsanız:
1. `config.js` dosyasının doğru yapılandırıldığından emin olun
2. Tarayıcı konsolunda hata mesajlarını kontrol edin (F12)
3. Google Calendar API'nin etkin olduğunu doğrulayın
4. EmailJS servisinin çalıştığını test edin

## 📄 Lisans

Bu proje MIT lisansı altında sunulmaktadır.