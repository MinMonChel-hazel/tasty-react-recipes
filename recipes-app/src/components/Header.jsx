import React from "react";

export default function Header() {
  return (
    <div className="container mx-auto bg-gradient-to-r from-amber-500 to-orange-500 px-2 md:px-10 py-2 flex justify-between items-center fixed top-0 z-10 shadow-md">
      <a href="#">
        <h1 className="text-base md:text-xl font-bold text-white tracking-wide">
          Tasty Recipes
        </h1>
      </a>
      <nav className="space-x-3 md:space-x-6">
        {["Home", "Recipes", "About", "Contact"].map((navbarItem) => (
          <a
            key={navbarItem}
            href={`#${navbarItem.toLowerCase()}`}
            className="text-sm md:text-base text-white hover:text-amber-300 transition-colors duration-200"
          >
            {navbarItem}
          </a>
        ))}
      </nav>
    </div>
  );
}
