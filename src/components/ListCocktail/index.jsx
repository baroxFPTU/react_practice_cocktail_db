import React from 'react';
import PropTypes from 'prop-types';
import ItemCocktail from '../ItemCocktail';
import classes from './ListCocktail.module.css';

ListCocktail.propTypes = {
  list: PropTypes.array
};

ListCocktail.defaultProps = {
  list: []
}

function ListCocktail({list}) {
  return (
    <section className={classes.listCocktail}>
      {list.map((item, index) => (<ItemCocktail data={item} key={index}/>))}
    </section>
  );
}

export default ListCocktail;