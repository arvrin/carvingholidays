'use client';

import Link from 'next/link';
import { DocumentTextIcon, ShieldCheckIcon, ScaleIcon } from '@heroicons/react/24/outline';

export default function TermsPage() {
  const lastUpdated = 'December 1, 2024';

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 py-24">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl text-white">
            <div className="flex items-center gap-3 mb-4">
              <DocumentTextIcon className="h-8 w-8 text-secondary-400" />
              <span className="text-secondary-400 font-semibold">Legal</span>
            </div>
            <h1 className="font-heading text-5xl font-bold leading-tight md:text-6xl">
              Terms & Conditions
            </h1>
            <p className="mt-6 text-lg text-neutral-200">
              Last updated: {lastUpdated}
            </p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary-400/10 rounded-full blur-3xl" />
      </section>

      {/* Quick Links */}
      <section className="py-8 bg-white border-b border-neutral-200 sticky top-0 z-40">
        <div className="container-custom">
          <div className="flex flex-wrap gap-4 justify-center text-sm">
            <a href="#introduction" className="text-neutral-600 hover:text-secondary-600 transition-colors">Introduction</a>
            <span className="text-neutral-300">|</span>
            <a href="#booking" className="text-neutral-600 hover:text-secondary-600 transition-colors">Booking Terms</a>
            <span className="text-neutral-300">|</span>
            <a href="#payment" className="text-neutral-600 hover:text-secondary-600 transition-colors">Payment</a>
            <span className="text-neutral-300">|</span>
            <a href="#cancellation" className="text-neutral-600 hover:text-secondary-600 transition-colors">Cancellation</a>
            <span className="text-neutral-300">|</span>
            <a href="#liability" className="text-neutral-600 hover:text-secondary-600 transition-colors">Liability</a>
            <span className="text-neutral-300">|</span>
            <a href="#contact" className="text-neutral-600 hover:text-secondary-600 transition-colors">Contact</a>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 space-y-12">

              {/* Introduction */}
              <div id="introduction">
                <h2 className="font-heading text-2xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
                  <ScaleIcon className="h-6 w-6 text-secondary-600" />
                  1. Introduction
                </h2>
                <div className="prose prose-neutral max-w-none">
                  <p>
                    Welcome to Carving Holidays. These Terms and Conditions govern your use of our website and services. By booking a tour package or using our services, you agree to be bound by these terms.
                  </p>
                  <p>
                    Carving Holidays is a registered travel agency operating under the laws of India, specializing in domestic and international tour packages. Our services include tour planning, booking, visa assistance, and travel consultation.
                  </p>
                  <p>
                    Please read these terms carefully before making any bookings. If you do not agree with any part of these terms, please refrain from using our services.
                  </p>
                </div>
              </div>

              {/* Definitions */}
              <div>
                <h2 className="font-heading text-2xl font-bold text-neutral-900 mb-4">
                  2. Definitions
                </h2>
                <div className="prose prose-neutral max-w-none">
                  <ul>
                    <li><strong>"Company"</strong>, "We", "Us" refers to Carving Holidays.</li>
                    <li><strong>"Customer"</strong>, "You", "Traveler" refers to the person making a booking or using our services.</li>
                    <li><strong>"Tour Package"</strong> refers to any travel product or service offered by us.</li>
                    <li><strong>"Booking"</strong> refers to a confirmed reservation of any tour package or service.</li>
                    <li><strong>"Third-party Suppliers"</strong> refers to airlines, hotels, transport providers, and other service providers.</li>
                  </ul>
                </div>
              </div>

              {/* Booking Terms */}
              <div id="booking">
                <h2 className="font-heading text-2xl font-bold text-neutral-900 mb-4">
                  3. Booking Terms
                </h2>
                <div className="prose prose-neutral max-w-none">
                  <h3>3.1 Booking Process</h3>
                  <p>
                    A booking is considered confirmed only after we receive the required deposit and send you a written confirmation. Verbal commitments or inquiries do not constitute a confirmed booking.
                  </p>

                  <h3>3.2 Booking on Behalf of Others</h3>
                  <p>
                    When booking for other travelers, you represent that you have their authority to accept these terms on their behalf. You are responsible for providing accurate information for all travelers.
                  </p>

                  <h3>3.3 Traveler Information</h3>
                  <p>
                    You must provide accurate passport details, contact information, and any special requirements at the time of booking. Errors in provided information may result in additional costs for corrections.
                  </p>

                  <h3>3.4 Minimum Age</h3>
                  <p>
                    Travelers must be at least 18 years old to book independently. Minors must be accompanied by a parent or legal guardian. Some tours may have specific age requirements.
                  </p>
                </div>
              </div>

              {/* Payment Terms */}
              <div id="payment">
                <h2 className="font-heading text-2xl font-bold text-neutral-900 mb-4">
                  4. Payment Terms
                </h2>
                <div className="prose prose-neutral max-w-none">
                  <h3>4.1 Deposit</h3>
                  <p>
                    A deposit of 25-30% of the total package cost is required to confirm your booking. The exact amount will be specified at the time of booking.
                  </p>

                  <h3>4.2 Balance Payment</h3>
                  <p>
                    The remaining balance must be paid at least 30 days before departure. For bookings made within 30 days of departure, full payment is required immediately.
                  </p>

                  <h3>4.3 Payment Methods</h3>
                  <p>
                    We accept payments via credit/debit cards, net banking, UPI, and bank transfers. International payments can be made via wire transfer.
                  </p>

                  <h3>4.4 Currency</h3>
                  <p>
                    All prices are quoted in Indian Rupees (INR) unless otherwise specified. Exchange rate fluctuations may affect final pricing for international packages.
                  </p>

                  <h3>4.5 Non-Payment</h3>
                  <p>
                    Failure to make payments by the due date may result in automatic cancellation of your booking, and cancellation charges may apply.
                  </p>
                </div>
              </div>

              {/* Cancellation & Refunds */}
              <div id="cancellation">
                <h2 className="font-heading text-2xl font-bold text-neutral-900 mb-4">
                  5. Cancellation & Refund Policy
                </h2>
                <div className="prose prose-neutral max-w-none">
                  <h3>5.1 Cancellation by Customer</h3>
                  <p>
                    All cancellation requests must be submitted in writing via email. The following cancellation fees apply from the date of written cancellation:
                  </p>
                  <table className="min-w-full border-collapse border border-neutral-200">
                    <thead>
                      <tr className="bg-neutral-100">
                        <th className="border border-neutral-200 px-4 py-2 text-left">Days Before Departure</th>
                        <th className="border border-neutral-200 px-4 py-2 text-left">Cancellation Fee</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-neutral-200 px-4 py-2">More than 45 days</td>
                        <td className="border border-neutral-200 px-4 py-2">10% of package cost</td>
                      </tr>
                      <tr>
                        <td className="border border-neutral-200 px-4 py-2">30-45 days</td>
                        <td className="border border-neutral-200 px-4 py-2">25% of package cost</td>
                      </tr>
                      <tr>
                        <td className="border border-neutral-200 px-4 py-2">15-30 days</td>
                        <td className="border border-neutral-200 px-4 py-2">50% of package cost</td>
                      </tr>
                      <tr>
                        <td className="border border-neutral-200 px-4 py-2">7-15 days</td>
                        <td className="border border-neutral-200 px-4 py-2">75% of package cost</td>
                      </tr>
                      <tr>
                        <td className="border border-neutral-200 px-4 py-2">Less than 7 days</td>
                        <td className="border border-neutral-200 px-4 py-2">No refund</td>
                      </tr>
                    </tbody>
                  </table>

                  <h3>5.2 Refund Processing</h3>
                  <p>
                    Approved refunds will be processed within 7-10 business days. The amount will be credited to your original payment method. Bank processing may take additional time.
                  </p>

                  <h3>5.3 Cancellation by Company</h3>
                  <p>
                    We reserve the right to cancel any tour due to insufficient participants, natural disasters, political unrest, or other circumstances beyond our control. In such cases, you will receive a full refund or the option to reschedule.
                  </p>

                  <h3>5.4 Non-Refundable Items</h3>
                  <p>
                    Visa fees, travel insurance premiums, and airline tickets (once issued) may be non-refundable regardless of cancellation timing.
                  </p>
                </div>
              </div>

              {/* Changes & Modifications */}
              <div>
                <h2 className="font-heading text-2xl font-bold text-neutral-900 mb-4">
                  6. Changes & Modifications
                </h2>
                <div className="prose prose-neutral max-w-none">
                  <h3>6.1 Changes by Customer</h3>
                  <p>
                    Requests to change travel dates, accommodations, or other services are subject to availability and may incur additional costs. Changes made within 30 days of departure may attract amendment fees.
                  </p>

                  <h3>6.2 Changes by Company</h3>
                  <p>
                    We reserve the right to make minor changes to itineraries, hotels, or services due to operational requirements. We will notify you of any significant changes as soon as possible.
                  </p>

                  <h3>6.3 Force Majeure</h3>
                  <p>
                    We are not liable for changes or cancellations due to events beyond our control, including but not limited to natural disasters, pandemics, strikes, political unrest, or government actions.
                  </p>
                </div>
              </div>

              {/* Liability */}
              <div id="liability">
                <h2 className="font-heading text-2xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
                  <ShieldCheckIcon className="h-6 w-6 text-secondary-600" />
                  7. Liability
                </h2>
                <div className="prose prose-neutral max-w-none">
                  <h3>7.1 Our Responsibility</h3>
                  <p>
                    We act as an intermediary between you and third-party suppliers (hotels, airlines, transport providers). While we exercise care in selecting reputable suppliers, we are not liable for their acts or omissions.
                  </p>

                  <h3>7.2 Limitation of Liability</h3>
                  <p>
                    Our liability for any claim shall not exceed the total amount paid by you for the specific service in question. We are not liable for indirect, consequential, or special damages.
                  </p>

                  <h3>7.3 Travel Insurance</h3>
                  <p>
                    We strongly recommend purchasing comprehensive travel insurance. We are not responsible for losses that would be covered by adequate travel insurance.
                  </p>

                  <h3>7.4 Personal Belongings</h3>
                  <p>
                    You are responsible for the safety of your personal belongings, travel documents, and valuables during the trip. We are not liable for any loss, theft, or damage.
                  </p>
                </div>
              </div>

              {/* Traveler Responsibilities */}
              <div>
                <h2 className="font-heading text-2xl font-bold text-neutral-900 mb-4">
                  8. Traveler Responsibilities
                </h2>
                <div className="prose prose-neutral max-w-none">
                  <p>As a traveler, you agree to:</p>
                  <ul>
                    <li>Possess a valid passport with at least 6 months validity from return date</li>
                    <li>Obtain all necessary visas, permits, and travel documents</li>
                    <li>Comply with all laws and regulations of visited countries</li>
                    <li>Follow the instructions of tour guides and local authorities</li>
                    <li>Behave responsibly and not engage in illegal or disruptive conduct</li>
                    <li>Be punctual for all scheduled activities and departures</li>
                    <li>Inform us of any medical conditions or special requirements</li>
                  </ul>
                </div>
              </div>

              {/* Intellectual Property */}
              <div>
                <h2 className="font-heading text-2xl font-bold text-neutral-900 mb-4">
                  9. Intellectual Property
                </h2>
                <div className="prose prose-neutral max-w-none">
                  <p>
                    All content on our website, including text, images, logos, and itineraries, is the property of Carving Holidays and protected by copyright laws. You may not reproduce, distribute, or use our content without prior written permission.
                  </p>
                </div>
              </div>

              {/* Dispute Resolution */}
              <div>
                <h2 className="font-heading text-2xl font-bold text-neutral-900 mb-4">
                  10. Dispute Resolution
                </h2>
                <div className="prose prose-neutral max-w-none">
                  <p>
                    Any disputes arising from these terms or our services shall be governed by the laws of India. Disputes shall first be attempted to be resolved through mediation. If unsuccessful, disputes shall be subject to the exclusive jurisdiction of courts in India.
                  </p>
                </div>
              </div>

              {/* Contact */}
              <div id="contact">
                <h2 className="font-heading text-2xl font-bold text-neutral-900 mb-4">
                  11. Contact Us
                </h2>
                <div className="prose prose-neutral max-w-none">
                  <p>
                    For any questions regarding these Terms and Conditions, please contact us:
                  </p>
                  <ul>
                    <li><strong>Email:</strong> legal@carvingholidays.com</li>
                    <li><strong>Phone:</strong> +91 87450 74800</li>
                    <li><strong>Address:</strong> Mumbai, Maharashtra, India</li>
                  </ul>
                </div>
              </div>

              {/* Updates */}
              <div className="pt-8 border-t border-neutral-200">
                <p className="text-neutral-600 text-sm">
                  These Terms and Conditions may be updated periodically. We encourage you to review this page regularly for any changes. Continued use of our services after changes constitutes acceptance of the updated terms.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h3 className="font-heading text-xl font-bold text-neutral-900 mb-6 text-center">
              Related Policies
            </h3>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/privacy"
                className="px-6 py-3 bg-neutral-100 text-neutral-700 rounded-xl hover:bg-neutral-200 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/faq"
                className="px-6 py-3 bg-neutral-100 text-neutral-700 rounded-xl hover:bg-neutral-200 transition-colors"
              >
                FAQs
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 bg-secondary-600 text-white rounded-xl hover:bg-secondary-700 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
