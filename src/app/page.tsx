import Hero from "@/components/hero/hero"
import Brand from "@/components/main/brand"
import BlockchainFeatures from "@/components/main/developing"
import SmartContractSection from "@/components/main/SmartContract"
import ValuesSection from "@/components/main/ValuesSection"
import BlogCarousel from "@/components/main/BlogCarousel"
import HeroSection from "@/components/main/Future"
import Footer from "@/components/main/footer"
export default function Home() {
  return (
    <>
      <Hero />
      <Brand />
      <BlockchainFeatures />
      <SmartContractSection />
      <ValuesSection />
      <BlogCarousel />
      {/* <HeroSection /> */}
      <Footer />
    </>
  );
}
