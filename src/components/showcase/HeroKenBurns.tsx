'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';

const destinations = [
  {
    id: 1,
    name: 'Dubai, UAE',
    tagline: 'Where Luxury Touches the Sky',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2940&auto=format&fit=crop',
    description: 'Ultra-modern architecture meets Arabian hospitality',
  },
  {
    id: 2,
    name: 'Bora Bora',
    tagline: 'The Pearl of the Pacific',
    image: 'https://images.unsplash.com/photo-1589197331516-e4d9e0b44e92?q=80&w=2940&auto=format&fit=crop',
    description: 'Exclusive overwater bungalows in pristine lagoons',
  },
  {
    id: 3,
    name: 'Paris, France',
    tagline: 'The City of Lights & Romance',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2946&auto=format&fit=crop',
    description: 'Michelin-star dining and iconic landmarks',
  },
  {
    id: 4,
    name: 'Amalfi Coast, Italy',
    tagline: 'Mediterranean Magnificence',
    image: 'https://images.unsplash.com/photo-1534113414509-0bd4d6c108d0?q=80&w=2940&auto=format&fit=crop',
    description: 'Cliffside villages with breathtaking coastal views',
  },
];

const HeroKenBurns = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % destinations.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[700px] overflow-hidden">
      {/* Ken Burns Effect Background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
        >
          <motion.div
            className="h-full w-full"
            initial={{ scale: 1 }}
            animate={{ scale: 1.15 }}
            transition={{ duration: 6, ease: 'linear' }}
          >
            <Image
              src={destinations[currentIndex].image}
              alt={destinations[currentIndex].name}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="container-custom relative z-10 flex h-full flex-col justify-between py-20">
        <div className="max-w-3xl text-white">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="mb-4 inline-block"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <span className="rounded-full border-2 border-secondary-400 bg-secondary-400/10 px-4 py-2 text-sm font-semibold text-secondary-400 backdrop-blur-sm">
                  ✈️ Luxury Travel
                </span>
              </motion.div>

              <h1 className="font-heading text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
                {destinations[currentIndex].name}
              </h1>

              <p className="mt-4 font-heading text-2xl font-light text-secondary-400 md:text-3xl">
                {destinations[currentIndex].tagline}
              </p>

              <p className="mt-6 max-w-2xl text-lg text-neutral-200 md:text-xl">
                {destinations[currentIndex].description}
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button size="lg" variant="secondary">
                  Discover More
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Plan Your Journey
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Navigation */}
        <div className="flex items-center justify-between">
          <div className="flex space-x-3">
            {destinations.map((dest, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`group relative overflow-hidden rounded-lg transition-all ${
                  index === currentIndex
                    ? 'w-32 bg-secondary-400'
                    : 'w-12 bg-white/30 hover:bg-white/40'
                }`}
              >
                <div className="px-3 py-2">
                  {index === currentIndex && (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-xs font-semibold text-white"
                    >
                      {dest.name.split(',')[0]}
                    </motion.span>
                  )}
                </div>
              </button>
            ))}
          </div>

          <div className="text-right text-white">
            <p className="text-sm font-semibold">
              {currentIndex + 1} / {destinations.length}
            </p>
            <p className="text-xs text-white/70">Premium Destinations</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroKenBurns;
