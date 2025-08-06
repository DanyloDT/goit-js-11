import axios from 'axios';

const API_KEY = '37105589-3d487ec0acc050f78cec264eb';
const BASE_URL = 'https://pixabay.com/api/';

export const getImagesByQuery = query => {
  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    // page: 1,
    // per_page: 40,
  });

  return axios.get(`${BASE_URL}?${searchParams}`);
};
