import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Hero from "@/components/sections/Hero";
import BrandTrust from "@/components/sections/BrandTrust";
import FeaturedCollections from "@/components/sections/FeaturedCollections";
import USP from "@/components/sections/USP";
import Craftsmanship from "@/components/sections/Craftsmanship";
import BestSellers from "@/components/sections/BestSellers";
import GiftVoucherWinner from "@/components/sections/GiftVoucherWinner";
import OccasionJewelry from "@/components/sections/OccasionJewelry";
import StoreLocations from "@/components/sections/StoreLocations";
import Testimonials from "@/components/sections/Testimonials";
import BrandStory from "@/components/sections/BrandStory";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <BrandTrust />
      <FeaturedCollections />
      <USP />
      <Craftsmanship />
      <BestSellers />
      <GiftVoucherWinner />
      <OccasionJewelry />
      <StoreLocations />
      <Testimonials />
      <BrandStory />

      <Footer />
    </main>
  );
}
