'use client';

import { useState } from 'react';
import { CTASection } from '@/components/sections';
import { PackageCard } from '@/components/ui';
import { FunnelIcon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { allPackages, destinations } from '@/data/tours';

const durations = [
  '5-7 Days',
  '8-10 Days',
  '11-14 Days',
  '15+ Days',
];

const regions = [
  'Europe',
  'Middle East',
  'Southeast Asia',
  'East Asia',
  'South Asia',
  'Oceania',
];

const packageTypes = [
  'Group Tour',
  'Family Package',
  'Honeymoon Package',
  'Adventure Package',
  'Cultural Tour',
];

export default function ToursPage() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [selectedDestinations, setSelectedDestinations] = useState<string[]>([]);
  const [selectedDurations, setSelectedDurations] = useState<string[]>([]);
  const [selectedRegions, setSelectedRegions] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  // Collapsible state for each filter section - All collapsed by default
  const [openSections, setOpenSections] = useState({
    destinations: false,
    duration: false,
    region: false,
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
    setSelectedRegions([]);
    setSelectedTypes([]);
  };

  const FilterSection = ({ title, items, selected, setSelected, sectionKey }: {
    title: string;
    items: string[];
    selected: string[];
    setSelected: (val: string[]) => void;
    sectionKey: string;
  }) => {
    const isOpen = openSections[sectionKey as keyof typeof openSections];

    return (
      <div className="border-b border-neutral-200 pb-[var(--space-md)]">
        <button
          onClick={() => toggleSection(sectionKey)}
          className="flex items-center justify-between w-full mb-[var(--space-sm)] group"
        >
          <h3 className="font-heading text-fluid-lg font-semibold text-neutral-900">{title}</h3>
          <ChevronDownIcon
            className={`h-5 w-5 text-neutral-500 transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </button>
        {isOpen && (
          <div className="space-y-[var(--space-xs)]">
            {items.map((item: string) => (
              <label key={item} className="flex items-center cursor-pointer group">
                <input
                  type="checkbox"
                  checked={selected.includes(item)}
                  onChange={() => toggleFilter(item, selected, setSelected)}
                  className="h-4 w-4 rounded border-neutral-300 text-secondary-600 focus:ring-secondary-500"
                />
                <span className="ml-[var(--space-xs)] text-fluid-sm text-neutral-700 group-hover:text-neutral-900">{item}</span>
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
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 py-fluid-2xl">
        <div className="container-custom relative z-10">
          <div className="max-w-[60ch] text-white">
            <h1 className="font-heading text-fluid-4xl font-bold leading-tight">
              Explore Our{' '}
              <span className="text-secondary-400">Travel Packages</span>
            </h1>
            <p className="mt-[var(--space-md)] text-fluid-lg text-neutral-200">
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
      <section className="py-fluid-2xl bg-gradient-to-b from-white to-neutral-50">
        <div className="container-wide">
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden mb-[var(--space-md)]">
            <button
              onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
              className="flex items-center gap-[var(--space-xs)] w-full justify-center rounded-lg bg-white px-[var(--space-sm)] py-[var(--space-sm)] text-fluid-sm font-semibold text-neutral-900 shadow-sm border border-neutral-200 hover:bg-neutral-50"
            >
              <FunnelIcon className="h-5 w-5" />
              Filters
            </button>
          </div>

          <div className="flex gap-[var(--space-lg)]">
            {/* Filters Sidebar - Desktop */}
            <aside className="hidden lg:block w-72 flex-shrink-0">
              <div className="sticky top-24 bg-white rounded-2xl shadow-sm border border-neutral-200 p-[var(--space-md)]">
                <div className="flex items-center justify-between mb-[var(--space-md)]">
                  <h2 className="font-heading text-fluid-xl font-bold text-neutral-900">Filters</h2>
                  <button
                    onClick={clearAllFilters}
                    className="text-fluid-sm font-medium text-secondary-600 hover:text-secondary-700"
                  >
                    Clear All
                  </button>
                </div>

                <div className="space-y-[var(--space-md)]">
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
                    title="Region"
                    items={regions}
                    selected={selectedRegions}
                    setSelected={setSelectedRegions}
                    sectionKey="region"
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
                  <div className="p-[var(--space-md)]">
                    <div className="flex items-center justify-between mb-[var(--space-md)]">
                      <h2 className="font-heading text-fluid-xl font-bold text-neutral-900">Filters</h2>
                      <button
                        onClick={() => setMobileFiltersOpen(false)}
                        className="rounded-lg p-[var(--space-xs)] hover:bg-neutral-100"
                      >
                        <XMarkIcon className="h-6 w-6" />
                      </button>
                    </div>

                    <div className="space-y-[var(--space-md)]">
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
                        title="Region"
                        items={regions}
                        selected={selectedRegions}
                        setSelected={setSelectedRegions}
                        sectionKey="region"
                      />
                      <FilterSection
                        title="Package Type"
                        items={packageTypes}
                        selected={selectedTypes}
                        setSelected={setSelectedTypes}
                        sectionKey="type"
                      />
                    </div>

                    <div className="mt-[var(--space-md)] flex gap-[var(--space-xs)]">
                      <button
                        onClick={clearAllFilters}
                        className="flex-1 rounded-lg border border-neutral-300 px-[var(--space-sm)] py-[var(--space-sm)] text-fluid-sm font-semibold text-neutral-700 hover:bg-neutral-50"
                      >
                        Clear All
                      </button>
                      <button
                        onClick={() => setMobileFiltersOpen(false)}
                        className="flex-1 rounded-lg bg-secondary-600 px-[var(--space-sm)] py-[var(--space-sm)] text-fluid-sm font-semibold text-white hover:bg-secondary-700"
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
              <div className="mb-[var(--space-lg)] flex items-center justify-between flex-wrap gap-[var(--space-sm)]">
                <p className="text-fluid-base text-neutral-600">
                  Showing <span className="font-semibold text-neutral-900">{allPackages.length}</span> packages
                </p>
                <select className="rounded-lg border border-neutral-300 px-[var(--space-sm)] py-[var(--space-xs)] text-fluid-sm font-medium text-neutral-700 focus:border-secondary-500 focus:outline-none focus:ring-2 focus:ring-secondary-500">
                  <option>Sort by: Recommended</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Duration: Short to Long</option>
                  <option>Popularity</option>
                </select>
              </div>

              {/* Tour Packages Grid - Intrinsic auto-fit */}
              <div className="grid-auto-fit-lg">
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
