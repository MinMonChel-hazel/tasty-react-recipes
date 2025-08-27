import React, { use, useEffect } from "react";
import recipes from "../data/db";
import { useState } from "react";
import RecipeCard from "./RecipeCard";
import RecipeModal from "./RecipeModal";

export default function Recipes({ onClick }) {
  const [recipesList, setRecipesList] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

  const closeModal = () => {
    setSelectedRecipe(null);
  };

  useEffect(() => {
    setRecipesList(recipes);
  }, []);

  useEffect(() => {
    const query = searchQuery.toLowerCase();
    const filteredRecipes = recipes.filter(
      (recipe) =>
        recipe.title.toLowerCase().includes(query) ||
        recipe.category.toLowerCase().includes(query) ||
        recipe.ingredients.some((ing) => ing.toLowerCase().includes(query)) ||
        recipe.instructions.includes(query)
    );
    setRecipesList(filteredRecipes);
  }, [searchQuery]);

  useEffect(() => {
    const filteredRecipes = categoryFilter
      ? recipes.filter((recipe) => recipe.category === categoryFilter)
      : recipes;
    setRecipesList(filteredRecipes);
  }, [categoryFilter]);

  const clearSearch = () => {
    setSearchQuery("");
    setCategoryFilter("");
  };

  return (
    <div
      id="recipes"
      className="container mx-auto px-10 py-8 bg-amber-50 text-center"
    >
      <h2 className="text-2xl font-bold mb-4">Featured Recipes</h2>
      <p className="mb-6 text-gray-600 text-[14px]">
        Explore a variety of delicious recipes curated just for you.
      </p>
      <div className="flex items-center justify-center gap-4 mx-20 mb-10">
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          type="text"
          placeholder="Search Recipes..."
          className="w-2/5 border border-gray-400 rounded-2xl px-4 py-1.5 text-[14px] focus:outline-none focus:ring-2 focus:ring-amber-500"
        />
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="w-2/5 border border-gray-400 rounded-2xl px-4 py-1.5 text-[14px] focus:outline-none focus:ring-2 focus:ring-amber-500"
        >
          <option selected>All Categories</option>
          {[...new Set(recipes.map((recipe) => recipe.category))].map(
            (cat, index) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            )
          )}
        </select>
        <button
          onClick={clearSearch}
          className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-orange-500 hover:to-amber-500 transition-colors duration-100 text-white px-4 py-2 text-[14px] rounded-full"
        >
          Clear Search
        </button>
      </div>
      <section id="recipes">
        {recipesList.length > 0 ? (
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {recipesList.map((recipe, index) => (
              <RecipeCard
                key={index}
                recipe={recipe}
                onClick={() => setSelectedRecipe(recipe)}
              />
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">No recipes found.</p>
        )}
      </section>
      {selectedRecipe && (
        <RecipeModal recipe={selectedRecipe} onClose={closeModal} />
      )}
    </div>
  );
}
