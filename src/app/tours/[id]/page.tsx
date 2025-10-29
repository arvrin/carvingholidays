'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {
  ClockIcon,
  UsersIcon,
  MapPinIcon,
  CheckCircleIcon,
  CalendarIcon,
  CurrencyRupeeIcon,
  StarIcon,
  ArrowLeftIcon,
} from '@heroicons/react/24/outline';
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid';
import Button from '@/components/ui/Button';

// Sample package data - In production, this would come from a database/API
const packageData: { [key: string]: any } = {
  '1': {
    id: 1,
    title: 'European Grand Tour',
    destination: 'Europe',
    images: [
      'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1549144511-f099e773c147?w=1200&h=800&fit=crop',
    ],
    duration: '14 Days / 13 Nights',
    groupSize: '10-15 People',
    price: '₹2,45,000',
    rating: 4.8,
    reviews: 124,
    overview: 'Experience the best of Europe with our comprehensive 14-day tour covering the most iconic destinations. From the romantic streets of Paris to the historic ruins of Rome, this journey offers a perfect blend of culture, history, and adventure.',
    highlights: [
      'Visit the Eiffel Tower and Louvre Museum in Paris',
      'Explore the Colosseum and Vatican City in Rome',
      'Experience the Swiss Alps and scenic train rides',
      'Canal cruise in Amsterdam',
      'Professional English-speaking guide',
      'All meals and accommodations included',
    ],
    itinerary: [
      { day: 1, title: 'Arrival in Paris', description: 'Meet and greet at airport, transfer to hotel. Evening orientation tour.' },
      { day: 2, title: 'Paris City Tour', description: 'Visit Eiffel Tower, Louvre Museum, Notre Dame Cathedral.' },
      { day: 3, title: 'Paris to Switzerland', description: 'Train journey to Switzerland, scenic mountain views.' },
      { day: 4, title: 'Swiss Alps Experience', description: 'Cable car rides, mountain hiking, local Swiss culture.' },
      { day: 5, title: 'Switzerland to Rome', description: 'Travel to Rome, evening city orientation.' },
      { day: 6, title: 'Rome Ancient City Tour', description: 'Colosseum, Roman Forum, Vatican Museums.' },
    ],
    inclusions: [
      'Round-trip airfare',
      '4-star hotel accommodations',
      'Daily breakfast and dinner',
      'All transfers and transportation',
      'Professional tour guide',
      'Entry tickets to all attractions',
      'Travel insurance',
    ],
    exclusions: [
      'Lunch meals',
      'Personal expenses',
      'Optional activities',
      'Tips and gratuities',
    ],
  },
  '2': {
    id: 2,
    title: 'Japan Cultural Experience',
    destination: 'Japan',
    images: [
      'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1480796927426-f609979314bd?w=1200&h=800&fit=crop',
    ],
    duration: '10 Days / 9 Nights',
    groupSize: '8-12 People',
    price: '₹1,85,000',
    rating: 4.9,
    reviews: 89,
    overview: 'Immerse yourself in Japanese culture with this carefully curated 10-day journey through Japan\'s most fascinating cities. Experience ancient temples, modern technology, traditional tea ceremonies, and breathtaking natural landscapes.',
    highlights: [
      'Visit Tokyo\'s iconic Shibuya and Shinjuku districts',
      'Experience traditional tea ceremony in Kyoto',
      'Day trip to Mount Fuji',
      'Explore historic temples and shrines',
      'Bullet train experience',
      'Traditional ryokan stay',
    ],
    itinerary: [
      { day: 1, title: 'Arrival in Tokyo', description: 'Airport transfer, hotel check-in, welcome dinner.' },
      { day: 2, title: 'Tokyo City Tour', description: 'Shibuya crossing, Senso-ji Temple, Tokyo Tower.' },
      { day: 3, title: 'Mount Fuji Day Trip', description: 'Full day excursion to Mount Fuji and surrounding lakes.' },
      { day: 4, title: 'Tokyo to Kyoto', description: 'Bullet train journey, Kyoto orientation.' },
      { day: 5, title: 'Kyoto Temples Tour', description: 'Kinkaku-ji, Fushimi Inari Shrine, Gion district.' },
      { day: 6, title: 'Traditional Experiences', description: 'Tea ceremony, kimono wearing, calligraphy class.' },
    ],
    inclusions: [
      'Round-trip airfare',
      'Boutique hotel accommodations',
      'Daily breakfast',
      'JR Pass for bullet trains',
      'English-speaking guide',
      'All entrance fees',
      'Traditional experiences',
    ],
    exclusions: [
      'Lunch and dinner (except welcome dinner)',
      'Personal shopping',
      'Optional activities',
      'Travel insurance',
    ],
  },
  '3': {
    id: 3,
    title: 'Australia & New Zealand Adventure',
    destination: 'Australia',
    images: [
      'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1589330694653-ded6df03f754?w=1200&h=800&fit=crop',
    ],
    duration: '16 Days / 15 Nights',
    groupSize: '12-18 People',
    price: '₹3,25,000',
    rating: 4.7,
    reviews: 156,
    overview: 'Discover the stunning landscapes and vibrant cities of Australia and New Zealand on this comprehensive 16-day adventure. From Sydney\'s iconic harbour to Auckland\'s volcanic landscape, experience the best of both countries.',
    highlights: [
      'Sydney Opera House and Harbour Bridge',
      'Great Barrier Reef snorkeling experience',
      'Milford Sound cruise in New Zealand',
      'Queenstown adventure activities',
      'Melbourne\'s coffee culture and laneways',
      'Rotorua geothermal wonders',
    ],
    itinerary: [
      { day: 1, title: 'Arrival in Sydney', description: 'Airport transfer, hotel check-in, Sydney orientation tour.' },
      { day: 2, title: 'Sydney Highlights', description: 'Opera House tour, Harbour Bridge walk, Bondi Beach.' },
      { day: 3, title: 'Blue Mountains Day Trip', description: 'Scenic cable car rides, Three Sisters rock formation.' },
      { day: 4, title: 'Sydney to Melbourne', description: 'Flight to Melbourne, city walking tour.' },
      { day: 5, title: 'Great Ocean Road', description: 'Full day tour of the famous coastal drive, Twelve Apostles.' },
      { day: 6, title: 'Melbourne to Auckland', description: 'Flight to Auckland, evening city tour.' },
    ],
    inclusions: [
      'Round-trip international airfare',
      'Domestic flights between cities',
      'Premium hotel accommodations',
      'Daily breakfast and select dinners',
      'All transfers and transportation',
      'English-speaking tour guide',
      'All attraction tickets',
      'Travel insurance',
    ],
    exclusions: [
      'Most lunch and dinner meals',
      'Optional adventure activities',
      'Personal expenses',
      'Visa fees',
    ],
  },
  '4': {
    id: 4,
    title: 'Southeast Asia Explorer',
    destination: 'Southeast Asia',
    images: [
      'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1528181304800-259b08848526?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=1200&h=800&fit=crop',
    ],
    duration: '12 Days / 11 Nights',
    groupSize: '10-15 People',
    price: '₹95,000',
    rating: 4.6,
    reviews: 203,
    overview: 'Explore the diverse cultures, ancient temples, and tropical beaches of Southeast Asia. This 12-day journey takes you through Thailand, Vietnam, Cambodia, and Singapore, offering a perfect blend of history, culture, and relaxation.',
    highlights: [
      'Grand Palace and floating markets in Bangkok',
      'Angkor Wat sunrise experience in Cambodia',
      'Ha Long Bay cruise in Vietnam',
      'Singapore\'s modern attractions',
      'Thai cooking class experience',
      'Traditional water puppet show',
    ],
    itinerary: [
      { day: 1, title: 'Arrival in Bangkok', description: 'Airport transfer, hotel check-in, evening street food tour.' },
      { day: 2, title: 'Bangkok City Tour', description: 'Grand Palace, Wat Pho, Chao Phraya River cruise.' },
      { day: 3, title: 'Bangkok to Siem Reap', description: 'Flight to Cambodia, temple orientation.' },
      { day: 4, title: 'Angkor Wat Sunrise', description: 'Early morning sunrise at Angkor Wat, temple complex tour.' },
      { day: 5, title: 'Siem Reap to Hanoi', description: 'Flight to Vietnam, Old Quarter walking tour.' },
      { day: 6, title: 'Ha Long Bay Cruise', description: 'Day cruise through limestone karsts and emerald waters.' },
    ],
    inclusions: [
      'Round-trip airfare',
      'All regional flights',
      'Boutique hotel stays',
      'Daily breakfast',
      'Ha Long Bay cruise',
      'English-speaking guides',
      'Temple entrance fees',
      'Cooking class',
    ],
    exclusions: [
      'Lunch and dinner meals',
      'Visa fees for multiple countries',
      'Personal shopping',
      'Travel insurance',
    ],
  },
  '5': {
    id: 5,
    title: 'Swiss Alps & Lakes',
    destination: 'Switzerland',
    images: [
      'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop',
    ],
    duration: '8 Days / 7 Nights',
    groupSize: '8-12 People',
    price: '₹1,65,000',
    rating: 4.9,
    reviews: 142,
    overview: 'Experience the breathtaking beauty of Switzerland with this 8-day alpine adventure. Journey through picturesque mountain villages, pristine lakes, and world-famous peaks including the Matterhorn. Perfect for nature lovers and photography enthusiasts.',
    highlights: [
      'Jungfraujoch - Top of Europe experience',
      'Matterhorn viewing in Zermatt',
      'Scenic train rides including Glacier Express',
      'Lake Lucerne cruise',
      'Interlaken adventure activities',
      'Swiss chocolate factory tour',
    ],
    itinerary: [
      { day: 1, title: 'Arrival in Zurich', description: 'Airport transfer, Zurich city walking tour, Swiss dinner.' },
      { day: 2, title: 'Zurich to Lucerne', description: 'Train journey, Lake Lucerne cruise, Chapel Bridge.' },
      { day: 3, title: 'Mount Pilatus Excursion', description: 'Cable car and cogwheel train to the summit, panoramic views.' },
      { day: 4, title: 'Lucerne to Interlaken', description: 'Scenic train ride, Interlaken orientation.' },
      { day: 5, title: 'Jungfraujoch Day Trip', description: 'Journey to Top of Europe, ice palace, observation deck.' },
      { day: 6, title: 'Interlaken to Zermatt', description: 'Glacier Express journey, Matterhorn village exploration.' },
    ],
    inclusions: [
      'Round-trip airfare',
      'Swiss Travel Pass for trains',
      '4-star alpine hotels',
      'Daily breakfast',
      'Mountain excursions',
      'Professional guide',
      'All cable cars and lifts',
      'Travel insurance',
    ],
    exclusions: [
      'Lunch and dinner meals',
      'Optional adventure sports',
      'Personal expenses',
      'Tips and gratuities',
    ],
  },
  '6': {
    id: 6,
    title: 'Bali Paradise Retreat',
    destination: 'Indonesia',
    images: [
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1559628376-f3fe5f782a2e?w=1200&h=800&fit=crop',
    ],
    duration: '7 Days / 6 Nights',
    groupSize: '6-10 People',
    price: '₹75,000',
    rating: 4.8,
    reviews: 178,
    overview: 'Escape to the tropical paradise of Bali with this rejuvenating 7-day retreat. Experience ancient temples, lush rice terraces, pristine beaches, and authentic Balinese culture. Perfect for couples and those seeking relaxation and cultural immersion.',
    highlights: [
      'Ubud rice terrace walks and monkey forest',
      'Traditional Balinese temple visits',
      'Beach clubs and sunset dining in Seminyak',
      'Water temple blessing ceremony',
      'Balinese cooking class',
      'Traditional spa treatments',
    ],
    itinerary: [
      { day: 1, title: 'Arrival in Bali', description: 'Airport transfer to Ubud, welcome massage, evening orientation.' },
      { day: 2, title: 'Ubud Cultural Tour', description: 'Tegallalang rice terraces, monkey forest, art markets.' },
      { day: 3, title: 'Temple Trail', description: 'Tanah Lot sunset temple, Tirta Empul water blessing.' },
      { day: 4, title: 'Cooking Class & Spa', description: 'Traditional Balinese cooking class, afternoon spa treatment.' },
      { day: 5, title: 'Ubud to Seminyak', description: 'Transfer to beach resort, beach club relaxation.' },
      { day: 6, title: 'Beach Day & Uluwatu', description: 'Beach activities, Uluwatu temple, Kecak fire dance.' },
    ],
    inclusions: [
      'Round-trip airfare',
      'Luxury resort accommodations',
      'Daily breakfast',
      'All transfers and transport',
      'Temple entrance fees',
      'Cooking class and spa session',
      'English-speaking guide',
      'Travel insurance',
    ],
    exclusions: [
      'Lunch and dinner meals',
      'Additional spa treatments',
      'Water sports activities',
      'Personal shopping',
    ],
  },
};

