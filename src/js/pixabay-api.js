import axios from 'axios';

export function searchImages(imgsName, page) {
  const BASE_URL = 'https://pixabay.com';
  const END_POINT = '/api/';
  const url = BASE_URL + END_POINT;

  const params = {
    key: '48973939-644076cc1162f9ad5e5260876',
    q: imgsName,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: page,
    per_page: 40,
  };
  const headers = { Accept: 'application/json' };

  return axios.get(url, { params, headers });
}