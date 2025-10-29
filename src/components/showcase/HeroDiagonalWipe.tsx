'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import Button from '../ui/Button';

const destinations = [
  {
    id: 1,
    name: 'Seychelles',
    tagline: 'Hidden Gems of the Indian Ocean',
    image: 'https://images.unsplash.com/photo-1589881133595-c7a775f7b7e5?q=80&w=2940&auto=format&fit=crop',
    description: 'Private islands with pristine beaches and luxury resorts',
    color: '#00A896',
  },
  {
    id: 2,
    name: 'New Zealand',
    tagline: 'Land of Natural Wonders',
    image: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?q=80&w=2942&auto=format&fit=crop',
    description: 'Dramatic landscapes from fjords to mountains',
    color: '#028090',
  },
  {
    id: 3,
    name: 'Iceland',
    tagline: 'Fire & Ice Experience',
    image: 'https://images.unsplash.com/photo-1504829857797-ddff29c27927?q=80&w=2940&auto=format&fit=crop',
    description: 'Northern lights, geothermal spas, and volcanic landscapes',
    color: '#05668D',
  },
  {
    id: 4,
    name: 'Tuscany, Italy',
    tagline: 'Renaissance & Romance',
    image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=2883&auto=format&fit=crop',
    description: 'Rolling hills, vineyard estates, and medieval towns',
    color: '#9B6A6C',
  },
];

const HeroDiagonalWipe = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % destinations.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % destinations.length);
  };

  const goToPrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + destinations.length) % destinations.length);
  };

  return (
    <section className="relative h-[700px] overflow-hidden">
      {/* Diagonal Wipe Background */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            initial={{ clipPath: direction > 0 ? 'polygon(0 0, 0 0, 0 100%, 0 100%)' : 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' }}
            animate={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
            exit={{
              clipPath: direction > 0 ? 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' : 'polygon(0 0, 0 0, 0 100%, 0 100%)',
            }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <Image
              src={destinations[currentIndex].image}
              alt={destinations[currentIndex].name}
              fill
              className="object-cover"
              priority
            />
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(135deg, ${destinations[currentIndex].color}20 0%, transparent 50%, rgba(0,0,0,0.8) 100%)`
              }}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 flex h-full items-center">
        <div className="max-w-2xl text-white">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="mb-4">
                <motion.span
                  className="inline-block rounded-lg px-4 py-2 text-sm font-bold"
                  style={{ backgroundColor: destinations[currentIndex].color }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, type: 'spring' }}
                >
                  Luxury Destination
                </motion.span>
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
                  Explore Packages
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Talk to Expert
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute bottom-8 right-8 z-20 flex space-x-4">
        <button
          onClick={goToPrev}
          className="group flex h-14 w-14 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-all hover:bg-secondary-400"
        >
          <ChevronLeftIcon className="h-7 w-7 text-white" />
        </button>
        <button
          onClick={goToNext}
          className="group flex h-14 w-14 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-all hover:bg-secondary-400"
        >
          <ChevronRightIcon className="h-7 w-7 text-white" />
        </button>
      </div>

      {/* Thumbnail Navigation */}
      <div className="absolute bottom-8 left-8 z-20 flex space-x-2">
        {destinations.map((dest, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`relative h-16 w-24 overflow-hidden rounded-lg transition-all ${
              index === currentIndex
                ? 'ring-4 ring-secondary-400 scale-110'
                : 'opacity-60 hover:opacity-100'
            }`}
          >
            <Image
              src={dest.image}
              alt={dest.name}
              fill
              className="object-cover"
            />
            {index === currentIndex && (
              <div className="absolute inset-0 bg-secondary-400/30" />
            )}
          </button>
        ))}
      </div>
    </section>
  );
};

export default HeroDiagonalWipe;
