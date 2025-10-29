import React from 'react';
import Link from 'next/link';
import { PackageCard } from '../ui';

// Sample featured tours data
const featuredTours = [
  {
    id: 1,
    title: 'European Grand Tour',
    destination: 'Europe',
    image:
      'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=2940&auto=format&fit=crop',
    duration: '14 Days / 13 Nights',
    groupSize: '10-15 People',
    price: '₹2,45,000',
    highlights: ['Paris', 'Rome', 'Switzerland', 'Amsterdam'],
  },
  {
    id: 2,
    title: 'Japan Cultural Experience',
    destination: 'Japan',
    image:
      'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?q=80&w=2940&auto=format&fit=crop',
    duration: '10 Days / 9 Nights',
    groupSize: '8-12 People',
    price: '₹1,85,000',
    highlights: ['Tokyo', 'Kyoto', 'Mount Fuji', 'Osaka'],
  },
  {
    id: 3,
    title: 'Australia & New Zealand Adventure',
    destination: 'Australia',
    image:
      'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=2830&auto=format&fit=crop',
    duration: '16 Days / 15 Nights',
    groupSize: '12-18 People',
    price: '₹3,25,000',
    highlights: ['Sydney', 'Melbourne', 'Auckland', 'Queenstown'],
  },
  {
    id: 4,
    title: 'Southeast Asia Explorer',
    destination: 'Southeast Asia',
    image:
      'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=2939&auto=format&fit=crop',
    duration: '12 Days / 11 Nights',
    groupSize: '10-15 People',
    price: '₹95,000',
    highlights: ['Thailand', 'Vietnam', 'Cambodia', 'Singapore'],
  },
  {
    id: 5,
    title: 'Swiss Alps & Lakes',
    destination: 'Switzerland',
    image:
      'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?q=80&w=2940&auto=format&fit=crop',
    duration: '8 Days / 7 Nights',
    groupSize: '8-12 People',
    price: '₹1,65,000',
    highlights: ['Zurich', 'Interlaken', 'Lucerne', 'Zermatt'],
  },
  {
    id: 6,
    title: 'Bali Paradise Retreat',
    destination: 'Indonesia',
    image:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2838&auto=format&fit=crop',
    duration: '7 Days / 6 Nights',
    groupSize: '6-10 People',
    price: '₹75,000',
    highlights: ['Ubud', 'Seminyak', 'Nusa Dua', 'Uluwatu'],
  },
];

const FeaturedTours = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-neutral-50">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-14">
          <h2 className="font-heading text-4xl font-bold text-neutral-900 md:text-5xl lg:text-6xl">
            Featured <span className="text-secondary-600">Tour Packages</span>
          </h2>
          <p className="mt-6 text-xl text-neutral-600">
            Handpicked experiences designed to create lasting memories
          </p>
        </div>

        {/* Tours Grid - Wider layout with 2 columns on medium, 3 on large, 4 on xl */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4">
          {featuredTours.map((tour) => (
            <PackageCard key={tour.id} {...tour} />
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/tours"
            className="inline-flex items-center rounded-xl bg-secondary-600 px-10 py-4 font-semibold text-white transition-all hover:bg-secondary-700 shadow-lg hover:shadow-xl"
          >
            View All Tours
            <svg
              className="ml-2 h-5 w-5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTours;
