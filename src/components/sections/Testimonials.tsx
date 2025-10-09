'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    location: 'Mumbai, India',
    rating: 5,
    comment:
      'Our Europe trip with Carving Holidays was absolutely phenomenal! Every detail was perfectly planned. The local guides were knowledgeable and the itinerary was well-paced. Highly recommend!',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&auto=format&fit=crop',
    tour: 'European Grand Tour',
  },
  {
    id: 2,
    name: 'Rajesh Kumar',
    location: 'Delhi, India',
    rating: 5,
    comment:
      'The Japan Cultural Experience exceeded all expectations. From cherry blossoms in Kyoto to the bustling streets of Tokyo, every moment was magical. Thank you Carving Holidays!',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop',
    tour: 'Japan Cultural Experience',
  },
  {
    id: 3,
    name: 'Anita Desai',
    location: 'Bangalore, India',
    rating: 5,
    comment:
      'Transparent pricing, no hidden costs, and exceptional service throughout. The Australia trip was a dream come true for our family. Professional and reliable agency!',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=300&auto=format&fit=crop',
    tour: 'Australia & New Zealand Adventure',
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gradient-to-br from-primary-50 to-white py-16 lg:py-24">
      <div className="container-custom">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold text-neutral-900 md:text-4xl">
            What Our <span className="text-primary-500">Travelers Say</span>
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            Real experiences from real travelers who've explored the world with us
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl bg-white p-6 shadow-soft transition-shadow duration-300 hover:shadow-medium"
            >
              {/* Rating */}
              <div className="flex items-center space-x-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-accent-400" />
                ))}
              </div>

              {/* Comment */}
              <p className="mt-4 text-neutral-700">{testimonial.comment}</p>

              {/* Tour Badge */}
              <div className="mt-4">
                <span className="inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-700">
                  {testimonial.tour}
                </span>
              </div>

              {/* Author */}
              <div className="mt-6 flex items-center space-x-3 border-t border-neutral-200 pt-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-neutral-900">{testimonial.name}</p>
                  <p className="text-sm text-neutral-500">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="mt-12 text-center">
          <p className="text-neutral-600">
            Rated <span className="font-bold text-primary-500">4.8/5</span> on{' '}
            <a
              href="https://traveltriangle.com/agents/333730333738332d436172-Carving-Holidays"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary-500 hover:underline"
            >
              TravelTriangle
            </a>{' '}
            • Trusted by 500+ travelers
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
