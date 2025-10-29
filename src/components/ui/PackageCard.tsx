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
    <Card className="group overflow-hidden hover:shadow-2xl transition-shadow duration-300 h-full flex flex-col">
      <Link href={`/tours/${id}`} className="block flex flex-col h-full">
        <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden flex-shrink-0">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute top-4 right-4 rounded-full bg-secondary-500 px-3.5 py-1 text-sm font-semibold text-white shadow-lg">
            {destination}
          </div>
        </div>

        <div className="p-4 sm:p-5 md:p-6 flex-1 flex flex-col">
          <h3 className="font-heading text-lg sm:text-xl font-bold text-neutral-900 transition-colors group-hover:text-secondary-600 mb-3 sm:mb-4 line-clamp-2">
            {title}
          </h3>

          <div className="space-y-2 sm:space-y-2.5 mb-3 sm:mb-4">
            <div className="flex items-center text-xs sm:text-sm text-neutral-600">
              <ClockIcon className="mr-2 sm:mr-2.5 h-4 w-4 text-neutral-400 flex-shrink-0" />
              {duration}
            </div>
            <div className="flex items-center text-xs sm:text-sm text-neutral-600">
              <UsersIcon className="mr-2 sm:mr-2.5 h-4 w-4 text-neutral-400 flex-shrink-0" />
              {groupSize}
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4 pb-3 sm:pb-4 border-b border-neutral-200">
            {highlights.slice(0, 3).map((highlight) => (
              <span
                key={highlight}
                className="inline-flex items-center rounded-md bg-neutral-50 px-2 sm:px-2.5 py-0.5 sm:py-1 text-xs font-medium text-neutral-700 border border-neutral-200"
              >
                <MapPinIcon className="mr-1 h-3 w-3 text-secondary-500 flex-shrink-0" />
                <span className="truncate">{highlight}</span>
              </span>
            ))}
          </div>

          <div className="flex items-end justify-between mt-auto">
            <div>
              <p className="text-xs text-neutral-500 mb-0.5">Starting from</p>
              <p className="font-heading text-xl sm:text-2xl font-bold text-secondary-600">
                {price}
              </p>
            </div>
            <span className="text-xs font-semibold text-secondary-600 group-hover:underline flex items-center gap-1 flex-shrink-0">
              <span className="hidden sm:inline">View Details</span>
              <span className="sm:hidden">View</span>
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
