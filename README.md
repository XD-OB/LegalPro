# LegalPro - Legal Services Website

A modern, animated legal services website built with React, Next.js, TypeScript, and Tailwind CSS.

## Features

- ✨ Smooth animations with Framer Motion
- 🎨 Modern, professional design
- 📱 Fully responsive layout
- 🎯 Interactive components (testimonials carousel, smooth scrolling)
- 💬 WhatsApp integration for instant consultation
- 🎭 Dynamic header that changes on scroll
- 📧 Contact form with validation
- 🏆 Service cards with hover effects
- 👤 CEO/About section with stats
- ⭐ Client testimonials carousel

## Tech Stack

- **Framework**: Next.js 16
- **UI Library**: React 19
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript
- **Fonts**: Playfair Display & Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
   ```bash
   cd legal-services-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
legal-services-website/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main page
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── Hero.tsx             # Hero section
│   ├── Services.tsx         # Services section
│   ├── CEO.tsx              # CEO/About section
│   ├── Testimonials.tsx     # Testimonials carousel
│   ├── Contact.tsx          # Contact form
│   ├── Footer.tsx           # Footer
│   └── WhatsAppButton.tsx   # Floating WhatsApp button
├── public/                  # Static assets
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies
```

## Customization

### Colors

The color scheme can be customized in `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    dark: "#0f1e2e",    // Dark navy
    blue: "#1a2f42",    // Medium navy
    gold: "#c9a055",    // Gold accent
  },
}
```

### Multilingual Support

The website supports three languages: **English**, **French**, and **Arabic** (with RTL support).

**To edit translations**, modify the `locales/translations.json` file:

```json
{
  "en": {
    "header": {
      "services": "SERVICES",
      "testimonials": "TESTIMONIALS",
      "contactUs": "Contact Us"
    },
    "hero": {
      "badge": "PROFESSIONAL LEGAL SERVICES",
      "title": "Legal Expertise You Can",
      "titleHighlight": "Trust",
      ...
    }
  },
  "fr": { ... },
  "ar": { ... }
}
```

**Language Switcher:**
- Located in the header (globe icon with flag)
- Automatically saves language preference to localStorage
- Supports RTL layout for Arabic
- Updates all text throughout the website instantly

**Supported Languages:**
- 🇺🇸 English (en)
- 🇫🇷 French (fr)
- 🇲🇦 Arabic (ar) - with RTL support

### Content

Update translations in `locales/translations.json` for all text content.

For non-translated content:
- **WhatsApp Number**: Update in `components/Hero.tsx` (line 98)
- **Contact Info**: Update phone/email/address in `locales/translations.json`

### Google Maps Location

To change the map location in the Contact section, edit the `MAP_CONFIG` object in `components/Contact.tsx`:

```typescript
const MAP_CONFIG = {
  latitude: 33.5731,  // Your latitude coordinate
  longitude: -7.5898, // Your longitude coordinate
  zoom: 15,           // Map zoom level (1-20)
};
```

**How to get your coordinates:**
1. Open [Google Maps](https://www.google.com/maps)
2. Right-click on your desired location
3. Click on the coordinates to copy them
4. Update the `latitude` and `longitude` values in the config

**Current location:** Casablanca, Morocco (33.5731, -7.5898)

### Images

Replace placeholder images:
1. Add your CEO/team images to the `public/` folder
2. Update the image path in `components/CEO.tsx`

## Build for Production

```bash
npm run build
npm start
```

## Deployment

This Next.js application can be deployed to:
- Vercel (recommended)
- Netlify
- AWS Amplify
- Any Node.js hosting platform

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click

## Features Breakdown

### Animations
- Scroll-triggered animations using Framer Motion
- Smooth page transitions
- Hover effects on interactive elements
- Animated testimonials carousel
- Floating WhatsApp button with pulse effect

### Responsive Design
- Mobile-first approach
- Breakpoints for tablet and desktop
- Touch-friendly interface
- Optimized for all screen sizes

### Performance
- Server-side rendering with Next.js
- Optimized images and assets
- Minimal bundle size
- Fast page loads

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

---

Built with ❤️ using Next.js and React
