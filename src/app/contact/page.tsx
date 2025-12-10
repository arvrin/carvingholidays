'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline';
import Button from '@/components/ui/Button';

const contactInfo = [
  {
    icon: MapPinIcon,
    title: 'Visit Us',
    details: ['123 Travel Street', 'Bhopal, Madhya Pradesh 462001', 'India'],
  },
  {
    icon: PhoneIcon,
    title: 'Call Us',
    details: ['+91 87450 74800'],
  },
  {
    icon: EnvelopeIcon,
    title: 'Email Us',
    details: ['info@carvingholidays.com', 'bookings@carvingholidays.com'],
  },
  {
    icon: ClockIcon,
    title: 'Working Hours',
    details: ['Monday - Saturday', '9:00 AM - 7:00 PM', 'Sunday: Closed'],
  },
];

const inquiryTypes = [
  'General Inquiry',
  'Tour Package Inquiry',
  'Group Booking',
  'Corporate Travel',
  'Custom Tour Request',
  'Feedback',
  'Other',
];

const faqs = [
  {
    question: 'How do I book a tour package?',
    answer: 'You can book directly through our website by selecting a tour and clicking "Book Now", or contact us via phone/email for personalized assistance.',
  },
  {
    question: 'What is the cancellation policy?',
    answer: 'Cancellation policies vary by tour. Generally, cancellations 30+ days before departure receive 75% refund, 15-30 days receive 50%, and less than 15 days are non-refundable.',
  },
  {
    question: 'Do you offer customized tours?',
    answer: 'Yes! We specialize in creating customized itineraries. Contact us with your preferences, budget, and travel dates, and we\'ll craft a personalized experience.',
  },
  {
    question: 'Are flights included in tour packages?',
    answer: 'Most international tour packages include flights. Domestic packages may or may not include flights - please check individual tour details.',
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: '',
    destination: '',
    travelDates: '',
    travelers: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after showing success message
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        inquiryType: '',
        destination: '',
        travelDates: '',
        travelers: '',
        message: '',
      });
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 py-24">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="font-heading text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
              Get In{' '}
              <span className="text-secondary-400">Touch</span>
            </h1>
            <p className="mt-6 text-xl text-neutral-200">
              Have questions about our tours? Ready to book your dream vacation?
              We&apos;re here to help you every step of the way.
            </p>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-400/5 rounded-full blur-3xl" />
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info) => (
              <div key={info.title} className="bg-neutral-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="h-12 w-12 rounded-xl bg-secondary-100 flex items-center justify-center mb-4">
                  <info.icon className="h-6 w-6 text-secondary-600" />
                </div>
                <h3 className="font-heading text-lg font-bold text-neutral-900 mb-3">{info.title}</h3>
                {info.details.map((detail, index) => (
                  <p key={index} className="text-sm text-neutral-600">{detail}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <ChatBubbleLeftRightIcon className="h-8 w-8 text-secondary-600" />
                <h2 className="font-heading text-3xl font-bold text-neutral-900">Send us a Message</h2>
              </div>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">Message Sent!</h3>
                  <p className="text-neutral-600">Thank you for reaching out. We&apos;ll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-neutral-900 focus:border-secondary-500 focus:outline-none focus:ring-2 focus:ring-secondary-500/20"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-neutral-900 focus:border-secondary-500 focus:outline-none focus:ring-2 focus:ring-secondary-500/20"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-neutral-900 focus:border-secondary-500 focus:outline-none focus:ring-2 focus:ring-secondary-500/20"
                        placeholder="+91 87450 74800"
                      />
                    </div>
                    <div>
                      <label htmlFor="inquiryType" className="block text-sm font-medium text-neutral-700 mb-2">
                        Inquiry Type *
                      </label>
                      <select
                        id="inquiryType"
                        name="inquiryType"
                        required
                        value={formData.inquiryType}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-neutral-900 focus:border-secondary-500 focus:outline-none focus:ring-2 focus:ring-secondary-500/20"
                      >
                        <option value="">Select inquiry type</option>
                        {inquiryTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <label htmlFor="destination" className="block text-sm font-medium text-neutral-700 mb-2">
                        Preferred Destination
                      </label>
                      <input
                        type="text"
                        id="destination"
                        name="destination"
                        value={formData.destination}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-neutral-900 focus:border-secondary-500 focus:outline-none focus:ring-2 focus:ring-secondary-500/20"
                        placeholder="e.g., Europe, Japan"
                      />
                    </div>
                    <div>
                      <label htmlFor="travelDates" className="block text-sm font-medium text-neutral-700 mb-2">
                        Travel Dates
                      </label>
                      <input
                        type="text"
                        id="travelDates"
                        name="travelDates"
                        value={formData.travelDates}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-neutral-900 focus:border-secondary-500 focus:outline-none focus:ring-2 focus:ring-secondary-500/20"
                        placeholder="e.g., March 2026"
                      />
                    </div>
                    <div>
                      <label htmlFor="travelers" className="block text-sm font-medium text-neutral-700 mb-2">
                        No. of Travelers
                      </label>
                      <input
                        type="number"
                        id="travelers"
                        name="travelers"
                        min="1"
                        value={formData.travelers}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-neutral-900 focus:border-secondary-500 focus:outline-none focus:ring-2 focus:ring-secondary-500/20"
                        placeholder="2"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-neutral-900 focus:border-secondary-500 focus:outline-none focus:ring-2 focus:ring-secondary-500/20 resize-none"
                      placeholder="Tell us about your travel plans or questions..."
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="secondary"
                    size="lg"
                    fullWidth
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              )}
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-6">
              {/* Map */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
                <div className="relative h-80">
                  <Image
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=400&fit=crop"
                    alt="Map location"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPinIcon className="h-5 w-5" />
                      <span className="font-semibold">Carving Holidays Office</span>
                    </div>
                    <p className="text-sm text-neutral-200">123 Travel Street, Bhopal, MP 462001</p>
                  </div>
                </div>
              </div>

              {/* Quick Contact Options */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-heading text-xl font-bold text-neutral-900 mb-4">Quick Connect</h3>
                <div className="grid grid-cols-2 gap-4">
                  <a
                    href="https://wa.me/918745074800"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-green-50 rounded-xl p-4 hover:bg-green-100 transition-colors"
                  >
                    <div className="h-10 w-10 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-neutral-900">WhatsApp</div>
                      <div className="text-xs text-neutral-600">Chat with us</div>
                    </div>
                  </a>
                  <a
                    href="tel:+918745074800"
                    className="flex items-center gap-3 bg-blue-50 rounded-xl p-4 hover:bg-blue-100 transition-colors"
                  >
                    <div className="h-10 w-10 bg-blue-500 rounded-full flex items-center justify-center">
                      <PhoneIcon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-neutral-900">Call Us</div>
                      <div className="text-xs text-neutral-600">Speak directly</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-heading text-xl font-bold text-neutral-900 mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href="https://facebook.com/carvingholidaysindia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-12 w-12 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                    </svg>
                  </a>
                  <a
                    href="https://instagram.com/carving_holidays"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-12 w-12 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com/carvingholidays"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-12 w-12 bg-sky-500 rounded-full flex items-center justify-center text-white hover:bg-sky-600 transition-colors"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                    </svg>
                  </a>
                  <a
                    href="https://youtube.com/carvingholidays"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-12 w-12 bg-red-600 rounded-full flex items-center justify-center text-white hover:bg-red-700 transition-colors"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="font-heading text-4xl font-bold text-neutral-900 md:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-xl text-neutral-600">
              Quick answers to common questions about our services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-neutral-50 rounded-2xl p-6">
                <h3 className="font-heading text-lg font-bold text-neutral-900 mb-2">{faq.question}</h3>
                <p className="text-neutral-600">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-neutral-600">
              Have more questions?{' '}
              <a href="mailto:info@carvingholidays.com" className="text-secondary-600 font-medium hover:text-secondary-700">
                Email us directly
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <GlobeAltIcon className="h-12 w-12 text-secondary-400 mx-auto mb-4" />
            <h2 className="font-heading text-3xl font-bold md:text-4xl">
              Stay Updated
            </h2>
            <p className="mt-4 text-neutral-200">
              Subscribe to our newsletter for exclusive deals, travel tips, and destination guides.
            </p>
            <form className="mt-8 flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-lg px-4 py-3 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-secondary-500"
              />
              <Button variant="secondary" size="lg">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
