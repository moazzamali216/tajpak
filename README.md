# TajPak — Global Textile Sourcing Website

A professional multi-page website for **TajPak**, a Pakistan-based global textile sourcing and export company founded in 2001. Built with HTML, Tailwind CSS, and vanilla JavaScript.

---

## 🗂 Project Structure

```
tajpak/
│
├── public/
│   ├── images/          # All images, webp files, logos, certifications
│   └── output.css       # Compiled Tailwind CSS
│
├── src/
│   ├── custom.css       # Custom animations and utility classes
│   └── js/
│       ├── index.js     # General UI scripts (mobile menu, FAQ, preloader)
│       └── gsap.js      # GSAP scroll animations
│
├── index.html           # Home page
├── about.html           # About Us page
├── services.html        # Services page
├── hometextiles.html    # Home Textiles product page
├── hospital.html        # Hospital Textiles product page
├── healthcare.html      # Healthcare Textiles product page
├── terrytowels.html     # Terry Towels product page
├── apparels.html        # Apparels product page
├── sustainability.html  # Sustainability page
├── contact.html         # Contact page
└── terms.html           # Terms & Conditions page
```

---

## 🧰 Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Page structure and markup |
| Tailwind CSS | Utility-first styling framework |
| GSAP + ScrollTrigger | Scroll-based animations |
| Swiper.js | Hero slider and certification carousel |
| Flowbite | Dropdown components |
| Font Awesome 6 | Icons |
| Google Fonts | Playfair Display, Raleway, Montserrat, Poppins |

---

## 🎨 Design System

### Colors
| Name | Hex | Usage |
|---|---|---|
| Brand Blue | `#2e3092` | Buttons, accents, stats |
| Footer Dark | `#1f2430` | Footer background |
| Page Background | `#f7f6f4` | All section backgrounds |
| Heading | `#2d2a26` | All headings |
| Body Text | `#6e6a5e` | Paragraphs and descriptions |
| Accent (tcolor) | `#6366f1` approx | Heading accent spans |

### Typography
| Class | Font | Usage |
|---|---|---|
| `font-['Playfair_Display']` | Playfair Display | All h2/h3 section headings |
| `font-['Raleway']` | Raleway | Body copy, labels, footer |
| `.mons` | Montserrat | Buttons, nav, interactive elements |
| `.poppins` | Poppins | Card body text |

### Buttons
All buttons use `rounded-full` (pill shape) with Montserrat font:
- **Primary** — `bg-[#2e3092] text-white`
- **Outlined** — `border border-white/40` (on dark backgrounds)
- **White** — `bg-white text-[#2e3092]` (on brand color backgrounds)

---

## 📦 External CDN Dependencies

```html
<!-- Tailwind Output -->
<link rel="stylesheet" href="./public/output.css">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<!-- Swiper.js -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/11.0.0/swiper-bundle.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/11.0.0/swiper-bundle.min.js"></script>

<!-- GSAP + ScrollTrigger -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/ScrollTrigger.min.js"></script>

<!-- Flowbite -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"></script>
```

---

## 🔧 Key Components

### Navbar
- Desktop: Fixed, transparent over hero → scrolls to white with shadow
- Mobile: Fixed white navbar with hamburger → side drawer menu
- Products dropdown powered by Flowbite

### Hero Section
- **Desktop** (`sm:block hidden`) — Swiper.js fade slider with 6 images, dynamic text per slide, live slide counter
- **Mobile** (`sm:hidden block`) — Static single image with centered layout and compact stats

### Swiper Instances
| Instance | Class | Usage |
|---|---|---|
| Hero Slider | `.heroSwiper` | Full-screen background image fade slider |
| Certifications | `.mySwiper` | Auto-scrolling certification logos carousel |

### FAQ Accordion
Powered by vanilla JS — clicking `.faq-btn` toggles `max-height` on `.faq-content` with smooth CSS transition.

### Animations
| Class | Effect |
|---|---|
| `.animate-up` | Fade + slide up on scroll (GSAP ScrollTrigger) |
| `.animate-right` | Slide in from left |
| `.animate-z` | Scale zoom in |
| `.animate-up-pulse` | Pulse (used on preloader logo) |

---

## 🌍 Pages Overview

| Page | Description |
|---|---|
| `index.html` | Home — hero slider, our story, values, products grid, certifications, FAQ, CTA |
| `about.html` | Company history, team, vision, mission |
| `services.html` | Sourcing services breakdown |
| `hometextiles.html` | Bedsheets, fitted sheets, duvets, pillowcases, cushion covers, curtains, blankets, table linen, mattress products |
| `apparels.html` | T-shirts, polo shirts, hoodies, sweatpants, jackets, denim, workwear, gloves, motorbike suits |
| `hospital.html` | Hospital-grade textile products |
| `healthcare.html` | Healthcare textile products |
| `terrytowels.html` | Terry towel product range |
| `sustainability.html` | Certifications, eco practices, compliance |
| `contact.html` | Contact form and company details |

---

## 🏭 Company Info

| Detail | Info |
|---|---|
| Company | TajPak |
| Founded | 2001 (Lyallpur / Faisalabad, Pakistan) |
| Speciality | Global textile sourcing & export |
| Experience | 25+ years |
| Markets | 25+ countries worldwide |
| Orders | 500,000+ completed |
| Contact | info@tajpak.com |
| Phone | +92 301 6097666 |
| Address | Faisalabad, Pakistan |

---

## ✅ Certifications Supported

- OEKO-TEX® Standard 100
- BSCI
- GOTS
- Sedex
- RDS (Responsible Down Standard)
- ISO 9001:2015
- ANSI/ISEA 107
- NFPA 2112 / NFPA 70E
- EN ISO 11611 / 11612
- REACH Compliance

---

## 📝 Notes

- All images use `loading="lazy" decoding="async" fetchpriority="low"` for performance
- Image format is `.webp` throughout for optimized file sizes
- Product grids alternate between Block 1 (image left) and Block 2 (image right / text `order-2 md:order-1`) layouts
- Grid gap classes follow the pattern: `gap-4 sm:gap-6 xl:gap-10`
- Image containers use `h-[420px]` or `h-[450px]` with `object-cover`

---

*© 2026 TajPak. All rights reserved.*
