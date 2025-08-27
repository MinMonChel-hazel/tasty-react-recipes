import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      id="home"
      className="container mx-auto pt-48 md:pt-44 lg:pt-58 flex-col justify-center items-center min-h-screen bg-amber-100 text-center"
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-4">
        Welcome to Tasty Recipes
      </h2>
      <p className="mb-6 text-gray-600 text-[14px] md:text-[15px]">
        Discover delicious recipes from around the world.
      </p>
      <a href="#recipes">
        <button className="text-[16px] bg-gradient-to-r from-amber-500 to-orange-500  text-white px-4 py-1.5 rounded-3xl">
          Browse Recipes
        </button>
      </a>
    </div>
  );
}
