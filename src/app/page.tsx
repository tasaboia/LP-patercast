"use client";
import About from "@patercast/components/about/IndexSectionAbout10";
import CTA from "@patercast/components/features/CTA";
import Hero from "@patercast/components/headers/Hero";
import Product from "@patercast/components/newsletter/product";

export default function Home() {
  return (
    <div>
      <Hero />
      <Product />
      <About />
      <CTA />
    </div>
  );
}
