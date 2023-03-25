import { Component } from 'react';
import Searchbar from './Searchbar';
import ImgGallery from './ImageGallery';
import Loader from './Loader';
import Button from './Button';
import fetchImages from '../services/api';

export class App extends Component {
  state = {
    inputData: '',
    images: [],
    error: null,
    status: 'idle',
    page: 1,
    isThisLastPage: false,
    isLoading: false,
    isMore: false,
  };

  handleSubmit = inputData => {
    this.setState({ inputData, page: 1 });
  };

  onNextPage = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  cutImg = imgInfo => {
    return imgInfo.map(({ id, webformatURL, largeImageURL }) => {
      return { id, webformatURL, largeImageURL };
    });
  };

  async componentDidUpdate(_, prevState) {
    const { inputData, page } = this.state;

    if (prevState.inputData === inputData && prevState.page === page) {
      return;
    }

    try {
      this.setState({ status: 'pending' });
      const response = await fetchImages(inputData, page);
      const newImages = this.cutImg(response.hits);
      const isThisLastPage = Math.ceil(response.total / 12) <= page;
      this.setState(prevState => ({
        images: [...prevState.images, ...newImages],
        status: 'resolved',
        isThisLastPage,
      }));

      if (newImages.length === 0) {
        alert(
          `Sorry, there are no images matching your search ${inputData}. Please try again.`
        );
      }
    } catch (error) {
      this.setState({ error, status: 'rejected' });
    }
  }

  render() {
    const { status, isThisLastPage, images } = this.state;

    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSubmit} />
        <ImgGallery onNextPage={this.onNextPage} images={images} />
        {status === 'pending' && <Loader />}
        {status !== 'idle' && !isThisLastPage && (
          <Button onClick={this.onNextPage} status={status} />
        )}
      </div>
    );
  }
}
