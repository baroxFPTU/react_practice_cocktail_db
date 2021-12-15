import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import LoadingSkeleton from '../components/LoadingSkeleton';
import CocktailArticle from '../components/CocktailArticle';

function CocktailDetail(props) {
  const { id }= useParams();
  const [cocktail, setCocktail] = useState(null);
  console.log(id);

  useEffect(() => {
    async function getCocktailById() {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
      const newCocktail = await response.json();
      setCocktail(newCocktail.drinks[0]);
    }
    getCocktailById();
  }, [id]);

  return (
   cocktail ? <CocktailArticle cocktail={cocktail}/> : <LoadingSkeleton/>
  );
}

export default CocktailDetail;