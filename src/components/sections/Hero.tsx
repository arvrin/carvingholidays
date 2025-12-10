'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

const Hero = () => {
  return (
    <section className="relative min-h-[max(70vh,28rem)] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2835&auto=format&fit=crop"
          alt="Travel destination"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 flex min-h-[inherit] items-center py-[var(--space-3xl)]">
        <div className="max-w-[60ch] text-white">
          <motion.h1
            className="font-heading text-fluid-4xl font-bold leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Discover Unique Destinations &{' '}
            <span className="text-secondary-400">Authentic Experiences</span>
          </motion.h1>

          <motion.p
            className="mt-[var(--space-md)] text-fluid-lg text-neutral-200"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Curated journeys to Europe, Australia, Japan and beyond. Tailor-made
            itineraries with local experts for unforgettable adventures.
          </motion.p>

          <motion.div
            className="mt-[var(--space-lg)] flex flex-wrap gap-[var(--space-sm)]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button size="lg" variant="secondary">
              Explore Tours
            </Button>
            <Button size="lg" variant="outline" className="border-secondary-400 text-white hover:bg-secondary-400/20 hover:border-secondary-300">
              Request Free Quote
            </Button>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            className="mt-[var(--space-xl)] flex flex-wrap gap-[var(--space-lg)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div>
              <div className="font-heading text-fluid-2xl font-bold text-secondary-400">500+</div>
              <div className="text-fluid-sm text-neutral-300">Happy Travelers</div>
            </div>
            <div>
              <div className="font-heading text-fluid-2xl font-bold text-secondary-400">25+</div>
              <div className="text-fluid-sm text-neutral-300">Destinations</div>
            </div>
            <div>
              <div className="font-heading text-fluid-2xl font-bold text-secondary-400">4.8/5</div>
              <div className="text-fluid-sm text-neutral-300">Average Rating</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-[var(--space-lg)] left-1/2 z-10 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <svg
          className="h-8 w-8 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;
