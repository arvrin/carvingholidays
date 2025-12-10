'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  GlobeAltIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  SparklesIcon,
  CheckCircleIcon,
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/outline';
import { CTASection } from '@/components/sections';
import Button from '@/components/ui/Button';

const stats = [
  { label: 'Years of Experience', value: '15+' },
  { label: 'Happy Travelers', value: '50,000+' },
  { label: 'Destinations', value: '40+' },
  { label: 'Tour Packages', value: '100+' },
];

const values = [
  {
    icon: GlobeAltIcon,
    title: 'Expert Knowledge',
    description: 'Our team has firsthand experience in every destination we offer, ensuring authentic and well-planned itineraries.',
  },
  {
    icon: UserGroupIcon,
    title: 'Personalized Service',
    description: 'We take time to understand your preferences and craft journeys that match your travel style and interests.',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Trust & Safety',
    description: 'Your safety is our priority. We partner with vetted hotels, airlines, and local operators worldwide.',
  },
  {
    icon: SparklesIcon,
    title: 'Memorable Experiences',
    description: 'We go beyond sightseeing to create immersive experiences that connect you with local cultures.',
  },
];

const team = [
  {
    name: 'Rajesh Sharma',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    description: 'With over 20 years in the travel industry, Rajesh founded Carving Holidays to share his passion for exploration.',
  },
  {
    name: 'Priya Verma',
    role: 'Head of Operations',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face',
    description: 'Priya ensures every trip runs smoothly, coordinating with partners across the globe.',
  },
  {
    name: 'Amit Patel',
    role: 'Senior Travel Consultant',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    description: 'Amit specializes in European and Australian tours, having visited over 30 countries.',
  },
  {
    name: 'Sneha Gupta',
    role: 'Customer Experience Manager',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
    description: 'Sneha leads our customer support team, ensuring every traveler feels valued and supported.',
  },
];

