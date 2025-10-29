'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';

const destinations = [
  {
    id: 1,
    name: 'Santorini, Greece',
    tagline: 'Where Azure Meets Elegance',
    image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?q=80&w=2835&auto=format&fit=crop',
    description: 'Experience the iconic white-washed villages and stunning sunsets',
  },
  {
    id: 2,
    name: 'Maldives',
    tagline: 'Paradise Redefined',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=2865&auto=format&fit=crop',
    description: 'Overwater villas and crystal-clear turquoise waters',
  },
  {
    id: 3,
    name: 'Swiss Alps',
    tagline: 'Alpine Luxury Awaits',
    image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?q=80&w=2940&auto=format&fit=crop',
    description: 'Majestic peaks, pristine lakes, and world-class resorts',
  },
  {
    id: 4,
    name: 'Kyoto, Japan',
    tagline: 'Timeless Elegance',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2940&auto=format&fit=crop',
    description: 'Ancient temples, zen gardens, and refined hospitality',
  },
];

const HeroSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % destinations.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[700px] overflow-hidden">
      {/* Background Slideshow */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1 }}
        >
          <Image
            src={destinations[currentIndex].image}
            alt={destinations[currentIndex].name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="container-custom relative z-10 flex h-full items-center">
        <div className="max-w-3xl text-white">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-4 inline-block rounded-full bg-secondary-400/20 px-4 py-2 backdrop-blur-sm">
                <span className="text-sm font-semibold text-secondary-400">
                  Premium Destination
                </span>
              </div>

              <h1 className="font-heading text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
                {destinations[currentIndex].name}
              </h1>

              <p className="mt-4 font-heading text-2xl text-secondary-400 md:text-3xl">
                {destinations[currentIndex].tagline}
              </p>

              <p className="mt-6 text-lg text-neutral-200 md:text-xl">
                {destinations[currentIndex].description}
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button size="lg" variant="secondary">
                  Explore {destinations[currentIndex].name}
                </Button>
                <Button size="lg" variant="outline" className="border-secondary-400 text-white hover:bg-secondary-400/20">
                  Request Custom Quote
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Progress Indicators */}
          <div className="mt-12 flex items-center space-x-4">
            {destinations.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className="group relative h-1 flex-1 overflow-hidden rounded-full bg-white/30"
              >
                <motion.div
                  className="h-full bg-secondary-400"
                  initial={{ width: '0%' }}
                  animate={{ width: index === currentIndex ? '100%' : '0%' }}
                  transition={{ duration: 5, ease: 'linear' }}
                />
              </button>
            ))}
          </div>

          {/* Destination Labels */}
          <div className="mt-4 flex justify-between text-sm text-white/70">
            {destinations.map((dest, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-colors hover:text-secondary-400 ${
                  index === currentIndex ? 'font-semibold text-white' : ''
                }`}
              >
                {dest.name.split(',')[0]}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlideshow;
