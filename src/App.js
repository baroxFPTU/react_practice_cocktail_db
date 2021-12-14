import React, {
  createContext,
  Suspense,
  useEffect,
  useRef,
  useState,
} from "react";
import { Route, Routes } from "react-router-dom";
import LoadingSkeleton from "./components/LoadingSkeleton";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
const CocktailDetail = React.lazy(() => import("./pages/CocktailDetail"));

export const AppContext = createContext({
  onFilterChange: null,
  listCocktail: [],
  isLoading: true,
});

const API_URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php";

function App() {
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

  return (
    <AppContext.Provider value={values}>
      <main className="app">
        <Navbar />
        <Suspense fallback={<LoadingSkeleton />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cocktail/:id" element={<CocktailDetail />} />
          </Routes>
        </Suspense>
      </main>
    </AppContext.Provider>
  );
}

export default App;
