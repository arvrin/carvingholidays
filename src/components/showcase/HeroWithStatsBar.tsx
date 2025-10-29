'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { StarIcon, UserGroupIcon, GlobeAltIcon, HeartIcon } from '@heroicons/react/24/outline';
import Button from '../ui/Button';
import { premiumDestinations } from '@/data/destinations';
import KenBurnsBackground from './KenBurnsBackground';

const stats = [
  { icon: UserGroupIcon, value: '500+', label: 'Happy Travelers' },
  { icon: GlobeAltIcon, value: '25+', label: 'Destinations' },
  { icon: StarIcon, value: '4.8/5', label: 'Rating' },
  { icon: HeartIcon, value: '100%', label: 'Satisfaction' },
];

const testimonialHighlight = {
  quote: "Best travel agency we've ever worked with. Professional, reliable, and they truly care about creating perfect experiences!",
  author: 'Priya & Amit Sharma',
  location: 'Mumbai, India',
  image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&auto=format&fit=crop',
};

const HeroWithStatsBar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % premiumDestinations.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Ken Burns Effect Background */}
      <KenBurnsBackground
        currentIndex={currentIndex}
        images={premiumDestinations}
        overlayGradient="from-black/70 via-black/50 to-primary-900/95"
      />

      {/* Content */}
      <div className="container-custom relative z-10 flex min-h-screen flex-col justify-between py-20">
        {/* Hero Content */}
        <div className="flex-1 flex items-center">
          <div className="max-w-4xl text-white">
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

            {/* Featured Testimonial */}
            <motion.div
              className="mt-12 max-w-2xl rounded-2xl bg-white/10 p-6 backdrop-blur-md border border-white/20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="flex items-center space-x-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 fill-secondary-400 text-secondary-400 drop-shadow-md" />
                ))}
              </div>
              <p className="text-lg italic text-white drop-shadow-md">
                "{testimonialHighlight.quote}"
              </p>
              <div className="mt-4 flex items-center space-x-3">
                <div className="relative h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src={testimonialHighlight.image}
                    alt={testimonialHighlight.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-white">{testimonialHighlight.author}</p>
                  <p className="text-sm text-white/70">{testimonialHighlight.location}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats Bar */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="rounded-xl bg-white/10 p-6 backdrop-blur-sm text-center border border-white/20"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
                transition={{ duration: 0.2 }}
              >
                <stat.icon className="mx-auto h-8 w-8 text-secondary-400 mb-3" />
                <p className="font-heading text-3xl font-bold text-white">{stat.value}</p>
                <p className="mt-1 text-sm text-white/80">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroWithStatsBar;
