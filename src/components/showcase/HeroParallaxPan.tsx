'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';
import Button from '../ui/Button';

const destinations = [
  {
    id: 1,
    name: 'Monaco',
    tagline: 'The Jewel of the Mediterranean',
    image: 'https://images.unsplash.com/photo-1542208998-e8e464c8f4d7?q=80&w=2940&auto=format&fit=crop',
    description: 'Yacht harbors, grand casinos, and French Riviera elegance',
    rating: 4.9,
    reviews: 234,
  },
  {
    id: 2,
    name: 'Bali, Indonesia',
    tagline: 'Island of the Gods',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2838&auto=format&fit=crop',
    description: 'Luxury resorts, ancient temples, and lush rice terraces',
    rating: 4.8,
    reviews: 567,
  },
  {
    id: 3,
    name: 'Maui, Hawaii',
    tagline: 'Pacific Paradise',
    image: 'https://images.unsplash.com/photo-1542259009477-d625272157b7?q=80&w=2869&auto=format&fit=crop',
    description: 'Volcanic landscapes, world-class beaches, and aloha spirit',
    rating: 4.9,
    reviews: 432,
  },
  {
    id: 4,
    name: 'Queenstown, New Zealand',
    tagline: 'Adventure Capital of the World',
    image: 'https://images.unsplash.com/photo-1589308045032-d355ed8f5da1?q=80&w=2940&auto=format&fit=crop',
    description: 'Stunning alpine scenery and luxury adventure experiences',
    rating: 4.8,
    reviews: 389,
  },
];

const HeroParallaxPan = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % destinations.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[700px] overflow-hidden bg-primary-900">
      {/* Parallax Background with Pan */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="absolute inset-0"
            initial={{ opacity: 0, x: '10%' }}
            animate={{ opacity: 1, x: '-10%' }}
            exit={{ opacity: 0, x: '-10%' }}
            transition={{ duration: 6, ease: 'linear' }}
          >
            <div className="relative h-full w-[120%]">
              <Image
                src={destinations[currentIndex].image}
                alt={destinations[currentIndex].name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900 via-primary-900/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 flex h-full items-center">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left Content */}
          <div className="text-white">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  className="mb-4 flex items-center space-x-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <span className="rounded-full bg-secondary-400 px-3 py-1 text-xs font-bold text-white">
                    FEATURED
                  </span>
                  <div className="flex items-center space-x-1">
                    <StarIcon className="h-5 w-5 text-secondary-400" />
                    <span className="text-sm font-semibold">
                      {destinations[currentIndex].rating} ({destinations[currentIndex].reviews} reviews)
                    </span>
                  </div>
                </motion.div>

                <h1 className="font-heading text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
                  {destinations[currentIndex].name}
                </h1>

                <p className="mt-4 font-heading text-2xl text-secondary-400 md:text-3xl">
                  {destinations[currentIndex].tagline}
                </p>

                <p className="mt-6 text-lg text-neutral-300 md:text-xl">
                  {destinations[currentIndex].description}
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Button size="lg" variant="secondary">
                    View Packages
                  </Button>
                  <Button size="lg" variant="outline" className="border-secondary-400 text-secondary-400 hover:bg-secondary-400 hover:text-white">
                    Get Free Quote
                  </Button>
                </div>

                {/* Features */}
                <motion.div
                  className="mt-12 grid grid-cols-3 gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="rounded-lg bg-white/5 p-4 backdrop-blur-sm">
                    <p className="text-2xl font-bold text-secondary-400">7-14</p>
                    <p className="text-xs text-neutral-400">Days</p>
                  </div>
                  <div className="rounded-lg bg-white/5 p-4 backdrop-blur-sm">
                    <p className="text-2xl font-bold text-secondary-400">5★</p>
                    <p className="text-xs text-neutral-400">Luxury</p>
                  </div>
                  <div className="rounded-lg bg-white/5 p-4 backdrop-blur-sm">
                    <p className="text-2xl font-bold text-secondary-400">24/7</p>
                    <p className="text-xs text-neutral-400">Support</p>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right - Destination Cards */}
          <div className="hidden lg:block">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="space-y-3"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.8, staggerChildren: 0.1 }}
              >
                {destinations.map((dest, index) => (
                  <motion.button
                    key={dest.id}
                    onClick={() => setCurrentIndex(index)}
                    className={`group relative w-full overflow-hidden rounded-xl transition-all ${
                      index === currentIndex
                        ? 'h-48 ring-4 ring-secondary-400'
                        : 'h-20 opacity-60 hover:opacity-100'
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Image
                      src={dest.image}
                      alt={dest.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="font-heading text-lg font-bold text-white">
                        {dest.name}
                      </p>
                      {index === currentIndex && (
                        <motion.p
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-sm text-secondary-400"
                        >
                          {dest.tagline}
                        </motion.p>
                      )}
                    </div>
                  </motion.button>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20 h-1 bg-white/20">
        <motion.div
          key={currentIndex}
          className="h-full bg-secondary-400"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 6, ease: 'linear' }}
        />
      </div>
    </section>
  );
};

export default HeroParallaxPan;
