import React from "react";

const AppContext = React.createContext({
  onFilterChange: null,
  listCocktail: [],
  isLoading: true,
});

export default AppContext;
