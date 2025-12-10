import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ClockIcon, UsersIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { Card } from './';

interface PackageCardProps {
  id: number;
  title: string;
  destination: string;
  image: string;
  duration: string;
  groupSize: string;
  price: string;
  highlights: string[];
}

const PackageCard: React.FC<PackageCardProps> = ({
  id,
  title,
  destination,
  image,
  duration,
  groupSize,
  price,
  highlights,
}) => {
  return (
    <Card className="group overflow-hidden hover:shadow-2xl transition-shadow duration-300 h-full flex flex-col container-query">
      <Link href={`/tours/${id}`} className="block flex flex-col h-full">
        {/* Image with aspect ratio instead of fixed height */}
        <div className="relative aspect-[4/3] overflow-hidden flex-shrink-0">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div
            className="absolute top-[var(--space-sm)] right-[var(--space-sm)] rounded-full bg-secondary-500 px-[var(--space-sm)] py-[var(--space-3xs)] text-[length:var(--fs-sm)] font-semibold text-white shadow-lg"
          >
            {destination}
          </div>
        </div>

        {/* Content with fluid padding */}
        <div className="p-[var(--space-md)] flex-1 flex flex-col">
          <h3
            className="font-heading text-[length:var(--fs-lg)] font-bold text-neutral-900 transition-colors group-hover:text-secondary-600 mb-[var(--space-sm)] line-clamp-2"
          >
            {title}
          </h3>

          <div className="space-y-[var(--space-2xs)] mb-[var(--space-sm)]">
            <div className="flex items-center text-[length:var(--fs-sm)] text-neutral-600">
              <ClockIcon className="mr-[var(--space-xs)] h-4 w-4 text-neutral-400 flex-shrink-0" />
              {duration}
            </div>
            <div className="flex items-center text-[length:var(--fs-sm)] text-neutral-600">
              <UsersIcon className="mr-[var(--space-xs)] h-4 w-4 text-neutral-400 flex-shrink-0" />
              {groupSize}
            </div>
          </div>

          <div className="flex flex-wrap gap-[var(--space-2xs)] mb-[var(--space-sm)] pb-[var(--space-sm)] border-b border-neutral-200">
            {highlights.slice(0, 3).map((highlight) => (
              <span
                key={highlight}
                className="inline-flex items-center rounded-md bg-neutral-50 px-[var(--space-xs)] py-[var(--space-3xs)] text-[length:var(--fs-xs)] font-medium text-neutral-700 border border-neutral-200"
              >
                <MapPinIcon className="mr-1 h-3 w-3 text-secondary-500 flex-shrink-0" />
                <span className="truncate">{highlight}</span>
              </span>
            ))}
          </div>

          <div className="flex items-end justify-between mt-auto">
            <div>
              <p className="text-[length:var(--fs-xs)] text-neutral-500 mb-0.5">Starting from</p>
              <p className="font-heading text-[length:var(--fs-xl)] font-bold text-secondary-600">
                {price}
              </p>
            </div>
            <span className="text-[length:var(--fs-xs)] font-semibold text-secondary-600 group-hover:underline flex items-center gap-1 flex-shrink-0">
              View Details
              <svg className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </Link>
    </Card>
  );
};

export default PackageCard;
