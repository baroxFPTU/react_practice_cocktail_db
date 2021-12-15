import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classes from './CocktailDetail.module.css';

CocktailDetail.propTypes = {
  cocktail: PropTypes.object
};

CocktailDetail.defaultProps = {
  cocktail: {}
}

function CocktailDetail({cocktail}) {
  return (
    <div className={classes.cocktailDetailContainer}>
      <div className={'wrapper ' + classes.cocktailDetailWrapper}>
        <Link to='/' className={classes.cocktailBack}> {`<`} </Link>
        <div className={classes.leftContainer}>
        <div className={classes.cocktailThumb}>
          <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink}/>
        </div>
        <h3 className={classes.cocktailName}>{cocktail.strDrink}</h3>
        <span>{cocktail.strCategory}</span>
      
      </div>
      <div className={classes.rightContainer}> 
        <div className={classes.groupInfo}>
            <span>{cocktail.strAlcoholic}</span>
            <span>{cocktail.strGlass}</span>
        </div>
        <p>{cocktail.strInstructions}</p>
      </div>
        </div>
  </div>
  );
}

export default CocktailDetail;