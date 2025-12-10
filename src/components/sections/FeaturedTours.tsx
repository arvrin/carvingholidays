import React from 'react';
import Link from 'next/link';
import { PackageCard } from '../ui';
import { allPackages } from '@/data/tours';

// Select 6 featured tours from the data
const featuredTours = allPackages.slice(0, 6);

const FeaturedTours = () => {
  return (
    <section className="py-fluid-2xl bg-gradient-to-b from-white to-neutral-50">
      <div className="container-wide">
        {/* Section Header */}
        <div className="mx-auto max-w-[65ch] text-center mb-[var(--space-xl)]">
          <h2 className="font-heading text-fluid-3xl font-bold text-neutral-900">
            Featured <span className="text-secondary-600">Tour Packages</span>
          </h2>
          <p className="mt-[var(--space-md)] text-fluid-lg text-neutral-600">
            Handpicked experiences designed to create lasting memories
          </p>
        </div>

        {/* Tours Grid - Intrinsic auto-fit layout */}
        <div className="grid-auto-fit-lg">
          {featuredTours.map((tour) => (
            <PackageCard key={tour.id} {...tour} />
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-[var(--space-2xl)] text-center">
          <Link
            href="/tours"
            className="inline-flex items-center rounded-xl bg-secondary-600 px-[var(--space-lg)] py-[var(--space-md)] font-semibold text-white transition-all hover:bg-secondary-700 shadow-lg hover:shadow-xl text-fluid-base"
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
