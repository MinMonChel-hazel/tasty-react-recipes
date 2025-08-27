import React from "react";

export default function RecipeCard({ recipe, onClick }) {
  return (
    <li className="bg-white">
      <div
        className="rounded-lg shadow-md hover:shadow-xl cursor-pointer transition-all duration-300 overflow-hidden"
        onClick={onClick}
      >
        <img
          src={recipe.image}
          alt={recipe.title}
          className="mb-2 rounded-t-lg w-full h-48 object-cover hover:scale-105 transition-transform duration-200"
        />
        <h3 className="font-semibold text-lg">{recipe.title}</h3>
        <p className="text-gray-600 text-sm pb-3">{recipe.description}</p>
      </div>
    </li>
  );
}
