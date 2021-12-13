import React, { createContext } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

export const AppContext = createContext();

function App() {
  const onFilterChange = (filter) => {
    console.log("filter changed:", filter);
  };

  const values = {
    onFilterChange,
  };

  return (
    <AppContext.Provider value={values}>
      <main className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </AppContext.Provider>
  );
}

export default App;
