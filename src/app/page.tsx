import {
  WhyChooseUs,
  FeaturedTours,
  Testimonials,
  CTASection,
} from '@/components/sections';
import HeroWithFloatingTestimonials from '@/components/showcase/HeroWithFloatingTestimonials';

export default function Home() {
  return (
    <>
      <HeroWithFloatingTestimonials />
      <WhyChooseUs />
      <FeaturedTours />
      <Testimonials />
      <CTASection />
    </>
  );
}
