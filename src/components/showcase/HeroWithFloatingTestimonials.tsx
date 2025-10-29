'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';
import Button from '../ui/Button';
import { premiumDestinations } from '@/data/destinations';
import KenBurnsBackground from './KenBurnsBackground';

const testimonials = [
  {
    name: 'Priya Sharma',
    comment: 'Best Europe trip ever! Absolutely stunning destinations.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&auto=format&fit=crop',
    size: 'large',
  },
  {
    name: 'Rajesh K.',
    comment: 'Japan was magical!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop',
    size: 'small',
  },
  {
    name: 'Anita Desai',
    comment: 'Professional service and amazing experiences throughout.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=300&auto=format&fit=crop',
    size: 'medium',
  },
  {
    name: 'Vikram M.',
    comment: 'Dubai was spectacular! Highly recommend.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop',
    size: 'small',
  },
  {
    name: 'Meera P.',
    comment: 'The Australia tour was a dream come true. Beautiful landscapes and perfect planning.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop',
    size: 'large',
  },
  {
    name: 'Arjun S.',
    comment: 'Outstanding service!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=300&auto=format&fit=crop',
    size: 'small',
  },
  {
    name: 'Kavya R.',
    comment: 'Every moment was perfect from start to finish.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop',
    size: 'medium',
  },
  {
    name: 'Aditya N.',
    comment: 'Best travel agency ever! Will book again.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=300&auto=format&fit=crop',
    size: 'medium',
  },
  {
    name: 'Sneha T.',
    comment: 'Incredible!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=300&auto=format&fit=crop',
    size: 'small',
  },
  {
    name: 'Rohan K.',
    comment: 'The European tour was beyond our expectations. Loved every city!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=300&auto=format&fit=crop',
    size: 'large',
  },
  {
    name: 'Divya L.',
    comment: 'Seamless experience and wonderful memories created.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?q=80&w=300&auto=format&fit=crop',
    size: 'medium',
  },
  {
    name: 'Karan B.',
    comment: 'Perfect trip!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507081323647-4d250478b919?q=80&w=300&auto=format&fit=crop',
    size: 'small',
  },
];

const HeroWithFloatingTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % premiumDestinations.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[700px] overflow-hidden">
      {/* Ken Burns Effect Background */}
      <KenBurnsBackground
        currentIndex={currentIndex}
        images={premiumDestinations}
        overlayGradient="from-black/85 via-black/70 to-black/50"
      />

      {/* Content */}
      <div className="container-custom relative z-10 flex h-full items-center">
        <div className="max-w-2xl">
          <motion.h1
            className="font-heading text-4xl font-bold leading-tight md:text-5xl lg:text-6xl"
            style={{
              color: '#FFFFFF',
              textShadow: '0 6px 16px rgba(0, 0, 0, 0.95), 0 3px 8px rgba(0, 0, 0, 0.85), 0 1px 3px rgba(0, 0, 0, 0.8)'
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Discover Unique Destinations &{' '}
            <span style={{
              color: '#eebc55',
              textShadow: '0 6px 16px rgba(0, 0, 0, 0.95), 0 3px 8px rgba(0, 0, 0, 0.85), 0 1px 3px rgba(0, 0, 0, 0.8)'
            }}>Authentic Experiences</span>
          </motion.h1>

          <motion.p
            className="mt-6 text-lg md:text-xl"
            style={{
              color: '#FFFFFF',
              textShadow: '0 4px 12px rgba(0, 0, 0, 0.9), 0 2px 6px rgba(0, 0, 0, 0.8)'
            }}
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
              Explore Packages
            </Button>
            <Button size="lg" variant="outline" className="border-white/80 text-white hover:bg-white/20 backdrop-blur-sm">
              Request Free Quote
            </Button>
          </motion.div>

          <motion.div
            className="mt-8 flex items-center space-x-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="h-10 w-10 overflow-hidden rounded-full border-2 border-white shadow-lg">
                  <Image
                    src={`https://i.pravatar.cc/150?img=${i}`}
                    alt={`Traveler ${i}`}
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <div>
              <p className="text-sm font-semibold" style={{
                color: '#FFFFFF',
                textShadow: '0 2px 8px rgba(0, 0, 0, 0.9)'
              }}>500+ Happy Travelers</p>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="h-4 w-4 text-secondary-400" style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.8))' }} />
                ))}
                <span className="ml-1 text-sm" style={{
                  color: '#FFFFFF',
                  textShadow: '0 2px 8px rgba(0, 0, 0, 0.9)'
                }}>4.8/5</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Testimonial Cards - Desktop: Single Curved Stream, Mobile: Bottom Scrolling */}
      <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
        {/* Desktop: Vertical scroll on right */}
        <div className="hidden lg:flex absolute right-[8%] flex-col" style={{ top: 0 }}>
          {/* Triple testimonials for truly seamless loop */}
          <motion.div
            className="flex flex-col gap-5"
            animate={{
              y: [0, '-33.333%'],
            }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: 'linear',
              repeatType: 'loop',
            }}
          >
            {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => {
              // Define sizes
              const sizeClasses = {
                small: 'w-48',
                medium: 'w-56',
                large: 'w-64',
              };

              const sizePadding = {
                small: 'p-3',
                medium: 'p-4',
                large: 'p-5',
              };

              const avatarSize = {
                small: 'h-10 w-10',
                medium: 'h-12 w-12',
                large: 'h-14 w-14',
              };

              return (
                <motion.div
                  key={`testimonial-${index}`}
                  className={`${sizeClasses[testimonial.size as keyof typeof sizeClasses]} pointer-events-auto flex-shrink-0`}
                  animate={{
                    x: [0, 25, -15, 25, 0],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: index * 0.3,
                  }}
                >
                  <div className={`rounded-2xl bg-white/95 ${sizePadding[testimonial.size as keyof typeof sizePadding]} shadow-2xl backdrop-blur-sm border border-white/20 hover:scale-105 transition-transform`}>
                    <div className="flex items-center space-x-3">
                      <div className={`relative ${avatarSize[testimonial.size as keyof typeof avatarSize]} overflow-hidden rounded-full flex-shrink-0 ring-2 ring-secondary-400/20`}>
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className={`font-bold text-neutral-900 truncate ${testimonial.size === 'large' ? 'text-base' : 'text-sm'}`}>
                          {testimonial.name}
                        </p>
                        <div className="flex items-center space-x-0.5">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <StarIcon key={i} className={`text-secondary-900 fill-secondary-900 ${testimonial.size === 'small' ? 'h-2.5 w-2.5' : 'h-3 w-3'}`} />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className={`mt-2 text-neutral-700 ${testimonial.size === 'small' ? 'text-xs' : 'text-sm'} ${testimonial.size === 'large' ? 'leading-relaxed' : ''}`}>
                      "{testimonial.comment}"
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Mobile: Horizontal scroll at bottom */}
        <div className="lg:hidden absolute bottom-0 left-0 right-0 pb-4">
          <motion.div
            className="flex gap-3 px-4"
            animate={{
              x: [0, '-50%'],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
              repeatType: 'loop',
            }}
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={`mobile-testimonial-${index}`}
                className="w-64 flex-shrink-0 pointer-events-auto"
              >
                <div className="rounded-xl bg-white/95 p-3 shadow-xl backdrop-blur-sm border border-white/20">
                  <div className="flex items-center space-x-2.5">
                    <div className="relative h-10 w-10 overflow-hidden rounded-full flex-shrink-0 ring-2 ring-secondary-400/20">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-neutral-900 truncate text-sm">
                        {testimonial.name}
                      </p>
                      <div className="flex items-center space-x-0.5">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <StarIcon key={i} className="h-2.5 w-2.5 text-secondary-900 fill-secondary-900" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="mt-2 text-neutral-700 text-xs leading-relaxed">
                    "{testimonial.comment}"
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroWithFloatingTestimonials;
