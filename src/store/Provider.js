import React, { useEffect, useRef, useState } from "react";
import AppContext from "./Context";
import { API_URL } from "./constants";

function Provider({ children }) {
  const [listCocktail, setListCocktail] = useState([]);
  const [filter, setFilter] = useState(null);
  const isLoading = useRef(true);

  const onFilterChange = (filter) => {
    isLoading.current = true;
    setFilter(filter);
  };

  useEffect(() => {
    async function getCocktails() {
      if (!filter) return;
      const response = await fetch(`${API_URL}?s=${filter}`);
      const newListCocktail = await response.json();
      console.log("get cocktails");
      isLoading.current = false;
      setListCocktail(newListCocktail.drinks);
    }
    getCocktails();
  }, [filter]);

  const values = {
    onFilterChange,
    listCocktail: listCocktail,
    isLoading: isLoading.current,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

export default Provider;
