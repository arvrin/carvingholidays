// Image type
export interface Image {
  url: string;
  alt: string;
  width?: number;
  height?: number;
}

// SEO Metadata
export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: Image;
  canonical?: string;
}

// Destination
export interface Destination {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  heroImage: Image;
  gallery: Image[];
  continent: string;
  country: string;
  popularMonths: string[];
  averageBudget: {
    min: number;
    max: number;
    currency: string;
  };
  highlights: string[];
  travelTips?: string;
  visaInfo?: string;
  seo: SEOMetadata;
  featured?: boolean;
}

// Itinerary Day
export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  activities: string[];
  meals: string[];
  accommodation?: string;
}

// Tour Package
export interface TourPackage {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  destination: Destination | string; // Can be populated or just ID
  duration: {
    days: number;
    nights: number;
  };
  pricing: {
    basePrice: number;
    currency: string;
    priceNote?: string;
  };
  featuredImage: Image;
  gallery: Image[];
  itinerary: ItineraryDay[];
  inclusions: string[];
  exclusions: string[];
  highlights: string[];
  difficulty: 'Easy' | 'Moderate' | 'Challenging';
  groupSize: {
    min: number;
    max: number;
  };
  category: string[];
  featured: boolean;
  availableMonths: string[];
  reviews?: Review[];
  seo: SEOMetadata;
}

// Author
export interface Author {
  id: string;
  name: string;
  bio?: string;
  avatar?: Image;
  social?: {
    twitter?: string;
    linkedin?: string;
  };
}

// Blog Post
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string; // Rich text / HTML
  featuredImage: Image;
  author: Author;
  publishedAt: Date;
  updatedAt?: Date;
  categories: string[];
  tags: string[];
  relatedTours?: TourPackage[];
  seo: SEOMetadata;
}

// Review / Testimonial
export interface Review {
  id: string;
  name: string;
  location: string;
  avatar?: Image;
  rating: number;
  comment: string;
  tour?: TourPackage | string;
  travelDate: Date;
  verified: boolean;
  createdAt: Date;
}

// Quote Request
export interface QuoteRequest {
  id?: string;
  name: string;
  email: string;
  phone: string;
  destination: string;
  tourPackage?: string;
  startDate: Date;
  travelers: number;
  budget: string;
  specialRequests?: string;
  status?: 'new' | 'contacted' | 'quoted' | 'booked';
  createdAt?: Date;
}

// Contact Form
export interface ContactForm {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

// Newsletter Subscription
export interface NewsletterSubscription {
  email: string;
  preferences?: string[];
}
