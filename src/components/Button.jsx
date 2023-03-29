import PropTypes from 'prop-types';

export const Button = ({ onClick }) => {
  return (
    <button className="Button" type="button" onClick={() => onClick()}>
      Load more
    </button>
  );
};

Button.propTypes = {
  onNextPage: PropTypes.func.isRequired,
};
