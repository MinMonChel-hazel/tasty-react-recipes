import React from "react";
import Home from "./Home";
import Recipes from "./Recipes";
import About from "./About";
import Contact from "./Contact";

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
