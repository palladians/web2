import { Metadata } from "next";
import { About } from "@/components/about";
import { Cta } from "@/components/cta";
import { Hero } from "@/components/hero";
import { LatestArticles } from "@/components/latest-articles";
import { ProductShowcase } from "@/components/product-showcase";
import { SocialProof } from "@/components/social-proof";

export const metadata: Metadata = {
  title: "You and the Web3 \\ Palladians",
  openGraph: {
    title: "You and the Web3 \\ Palladians",
  },
};

const HomePage = () => {
  return (
    <main className="flex flex-col gap-24">
      <Hero />
      <SocialProof />
      <About />
      <div id="products" />
      <ProductShowcase
        title="Pallad"
        url="https://pallad.xyz"
        description="Pallad is a unique Web3 wallet for Mina protocol and zkEVMs. It follows W3C standards for Verifiable Credentials and will soon enable efficient zkApps delivery. The wallet is the result of our combined experience in application development and modern fintech."
        imgSrc="/pallad.jpg"
      />
      <ProductShowcase
        title="Minaverse"
        url="https://minaverse.xyz"
        description="Minaverse is a powerful blockchain explorer that helps you understand and interact with the Mina blockchain. With its user-friendly interface and rich data visualizations, Minaverse is the perfect tool for anyone who wants to learn more about or use the Mina ecosystem."
        imgSrc="/minaverse.jpg"
      />
      <Cta />
      <ProductShowcase
        title="Open Source"
        url="https://github.com/palladians"
        description="Most of the code we ship is open source and available for review. We believe that creating open source solutions helps foster innovation and creates opportunities to further involve the community in the development process."
        imgSrc="/herald.jpg"
      />
    </main>
  );
};

export default HomePage;
