# EmailJS Kurulum Rehberi

## Adım 1: EmailJS Hesabı Oluşturun

1. [EmailJS](https://www.emailjs.com/) sitesine gidin
2. Ücretsiz hesap oluşturun (Sign Up)
3. Email adresinizi onaylayın

## Adım 2: Email Servisi Ekleyin

1. Dashboard'da **Email Services** sekmesine gidin
2. **Add New Service** butonuna tıklayın
3. Gmail'i seçin
4. Gmail hesabınızı (erenaras16@gmail.com) bağlayın
5. **Service ID**'yi not edin (örn: service_abc123)

## Adım 3: Email Template Oluşturun

1. Dashboard'da **Email Templates** sekmesine gidin
2. **Create New Template** butonuna tıklayın
3. Template içeriğini şu şekilde ayarlayın:

**Subject:**
```
New Contact from {{from_name}}
```

**Content:**
```
You have received a new message from your portfolio website.

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}
```

4. **Template ID**'yi not edin (örn: template_xyz456)

## Adım 4: Public Key Alın

1. Dashboard'da **Account** > **General** sekmesine gidin
2. **Public Key** alanını bulun ve kopyalayın (örn: YOUR_PUBLIC_KEY)

## Adım 5: Projeye Ekleyin

Proje dizininizde `.env` dosyası oluşturun:

```bash
cd /Users/erenaras/Desktop/erenaras.com/erenaras.com
nano .env
```

Aşağıdaki içeriği yapıştırın (kendi değerlerinizle):

```
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz456
VITE_EMAILJS_PUBLIC_KEY=YOUR_PUBLIC_KEY
```

Ctrl+O ile kaydedin, Ctrl+X ile çıkın.

## Adım 6: Development Server'ı Yeniden Başlatın

```bash
# Ctrl+C ile mevcut server'ı durdurun
# Sonra tekrar başlatın:
npm run dev
```

Artık contact formu çalışacak! 🎉

---

## Alternatif: EmailJS Kullanmadan

Eğer EmailJS kurmak istemiyorsanız, formu kaldırıp sadece mailto linki bırakabiliriz.