const milestones = [
  { year: '2009', title: 'Company Founded', description: 'Started as a small travel agency in Bhopal with a dream to make travel accessible.' },
  { year: '2012', title: 'First International Tour', description: 'Launched our first group tour to Europe, marking our entry into international travel.' },
  { year: '2015', title: 'IATA Accreditation', description: 'Received IATA accreditation, establishing credibility in the travel industry.' },
  { year: '2018', title: '25,000 Travelers', description: 'Crossed the milestone of serving 25,000 happy travelers.' },
  { year: '2022', title: 'Digital Transformation', description: 'Launched online booking platform and virtual tour experiences.' },
  { year: '2024', title: 'Expansion', description: 'Expanded to 40+ destinations with specialized group tours.' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 py-24 lg:py-32">
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="font-heading text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
                About{' '}
                <span className="text-secondary-400">Carving Holidays</span>
              </h1>
              <p className="mt-6 text-xl text-neutral-200">
                Your trusted partner in creating unforgettable travel experiences since 2009.
                We believe every journey should be as unique as the traveler.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/tours">
                  <Button variant="secondary" size="lg">
                    Explore Tours
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=600&fit=crop"
                  alt="Travel adventure"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
                <div className="text-4xl font-bold text-secondary-600">15+</div>
                <div className="text-sm text-neutral-600">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-400/5 rounded-full blur-3xl" />
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-secondary-600">{stat.value}</div>
                <div className="mt-2 text-sm text-neutral-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-4xl font-bold text-neutral-900 md:text-5xl">
                Our Story
              </h2>
              <div className="mt-6 space-y-4 text-neutral-600">
                <p>
                  Carving Holidays was born from a simple yet powerful idea: travel should be transformative,
                  not transactional. Founded in 2009 in Bhopal, we started as a small team of passionate
                  travelers who wanted to share the magic of exploration with others.
                </p>
                <p>
                  Over the years, we&apos;ve grown from organizing local tours to becoming a full-service
                  international travel agency. Today, we curate journeys to over 40 destinations across
                  6 continents, but our core mission remains unchanged: to create memories that last a lifetime.
                </p>
                <p>
                  What sets us apart is our commitment to understanding each traveler&apos;s unique needs.
                  Whether you&apos;re seeking adventure in the Swiss Alps, cultural immersion in Japan,
                  or a relaxing getaway in Bali, we craft experiences that resonate with your soul.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-48 rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1488085061387-422e29b40080?w=400&h=300&fit=crop"
                  alt="Team meeting"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-48 rounded-2xl overflow-hidden mt-8">
                <Image
                  src="https://images.unsplash.com/photo-1522199710521-72d69614c702?w=400&h=300&fit=crop"
                  alt="Travel planning"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-48 rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=400&h=300&fit=crop"
                  alt="Happy travelers"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-48 rounded-2xl overflow-hidden mt-8">
                <Image
                  src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=400&h=300&fit=crop"
                  alt="Beach destination"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="why-us" className="py-16 lg:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="font-heading text-4xl font-bold text-neutral-900 md:text-5xl">
              Why Choose Us
            </h2>
            <p className="mt-4 text-xl text-neutral-600">
              We&apos;re more than just a travel agency - we&apos;re your partners in adventure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-neutral-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="h-12 w-12 rounded-xl bg-secondary-100 flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-secondary-600" />
                </div>
                <h3 className="font-heading text-xl font-bold text-neutral-900 mb-2">{value.title}</h3>
                <p className="text-sm text-neutral-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="font-heading text-4xl font-bold text-neutral-900 md:text-5xl">
              Our Journey
            </h2>
            <p className="mt-4 text-xl text-neutral-600">
              Key milestones that shaped who we are today.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-secondary-200 transform md:-translate-x-1/2" />

              {milestones.map((milestone, index) => (
                <div key={milestone.year} className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'} pl-12 md:pl-0`}>
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                      <div className="text-secondary-600 font-bold text-lg">{milestone.year}</div>
                      <h3 className="font-heading text-xl font-bold text-neutral-900 mt-1">{milestone.title}</h3>
                      <p className="text-sm text-neutral-600 mt-2">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-secondary-600 rounded-full transform md:-translate-x-1/2 ring-4 ring-secondary-100" />
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16 lg:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="font-heading text-4xl font-bold text-neutral-900 md:text-5xl">
              Meet Our Team
            </h2>
            <p className="mt-4 text-xl text-neutral-600">
              Passionate travel experts dedicated to creating your perfect journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center group">
                <div className="relative h-64 w-64 mx-auto rounded-2xl overflow-hidden mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-heading text-xl font-bold text-neutral-900">{member.name}</h3>
                <p className="text-secondary-600 font-medium">{member.role}</p>
                <p className="mt-2 text-sm text-neutral-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="font-heading text-3xl font-bold text-neutral-900">
              Trusted & Certified
            </h2>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="flex items-center gap-2 bg-white rounded-xl px-6 py-4 shadow-sm">
              <CheckCircleIcon className="h-6 w-6 text-green-600" />
              <span className="font-medium text-neutral-700">IATA Accredited</span>
            </div>
            <div className="flex items-center gap-2 bg-white rounded-xl px-6 py-4 shadow-sm">
              <CheckCircleIcon className="h-6 w-6 text-green-600" />
              <span className="font-medium text-neutral-700">Ministry of Tourism Approved</span>
            </div>
            <div className="flex items-center gap-2 bg-white rounded-xl px-6 py-4 shadow-sm">
              <CheckCircleIcon className="h-6 w-6 text-green-600" />
              <span className="font-medium text-neutral-700">ISO 9001:2015 Certified</span>
            </div>
            <div className="flex items-center gap-2 bg-white rounded-xl px-6 py-4 shadow-sm">
              <CheckCircleIcon className="h-6 w-6 text-green-600" />
              <span className="font-medium text-neutral-700">TAAI Member</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Preview */}
      <section className="py-16 lg:py-24 bg-primary-900 text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-4xl font-bold md:text-5xl">
                Ready to Start Your Journey?
              </h2>
              <p className="mt-4 text-xl text-neutral-200">
                Get in touch with our travel experts to plan your next adventure.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <MapPinIcon className="h-6 w-6 text-secondary-400" />
                  <span>123 Travel Street, Bhopal, Madhya Pradesh 462001</span>
                </div>
                <div className="flex items-center gap-3">
                  <PhoneIcon className="h-6 w-6 text-secondary-400" />
                  <span>+91 87450 74800</span>
                </div>
                <div className="flex items-center gap-3">
                  <EnvelopeIcon className="h-6 w-6 text-secondary-400" />
                  <span>info@carvingholidays.com</span>
                </div>
              </div>
              <div className="mt-8">
                <Link href="/contact">
                  <Button variant="secondary" size="lg">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop"
                alt="Our office"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  );
}
