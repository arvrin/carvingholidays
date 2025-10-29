'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import HeroSlideshow from '@/components/showcase/HeroSlideshow';
import HeroKenBurns from '@/components/showcase/HeroKenBurns';
import HeroDiagonalWipe from '@/components/showcase/HeroDiagonalWipe';
import HeroParallaxPan from '@/components/showcase/HeroParallaxPan';

const showcaseItems = [
  {
    id: 'slideshow',
    title: 'Classic Slideshow Transition',
    description: 'Smooth fade transitions with scale animation between 4 premium luxury destinations. Features progress bars and clickable destination labels.',
    component: HeroSlideshow,
    features: ['Fade & Scale Effect', 'Progress Indicators', 'Auto-Play Every 5s', 'Clickable Navigation'],
  },
  {
    id: 'ken-burns',
    title: 'Ken Burns Zoom Effect',
    description: 'Cinematic slow zoom effect that creates depth and movement. Each destination slowly zooms in over 6 seconds creating an immersive experience.',
    component: HeroKenBurns,
    features: ['Slow Zoom Animation', 'Gradient Overlays', 'Expandable Nav Buttons', 'Counter Display'],
  },
  {
    id: 'diagonal-wipe',
    title: 'Diagonal Wipe Transition',
    description: 'Modern diagonal wipe effect with thumbnail previews. Navigate using arrows or click thumbnails for instant switching with smooth directional wipes.',
    component: HeroDiagonalWipe,
    features: ['Diagonal Clip-Path', 'Thumbnail Navigation', 'Arrow Controls', 'Color Accents'],
  },
  {
    id: 'parallax-pan',
    title: 'Parallax Pan Effect',
    description: 'Dynamic horizontal panning with parallax effect. Features destination cards on the side with ratings, reviews, and quick navigation.',
    component: HeroParallaxPan,
    features: ['Horizontal Pan', 'Side Navigation Cards', 'Rating Display', 'Progress Bar'],
  },
];

export default function ShowcaseBackgroundsPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container-custom flex items-center justify-between py-4">
          <div>
            <h1 className="font-heading text-2xl font-bold text-neutral-900">
              Background <span className="text-secondary-600">Transitions</span>
            </h1>
            <p className="text-sm text-neutral-600">
              Premium luxury destination transitions
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href="/showcase"
              className="rounded-lg border-2 border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-700 transition-colors hover:border-neutral-400"
            >
              Layout Showcase
            </Link>
            <Link
              href="/"
              className="rounded-lg bg-secondary-900 px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-secondary-800"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <div className="border-b border-neutral-200 bg-gradient-to-br from-primary-900 to-primary-800 py-16">
        <div className="container-custom text-center text-white">
          <motion.h2
            className="font-heading text-4xl font-bold md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Choose Your Hero Background Style
          </motion.h2>
          <motion.p
            className="mx-auto mt-4 max-w-2xl text-lg text-neutral-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Each transition showcases 4 premium luxury destinations with unique animation effects.
            All transitions are automatic, smooth, and optimized for performance.
          </motion.p>
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
              <div className="rounded-xl bg-white p-6 shadow-lg">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary-900 font-heading text-lg font-bold text-white">
                        {index + 1}
                      </span>
                      <h2 className="font-heading text-2xl font-bold text-neutral-900">
                        {item.title}
                      </h2>
                    </div>
                    <p className="mt-3 text-neutral-600">{item.description}</p>

                    {/* Features */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center rounded-full bg-secondary-50 px-3 py-1 text-xs font-medium text-secondary-800"
                        >
                          ✓ {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href={`#${item.id}`}
                    className="shrink-0 rounded-lg bg-gradient-to-r from-secondary-900 to-secondary-800 px-6 py-3 text-sm font-medium text-white shadow-md transition-all hover:shadow-lg"
                  >
                    Jump to Preview
                  </a>
                </div>
              </div>
            </div>

            {/* Layout Preview */}
            <div className="relative overflow-hidden border-y-4 border-secondary-400 bg-white shadow-2xl">
              <item.component />

              {/* Overlay Label */}
              <div className="absolute top-4 left-4 z-30 rounded-lg bg-black/70 px-4 py-2 backdrop-blur-sm">
                <p className="text-xs font-semibold text-secondary-400">
                  LIVE PREVIEW - {item.title}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer with Implementation Note */}
      <div className="border-t border-neutral-200 bg-white py-16">
        <div className="container-custom text-center">
          <h3 className="font-heading text-2xl font-bold text-neutral-900">
            Ready to Choose Your Style?
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-neutral-600">
            Each transition showcases premium luxury destinations with smooth animations.
            Select your favorite and we'll implement it on your homepage.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/showcase"
              className="rounded-lg border-2 border-secondary-500 px-8 py-3 font-medium text-secondary-600 transition-all hover:bg-secondary-50"
            >
              View Layout Options
            </Link>
            <Link
              href="/"
              className="rounded-lg bg-secondary-900 px-8 py-3 font-medium text-white transition-colors hover:bg-secondary-800"
            >
              Back to Homepage
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-6 md:grid-cols-4">
            <div className="rounded-xl bg-neutral-50 p-6">
              <p className="font-heading text-3xl font-bold text-secondary-900">4</p>
              <p className="mt-1 text-sm text-neutral-600">Unique Transitions</p>
            </div>
            <div className="rounded-xl bg-neutral-50 p-6">
              <p className="font-heading text-3xl font-bold text-secondary-900">16</p>
              <p className="mt-1 text-sm text-neutral-600">Luxury Destinations</p>
            </div>
            <div className="rounded-xl bg-neutral-50 p-6">
              <p className="font-heading text-3xl font-bold text-secondary-900">100%</p>
              <p className="mt-1 text-sm text-neutral-600">Responsive</p>
            </div>
            <div className="rounded-xl bg-neutral-50 p-6">
              <p className="font-heading text-3xl font-bold text-secondary-900">5-6s</p>
              <p className="mt-1 text-sm text-neutral-600">Auto Duration</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Navigation Sidebar */}
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
                {index + 1}. {item.title.split(' ')[0]}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
