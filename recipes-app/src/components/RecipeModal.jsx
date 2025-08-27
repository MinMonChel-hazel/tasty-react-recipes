import React from "react";

export default function RecipeModal({ recipe, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* overlay */}
      <div
        className="absolute inset-0 bg-slate-400 opacity-80"
        onClick={onClose} // overlay click close
      ></div>

      {/* modal box */}
      <div className="relative bg-white rounded-lg shadow-lg p-6 z-50 max-w-xl lg:max-w-md w-full">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-black"
          onClick={onClose}
        >
          ✕
        </button>
        <div className="text-left">
          <h2 className="text-xl font-bold mb-2">{recipe.title}</h2>
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-32 md:h-36 object-cover mb-4 rounded"
          />
          <h3 className="font-semibold my-1">Ingredients</h3>
          <ul className="list-disc list-inside">
            {recipe.ingredients.map((ingredient, index) => (
              <li
                key={index}
                className="text-gray-600 text-[12px] lg:text-[14px] leading-4 lg:leading-normal"
              >
                {ingredient}
              </li>
            ))}
          </ul>
          <h3 className="font-semibold my-1">Instructions</h3>
          <p className="text-gray-600 text-[12px] leading-3.5 lg:leading-normal">
            {recipe.instructions.join(" ")}
          </p>
        </div>
      </div>
    </div>
  );
}
