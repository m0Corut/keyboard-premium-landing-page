[Previous README Content in English including MIT License]

---

# [TR] KeyCloud | Premium Mekanik Klavye Deneyimi

![Proje Durumu](https://img.shields.io/badge/Durum-Yay%C4%B1na%20Haz%C4%B1r-success)
![Teknoloji Yığını](https://img.shields.io/badge/Tech-Next.js%20%7C%20TypeScript%20%7C%20GSAP%20%7C%20Tailwind-blue)

Üst düzey bir mekanik klavye için tasarlanmış, Awwwards kalitesinde, hikaye odaklı ve sürükleyici bir açılış sayfası. Bu proje, sadece bir arayüz tasarımından öte, performans, pürüzsüz animasyonlar ve duyusal kullanıcı etkileşimine odaklanan ileri düzey frontend tekniklerini sergiler.

## 🚀 Öne Çıkan Teknik Özellikler

### 1. Gelişmiş Scroll Koreografisi (GSAP ScrollTrigger)
Standart bir kaydırma deneyimi yerine, hikayeyi anlatan **Scroll Odaklı Animasyonlar** kullanıldı.
- **Paralaks Efektleri:** Derinlik hissi yaratmak için çok katmanlı paralaks geçişleri.
- **Sabitleme ve Kaydırma:** `HorizontalGallery` bileşeni, dikey kaydırmayı yatay harekete dönüştürerek kullanıcıyı teknik şemalar arasında bir yolculuğa çıkarır.
- **Sinematik Ortaya Çıkışlar:** Metin ve öğeler, GSAP zaman çizelgeleri kullanılarak sinematik bir zamanlamayla belirir.

### 2. Ses Görselleştirme ve Sentezi (Web Audio API)
`SoundWaveSection` statik bir ses dosyası çalmaz. **Web Audio API** kullanarak gerçek zamanlı ses üretir.
- **Prosedürel Ses:** Özel bir osilatör motoru, **Scroll Hızına** (Velocity) bağlı olarak yoğunluğu değişen bir "Thock" sesi (mekanik anahtar sesi) üretir.
- **Reaktif Canvas:** HTML5 Canvas, kullanıcının kaydırma hızına fiziksel olarak tepki veren neon bir ses dalgası çizer.

### 3. Fizik Tabanlı Etkileşimler
Premium bir web tasarımı, "ağırlık" ve "hissiyat" gerektirir.
- **Manyetik Butonlar:** `MagneticFooter` CTA butonu, `Vector Physics` kullanarak manyetik bir alan yaratır ve imleci kendine çekerek tok ve premium bir his verir.

### 4. Üst Düzey Performans Optimizasyonu
Ağır animasyonlara rağmen site yüksek Lighthouse skorlarına sahiptir:
- **Code Splitting (Kod Bölme):** Ağır etkileşimli bileşenler (`SoundWaveSection`, `HorizontalGallery`) `next/dynamic` ile lazy load (tembel yükleme) edilir.
- **Observer Sistemleri:** Canvas animasyon döngüsü (`requestAnimationFrame`), bileşen ekrandan çıktığında `IntersectionObserver` tarafından otomatik olarak durdurulur; böylece CPU ve pil tasarrufu sağlanır.
- **GPU Hızlandırma:** Animasyonlar, render yükünü işlemciden GPU'ya aktarmak için `force3D: true` ve `will-change` ipuçlarını kullanır.
- **Native SVG İşleme:** Vektörler için Next.js'in görsel optimizasyonu devre dışı bırakılarak gereksiz sunucu iş yükü engellendi.

---

## 🛠 Teknoloji Yığını

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Dil:** TypeScript
- **Stil:** Tailwind CSS (Özel Tasarım Sistemi)
- **Animasyon:** GSAP (GreenSock Animation Platform) Premium
- **Grafik:** HTML5 Canvas API (2D Context)
- **Durum Yönetimi:** React Hooks (`useRef`, `useEffect`)

---

## 📂 Proje Yapısı ve Mimari

Modülerlik ve sorumlulukların ayrılığı prensiplerine göre tasarlandı.

```bash
├── app/
│   ├── page.tsx            # Ana Giriş. LCP optimizasyonu için Dinamik Import'ları uygular.
│   ├── layout.tsx          # Global Font konfigürasyonları (Space Grotesk & Inter).
│   └── globals.css         # CSS Değişkenleri & Tailwind Direktifleri.
│
├── components/
│   ├── DeepDiveFeatures.tsx # Klavye katmanlarını sergileyen kompleks paralaks bölümü.
│   ├── HorizontalGallery.tsx# Yatay kaydırma bölümü. "Sticky" pozisyonlama mantığını kullanır.
│   ├── SoundWaveSection.tsx # Canvas & Web Audio mantığını içerir.
│   ├── MagneticFooter.tsx   # Fizik tabanlı interaktif footer.
│   └── ui/                  # Yeniden kullanılabilir atomik bileşenler (Butonlar, Kartlar).
│
├── public/images/
│   └── gallery/            # Teknik gösterim için optimize edilmiş SVG şemaları.
```

---

## 💻 Kurulum

1. **Repoyu klonlayın**
   ```bash
   git clone https://github.com/kullaniciadi/keycloud-experience.git
   ```

2. **Bağımlılıkları yükleyin**
   ```bash
   npm install
   ```

3. **Geliştirme sunucusunu başlatın**
   ```bash
   npm run dev
   ```

4. **Production (Canlı) için derleyin**
   ```bash
   npm run build
   ```

---

## 🎨 Tasarım Felsefesi
Arayüz, **#F97316** (Neon Turuncu) vurguların öne çıkmasını sağlamak için **#050505** taban rengini kullanan "Dark Mode First" (Önce Karanlık Mod) estetiğini benimser. Tipografide, teknik başlıklar için **Space Grotesk** ve okunabilirlik için **Inter** kullanılmış, katı bir 8px ızgara sistemine bağlı kalınmıştır.

---

## 📄 License (Lisans)

Distributed under the MIT License. See `LICENSE` for more information.

---
# [EN] KeyCloud | Premium Mechanical Keyboard Experience

![Project Status](https://img.shields.io/badge/Status-Production%20Ready-success)
![Tech Stack](https://img.shields.io/badge/Tech-Next.js%20%7C%20TypeScript%20%7C%20GSAP%20%7C%20Tailwind-blue)

An award-winning caliber landing page designed to offer an immersive, story-driven experience for a high-end mechanical keyboard. This project demonstrates advanced frontend techniques, focusing on performance, smooth animations, and sensory user interaction.

## 🚀 Key Technical Features

### 1. Advanced Scroll Choreography (GSAP ScrollTrigger)
Instead of standard scrolling, this application uses **Scroll-Driven Animations** to tell a story.
- **Parallax Effects:** Deep dive sections use multi-layered parallax to create depth.
- **Pinning & Scrubbing:** The `HorizontalGallery` component transforms vertical scroll into horizontal movement, locking the viewport to guide the user through technical schematics.
- **Staggered Reveals:** Text and elements appear with cinematic timing using GSAP timelines.

### 2. Audio Visualization & Synthesis (Web Audio API)
The `SoundWaveSection` does not play a static audio file. It utilizes the **Web Audio API** to generate real-time audio.
- **Procedural Sound:** A custom oscillator engine creates a "Thock" sound (mechanical switch actuation) that varies in density based on **Scroll Velocity**.
- **Reactive Canvas:** An HTML5 Canvas renders a neon sound wave that physically reacts to how fast the user scrolls (Velocity-based Amplitude modulation).

### 3. Physics-Based Interactions
High-end web design requires "weight" and "feel".
- **Magnetic Buttons:** The `MagneticFooter` CTA button uses vector physics to attract the magnetic cursor, creating a tangible, premium feel using `MouseEvents` and `GSAP`.

### 4. Extreme Performance Optimization
Despite the heavy animations, the site achieves high Lighthouse scores through:
- **Code Splitting:** Heavy interactive components (`SoundWaveSection`, `HorizontalGallery`) are lazily loaded with `next/dynamic`.
- **Observer Systems:** The Canvas animation loop (`requestAnimationFrame`) automatically pauses when the component leaves the viewport using `IntersectionObserver`, saving CPU/Battery.
- **GPU Acceleration:** Animations utilize `force3D: true` and `will-change` hints to offload rendering to the GPU.
- **Native SVG Handling:** bypassed Next.js image optimization for vectors to prevent unnecessary server processing overhead.

---

## 🛠 Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (Custom Design System)
- **Animation:** GSAP (GreenSock Animation Platform) Premium
- **Graphics:** HTML5 Canvas API (2D Context)
- **State Management:** React Hooks (`useRef`, `useEffect`)

---

## 📂 Project Structure & Architecture

Designed with modularity and separation of concerns in mind.

```bash
├── app/
│   ├── page.tsx            # Main Entry. Implements Dynamic Imports for LCP optimization.
│   ├── layout.tsx          # Global Font configurations (Space Grotesk & Inter).
│   └── globals.css         # CSS Variables & Tailwind Directives.
│
├── components/
│   ├── DeepDiveFeatures.tsx # Complex parallax section showcasing keyboard layers.
│   ├── HorizontalGallery.tsx# Horizontal scroll section. Uses "Sticky" positioning logic.
│   ├── SoundWaveSection.tsx # Contains the Canvas & Web Audio logic.
│   ├── MagneticFooter.tsx   # Physics-based interactive footer.
│   └── ui/                  # Reusable atomic components (Buttons, Cards).
│
├── public/images/
│   └── gallery/            # Optimized SVG schematics for technical showcase.
```

---

## 💻 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/keycloud-experience.git
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Build for Production**
   ```bash
   npm run build
   ```

---

## 🎨 Design Philosophy
The UI follows a "Dark Mode First" aesthetic, utilizing `#050505` as the base to make the `#F97316` (Neon Orange) accents pop. Typography is handled by **Space Grotesk** for technical headings and **Inter** for readability, adhering to a strict 8px grid system.

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
