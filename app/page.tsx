"use client";
import { Navbar } from "./_components/navbar";
import { Header } from "./_components/header";
import { ProductSequence } from "./_components/product-sequence";
import { Marquee } from "./_components/marquee";
import { MyWork } from "./_components/my-work";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <div className="mt-36" />
      <Header />
      <div className="mt-36" />
      <ProductSequence />
      <div className="mt-16 md:mt-36" />
      <Marquee
        text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum mollitia, optio dicta officia fuga iusto facere voluptatum eos incidunt, facilis vel laborum a minima provident. Eum cupiditate unde nam voluptatibus?"
        variant="white"
      />

      <div className="mt-36" />
      <MyWork />
      <div className="mt-36" />
      <Marquee
        text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum mollitia, optio dicta officia fuga iusto facere voluptatum eos incidunt, facilis vel laborum a minima provident. Eum cupiditate unde nam voluptatibus?"
        variant="primary"
      />
      <div className="mt-36" />
    </div>
  );
}
