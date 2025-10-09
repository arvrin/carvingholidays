import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card } from '../ui';
import { ClockIcon, UsersIcon, MapPinIcon } from '@heroicons/react/24/outline';

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
    <section className="py-16 lg:py-24">
      <div className="container-custom">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold text-neutral-900 md:text-4xl">
            Featured <span className="text-primary-500">Tour Packages</span>
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            Handpicked experiences designed to create lasting memories
          </p>
        </div>

        {/* Tours Grid */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuredTours.map((tour) => (
            <Card key={tour.id} className="group">
              <Link href={`/tours/${tour.id}`}>
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 rounded-full bg-accent-400 px-3 py-1 text-sm font-semibold text-white shadow-md">
                    {tour.destination}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-heading text-xl font-semibold text-neutral-900 transition-colors group-hover:text-primary-500">
                    {tour.title}
                  </h3>

                  <div className="mt-4 space-y-2">
                    <div className="flex items-center text-sm text-neutral-600">
                      <ClockIcon className="mr-2 h-4 w-4" />
                      {tour.duration}
                    </div>
                    <div className="flex items-center text-sm text-neutral-600">
                      <UsersIcon className="mr-2 h-4 w-4" />
                      {tour.groupSize}
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {tour.highlights.slice(0, 3).map((highlight) => (
                      <span
                        key={highlight}
                        className="inline-flex items-center rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs font-medium text-neutral-700"
                      >
                        <MapPinIcon className="mr-1 h-3 w-3" />
                        {highlight}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-neutral-200 pt-4">
                    <div>
                      <p className="text-sm text-neutral-500">Starting from</p>
                      <p className="font-heading text-2xl font-bold text-primary-500">
                        {tour.price}
                      </p>
                    </div>
                    <span className="text-sm font-medium text-primary-500 group-hover:underline">
                      View Details →
                    </span>
                  </div>
                </div>
              </Link>
            </Card>
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/tours"
            className="inline-flex items-center rounded-lg border-2 border-primary-500 px-8 py-3 font-medium text-primary-500 transition-all hover:bg-primary-50"
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
