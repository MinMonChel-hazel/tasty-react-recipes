import React from "react";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function Main() {
  return (
    <div>
      <Home />
      <Recipes />
      <About />
      <Contact />
    </div>
  );
}
