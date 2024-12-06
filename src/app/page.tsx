"use client";
import About from "@patercast/components/about/IndexSectionAbout10";
import ExclusiveContent from "@patercast/components/exclusiveContent/exclusive-content";
import FAQS from "@patercast/components/faqs/faqs";
import CTA from "@patercast/components/features/CTA";
import Hero from "@patercast/components/headers/Hero";
import Product from "@patercast/components/newsletter/product";
import Pricing from "@patercast/components/pricing/pricing";
import Team from "@patercast/components/team/team";
import Testimonials from "@patercast/components/testimonials/testimonials";

export default function Home() {
  return (
    <div>
      <Hero />
      <Product />
      <About />
      <CTA />
      <ExclusiveContent />
      <Testimonials />
      <Pricing />
      <Team />
      <FAQS />
    </div>
  );
}
