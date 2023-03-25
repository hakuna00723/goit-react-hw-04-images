import { Component } from 'react';
import PropTypes from 'prop-types';
import { ImSearch } from 'react-icons/im';

class SearchBar extends Component {
  state = {
    inputData: '',
  };

  onChangeInput = e => {
    this.setState({
      inputData: e.currentTarget.value.toLowerCase(),
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.inputData.trim() === '') {
      alert('You cannot search by empty field, try again.');
      return;
    }
    this.props.onSubmit(this.state.inputData);
    this.setState({ inputData: '' });
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <ImSearch size={25} />
          </button>
          <input
            className="SearchForm-input"
            type="text"
            autocomplete="off"
            autoFocus
            value={this.state.inputData}
            onChange={this.onChangeInput}
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

SearchBar.propTypes = {
  onsubmit: PropTypes.func,
};

export default SearchBar;
