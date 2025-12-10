'use client';

import Link from 'next/link';
import { ShieldCheckIcon, LockClosedIcon, EyeIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

export default function PrivacyPage() {
  const lastUpdated = 'December 1, 2024';

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 py-24">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl text-white">
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheckIcon className="h-8 w-8 text-secondary-400" />
              <span className="text-secondary-400 font-semibold">Legal</span>
            </div>
            <h1 className="font-heading text-5xl font-bold leading-tight md:text-6xl">
              Privacy Policy
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
            <a href="#overview" className="text-neutral-600 hover:text-secondary-600 transition-colors">Overview</a>
            <span className="text-neutral-300">|</span>
            <a href="#collection" className="text-neutral-600 hover:text-secondary-600 transition-colors">Data Collection</a>
            <span className="text-neutral-300">|</span>
            <a href="#use" className="text-neutral-600 hover:text-secondary-600 transition-colors">Data Use</a>
            <span className="text-neutral-300">|</span>
            <a href="#sharing" className="text-neutral-600 hover:text-secondary-600 transition-colors">Data Sharing</a>
            <span className="text-neutral-300">|</span>
            <a href="#rights" className="text-neutral-600 hover:text-secondary-600 transition-colors">Your Rights</a>
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

              {/* Overview */}
              <div id="overview">
                <h2 className="font-heading text-2xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
                  <EyeIcon className="h-6 w-6 text-secondary-600" />
                  1. Overview
                </h2>
                <div className="prose prose-neutral max-w-none">
                  <p>
                    Carving Holidays ("we", "our", "us") is committed to protecting your privacy and personal data. This Privacy Policy explains how we collect, use, store, and protect your information when you use our website and services.
                  </p>
                  <p>
                    By using our website and services, you consent to the practices described in this policy. We encourage you to read this policy carefully and contact us if you have any questions.
                  </p>
                </div>
              </div>

              {/* Information We Collect */}
              <div id="collection">
                <h2 className="font-heading text-2xl font-bold text-neutral-900 mb-4">
                  2. Information We Collect
                </h2>
                <div className="prose prose-neutral max-w-none">
                  <h3>2.1 Personal Information</h3>
                  <p>When you book a tour or use our services, we may collect:</p>
                  <ul>
                    <li><strong>Identity Information:</strong> Full name, date of birth, gender, nationality</li>
                    <li><strong>Contact Information:</strong> Email address, phone number, postal address</li>
                    <li><strong>Travel Documents:</strong> Passport number, passport expiry date, visa details</li>
                    <li><strong>Payment Information:</strong> Credit/debit card details, bank account information</li>
                    <li><strong>Travel Preferences:</strong> Meal preferences, room preferences, special requirements</li>
                    <li><strong>Emergency Contacts:</strong> Names and phone numbers of emergency contacts</li>
                  </ul>

                  <h3>2.2 Automatically Collected Information</h3>
                  <p>When you visit our website, we automatically collect:</p>
                  <ul>
                    <li>IP address and location data</li>
                    <li>Browser type and version</li>
                    <li>Device information</li>
                    <li>Pages visited and time spent</li>
                    <li>Referring website</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>

                  <h3>2.3 Information from Third Parties</h3>
                  <p>We may receive information from:</p>
                  <ul>
                    <li>Travel partners (airlines, hotels, visa agencies)</li>
                    <li>Payment processors</li>
                    <li>Social media platforms (if you connect your account)</li>
                    <li>Marketing partners</li>
                  </ul>
                </div>
              </div>

              {/* How We Use Your Information */}
              <div id="use">
                <h2 className="font-heading text-2xl font-bold text-neutral-900 mb-4">
                  3. How We Use Your Information
                </h2>
                <div className="prose prose-neutral max-w-none">
                  <p>We use your personal information for the following purposes:</p>

                  <h3>3.1 To Provide Our Services</h3>
                  <ul>
                    <li>Process and confirm your bookings</li>
                    <li>Arrange travel services (flights, hotels, tours)</li>
                    <li>Assist with visa applications</li>
                    <li>Process payments and refunds</li>
                    <li>Provide customer support</li>
                  </ul>

                  <h3>3.2 To Communicate With You</h3>
                  <ul>
                    <li>Send booking confirmations and itineraries</li>
                    <li>Provide travel updates and alerts</li>
                    <li>Respond to inquiries and complaints</li>
                    <li>Send marketing communications (with your consent)</li>
                  </ul>

                  <h3>3.3 To Improve Our Services</h3>
                  <ul>
                    <li>Analyze usage patterns and trends</li>
                    <li>Personalize your experience</li>
                    <li>Develop new products and services</li>
                    <li>Conduct surveys and research</li>
                  </ul>

                  <h3>3.4 Legal and Security Purposes</h3>
                  <ul>
                    <li>Comply with legal obligations</li>
                    <li>Prevent fraud and unauthorized access</li>
                    <li>Protect our rights and property</li>
                    <li>Enforce our terms and conditions</li>
                  </ul>
                </div>
              </div>

              {/* Data Sharing */}
              <div id="sharing">
                <h2 className="font-heading text-2xl font-bold text-neutral-900 mb-4">
                  4. Data Sharing and Disclosure
                </h2>
                <div className="prose prose-neutral max-w-none">
                  <p>We may share your personal information with:</p>

                  <h3>4.1 Service Providers</h3>
                  <ul>
                    <li><strong>Airlines and Transport:</strong> To book and confirm travel arrangements</li>
                    <li><strong>Hotels and Accommodations:</strong> To make reservations</li>
                    <li><strong>Visa Agencies:</strong> To process visa applications</li>
                    <li><strong>Travel Insurance:</strong> To provide coverage</li>
                    <li><strong>Local Tour Operators:</strong> To arrange activities and guides</li>
                  </ul>

                  <h3>4.2 Payment Processors</h3>
                  <p>
                    We share payment information with secure payment processors to complete transactions. We do not store complete credit card details on our servers.
                  </p>

                  <h3>4.3 Government Authorities</h3>
                  <p>
                    We may disclose information to immigration authorities, customs, and other government agencies as required by law or to facilitate your travel.
                  </p>

                  <h3>4.4 Legal Requirements</h3>
                  <p>
                    We may disclose information when required by law, court order, or to protect our legal rights.
                  </p>

                  <h3>4.5 Business Transfers</h3>
                  <p>
                    In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity.
                  </p>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 my-6">
                    <p className="text-green-800 font-medium">
                      <LockClosedIcon className="inline h-5 w-5 mr-2" />
                      We do NOT sell your personal information to third parties for marketing purposes.
                    </p>
                  </div>
                </div>
              </div>

              {/* Data Security */}
              <div>
                <h2 className="font-heading text-2xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
                  <LockClosedIcon className="h-6 w-6 text-secondary-600" />
                  5. Data Security
                </h2>
                <div className="prose prose-neutral max-w-none">
                  <p>
                    We implement appropriate technical and organizational measures to protect your personal data, including:
                  </p>
                  <ul>
                    <li>SSL/TLS encryption for data transmission</li>
                    <li>Secure servers with firewall protection</li>
                    <li>Access controls and authentication</li>
                    <li>Regular security assessments</li>
                    <li>Employee training on data protection</li>
                    <li>PCI DSS compliance for payment processing</li>
                  </ul>
                  <p>
                    While we strive to protect your information, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security.
                  </p>
                </div>
              </div>

              {/* Data Retention */}
              <div>
                <h2 className="font-heading text-2xl font-bold text-neutral-900 mb-4">
                  6. Data Retention
                </h2>
                <div className="prose prose-neutral max-w-none">
                  <p>
                    We retain your personal information for as long as necessary to:
                  </p>
                  <ul>
                    <li>Provide our services and fulfill bookings</li>
                    <li>Comply with legal and regulatory requirements</li>
                    <li>Resolve disputes and enforce agreements</li>
                    <li>Maintain business records for accounting purposes</li>
                  </ul>
                  <p>
                    Typically, we retain booking records for 7 years after your travel date. Marketing consent records are kept until you withdraw consent.
                  </p>
                </div>
              </div>

              {/* Your Rights */}
              <div id="rights">
                <h2 className="font-heading text-2xl font-bold text-neutral-900 mb-4">
                  7. Your Rights
                </h2>
                <div className="prose prose-neutral max-w-none">
                  <p>You have the following rights regarding your personal data:</p>
                  <ul>
                    <li><strong>Access:</strong> Request a copy of your personal data</li>
                    <li><strong>Correction:</strong> Request correction of inaccurate data</li>
                    <li><strong>Deletion:</strong> Request deletion of your data (subject to legal requirements)</li>
                    <li><strong>Restriction:</strong> Request limitation on processing</li>
                    <li><strong>Portability:</strong> Request your data in a machine-readable format</li>
                    <li><strong>Objection:</strong> Object to processing for marketing purposes</li>
                    <li><strong>Withdraw Consent:</strong> Withdraw consent at any time</li>
                  </ul>
                  <p>
                    To exercise these rights, contact us at privacy@carvingholidays.com. We will respond within 30 days.
                  </p>
                </div>
              </div>

              {/* Cookies */}
              <div>
                <h2 className="font-heading text-2xl font-bold text-neutral-900 mb-4">
                  8. Cookies and Tracking
                </h2>
                <div className="prose prose-neutral max-w-none">
                  <p>Our website uses cookies to:</p>
                  <ul>
                    <li><strong>Essential Cookies:</strong> Enable core functionality and security</li>
                    <li><strong>Performance Cookies:</strong> Analyze website usage and improve performance</li>
                    <li><strong>Functional Cookies:</strong> Remember your preferences</li>
                    <li><strong>Marketing Cookies:</strong> Deliver relevant advertisements</li>
                  </ul>
                  <p>
                    You can manage cookie preferences through your browser settings. Disabling certain cookies may affect website functionality.
                  </p>
                </div>
              </div>

              {/* Third-Party Links */}
              <div>
                <h2 className="font-heading text-2xl font-bold text-neutral-900 mb-4">
                  9. Third-Party Links
                </h2>
                <div className="prose prose-neutral max-w-none">
                  <p>
                    Our website may contain links to third-party websites. We are not responsible for the privacy practices of these sites. We encourage you to read their privacy policies.
                  </p>
                </div>
              </div>

              {/* Children's Privacy */}
              <div>
                <h2 className="font-heading text-2xl font-bold text-neutral-900 mb-4">
                  10. Children's Privacy
                </h2>
                <div className="prose prose-neutral max-w-none">
                  <p>
                    Our services are not directed to children under 13. We do not knowingly collect personal information from children without parental consent. If we become aware of such collection, we will delete the information promptly.
                  </p>
                </div>
              </div>

              {/* International Transfers */}
              <div>
                <h2 className="font-heading text-2xl font-bold text-neutral-900 mb-4">
                  11. International Data Transfers
                </h2>
                <div className="prose prose-neutral max-w-none">
                  <p>
                    Your information may be transferred to and processed in countries other than India, including destinations you are traveling to. We ensure appropriate safeguards are in place for such transfers.
                  </p>
                </div>
              </div>

              {/* Updates */}
              <div>
                <h2 className="font-heading text-2xl font-bold text-neutral-900 mb-4">
                  12. Policy Updates
                </h2>
                <div className="prose prose-neutral max-w-none">
                  <p>
                    We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We will notify you of significant changes via email or website notice. The "Last Updated" date indicates when the policy was last revised.
                  </p>
                </div>
              </div>

              {/* Contact */}
              <div id="contact">
                <h2 className="font-heading text-2xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
                  <DocumentTextIcon className="h-6 w-6 text-secondary-600" />
                  13. Contact Us
                </h2>
                <div className="prose prose-neutral max-w-none">
                  <p>
                    For privacy-related inquiries or to exercise your rights, contact our Data Protection Team:
                  </p>
                  <ul>
                    <li><strong>Email:</strong> privacy@carvingholidays.com</li>
                    <li><strong>Phone:</strong> +91 87450 74800</li>
                    <li><strong>Address:</strong> Mumbai, Maharashtra, India</li>
                  </ul>
                  <p>
                    For general inquiries, visit our <Link href="/contact" className="text-secondary-600 hover:underline">Contact Page</Link>.
                  </p>
                </div>
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
                href="/terms"
                className="px-6 py-3 bg-neutral-100 text-neutral-700 rounded-xl hover:bg-neutral-200 transition-colors"
              >
                Terms & Conditions
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
