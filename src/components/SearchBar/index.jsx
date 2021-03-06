import React, { useContext, useEffect, useState } from 'react';
import {AppContext} from '../../store';

function SearchBar(props) {
  const [inputValue, setInputValue] = useState('');
  const {onFilterChange} = useContext(AppContext);

  useEffect(() => {
    if (inputValue.trim() === '') {return }
    const timerId = setTimeout(() => {
      onFilterChange(inputValue);
    }, 300);

    return () => {
      clearTimeout(timerId);
    }
  }, [inputValue])

  const handleChangeInputValue = (e) => {
    setInputValue(e.target.value);
  }
  
  return (
    <div className="search-bar">
      <input type="text" value={inputValue} onChange={handleChangeInputValue}/>
      <button>Search</button>
    </div>
  );
}

export default SearchBar;