import { Component } from 'react';
import PropTypes from 'prop-types';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = evt => {
    if (evt.code !== 'Escape') {
      return;
    }
    this.props.onClose();
  };

  onClick = evt => {
    if (evt.target !== evt.currentTarget) {
      return;
    }
    this.props.onClose();
  };

  render() {
    const { largeImageURL } = this.props;
    return (
      <div className="Overlay" onClick={this.onClick}>
        <div className="Modal">
          <img src={largeImageURL} alt="img" />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
};

export default Modal;
