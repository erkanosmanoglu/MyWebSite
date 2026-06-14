# Erkan Osmanoğlu — Kişisel Web Sitesi

Modern, responsive ve dinamik kişisel portföy sitesi. Saf HTML/CSS/JS — build adımı yok, herhangi bir statik host'ta çalışır.

## Dosyalar
- `index.html` — sayfa yapısı ve içerik
- `styles.css` — tasarım (koyu tema, Fraunces + Bricolage Grotesque + JetBrains Mono, lime accent)
- `main.js` — yazı animasyonu, mobil menü, scroll animasyonları, iletişim formu

## Çalıştırma (lokal)
Sadece `index.html`'i tarayıcıda aç. Form testi için yerel sunucu önerilir:
```bash
python3 -m http.server 5500
# → http://localhost:5500
```

## Özelleştirilecek yerler (kendi bilgilerinle doldur)
| Bölüm | Nerede |
|------|--------|
| GitHub linki | `index.html` içindeki `https://github.com/` (2 yer) |
| LinkedIn linki | `index.html` içindeki `https://www.linkedin.com/` (2 yer) |
| Fotoğraf | `index.html` → `.portrait-frame` içine `<img src="me.jpg" alt="Erkan Osmanoğlu" />` |
| Hakkımda metni | `#about` bölümü |
| Yetenekler | `#skills` → `.chips` listeleri |
| İş deneyimi | `#experience` → `.timeline` kartları |
| Eğitim | `#education` → `.edu-card` kartları |
| E-posta | zaten `erkanosmanoglu1626@gmail.com` olarak ayarlı |

## İletişim formunu e-posta gönderecek şekilde bağlamak (Formspree — ücretsiz)
Statik sitede sunucu olmadığı için formu bir e-posta servisine bağlamak gerekir:
1. https://formspree.io adresinde ücretsiz hesap aç, yeni form oluştur.
2. Sana verilen endpoint'i (örn. `https://formspree.io/f/abcdwxyz`) iki yere yaz:
   - `index.html` → `<form ... action="...">`
   - `main.js` → en üstteki `const FORM_ENDPOINT = "...";`
3. Bitti — gelen mesajlar Gmail adresine düşer.

> Endpoint girilmezse form, ziyaretçinin e-posta uygulamasında hazır bir taslak açar (mailto yedeği), yani site yine de çalışır.

## Yayınlama (deploy)
En kolayı **GitHub Pages**:
```bash
git init && git add . && git commit -m "İlk sürüm"
# GitHub'da repo oluştur, sonra:
git remote add origin <repo-url>
git push -u origin main
# Repo → Settings → Pages → Branch: main / root → Save
```
Alternatif: **Netlify** veya **Vercel** — klasörü sürükle-bırak ile saniyeler içinde yayında.

## Tema ve dil
- **Light / Dark tema:** Sağ üstteki ☀️/🌙 düğmesi. Seçim `localStorage`'da saklanır; ilk ziyarette cihazın sistem temasına (`prefers-color-scheme`) göre açılır.
- **TR / EN dil:** Sağ üstteki `TR | EN` düğmesi. Tüm metinler `main.js` içindeki `T` çeviri sözlüğünden gelir; yeni metin eklerken HTML'de `data-i18n="anahtar"` (veya markup için `data-i18n-html`, placeholder için `data-i18n-ph`) kullan ve `T.tr` / `T.en`'e aynı anahtarı ekle.

## Tasarım notları
- Tamamen responsive (mobil hamburger menü dahil)
- `prefers-reduced-motion` desteği
- Erişilebilir form (validasyon + hata mesajları + canlı durum bildirimi)
- SEO/Open Graph meta etiketleri hazır
