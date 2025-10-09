# Carving Holidays - Travel Agency Website

A modern, responsive travel agency website built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14, TypeScript, Tailwind CSS, Framer Motion
- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Performance Optimized**: Fast loading with Next.js Image optimization and SSR
- **SEO Ready**: Metadata, Open Graph tags, and structured data
- **Custom Design System**: Tailwind config with brand colors and components
- **Smooth Animations**: Framer Motion for engaging user interactions

## 📦 What's Been Built

### Core Infrastructure
- ✅ Next.js 14 project with TypeScript
- ✅ Tailwind CSS with custom design system
- ✅ ESLint & Prettier configuration
- ✅ Component library structure
- ✅ TypeScript interfaces and types

### Components

#### Layout Components
- **Header**: Responsive navigation with mobile menu, logo, and CTA buttons
- **Footer**: Multi-column footer with links, contact info, and social media

#### UI Components
- **Button**: Multiple variants (primary, secondary, outline, ghost) with loading states
- **Card**: Reusable card component with hover effects
- **Input**: Form input with label, error, and helper text
- **Textarea**: Multi-line input component

#### Homepage Sections
- **Hero**: Full-screen hero with gradient overlay, animated content, and quick stats
- **Why Choose Us**: 4 feature cards highlighting value propositions
- **Featured Tours**: Grid of 6 tour packages with images, pricing, and highlights
- **Testimonials**: Customer reviews with ratings and traveler photos
- **CTA Section**: Call-to-action with WhatsApp integration and contact options

## 🎨 Design System

### Colors
- **Primary**: Blue (#0066CC) - Trust, reliability
- **Secondary**: Orange (#FF6B35) - Energy, adventure
- **Accent**: Yellow (#F7B733) - Warmth, sunshine
- **Neutral**: Grayscale for text and backgrounds

### Typography
- **Headings**: Poppins font family
- **Body**: Inter font family
- **Scale**: Responsive font sizes from 14px to 72px

### Components
- Custom button styles (.btn, .btn-primary, .btn-secondary)
- Card component with soft shadows
- Input fields with focus states
- Container utilities for consistent spacing

## 🛠️ Tech Stack

### Core
- **Framework**: Next.js 14.x
- **Language**: TypeScript 5.x
- **Styling**: Tailwind CSS 4.x

### UI/UX
- **Animation**: Framer Motion
- **Icons**: Heroicons
- **Fonts**: Google Fonts (Inter, Poppins)

### Development
- **Linting**: ESLint
- **Formatting**: Prettier with Tailwind plugin
- **Package Manager**: npm

## 🏃 Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Development Server
The app will be available at `http://localhost:3000` (or 3001 if 3000 is in use)

**Current Status**: ✅ Server running at http://localhost:3001

## 📁 Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with Header/Footer
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/
│   ├── layout/            # Header, Footer
│   ├── ui/                # Button, Card, Input, Textarea
│   ├── sections/          # Hero, FeaturedTours, etc.
│   └── forms/             # Form components (future)
├── lib/
│   └── utils/             # Utility functions (cn)
└── types/                 # TypeScript interfaces
```

## 🎯 Next Steps

### Phase 1: Essential Pages (Week 1-2)
- [ ] Create `/destinations` page with destination grid
- [ ] Create individual destination pages
- [ ] Create `/tours` page with filtering
- [ ] Create individual tour detail pages
- [ ] Create `/about` page
- [ ] Create `/contact` page with form
- [ ] Create `/blog` listing page
- [ ] Create blog post template

### Phase 2: Forms & Functionality (Week 3-4)
- [ ] Quote request form with validation
- [ ] Contact form with email integration
- [ ] Newsletter signup
- [ ] Search functionality
- [ ] Filter and sort tours
- [ ] PDF itinerary download

### Phase 3: CMS Integration (Week 5-6)
- [ ] Setup Sanity.io or Contentful
- [ ] Create content schemas
- [ ] Migrate tour data to CMS
- [ ] Create blog management
- [ ] Enable content preview

### Phase 4: Advanced Features (Week 7-8)
- [ ] Add image lightbox/gallery
- [ ] Implement tour comparison
- [ ] Add favorites/wishlist
- [ ] Create user accounts
- [ ] Add reviews and ratings
- [ ] Integrate Google Maps
- [ ] Add weather widget

### Phase 5: Optimization & Launch (Week 9-10)
- [ ] Performance optimization
- [ ] SEO audit and improvements
- [ ] Accessibility testing (WCAG AA)
- [ ] Cross-browser testing
- [ ] Mobile device testing
- [ ] Setup analytics (GA4, Hotjar)
- [ ] Deploy to production
- [ ] Setup monitoring

## 🎨 Sample Data

The homepage currently uses sample data for tours and testimonials. You'll need to:

1. **Replace placeholder images** with actual tour photos
2. **Update tour information** with real packages
3. **Add actual customer testimonials** from TravelTriangle
4. **Update contact information** (phone, email, address)
5. **Connect social media links** to actual profiles

## 📱 Social Media Links

Current placeholder links need to be updated:
- Facebook: https://facebook.com/carvingholidaysindia
- Instagram: https://instagram.com/carving_holidays
- Twitter: (add actual link)
- WhatsApp: +91 123 456 7890 (update with real number)

## 🔗 External Integrations Needed

- [ ] Email service (SendGrid, Mailgun, or Resend)
- [ ] CMS (Sanity.io recommended)
- [ ] Analytics (Google Analytics 4)
- [ ] Heatmap tool (Hotjar or Microsoft Clarity)
- [ ] Chat widget (Tawk.to or Crisp)
- [ ] Image CDN (Cloudinary)
- [ ] Form backend (Formspree or custom API)

## 🚀 Deployment

### Recommended: Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Alternative: Netlify, AWS, DigitalOcean
Follow platform-specific deployment guides for Next.js applications.

## 📊 Performance Targets

- **Lighthouse Score**: 90+ (Performance, Accessibility, SEO)
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Time to Interactive**: < 3.5s
- **Cumulative Layout Shift**: < 0.1

## 🔒 Security Checklist

- [ ] Enable HTTPS (SSL certificate)
- [ ] Implement rate limiting on forms
- [ ] Add CAPTCHA to prevent spam
- [ ] Sanitize user inputs
- [ ] Implement CSP headers
- [ ] Regular dependency updates
- [ ] Environment variables for secrets

## 📄 License

Private project for Carving Holidays.

---

**Built with ❤️ for Carving Holidays**

**Status**: Phase 1 MVP Homepage Complete ✅
**Next**: Build remaining pages and forms
