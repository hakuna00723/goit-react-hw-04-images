import { useEffect } from 'react';
import PropTypes from 'prop-types';

export function Modal({ largeImageURL, tags, onClose }) {
  useEffect(() => {
    const handleKeyDown = evt => {
      if (evt.code !== 'Escape') {
        return;
      }
      onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const onClick = evt => {
    if (evt.target !== evt.currentTarget) {
      return;
    }
    onClose();
  };

  return (
    <div className="Overlay" onClick={onClick}>
      <div className="Modal">
        <img src={largeImageURL} alt="img" />
      </div>
    </div>
  );
}

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
};
