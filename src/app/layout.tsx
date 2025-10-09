import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import { Header, Footer } from '@/components/layout';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const poppins = Poppins({
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Carving Holidays | Discover Unique Destinations & Experiences',
  description:
    'Explore curated travel experiences to Europe, Australia, New Zealand, Japan and beyond. Tailor-made itineraries, local experts, and authentic adventures await.',
  keywords: [
    'travel agency',
    'holiday packages',
    'Europe tours',
    'Japan tours',
    'Australia travel',
    'group tours',
    'custom itineraries',
  ],
  authors: [{ name: 'Carving Holidays' }],
  openGraph: {
    title: 'Carving Holidays | Discover Unique Destinations & Experiences',
    description:
      'Explore curated travel experiences to Europe, Australia, New Zealand, Japan and beyond.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Carving Holidays',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="antialiased">
        <Header />
        <main className="min-h-screen pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
