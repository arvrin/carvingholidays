'use client';

import { useState } from 'react';
import { CTASection } from '@/components/sections';
import { PackageCard } from '@/components/ui';
import { FunnelIcon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

// Sample package data - same as FeaturedTours
const allPackages = [
  {
    id: 1,
    title: 'European Grand Tour',
    destination: 'Europe',
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=2940&auto=format&fit=crop',
    duration: '14 Days / 13 Nights',
    groupSize: '10-15 People',
    price: '₹2,45,000',
    highlights: ['Paris', 'Rome', 'Switzerland', 'Amsterdam'],
  },
  {
    id: 2,
    title: 'Japan Cultural Experience',
    destination: 'Japan',
    image: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?q=80&w=2940&auto=format&fit=crop',
    duration: '10 Days / 9 Nights',
    groupSize: '8-12 People',
    price: '₹1,85,000',
    highlights: ['Tokyo', 'Kyoto', 'Mount Fuji', 'Osaka'],
  },
  {
    id: 3,
    title: 'Australia & New Zealand Adventure',
    destination: 'Australia',
    image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=2830&auto=format&fit=crop',
    duration: '16 Days / 15 Nights',
    groupSize: '12-18 People',
    price: '₹3,25,000',
    highlights: ['Sydney', 'Melbourne', 'Auckland', 'Queenstown'],
  },
  {
    id: 4,
    title: 'Southeast Asia Explorer',
    destination: 'Southeast Asia',
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=2939&auto=format&fit=crop',
    duration: '12 Days / 11 Nights',
    groupSize: '10-15 People',
    price: '₹95,000',
    highlights: ['Thailand', 'Vietnam', 'Cambodia', 'Singapore'],
  },
  {
    id: 5,
    title: 'Swiss Alps & Lakes',
    destination: 'Switzerland',
    image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?q=80&w=2940&auto=format&fit=crop',
    duration: '8 Days / 7 Nights',
    groupSize: '8-12 People',
    price: '₹1,65,000',
    highlights: ['Zurich', 'Interlaken', 'Lucerne', 'Zermatt'],
  },
  {
    id: 6,
    title: 'Bali Paradise Retreat',
    destination: 'Indonesia',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2838&auto=format&fit=crop',
    duration: '7 Days / 6 Nights',
    groupSize: '6-10 People',
    price: '₹75,000',
    highlights: ['Ubud', 'Seminyak', 'Nusa Dua', 'Uluwatu'],
  },
];

const destinations = [
  'Europe',
  'Dubai',
  'Japan',
  'Australia',
  'USA',
  'Singapore',
  'Maldives',
  'Thailand',
  'Switzerland',
  'Bali',
];

const durations = [
  '1-3 Days',
  '4-7 Days',
  '8-14 Days',
  '15+ Days',
];

const budgetRanges = [
  'Under ₹50,000',
  '₹50,000 - ₹1,00,000',
  '₹1,00,000 - ₹2,00,000',
  'Above ₹2,00,000',
];

const packageTypes = [
  'Family Package',
  'Honeymoon Package',
  'Adventure Package',
  'Luxury Package',
  'Group Tour',
  'Solo Travel',
];

export default function ToursPage() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [selectedDestinations, setSelectedDestinations] = useState<string[]>([]);
  const [selectedDurations, setSelectedDurations] = useState<string[]>([]);
  const [selectedBudgets, setSelectedBudgets] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  // Collapsible state for each filter section - All collapsed by default
  const [openSections, setOpenSections] = useState({
    destinations: false,
    duration: false,
    budget: false,
    type: false,
  });

  const toggleFilter = (filter: string, selected: string[], setSelected: (val: string[]) => void) => {
    if (selected.includes(filter)) {
      setSelected(selected.filter(item => item !== filter));
    } else {
      setSelected([...selected, filter]);
    }
  };

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section as keyof typeof prev],
    }));
  };

  const clearAllFilters = () => {
    setSelectedDestinations([]);
    setSelectedDurations([]);
    setSelectedBudgets([]);
    setSelectedTypes([]);
  };

  const FilterSection = ({ title, items, selected, setSelected, sectionKey }: any) => {
    const isOpen = openSections[sectionKey as keyof typeof openSections];

    return (
      <div className="border-b border-neutral-200 pb-6">
        <button
          onClick={() => toggleSection(sectionKey)}
          className="flex items-center justify-between w-full mb-4 group"
        >
          <h3 className="font-heading text-lg font-semibold text-neutral-900">{title}</h3>
          <ChevronDownIcon
            className={`h-5 w-5 text-neutral-500 transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </button>
        {isOpen && (
          <div className="space-y-3">
            {items.map((item: string) => (
              <label key={item} className="flex items-center cursor-pointer group">
                <input
                  type="checkbox"
                  checked={selected.includes(item)}
                  onChange={() => toggleFilter(item, selected, setSelected)}
                  className="h-4 w-4 rounded border-neutral-300 text-secondary-600 focus:ring-secondary-500"
                />
                <span className="ml-3 text-sm text-neutral-700 group-hover:text-neutral-900">{item}</span>
              </label>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 py-24">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="font-heading text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
              Explore Our{' '}
              <span className="text-secondary-400">Travel Packages</span>
            </h1>
            <p className="mt-6 text-xl text-neutral-200">
              Discover handcrafted journeys to the world's most captivating destinations.
              Each package is designed to create unforgettable memories.
            </p>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-400/5 rounded-full blur-3xl" />
      </section>

      {/* Tours with Filters Section */}
      <section className="py-16 bg-gradient-to-b from-white to-neutral-50">
        <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden mb-6">
            <button
              onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
              className="flex items-center gap-2 w-full justify-center rounded-lg bg-white px-4 py-3 text-sm font-semibold text-neutral-900 shadow-sm border border-neutral-200 hover:bg-neutral-50"
            >
              <FunnelIcon className="h-5 w-5" />
              Filters
            </button>
          </div>

          <div className="flex gap-8">
            {/* Filters Sidebar - Desktop */}
            <aside className="hidden lg:block w-72 flex-shrink-0">
              <div className="sticky top-24 bg-white rounded-2xl shadow-sm border border-neutral-200 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-heading text-2xl font-bold text-neutral-900">Filters</h2>
                  <button
                    onClick={clearAllFilters}
                    className="text-sm font-medium text-secondary-600 hover:text-secondary-700"
                  >
                    Clear All
                  </button>
                </div>

                <div className="space-y-6">
                  <FilterSection
                    title="Destinations"
                    items={destinations}
                    selected={selectedDestinations}
                    setSelected={setSelectedDestinations}
                    sectionKey="destinations"
                  />
                  <FilterSection
                    title="Duration"
                    items={durations}
                    selected={selectedDurations}
                    setSelected={setSelectedDurations}
                    sectionKey="duration"
                  />
                  <FilterSection
                    title="Budget Range"
                    items={budgetRanges}
                    selected={selectedBudgets}
                    setSelected={setSelectedBudgets}
                    sectionKey="budget"
                  />
                  <FilterSection
                    title="Package Type"
                    items={packageTypes}
                    selected={selectedTypes}
                    setSelected={setSelectedTypes}
                    sectionKey="type"
                  />
                </div>
              </div>
            </aside>

            {/* Mobile Filters Modal */}
            {mobileFiltersOpen && (
              <div className="fixed inset-0 z-50 lg:hidden">
                <div className="fixed inset-0 bg-black/50" onClick={() => setMobileFiltersOpen(false)} />
                <div className="fixed inset-y-0 left-0 w-full max-w-sm bg-white shadow-xl overflow-y-auto">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="font-heading text-2xl font-bold text-neutral-900">Filters</h2>
                      <button
                        onClick={() => setMobileFiltersOpen(false)}
                        className="rounded-lg p-2 hover:bg-neutral-100"
                      >
                        <XMarkIcon className="h-6 w-6" />
                      </button>
                    </div>

                    <div className="space-y-6">
                      <FilterSection
                        title="Destinations"
                        items={destinations}
                        selected={selectedDestinations}
                        setSelected={setSelectedDestinations}
                        sectionKey="destinations"
                      />
                      <FilterSection
                        title="Duration"
                        items={durations}
                        selected={selectedDurations}
                        setSelected={setSelectedDurations}
                        sectionKey="duration"
                      />
                      <FilterSection
                        title="Budget Range"
                        items={budgetRanges}
                        selected={selectedBudgets}
                        setSelected={setSelectedBudgets}
                        sectionKey="budget"
                      />
                      <FilterSection
                        title="Package Type"
                        items={packageTypes}
                        selected={selectedTypes}
                        setSelected={setSelectedTypes}
                        sectionKey="type"
                      />
                    </div>

                    <div className="mt-6 flex gap-3">
                      <button
                        onClick={clearAllFilters}
                        className="flex-1 rounded-lg border border-neutral-300 px-4 py-3 text-sm font-semibold text-neutral-700 hover:bg-neutral-50"
                      >
                        Clear All
                      </button>
                      <button
                        onClick={() => setMobileFiltersOpen(false)}
                        className="flex-1 rounded-lg bg-secondary-600 px-4 py-3 text-sm font-semibold text-white hover:bg-secondary-700"
                      >
                        Apply Filters
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tours Grid */}
            <div className="flex-1 min-w-0">
              <div className="mb-8 flex items-center justify-between flex-wrap gap-4">
                <p className="text-base text-neutral-600">
                  Showing <span className="font-semibold text-neutral-900">{allPackages.length}</span> packages
                </p>
                <select className="rounded-lg border border-neutral-300 px-4 py-2.5 text-sm font-medium text-neutral-700 focus:border-secondary-500 focus:outline-none focus:ring-2 focus:ring-secondary-500">
                  <option>Sort by: Recommended</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Duration: Short to Long</option>
                  <option>Popularity</option>
                </select>
              </div>

              {/* Tour Packages Grid */}
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {allPackages.map((pkg) => (
                  <PackageCard key={pkg.id} {...pkg} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  );
}
