"use client";
import About from "@patercast/components/about/IndexSectionAbout10";
import ExclusiveContent from "@patercast/components/exclusiveContent/exclusive-content";
import CTA from "@patercast/components/features/CTA";
import Hero from "@patercast/components/headers/Hero";
import Product from "@patercast/components/newsletter/product";
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
    </div>
  );
}
