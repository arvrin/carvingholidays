'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  BriefcaseIcon,
  MapPinIcon,
  ClockIcon,
  CurrencyRupeeIcon,
  ChevronDownIcon,
  GlobeAltIcon,
  UserGroupIcon,
  HeartIcon,
  AcademicCapIcon,
  SparklesIcon,
  RocketLaunchIcon,
  ChatBubbleLeftRightIcon,
} from '@heroicons/react/24/outline';

const benefits = [
  {
    icon: GlobeAltIcon,
    title: 'Travel Perks',
    description: 'Discounted travel packages and complimentary FAM trips to explore destinations.',
  },
  {
    icon: HeartIcon,
    title: 'Health Insurance',
    description: 'Comprehensive health insurance for you and your family.',
  },
  {
    icon: AcademicCapIcon,
    title: 'Learning & Development',
    description: 'IATA training, industry certifications, and skill development programs.',
  },
  {
    icon: UserGroupIcon,
    title: 'Great Team Culture',
    description: 'Work with passionate travel enthusiasts in a collaborative environment.',
  },
  {
    icon: SparklesIcon,
    title: 'Performance Bonuses',
    description: 'Attractive incentives and bonuses based on performance.',
  },
  {
    icon: RocketLaunchIcon,
    title: 'Career Growth',
    description: 'Clear career progression paths and promotion opportunities.',
  },
];

const openPositions = [
  {
    id: 1,
    title: 'Senior Travel Consultant',
    department: 'Sales',
    location: 'Mumbai',
    type: 'Full-time',
    experience: '3-5 years',
    salary: '₹5-8 LPA',
    description: 'We\'re looking for an experienced travel consultant to join our sales team. You\'ll be responsible for curating exceptional travel experiences and building lasting client relationships.',
    responsibilities: [
      'Handle high-value client inquiries and provide expert travel advice',
      'Design and customize tour packages based on client preferences',
      'Manage end-to-end booking process including flights, hotels, and tours',
      'Build and maintain relationships with corporate clients',
      'Achieve monthly and quarterly sales targets',
      'Stay updated on travel trends, destinations, and industry regulations',
    ],
    requirements: [
      '3-5 years of experience in travel industry sales',
      'Excellent communication and interpersonal skills',
      'Strong knowledge of international destinations',
      'Experience with GDS systems (Amadeus/Galileo preferred)',
      'Ability to work under pressure and meet deadlines',
      'Graduate degree required; IATA certification preferred',
    ],
  },
  {
    id: 2,
    title: 'Digital Marketing Executive',
    department: 'Marketing',
    location: 'Mumbai',
    type: 'Full-time',
    experience: '2-4 years',
    salary: '₹4-6 LPA',
    description: 'Join our marketing team to drive our digital presence and create compelling campaigns that inspire travelers to explore the world with Carving Holidays.',
    responsibilities: [
      'Manage social media accounts and create engaging content',
      'Plan and execute digital marketing campaigns',
      'Optimize SEO and manage Google Ads campaigns',
      'Analyze campaign performance and prepare reports',
      'Collaborate with design team for creative assets',
      'Manage email marketing and lead nurturing campaigns',
    ],
    requirements: [
      '2-4 years of digital marketing experience',
      'Proficiency in social media marketing and content creation',
      'Experience with Google Analytics, Google Ads, and Meta Ads',
      'Strong copywriting and creative skills',
      'Knowledge of SEO best practices',
      'Bachelor\'s degree in Marketing or related field',
    ],
  },
  {
    id: 3,
    title: 'Tour Operations Executive',
    department: 'Operations',
    location: 'Mumbai',
    type: 'Full-time',
    experience: '1-3 years',
    salary: '₹3-5 LPA',
    description: 'Be the backbone of our tour operations, ensuring seamless execution of tour packages and exceptional service delivery for our travelers.',
    responsibilities: [
      'Coordinate with hotels, airlines, and local partners',
      'Prepare and verify travel documents and itineraries',
      'Handle visa processing and documentation',
      'Manage supplier relationships and negotiate rates',
      'Resolve operational issues during tours',
      'Maintain booking records and databases',
    ],
    requirements: [
      '1-3 years of experience in travel operations',
      'Strong organizational and multitasking abilities',
      'Good knowledge of visa procedures for various countries',
      'Excellent attention to detail',
      'Proficiency in MS Office',
      'Graduate degree required',
    ],
  },
  {
    id: 4,
    title: 'Customer Service Representative',
    department: 'Customer Support',
    location: 'Mumbai',
    type: 'Full-time',
    experience: '1-2 years',
    salary: '₹2.5-4 LPA',
    description: 'Be the first point of contact for our customers, providing excellent service and ensuring every traveler feels valued and supported.',
    responsibilities: [
      'Handle customer inquiries via phone, email, and chat',
      'Assist customers with booking queries and modifications',
      'Resolve complaints and escalate issues when necessary',
      'Provide destination information and travel advice',
      'Follow up with customers for feedback and reviews',
      'Maintain customer records in CRM system',
    ],
    requirements: [
      '1-2 years of customer service experience',
      'Excellent verbal and written communication',
      'Patience and empathy in handling customer issues',
      'Basic knowledge of travel industry',
      'Willingness to work in shifts if required',
      'Graduate degree required',
    ],
  },
  {
    id: 5,
    title: 'Accounts Executive',
    department: 'Finance',
    location: 'Mumbai',
    type: 'Full-time',
    experience: '2-4 years',
    salary: '₹3.5-5 LPA',
    description: 'Join our finance team to manage accounting operations and ensure financial accuracy across our business operations.',
    responsibilities: [
      'Handle day-to-day accounting transactions',
      'Process vendor payments and customer invoices',
      'Reconcile bank statements and accounts',
      'Prepare financial reports and statements',
      'Assist with GST filings and tax compliance',
      'Manage accounts receivable and payable',
    ],
    requirements: [
      '2-4 years of accounting experience',
      'B.Com/M.Com with strong accounting fundamentals',
      'Proficiency in Tally and MS Excel',
      'Knowledge of GST and TDS regulations',
      'Strong analytical and problem-solving skills',
      'Attention to detail and accuracy',
    ],
  },
];

