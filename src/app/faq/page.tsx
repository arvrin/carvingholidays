'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
  ChatBubbleLeftRightIcon,
  PhoneIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/outline';
import Button from '@/components/ui/Button';

const faqCategories = [
  {
    name: 'Booking & Payments',
    faqs: [
      {
        question: 'How do I book a tour package?',
        answer: 'You can book a tour package through our website by selecting your desired tour and clicking "Book Now", or contact us directly via phone (+91 87450 74800) or email. Our travel consultants will guide you through the booking process and help customize your trip.',
      },
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept multiple payment methods including credit/debit cards (Visa, MasterCard, RuPay), net banking, UPI (Google Pay, PhonePe, Paytm), and bank transfers. For international payments, we also accept wire transfers.',
      },
      {
        question: 'Is there a booking deposit required?',
        answer: 'Yes, we require a deposit to confirm your booking. Typically, this is 25-30% of the total package cost. The remaining balance is due 30 days before departure. For bookings made within 30 days of departure, full payment is required.',
      },
      {
        question: 'Can I pay in installments?',
        answer: 'Yes, we offer EMI options through select banks and payment partners. You can also make partial payments in installments before the final payment due date. Contact our team for customized payment plans.',
      },
      {
        question: 'Will I receive a confirmation after booking?',
        answer: 'Yes, you will receive an email confirmation within 24 hours of booking with your itinerary details, payment receipt, and important travel information. A physical copy can also be couriered upon request.',
      },
    ],
  },
  {
    name: 'Cancellation & Refunds',
    faqs: [
      {
        question: 'What is your cancellation policy?',
        answer: 'Our standard cancellation policy: More than 45 days before departure - 10% cancellation fee; 30-45 days - 25% fee; 15-30 days - 50% fee; 7-15 days - 75% fee; Less than 7 days - No refund. Some tours may have specific policies, which will be mentioned in your booking confirmation.',
      },
      {
        question: 'How long does it take to process a refund?',
        answer: 'Refunds are processed within 7-10 business days after cancellation approval. The amount will be credited to your original payment method. Bank processing may take an additional 3-5 business days.',
      },
      {
        question: 'Can I reschedule my trip instead of cancelling?',
        answer: 'Yes, rescheduling is possible subject to availability and may incur a nominal fee. We recommend rescheduling at least 30 days before departure for the best options. Contact us to discuss available dates.',
      },
      {
        question: 'What happens if Carving Holidays cancels a tour?',
        answer: 'If we cancel a tour due to unforeseen circumstances (natural disasters, political unrest, pandemic restrictions), you will receive a full refund or the option to reschedule to another date at no extra cost.',
      },
    ],
  },
  {
    name: 'Tour Packages & Customization',
    faqs: [
      {
        question: 'Are flights included in tour packages?',
        answer: 'Most of our international tour packages include round-trip flights from major Indian cities. Domestic packages typically do not include flights unless specified. Check individual tour details or ask our consultants for clarification.',
      },
      {
        question: 'Can I customize a tour package?',
        answer: 'Absolutely! We specialize in customized tours. Tell us your preferences, budget, travel dates, and interests, and we\'ll create a personalized itinerary. Customization options include hotel upgrades, additional activities, extended stays, and more.',
      },
      {
        question: 'What is included in the tour price?',
        answer: 'Standard inclusions are: accommodation, meals as specified, transportation, sightseeing tours, entrance fees to attractions mentioned, and services of a tour guide. Specific inclusions vary by package and are clearly listed in each tour description.',
      },
      {
        question: 'Do you offer group discounts?',
        answer: 'Yes, we offer attractive discounts for groups of 10 or more travelers. Corporate groups, family reunions, and school trips are eligible for special rates. Contact us for a customized group quote.',
      },
      {
        question: 'Can I extend my stay before or after the tour?',
        answer: 'Yes, pre-tour and post-tour extensions are available. We can arrange additional accommodation, transfers, and activities. Let us know your requirements at the time of booking.',
      },
    ],
  },
  {
    name: 'Visa & Travel Documents',
    faqs: [
      {
        question: 'Do you assist with visa applications?',
        answer: 'Yes, we provide comprehensive visa assistance including documentation guidance, application form filling, appointment scheduling, and submission. Visa fees are usually not included in tour prices unless specified.',
      },
      {
        question: 'What documents do I need for international travel?',
        answer: 'You\'ll need a valid passport (with at least 6 months validity from return date), visa for the destination country, travel insurance, flight tickets, hotel vouchers, and tour itinerary. We provide a detailed checklist specific to your destination.',
      },
      {
        question: 'What if my visa is rejected?',
        answer: 'In case of visa rejection, we offer partial refunds minus visa processing fees and any non-refundable costs. We recommend applying for visas well in advance and can help with appeal processes where applicable.',
      },
      {
        question: 'Do you provide travel insurance?',
        answer: 'Yes, we can arrange comprehensive travel insurance covering medical emergencies, trip cancellation, lost baggage, and more. While optional, we strongly recommend travel insurance for all international trips.',
      },
    ],
  },
  {
    name: 'During the Tour',
    faqs: [
      {
        question: 'Will there be a tour guide throughout the trip?',
        answer: 'Yes, all our group tours include an experienced tour manager who accompanies you throughout the journey. For private tours, local guides are available at each destination. Our guides are multilingual (English and Hindi).',
      },
      {
        question: 'What is the typical group size?',
        answer: 'Our group tours typically have 15-40 travelers, depending on the destination. We ensure comfortable coach sizes and manageable groups for the best experience. Private and small group tours are also available.',
      },
      {
        question: 'Are meals included? What about dietary requirements?',
        answer: 'Most tours include breakfast daily, with lunch and dinner as specified. We accommodate vegetarian, Jain, and common dietary requirements. Please inform us of any food allergies or special needs at booking.',
      },
      {
        question: 'What happens if I miss the group or get separated?',
        answer: 'Our tour managers provide emergency contact numbers. If separated, contact the tour manager immediately. We have protocols to assist travelers and will help you rejoin the group safely.',
      },
      {
        question: 'Can I leave the group for personal activities?',
        answer: 'Yes, during free time you can explore independently. However, for scheduled activities, we recommend staying with the group. Inform your tour manager if you plan to skip any activity.',
      },
    ],
  },
  {
    name: 'Health & Safety',
    faqs: [
      {
        question: 'What COVID-19 precautions are in place?',
        answer: 'We follow all government guidelines and destination-specific protocols. This includes sanitized transportation, verified hotel hygiene standards, and flexible booking policies. Check current requirements for your specific destination.',
      },
      {
        question: 'What if I fall ill during the tour?',
        answer: 'Our tour managers are trained in first aid and have access to local medical facilities. Travel insurance covers medical emergencies. We\'ll assist with hospital visits, medication, and notify your family if needed.',
      },
      {
        question: 'Are your tours suitable for senior citizens?',
        answer: 'Many of our tours are senior-friendly with moderate walking and comfortable pacing. We also offer specialized senior tours with lighter itineraries. Please mention any mobility concerns at booking.',
      },
      {
        question: 'Is it safe to travel to [destination]?',
        answer: 'We continuously monitor travel advisories and only operate tours to safe destinations. Our team provides pre-departure briefings on safety guidelines specific to your destination.',
      },
    ],
  },
];

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState('all');

  const toggleItem = (id: string) => {
    setOpenItems(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const filteredCategories = faqCategories.map(category => ({
    ...category,
    faqs: category.faqs.filter(
      faq =>
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter(category =>
    activeCategory === 'all' || category.name === activeCategory
  ).filter(category => category.faqs.length > 0);

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 py-24">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="font-heading text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
              Frequently Asked{' '}
              <span className="text-secondary-400">Questions</span>
            </h1>
            <p className="mt-6 text-xl text-neutral-200">
              Find answers to common questions about our tours, bookings, and travel services.
            </p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary-400/10 rounded-full blur-3xl" />
      </section>

      {/* Search Section */}
      <section className="py-8 bg-white border-b border-neutral-200">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <MagnifyingGlassIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400" />
              <input
                type="text"
                placeholder="Search for answers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl border border-neutral-300 focus:border-secondary-500 focus:outline-none focus:ring-2 focus:ring-secondary-500/20 text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 bg-neutral-50">
        <div className="container-custom">
          <div className="flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === 'all'
                  ? 'bg-secondary-600 text-white'
                  : 'bg-white text-neutral-700 hover:bg-neutral-100'
              }`}
            >
              All Categories
            </button>
            {faqCategories.map(category => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.name
                    ? 'bg-secondary-600 text-white'
                    : 'bg-white text-neutral-700 hover:bg-neutral-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {filteredCategories.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-neutral-600 text-lg">No results found for "{searchQuery}"</p>
                <p className="text-neutral-500 mt-2">Try a different search term or browse categories above.</p>
              </div>
            ) : (
              filteredCategories.map((category) => (
                <div key={category.name} className="mb-12">
                  <h2 className="font-heading text-2xl font-bold text-neutral-900 mb-6">
                    {category.name}
                  </h2>
                  <div className="space-y-4">
                    {category.faqs.map((faq, index) => {
                      const itemId = `${category.name}-${index}`;
                      const isOpen = openItems.includes(itemId);
                      return (
                        <div
                          key={itemId}
                          className="bg-white rounded-xl border border-neutral-200 overflow-hidden"
                        >
                          <button
                            onClick={() => toggleItem(itemId)}
                            className="w-full flex items-center justify-between p-6 text-left hover:bg-neutral-50 transition-colors"
                          >
                            <span className="font-semibold text-neutral-900 pr-4">{faq.question}</span>
                            <ChevronDownIcon
                              className={`h-5 w-5 text-neutral-500 flex-shrink-0 transition-transform ${
                                isOpen ? 'rotate-180' : ''
                              }`}
                            />
                          </button>
                          {isOpen && (
                            <div className="px-6 pb-6">
                              <p className="text-neutral-600 leading-relaxed">{faq.answer}</p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-3xl font-bold text-neutral-900 md:text-4xl">
              Still Have Questions?
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              Can't find what you're looking for? Our travel experts are here to help.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/918745074800"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors"
              >
                <ChatBubbleLeftRightIcon className="h-5 w-5" />
                Chat on WhatsApp
              </a>
              <a
                href="tel:+918745074800"
                className="inline-flex items-center justify-center gap-2 bg-secondary-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-secondary-700 transition-colors"
              >
                <PhoneIcon className="h-5 w-5" />
                Call Us
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-neutral-300 text-neutral-700 px-6 py-3 rounded-xl font-semibold hover:bg-neutral-50 transition-colors"
              >
                <EnvelopeIcon className="h-5 w-5" />
                Contact Form
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
