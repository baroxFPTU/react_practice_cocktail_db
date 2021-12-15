import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import CocktailDetail from "./pages/CocktailDetail";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

function App() {
  return (
    <main className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cocktail/:id" element={<CocktailDetail />} />
      </Routes>
    </main>
  );
}

export default App;
