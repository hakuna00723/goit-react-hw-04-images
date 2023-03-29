import { useState, useEffect } from 'react';
import { SearchBar } from './Searchbar';
import { ImgGallery } from './ImageGallery';
import { Loader } from './Loader';
import { Button } from './Button';
import { fetchImages } from '../services/api';

export const App = () => {
  const [inputData, setInputData] = useState('');
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');
  const [page, setPage] = useState(1);
  const [isThisLastPage, setIsThisLastPage] = useState(false);
  const [prevInputData, setPrevInputData] = useState('');

  const handleSubmit = inputData => {
    setInputData(inputData);
    setPage(1);
    setStatus('idle');
  };

  const onNextPage = () => {
    setPage(page + 1);
  };

  const cutImg = imgInfo => {
    return imgInfo.map(({ id, webformatURL, largeImageURL }) => {
      return { id, webformatURL, largeImageURL };
    });
  };

  useEffect(() => {
    const loadImages = async (inputData, page) => {
      if (!inputData) {
        return;
      }

      try {
        setStatus('pending');
        const response = await fetchImages(inputData, page);
        const newImages = cutImg(response.hits);
        setImages(images => [...images, ...newImages]);
        setStatus('resolved');
        setIsThisLastPage(Math.ceil(response.total / 12) <= page);

        if (newImages.length === 0) {
          alert(
            `Sorry, there are no images matching your search ${inputData}. Please try again.`
          );
        }
      } catch (error) {
        setError(error);
        setStatus('rejected');
      }
    };

    console.log('page', page);
    console.log('inputData', inputData);

    if (prevInputData !== inputData) {
      setPage(1);
      setImages([]);
      setPrevInputData(inputData);
      return;
    }

    loadImages(inputData, page);
  }, [page, inputData, prevInputData, error]);

  return (
    <div className="App">
      <SearchBar onSubmit={handleSubmit} />
      <ImgGallery onNextPage={onNextPage} images={images} />
      {status === 'pending' && <Loader />}
      {status !== 'idle' && !isThisLastPage && (
        <Button onClick={onNextPage} status={status} />
      )}
    </div>
  );
};
