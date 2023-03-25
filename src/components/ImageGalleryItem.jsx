import { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';

class ImageGalleryItem extends Component {
  state = { shownModal: false };

  onModal = () => {
    this.setState(({ shownModal }) => ({
      shownModal: !shownModal,
    }));
  };

  render() {
    const { shownModal } = this.state;
    const { webformatURL, largeImageURL } = this.props.image;

    return (
      <li className="ImageGalleryItem">
        <img
          className="ImageGalleryItem-image"
          src={webformatURL}
          alt="img"
          onClick={this.onModal}
        />
        {shownModal && (
          <Modal largeImageURL={largeImageURL} onClose={this.onModal} />
        )}
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }),
};

export default ImageGalleryItem;
