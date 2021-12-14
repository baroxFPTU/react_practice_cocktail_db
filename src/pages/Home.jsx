import React, { useContext, useEffect } from 'react';
import ListCocktail from '../components/ListCocktail';
import { AppContext } from '../App';
import LoadingSkeleton from '../components/LoadingSkeleton';

function Home(props) {
  const {listCocktail, isLoading, onFilterChange} = useContext(AppContext);

  useEffect(() => {
    onFilterChange('a');
  }, []);

  return (
    <>
      <div className="wrapper">
        {isLoading ? <LoadingSkeleton/> :
            listCocktail ? <ListCocktail list={listCocktail}/> : <b>Nothing to render</b>
          }
      </div>
    </>
  );
}

export default Home;