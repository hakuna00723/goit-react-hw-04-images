  import axios from 'axios';
// 33069759-eb7cb627be4bd2525d5857774
// https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12

axios.defaults.baseURL = 'https://pixabay.com/api';

const fetchImages = async (query, currentPage) => {
  const API_KEY = '33069759-eb7cb627be4bd2525d5857774';

  const { data } = await axios.get(
    `/?q=${query}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
  );

  return data;
};

export default fetchImages;