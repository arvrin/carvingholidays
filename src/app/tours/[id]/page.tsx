'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {
  ClockIcon,
  UsersIcon,
  MapPinIcon,
  CheckCircleIcon,
  CurrencyRupeeIcon,
  StarIcon,
  ArrowLeftIcon,
} from '@heroicons/react/24/outline';
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid';
import Button from '@/components/ui/Button';
import { getPackageById, TourPackage } from '@/data/tours';

export default function PackageDetailPage() {
  const params = useParams();
  const packageId = parseInt(params.id as string);
  const packageInfo = getPackageById(packageId);

  if (!packageInfo) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-neutral-900 mb-4">Package Not Found</h1>
          <Link href="/tours">
            <Button variant="secondary">Back to Tours</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Back Button */}
      <div className="bg-white border-b border-neutral-200">
        <div className="container-custom py-4">
          <Link href="/tours" className="inline-flex items-center gap-2 text-sm font-medium text-neutral-700 hover:text-secondary-600 transition-colors">
            <ArrowLeftIcon className="h-4 w-4" />
            Back to Tours
          </Link>
        </div>
      </div>

      {/* Hero Section with Images */}
      <section className="bg-white">
        <div className="container-custom py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <Image
                src={packageInfo.images[0]}
                alt={packageInfo.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-44 rounded-2xl overflow-hidden">
                <Image
                  src={packageInfo.images[1]}
                  alt={`${packageInfo.title} 2`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-44 rounded-2xl overflow-hidden">
                <Image
                  src={packageInfo.images[2]}
                  alt={`${packageInfo.title} 3`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="col-span-2 relative h-44 rounded-2xl overflow-hidden bg-neutral-100 flex items-center justify-center">
                <button className="text-secondary-600 font-semibold hover:text-secondary-700">
                  View All Photos
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Title and Quick Info */}
              <div>
                <div className="flex items-center gap-2 text-sm text-neutral-600 mb-2">
                  <MapPinIcon className="h-4 w-4" />
                  {packageInfo.destination}
                </div>
                <h1 className="font-heading text-4xl font-bold text-neutral-900 mb-4">
                  {packageInfo.title}
                </h1>
                <div className="flex items-center gap-4 flex-wrap">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      i < Math.floor(packageInfo.rating) ? (
                        <StarSolidIcon key={i} className="h-5 w-5 text-secondary-500" />
                      ) : (
                        <StarIcon key={i} className="h-5 w-5 text-secondary-500" />
                      )
                    ))}
                    <span className="ml-2 text-sm font-semibold text-neutral-900">{packageInfo.rating}</span>
                    <span className="text-sm text-neutral-600">({packageInfo.reviews} reviews)</span>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-neutral-200">
                  <ClockIcon className="h-8 w-8 text-secondary-600" />
                  <div>
                    <p className="text-xs text-neutral-600">Duration</p>
                    <p className="font-semibold text-neutral-900">{packageInfo.duration}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-neutral-200">
                  <UsersIcon className="h-8 w-8 text-secondary-600" />
                  <div>
                    <p className="text-xs text-neutral-600">Group Size</p>
                    <p className="font-semibold text-neutral-900">{packageInfo.groupSize}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-neutral-200">
                  <CurrencyRupeeIcon className="h-8 w-8 text-secondary-600" />
                  <div>
                    <p className="text-xs text-neutral-600">Starting From</p>
                    <p className="font-semibold text-neutral-900">{packageInfo.price}</p>
                  </div>
                </div>
              </div>

              {/* Overview */}
              <div className="bg-white rounded-2xl p-8 border border-neutral-200">
                <h2 className="font-heading text-2xl font-bold text-neutral-900 mb-4">Overview</h2>
                <p className="text-neutral-700 leading-relaxed">{packageInfo.overview}</p>
              </div>

              {/* Highlights */}
              <div className="bg-white rounded-2xl p-8 border border-neutral-200">
                <h2 className="font-heading text-2xl font-bold text-neutral-900 mb-6">Highlights</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {packageInfo.highlights.map((highlight: string, index: number) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircleIcon className="h-6 w-6 text-secondary-600 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Itinerary */}
              <div className="bg-white rounded-2xl p-8 border border-neutral-200">
                <h2 className="font-heading text-2xl font-bold text-neutral-900 mb-6">Itinerary</h2>
                <div className="space-y-6">
                  {packageInfo.itinerary.map((day: any) => (
                    <div key={day.day} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="h-12 w-12 rounded-full bg-secondary-100 flex items-center justify-center">
                          <span className="font-bold text-secondary-900">{day.day}</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-neutral-900 mb-1">{day.title}</h3>
                        <p className="text-sm text-neutral-600">{day.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inclusions & Exclusions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-6 border border-neutral-200">
                  <h3 className="font-heading text-xl font-bold text-neutral-900 mb-4">Inclusions</h3>
                  <ul className="space-y-2">
                    {packageInfo.inclusions.map((item: string, index: number) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-neutral-700">
                        <CheckCircleIcon className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white rounded-2xl p-6 border border-neutral-200">
                  <h3 className="font-heading text-xl font-bold text-neutral-900 mb-4">Exclusions</h3>
                  <ul className="space-y-2">
                    {packageInfo.exclusions.map((item: string, index: number) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-neutral-700">
                        <span className="text-red-600 flex-shrink-0 mt-0.5">✕</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Sidebar - Booking Card */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-white rounded-2xl p-6 border-2 border-secondary-200 shadow-lg">
                <div className="mb-6">
                  <p className="text-sm text-neutral-600 mb-1">Price per person</p>
                  <p className="font-heading text-4xl font-bold text-neutral-900">{packageInfo.price}</p>
                  <p className="text-xs text-neutral-500 mt-1">*Excluding taxes</p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between py-3 border-b border-neutral-200">
                    <span className="text-sm text-neutral-700">Duration</span>
                    <span className="text-sm font-semibold text-neutral-900">{packageInfo.duration}</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-neutral-200">
                    <span className="text-sm text-neutral-700">Group Size</span>
                    <span className="text-sm font-semibold text-neutral-900">{packageInfo.groupSize}</span>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <span className="text-sm text-neutral-700">Availability</span>
                    <span className="text-sm font-semibold text-green-600">Available</span>
                  </div>
                </div>

                <Button size="lg" variant="secondary" fullWidth className="mb-3">
                  Book Now
                </Button>
                <Button size="lg" variant="outline" fullWidth>
                  Request Custom Quote
                </Button>

                <div className="mt-6 pt-6 border-t border-neutral-200">
                  <p className="text-xs text-neutral-600 text-center">
                    Need help? Call us at <br />
                    <a href="tel:+918745074800" className="font-semibold text-secondary-600 hover:text-secondary-700">
                      +91 87450 74800
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
