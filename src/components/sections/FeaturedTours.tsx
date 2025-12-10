import React from 'react';
import Link from 'next/link';
import { PackageCard } from '../ui';
import { allPackages } from '@/data/tours';

// Select 6 featured tours from the data
const featuredTours = allPackages.slice(0, 6);

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
