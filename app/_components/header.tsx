import React from "react";


export const Header = () => {
  return (
    <header className="flex flex-col items-center justify-center min-h-[calc(100vh-113.33px)]">
      <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-sans flex flex-col items-center text-center">
        <span className="text-soft-black font-sans">
          Personalisierte <span className="text-primary">Dekorationen</span>
        </span>
        <span className="font-sans text-soft-black">
          aus <span className="text-primary">Keraflott</span>
        </span>
      </h1>
    </header>
  );
};