export default function PackageDetailPage() {
  const params = useParams();
  const packageId = params.id as string;
  const packageInfo = packageData[packageId];

  if (!packageInfo) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-neutral-900 mb-4">Package Not Found</h1>
          <Link href="/tours">
            <Button variant="secondary">Back to Tours</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Back Button */}
      <div className="bg-white border-b border-neutral-200">
        <div className="container-custom py-4">
          <Link href="/tours" className="inline-flex items-center gap-2 text-sm font-medium text-neutral-700 hover:text-secondary-600 transition-colors">
            <ArrowLeftIcon className="h-4 w-4" />
            Back to Tours
          </Link>
        </div>
      </div>

      {/* Hero Section with Images */}
      <section className="bg-white">
        <div className="container-custom py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <Image
                src={packageInfo.images[0]}
                alt={packageInfo.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-44 rounded-2xl overflow-hidden">
                <Image
                  src={packageInfo.images[1]}
                  alt={`${packageInfo.title} 2`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-44 rounded-2xl overflow-hidden">
                <Image
                  src={packageInfo.images[2]}
                  alt={`${packageInfo.title} 3`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="col-span-2 relative h-44 rounded-2xl overflow-hidden bg-neutral-100 flex items-center justify-center">
                <button className="text-secondary-600 font-semibold hover:text-secondary-700">
                  View All Photos
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Title and Quick Info */}
              <div>
                <div className="flex items-center gap-2 text-sm text-neutral-600 mb-2">
                  <MapPinIcon className="h-4 w-4" />
                  {packageInfo.destination}
                </div>
                <h1 className="font-heading text-4xl font-bold text-neutral-900 mb-4">
                  {packageInfo.title}
                </h1>
                <div className="flex items-center gap-4 flex-wrap">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      i < Math.floor(packageInfo.rating) ? (
                        <StarSolidIcon key={i} className="h-5 w-5 text-secondary-500" />
                      ) : (
                        <StarIcon key={i} className="h-5 w-5 text-secondary-500" />
                      )
                    ))}
                    <span className="ml-2 text-sm font-semibold text-neutral-900">{packageInfo.rating}</span>
                    <span className="text-sm text-neutral-600">({packageInfo.reviews} reviews)</span>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-neutral-200">
                  <ClockIcon className="h-8 w-8 text-secondary-600" />
                  <div>
                    <p className="text-xs text-neutral-600">Duration</p>
                    <p className="font-semibold text-neutral-900">{packageInfo.duration}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-neutral-200">
                  <UsersIcon className="h-8 w-8 text-secondary-600" />
                  <div>
                    <p className="text-xs text-neutral-600">Group Size</p>
                    <p className="font-semibold text-neutral-900">{packageInfo.groupSize}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-neutral-200">
                  <CurrencyRupeeIcon className="h-8 w-8 text-secondary-600" />
                  <div>
                    <p className="text-xs text-neutral-600">Starting From</p>
                    <p className="font-semibold text-neutral-900">{packageInfo.price}</p>
                  </div>
                </div>
              </div>

              {/* Overview */}
              <div className="bg-white rounded-2xl p-8 border border-neutral-200">
                <h2 className="font-heading text-2xl font-bold text-neutral-900 mb-4">Overview</h2>
                <p className="text-neutral-700 leading-relaxed">{packageInfo.overview}</p>
              </div>

              {/* Highlights */}
              <div className="bg-white rounded-2xl p-8 border border-neutral-200">
                <h2 className="font-heading text-2xl font-bold text-neutral-900 mb-6">Highlights</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {packageInfo.highlights.map((highlight: string, index: number) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircleIcon className="h-6 w-6 text-secondary-600 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Itinerary */}
              <div className="bg-white rounded-2xl p-8 border border-neutral-200">
                <h2 className="font-heading text-2xl font-bold text-neutral-900 mb-6">Itinerary</h2>
                <div className="space-y-6">
                  {packageInfo.itinerary.map((day: any) => (
                    <div key={day.day} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="h-12 w-12 rounded-full bg-secondary-100 flex items-center justify-center">
                          <span className="font-bold text-secondary-900">{day.day}</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-neutral-900 mb-1">{day.title}</h3>
                        <p className="text-sm text-neutral-600">{day.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inclusions & Exclusions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-6 border border-neutral-200">
                  <h3 className="font-heading text-xl font-bold text-neutral-900 mb-4">Inclusions</h3>
                  <ul className="space-y-2">
                    {packageInfo.inclusions.map((item: string, index: number) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-neutral-700">
                        <CheckCircleIcon className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white rounded-2xl p-6 border border-neutral-200">
                  <h3 className="font-heading text-xl font-bold text-neutral-900 mb-4">Exclusions</h3>
                  <ul className="space-y-2">
                    {packageInfo.exclusions.map((item: string, index: number) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-neutral-700">
                        <span className="text-red-600 flex-shrink-0 mt-0.5">✕</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Sidebar - Booking Card */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-white rounded-2xl p-6 border-2 border-secondary-200 shadow-lg">
                <div className="mb-6">
                  <p className="text-sm text-neutral-600 mb-1">Price per person</p>
                  <p className="font-heading text-4xl font-bold text-neutral-900">{packageInfo.price}</p>
                  <p className="text-xs text-neutral-500 mt-1">*Excluding taxes</p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between py-3 border-b border-neutral-200">
                    <span className="text-sm text-neutral-700">Duration</span>
                    <span className="text-sm font-semibold text-neutral-900">{packageInfo.duration}</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-neutral-200">
                    <span className="text-sm text-neutral-700">Group Size</span>
                    <span className="text-sm font-semibold text-neutral-900">{packageInfo.groupSize}</span>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <span className="text-sm text-neutral-700">Availability</span>
                    <span className="text-sm font-semibold text-green-600">Available</span>
                  </div>
                </div>

                <Button size="lg" variant="secondary" fullWidth className="mb-3">
                  Book Now
                </Button>
                <Button size="lg" variant="outline" fullWidth>
                  Request Custom Quote
                </Button>

                <div className="mt-6 pt-6 border-t border-neutral-200">
                  <p className="text-xs text-neutral-600 text-center">
                    Need help? Call us at <br />
                    <a href="tel:+911234567890" className="font-semibold text-secondary-600 hover:text-secondary-700">
                      +91 123 456 7890
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
