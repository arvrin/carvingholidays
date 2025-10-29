'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';
import Button from '../ui/Button';
import { premiumDestinations } from '@/data/destinations';
import KenBurnsBackground from './KenBurnsBackground';

const testimonials = [
  {
    name: 'Priya Sharma',
    comment: 'Our Europe trip was absolutely phenomenal! Every detail was perfectly planned.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&auto=format&fit=crop',
  },
  {
    name: 'Rajesh Kumar',
    comment: 'The Japan Cultural Experience exceeded all expectations. Every moment was magical.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop',
  },
];

const HeroWithTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % premiumDestinations.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[700px] overflow-hidden">
      {/* Ken Burns Effect Background */}
      <KenBurnsBackground
        currentIndex={currentIndex}
        images={premiumDestinations}
        overlayGradient="from-black/85 via-black/70 to-black/40"
      />

      {/* Content */}
      <div className="container-custom relative z-10 flex min-h-[700px] items-center py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Hero Content */}
          <div className="text-white">
            <motion.h1
              className="font-heading text-4xl font-bold leading-tight md:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Discover Unique Destinations &{' '}
              <span className="text-secondary-400">Authentic Experiences</span>
            </motion.h1>

            <motion.p
              className="mt-6 text-lg text-neutral-200 md:text-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Curated journeys to Europe, Australia, Japan and beyond. Tailor-made
              itineraries with local experts.
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

          {/* Right: Testimonials */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="mb-6 text-white">
              <h3 className="font-heading text-2xl font-bold drop-shadow-md">Loved by Travelers</h3>
              <p className="mt-2 text-neutral-200 drop-shadow-sm">See what our happy customers say</p>
            </div>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="rounded-2xl bg-white/95 p-6 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
              >
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-4 w-4 text-secondary-900" />
                  ))}
                </div>
                <p className="mt-3 text-sm text-neutral-700">{testimonial.comment}</p>
                <div className="mt-4 flex items-center space-x-3">
                  <div className="relative h-10 w-10 overflow-hidden rounded-full">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="font-semibold text-neutral-900">{testimonial.name}</p>
                </div>
              </motion.div>
            ))}
            <div className="rounded-xl bg-secondary-900/90 p-4 text-center backdrop-blur-sm">
              <p className="font-heading text-3xl font-bold text-white">4.8/5</p>
              <p className="text-sm text-white/90">500+ Happy Travelers</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroWithTestimonials;
