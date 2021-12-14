import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import classes from './ItemCocktail.module.css'

ItemCocktail.propTypes = {
  data: PropTypes.object
};

ItemCocktail.defaultProps = {
  data: null
}

function ItemCocktail({data}) {
  return (
    <article className={classes["cocktail"]}>
      <div className={classes["cocktail__thumb"]}>
        <img src={data.strDrinkThumb} alt="" />
      </div>
      <div className={classes["cocktail__info"]}>
        <h3>{data.strDrink}</h3>
        <p className={classes["cocktail__category"]}>{data.strCategory}</p>
        <span className={classes["cocktail__ingredient"]}>{data.Ingredient1}</span>
        <Link to={`/cocktail/${data.idDrink}`}>Read more</Link>
      </div>
    </article>
  );
}

export default ItemCocktail;