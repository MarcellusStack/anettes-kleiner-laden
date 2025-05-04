"use client";
import { Navbar } from "./_components/navbar";
import { Header } from "./_components/header";
import { ProductSequence } from "./_components/product-sequence";
import { Marquee } from "./_components/marquee";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <div className="h-screen" />
      <ProductSequence />
      <div className="h-screen"></div>
      <Marquee
        text1="Hello World lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        text2="Hello World lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
      />
      <div className="h-screen"></div>
    </>
  );
}
