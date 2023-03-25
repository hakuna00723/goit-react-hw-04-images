import PropTypes from 'prop-types';
import ImageGalleryItem from './ImageGalleryItem';

const ImgGallery = ({ images }) => {
  return (
    <ul className="ImageGallery">
      {images.map(image => (
        <ImageGalleryItem key={image.id} image={image} />
      ))}
    </ul>
  );
};

ImgGallery.propTypes = {
  images: PropTypes.array.isRequired,
};

export default ImgGallery;
