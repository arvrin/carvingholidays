'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import HeroWithTestimonials from '@/components/showcase/HeroWithTestimonials';
import HeroWithCarousel from '@/components/showcase/HeroWithCarousel';
import HeroWithFloatingTestimonials from '@/components/showcase/HeroWithFloatingTestimonials';
import HeroWithStatsBar from '@/components/showcase/HeroWithStatsBar';
import HeroSplitScreen from '@/components/showcase/HeroSplitScreen';

const showcaseItems = [
  {
    id: 'option-1',
    title: 'Option 1: Side-by-Side Layout',
    description: 'Hero content on the left with testimonials stacked on the right. Perfect for desktop viewing with immediate social proof.',
    component: HeroWithTestimonials,
  },
  {
    id: 'option-2',
    title: 'Option 2: Carousel at Bottom',
    description: 'Full-width hero with an auto-rotating testimonial carousel at the bottom. Clean and engaging.',
    component: HeroWithCarousel,
  },
  {
    id: 'option-3',
    title: 'Option 3: Floating Testimonial Cards',
    description: 'Animated floating testimonial cards that hover around the hero content. Eye-catching and modern.',
    component: HeroWithFloatingTestimonials,
  },
  {
    id: 'option-4',
    title: 'Option 4: Stats Bar with Featured Quote',
    description: 'Hero with a featured testimonial quote and a stats bar at the bottom. Professional and trust-building.',
    component: HeroWithStatsBar,
  },
  {
    id: 'option-5',
    title: 'Option 5: Split Screen',
    description: 'Split screen design with content on left (dark) and image gallery on right. Modern and bold.',
    component: HeroSplitScreen,
  },
];

export default function ShowcasePage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container-custom flex items-center justify-between py-4">
          <div>
            <h1 className="font-heading text-2xl font-bold text-neutral-900">
              Hero Layout <span className="text-secondary-600">Showcase</span>
            </h1>
            <p className="text-sm text-neutral-600">
              Compare different hero + testimonial layouts
            </p>
          </div>
          <Link
            href="/"
            className="rounded-lg bg-secondary-900 px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-secondary-800"
          >
            Back to Home
          </Link>
        </div>
      </div>

      {/* Showcase Items */}
      <div className="space-y-16 py-12">
        {showcaseItems.map((item, index) => (
          <motion.div
            key={item.id}
            id={item.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="space-y-4"
          >
            {/* Description Card */}
            <div className="container-custom">
              <div className="rounded-xl bg-white p-6 shadow-soft">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h2 className="font-heading text-2xl font-bold text-neutral-900">
                      {item.title}
                    </h2>
                    <p className="mt-2 text-neutral-600">{item.description}</p>
                  </div>
                  <a
                    href={`#${item.id}`}
                    className="ml-4 rounded-lg bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-200"
                  >
                    Jump to #{index + 1}
                  </a>
                </div>
              </div>
            </div>

            {/* Layout Preview */}
            <div className="relative overflow-hidden border-y-4 border-secondary-400 bg-white shadow-xl">
              <item.component />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Quick Navigation */}
      <div className="fixed bottom-8 right-8 z-50 hidden lg:block">
        <div className="rounded-2xl bg-white p-4 shadow-2xl">
          <p className="mb-3 text-sm font-semibold text-neutral-700">Quick Jump</p>
          <div className="space-y-2">
            {showcaseItems.map((item, index) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="block rounded-lg bg-neutral-100 px-4 py-2 text-sm text-neutral-700 transition-all hover:bg-secondary-100 hover:text-secondary-900"
              >
                Option {index + 1}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer with Implementation Note */}
      <div className="border-t border-neutral-200 bg-white py-12">
        <div className="container-custom text-center">
          <h3 className="font-heading text-xl font-bold text-neutral-900">
            Choose Your Favorite Layout
          </h3>
          <p className="mt-2 text-neutral-600">
            After reviewing all options, let me know which layout you'd like to implement on the main homepage.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="rounded-lg border-2 border-secondary-500 px-6 py-3 font-medium text-secondary-600 transition-all hover:bg-secondary-50"
            >
              Back to Current Homepage
            </Link>
            <a
              href="#option-1"
              className="rounded-lg bg-secondary-900 px-6 py-3 font-medium text-white transition-colors hover:bg-secondary-800"
            >
              View Option 1
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
