import { useState } from 'react';
import PropTypes from 'prop-types';
import { ImSearch } from 'react-icons/im';

export function SearchBar({ onSubmit }) {
  const [inputData, setInputData] = useState('');

  const onChangeInput = e => {
    setInputData(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (inputData.trim() === '') {
      alert('You cannot search by empty field, try again.');
      return;
    }
    onSubmit(inputData);
    setInputData('');
  };

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={handleSubmit}>
        <button type="submit" className="SearchForm-button">
          <ImSearch size={25} />
        </button>
        <input
          className="SearchForm-input"
          type="text"
          autocomplete="off"
          autoFocus
          value={inputData}
          onChange={onChangeInput}
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}

SearchBar.propTypes = {
  onsubmit: PropTypes.func,
};