export default function CareersPage() {
  const [expandedJob, setExpandedJob] = useState<number | null>(null);
  const [selectedDepartment, setSelectedDepartment] = useState('All');

  const departments = ['All', ...new Set(openPositions.map(job => job.department))];

  const filteredJobs = selectedDepartment === 'All'
    ? openPositions
    : openPositions.filter(job => job.department === selectedDepartment);

  const toggleJob = (id: number) => {
    setExpandedJob(expandedJob === id ? null : id);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 py-24">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="font-heading text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
              Join Our{' '}
              <span className="text-secondary-400">Journey</span>
            </h1>
            <p className="mt-6 text-xl text-neutral-200">
              Build a rewarding career in travel. Work with passionate people, explore the world,
              and help create unforgettable experiences for travelers.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#positions"
                className="inline-flex items-center justify-center gap-2 bg-secondary-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-secondary-700 transition-colors"
              >
                View Open Positions
              </a>
              <a
                href="https://wa.me/918745074800?text=Hi,%20I'm%20interested%20in%20career%20opportunities%20at%20Carving%20Holidays"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition-colors"
              >
                <ChatBubbleLeftRightIcon className="h-5 w-5" />
                Chat with HR
              </a>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary-400/10 rounded-full blur-3xl" />
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-heading text-4xl font-bold text-neutral-900 md:text-5xl">
              Why Join Carving Holidays?
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              We believe in creating a workplace where passion for travel meets professional growth.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="p-6 rounded-2xl bg-neutral-50 hover:bg-secondary-50 transition-colors"
              >
                <div className="w-14 h-14 bg-secondary-100 rounded-xl flex items-center justify-center mb-4">
                  <benefit.icon className="h-7 w-7 text-secondary-600" />
                </div>
                <h3 className="font-heading text-xl font-bold text-neutral-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-neutral-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-neutral-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-4xl font-bold text-neutral-900 mb-6">
                Our Culture
              </h2>
              <div className="space-y-4 text-neutral-600">
                <p>
                  At Carving Holidays, we're more than just a travel company – we're a family of
                  travel enthusiasts who are passionate about creating memorable journeys for our clients.
                </p>
                <p>
                  We foster a culture of collaboration, innovation, and continuous learning.
                  Our team members are encouraged to share ideas, take ownership, and grow
                  both personally and professionally.
                </p>
                <p>
                  Whether it's organizing team outings, celebrating festivals together, or
                  supporting each other through challenges, we believe in building strong bonds
                  that go beyond work.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-white rounded-xl">
                  <p className="text-3xl font-bold text-secondary-600">15+</p>
                  <p className="text-sm text-neutral-600">Years in Industry</p>
                </div>
                <div className="text-center p-4 bg-white rounded-xl">
                  <p className="text-3xl font-bold text-secondary-600">50+</p>
                  <p className="text-sm text-neutral-600">Team Members</p>
                </div>
                <div className="text-center p-4 bg-white rounded-xl">
                  <p className="text-3xl font-bold text-secondary-600">40+</p>
                  <p className="text-sm text-neutral-600">Destinations Covered</p>
                </div>
                <div className="text-center p-4 bg-white rounded-xl">
                  <p className="text-3xl font-bold text-secondary-600">4.8</p>
                  <p className="text-sm text-neutral-600">Glassdoor Rating</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-secondary-100 rounded-2xl h-48 flex items-center justify-center">
                    <span className="text-6xl">✈️</span>
                  </div>
                  <div className="bg-primary-100 rounded-2xl h-32 flex items-center justify-center">
                    <span className="text-4xl">🌏</span>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="bg-primary-100 rounded-2xl h-32 flex items-center justify-center">
                    <span className="text-4xl">👥</span>
                  </div>
                  <div className="bg-secondary-100 rounded-2xl h-48 flex items-center justify-center">
                    <span className="text-6xl">🏆</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="positions" className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-heading text-4xl font-bold text-neutral-900 md:text-5xl">
              Open Positions
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              Find the perfect role that matches your skills and passion.
            </p>
          </div>

          {/* Department Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {departments.map(dept => (
              <button
                key={dept}
                onClick={() => setSelectedDepartment(dept)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedDepartment === dept
                    ? 'bg-secondary-600 text-white'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>

          {/* Job Listings */}
          <div className="max-w-4xl mx-auto space-y-4">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white border border-neutral-200 rounded-2xl overflow-hidden hover:border-secondary-300 transition-colors"
              >
                <button
                  onClick={() => toggleJob(job.id)}
                  className="w-full p-6 text-left"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="font-heading text-xl font-bold text-neutral-900">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-3 mt-2 text-sm text-neutral-600">
                        <span className="flex items-center gap-1">
                          <BriefcaseIcon className="h-4 w-4" />
                          {job.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPinIcon className="h-4 w-4" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <ClockIcon className="h-4 w-4" />
                          {job.type}
                        </span>
                        <span className="flex items-center gap-1">
                          <CurrencyRupeeIcon className="h-4 w-4" />
                          {job.salary}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-neutral-500">{job.experience}</span>
                      <ChevronDownIcon
                        className={`h-5 w-5 text-neutral-500 transition-transform ${
                          expandedJob === job.id ? 'rotate-180' : ''
                        }`}
                      />
                    </div>
                  </div>
                </button>

                {expandedJob === job.id && (
                  <div className="px-6 pb-6 pt-2 border-t border-neutral-100">
                    <p className="text-neutral-600 mb-6">{job.description}</p>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-neutral-900 mb-3">Responsibilities</h4>
                        <ul className="space-y-2">
                          {job.responsibilities.map((item, index) => (
                            <li key={index} className="flex gap-2 text-sm text-neutral-600">
                              <span className="text-secondary-600 mt-1">•</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-neutral-900 mb-3">Requirements</h4>
                        <ul className="space-y-2">
                          {job.requirements.map((item, index) => (
                            <li key={index} className="flex gap-2 text-sm text-neutral-600">
                              <span className="text-secondary-600 mt-1">•</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-neutral-100 flex flex-col sm:flex-row gap-3">
                      <a
                        href={`mailto:careers@carvingholidays.com?subject=Application for ${job.title}&body=Hi,%0D%0A%0D%0AI am interested in the ${job.title} position at Carving Holidays.%0D%0A%0D%0APlease find my resume attached.%0D%0A%0D%0ARegards`}
                        className="inline-flex items-center justify-center gap-2 bg-secondary-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-secondary-700 transition-colors"
                      >
                        Apply via Email
                      </a>
                      <a
                        href={`https://wa.me/918745074800?text=Hi,%20I'm%20interested%20in%20the%20${encodeURIComponent(job.title)}%20position%20at%20Carving%20Holidays.%20I%20have%20${encodeURIComponent(job.experience)}%20of%20experience.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors"
                      >
                        <ChatBubbleLeftRightIcon className="h-5 w-5" />
                        Apply via WhatsApp
                      </a>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* No Matching Position */}
      <section className="py-16 bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="font-heading text-2xl font-bold text-neutral-900 mb-4">
              Don't see a matching position?
            </h3>
            <p className="text-neutral-600 mb-6">
              We're always looking for talented individuals to join our team. Send us your resume
              and we'll keep you in mind for future opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:careers@carvingholidays.com?subject=General Application&body=Hi,%0D%0A%0D%0AI am interested in joining Carving Holidays.%0D%0A%0D%0APlease find my resume attached.%0D%0A%0D%0ARegards"
                className="inline-flex items-center justify-center gap-2 bg-secondary-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-secondary-700 transition-colors"
              >
                Send Your Resume
              </a>
              <a
                href="https://wa.me/918745074800?text=Hi,%20I'm%20interested%20in%20career%20opportunities%20at%20Carving%20Holidays"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-neutral-300 text-neutral-700 px-6 py-3 rounded-xl font-semibold hover:bg-white transition-colors"
              >
                <ChatBubbleLeftRightIcon className="h-5 w-5" />
                Chat with HR
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact HR */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary-900 to-primary-950 rounded-3xl p-8 md:p-12 text-white text-center">
            <h3 className="font-heading text-3xl font-bold mb-4">
              Questions about careers?
            </h3>
            <p className="text-neutral-200 mb-6">
              Our HR team is here to help. Reach out with any questions about
              open positions, the application process, or life at Carving Holidays.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:careers@carvingholidays.com"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary-900 px-6 py-3 rounded-xl font-semibold hover:bg-neutral-100 transition-colors"
              >
                careers@carvingholidays.com
              </a>
              <a
                href="tel:+918745074800"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition-colors"
              >
                +91 87450 74800
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
