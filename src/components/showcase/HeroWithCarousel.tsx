'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { StarIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import Button from '../ui/Button';
import { premiumDestinations } from '@/data/destinations';
import KenBurnsBackground from './KenBurnsBackground';

const testimonials = [
  {
    name: 'Priya Sharma',
    location: 'Mumbai',
    comment: 'Our Europe trip was absolutely phenomenal! Every detail was perfectly planned.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&auto=format&fit=crop',
  },
  {
    name: 'Rajesh Kumar',
    location: 'Delhi',
    comment: 'The Japan Cultural Experience exceeded all expectations. Magical moments!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop',
  },
  {
    name: 'Anita Desai',
    location: 'Bangalore',
    comment: 'Professional service, transparent pricing. The Australia trip was a dream!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=300&auto=format&fit=crop',
  },
];

const HeroWithCarousel = () => {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [currentTestIndex, setCurrentTestIndex] = useState(0);

  useEffect(() => {
    const bgTimer = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % premiumDestinations.length);
    }, 6000);
    return () => clearInterval(bgTimer);
  }, []);

  useEffect(() => {
    const testTimer = setInterval(() => {
      setCurrentTestIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(testTimer);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative min-h-[800px] overflow-hidden">
      {/* Ken Burns Effect Background */}
      <KenBurnsBackground
        currentIndex={currentBgIndex}
        images={premiumDestinations}
        overlayGradient="from-black/75 via-black/55 to-black/80"
      />

      {/* Content */}
      <div className="container-custom relative z-10 flex min-h-[800px] flex-col justify-between py-20">
        {/* Hero Content */}
        <div className="max-w-3xl text-white">
          <motion.h1
            className="font-heading text-4xl font-bold leading-tight drop-shadow-lg md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Discover Unique Destinations &{' '}
            <span className="text-secondary-400 drop-shadow-lg">Authentic Experiences</span>
          </motion.h1>

          <motion.p
            className="mt-6 text-lg text-neutral-100 drop-shadow-md md:text-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Curated journeys to Europe, Australia, Japan and beyond. Tailor-made
            itineraries with local experts for unforgettable adventures.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button size="lg" variant="secondary">
              Explore Tours
            </Button>
            <Button size="lg" variant="outline" className="border-secondary-400 text-white hover:bg-secondary-400/20">
              Request Free Quote
            </Button>
          </motion.div>
        </div>

        {/* Testimonial Carousel */}
        <motion.div
          className="relative mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="mx-auto max-w-4xl">
            <div className="mb-4 text-center">
              <h3 className="font-heading text-xl font-bold text-secondary-400 drop-shadow-md">
                What Our Travelers Say
              </h3>
            </div>

            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-2xl bg-white/95 p-8 backdrop-blur-sm"
                >
                  <div className="flex items-center justify-center space-x-1 mb-4">
                    {[...Array(testimonials[currentTestIndex].rating)].map((_, i) => (
                      <StarIcon key={i} className="h-6 w-6 text-secondary-900" />
                    ))}
                  </div>

                  <p className="text-center text-lg text-neutral-700 italic">
                    "{testimonials[currentTestIndex].comment}"
                  </p>

                  <div className="mt-6 flex items-center justify-center space-x-4">
                    <div className="relative h-14 w-14 overflow-hidden rounded-full">
                      <Image
                        src={testimonials[currentTestIndex].image}
                        alt={testimonials[currentTestIndex].name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="text-left">
                      <p className="font-heading font-bold text-neutral-900">
                        {testimonials[currentTestIndex].name}
                      </p>
                      <p className="text-sm text-neutral-600">
                        {testimonials[currentTestIndex].location}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Buttons */}
              <button
                onClick={prevTestimonial}
                className="absolute left-0 top-1/2 -translate-x-12 -translate-y-1/2 rounded-full bg-white/20 p-2 backdrop-blur-sm transition-all hover:bg-white/30"
                aria-label="Previous testimonial"
              >
                <ChevronLeftIcon className="h-6 w-6 text-white" />
              </button>
              <button
                onClick={nextTestimonial}
                className="absolute right-0 top-1/2 translate-x-12 -translate-y-1/2 rounded-full bg-white/20 p-2 backdrop-blur-sm transition-all hover:bg-white/30"
                aria-label="Next testimonial"
              >
                <ChevronRightIcon className="h-6 w-6 text-white" />
              </button>

              {/* Dots Indicator */}
              <div className="mt-6 flex justify-center space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestIndex(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentTestIndex
                        ? 'w-8 bg-secondary-400'
                        : 'w-2 bg-white/50 hover:bg-white/70'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroWithCarousel;
