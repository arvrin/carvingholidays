import React from 'react';
import {
  SparklesIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Tailor-Made Itineraries',
    description:
      'Every journey is crafted to match your interests, pace, and budget. No cookie-cutter packages.',
    icon: SparklesIcon,
  },
  {
    name: 'Local Experts',
    description:
      'Connect with passionate guides who know the hidden gems and authentic experiences.',
    icon: UserGroupIcon,
  },
  {
    name: 'Transparent Pricing',
    description:
      'No hidden costs. Clear pricing with detailed breakdowns so you know exactly what you are paying for.',
    icon: CurrencyDollarIcon,
  },
  {
    name: 'Safety & Support',
    description:
      '24/7 support throughout your journey. Travel with confidence knowing we have got your back.',
    icon: ShieldCheckIcon,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-neutral-50 py-16 lg:py-24">
      <div className="container-custom">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold text-neutral-900 md:text-4xl">
            Why Choose <span className="text-secondary-600">Carving Holidays</span>
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            We don't just plan trips, we craft unforgettable experiences tailored to you.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="group rounded-2xl bg-white p-6 shadow-soft transition-all duration-300 hover:shadow-medium"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary-50 text-secondary-600 transition-colors duration-300 group-hover:bg-secondary-500 group-hover:text-white">
                <feature.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-heading text-lg font-semibold text-neutral-900">
                {feature.name}
              </h3>
              <p className="mt-2 text-sm text-neutral-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-neutral-600">
            Ready to start your adventure?{' '}
            <a href="/contact" className="font-medium text-secondary-600 hover:text-secondary-700 transition-colors">
              Get in touch →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
