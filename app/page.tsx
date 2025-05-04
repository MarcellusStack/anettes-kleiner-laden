"use client";
import { Navbar } from "./_components/navbar";
import { Header } from "./_components/header";
import { ProductSequence } from "./_components/product-sequence";
import { Marquee } from "./_components/marquee";
import { MyWork } from "./_components/my-work";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="md:mt-36" />
      <Header />
      <div className="md:mt-36" />
      <ProductSequence />
      <div className="mt-36" />
      <MyWork />
      <div className="mt-36" />
      <Marquee
        text1="Hello World lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        text2="Hello World lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
      />
    </>
  );
}
