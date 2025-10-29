'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';
import { PlayCircleIcon } from '@heroicons/react/24/outline';
import Button from '../ui/Button';
import { premiumDestinations } from '@/data/destinations';
import KenBurnsBackground from './KenBurnsBackground';

const testimonials = [
  {
    name: 'Priya Sharma',
    location: 'Mumbai',
    comment: 'Absolutely phenomenal experience! Every detail was perfect.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&auto=format&fit=crop',
  },
  {
    name: 'Rajesh Kumar',
    location: 'Delhi',
    comment: 'Best vacation of our lives. Highly recommended!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop',
  },
];

const HeroSplitScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % premiumDestinations.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="grid lg:grid-cols-2 min-h-screen">
        {/* Left Side: Content */}
        <div className="relative z-10 flex items-center bg-gradient-to-br from-primary-900 via-primary-900 to-primary-950 px-8 py-20 lg:px-16">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-secondary-400/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-400/5 rounded-full blur-3xl" />

          <div className="w-full max-w-xl relative">
            {/* Badge with Icon */}
            <motion.div
              className="mb-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-secondary-400/20 to-secondary-500/20 px-5 py-2.5 border border-secondary-400/30"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-2xl">✨</span>
              <span className="text-sm font-bold text-secondary-400">
                Rated 4.8/5 by 500+ Travelers
              </span>
            </motion.div>

            {/* Main Heading with Accent */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="font-heading text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
                Discover Unique{' '}
                <span className="block mt-2 text-secondary-400 bg-gradient-to-r from-secondary-400 to-secondary-500 bg-clip-text text-transparent">
                  Destinations
                </span>
              </h1>
              <div className="mt-4 w-20 h-1.5 bg-gradient-to-r from-secondary-400 to-secondary-500 rounded-full" />
            </motion.div>

            {/* Description with Better Spacing */}
            <motion.p
              className="mt-8 text-xl text-neutral-200 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Curated journeys to Europe, Australia, Japan and beyond. Tailor-made
              itineraries with local experts for unforgettable adventures.
            </motion.p>

            {/* CTA Buttons with Better Styling */}
            <motion.div
              className="mt-10 flex flex-col gap-4 sm:flex-row"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                size="lg"
                variant="secondary"
                className="shadow-lg shadow-secondary-400/20 hover:shadow-xl hover:shadow-secondary-400/30 transition-shadow"
              >
                Explore Tours
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-secondary-400/50 text-secondary-400 hover:bg-secondary-400 hover:text-primary-900 hover:border-secondary-400 transition-all"
              >
                <PlayCircleIcon className="mr-2 h-5 w-5" />
                Watch Video
              </Button>
            </motion.div>

            {/* Testimonials with Enhanced Design */}
            <motion.div
              className="mt-16 space-y-5"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-secondary-400/50" />
                <h3 className="font-heading text-lg font-bold text-secondary-400 uppercase tracking-wider">
                  Loved Worldwide
                </h3>
              </div>

              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="group flex items-start space-x-4 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 p-5 backdrop-blur-sm border border-white/10 hover:border-secondary-400/30 hover:bg-white/15 transition-all duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.2 }}
                  whileHover={{ x: 4 }}
                >
                  <div className="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-full ring-2 ring-secondary-400/20 group-hover:ring-secondary-400/50 transition-all">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-bold text-white">{testimonial.name}</p>
                        <p className="text-xs text-neutral-400 mt-0.5">{testimonial.location}</p>
                      </div>
                      <div className="flex items-center space-x-0.5">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <StarIcon key={i} className="h-4 w-4 text-secondary-400 fill-secondary-400" />
                        ))}
                      </div>
                    </div>
                    <p className="mt-3 text-sm text-neutral-200 leading-relaxed">
                      "{testimonial.comment}"
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Right Side: Image Gallery with Ken Burns */}
        <div className="relative hidden lg:block">
          <KenBurnsBackground
            currentIndex={currentIndex}
            images={premiumDestinations}
            overlayGradient="from-transparent to-primary-900/20"
          />

          {/* Destination Info Overlay - Centered on Image */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="text-center px-8"
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -30 }}
                transition={{ duration: 0.7 }}
              >
                <motion.h2
                  className="font-heading text-5xl font-bold text-white drop-shadow-2xl mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {premiumDestinations[currentIndex].name}
                </motion.h2>
                <motion.div
                  className="w-24 h-1 bg-secondary-400 mx-auto mb-4 drop-shadow-lg"
                  initial={{ width: 0 }}
                  animate={{ width: 96 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                />
                <motion.p
                  className="text-2xl text-secondary-400 font-semibold drop-shadow-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  {premiumDestinations[currentIndex].tagline}
                </motion.p>
                <motion.p
                  className="mt-4 text-lg text-white drop-shadow-lg max-w-md mx-auto"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  {premiumDestinations[currentIndex].description}
                </motion.p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Floating Stats Card */}
          <motion.div
            className="absolute bottom-10 left-10 right-10 rounded-2xl bg-white/95 p-6 backdrop-blur-sm shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="font-heading text-3xl font-bold text-primary-900">500+</p>
                <p className="mt-1 text-sm text-neutral-600">Happy Travelers</p>
              </div>
              <div>
                <p className="font-heading text-3xl font-bold text-primary-900">25+</p>
                <p className="mt-1 text-sm text-neutral-600">Destinations</p>
              </div>
              <div>
                <div className="flex items-center justify-center space-x-1">
                  <p className="font-heading text-3xl font-bold text-primary-900">4.8</p>
                  <StarIcon className="h-6 w-6 text-secondary-900" />
                </div>
                <p className="mt-1 text-sm text-neutral-600">Average Rating</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSplitScreen;
