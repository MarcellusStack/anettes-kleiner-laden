"use client";
import { Navbar } from "./_components/navbar";
import { Header } from "./_components/header";
import { ProductSequence } from "./_components/product-sequence";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <div className="h-[50vh] md:h-screen" />
      <ProductSequence />
      <div className="h-screen"></div>
    </>
  );
}
