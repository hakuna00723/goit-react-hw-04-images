import { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal } from './Modal';

export function ImageGalleryItem({ image }) {
  const { webformatURL, largeImageURL } = image;
  const [shownModal, setShownModal] = useState(false);

  const onModal = () => {
    setShownModal(shownModal => !shownModal);
  };

  return (
    <li className="ImageGalleryItem">
      <img
        className="ImageGalleryItem-image"
        src={webformatURL}
        alt="img"
        onClick={onModal}
      />
      {shownModal && <Modal largeImageURL={largeImageURL} onClose={onModal} />}
    </li>
  );
}

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }),
};
