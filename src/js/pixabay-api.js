import axios from 'axios';
const API_KEY = '49053882-7e244883c6f1c912e1433ba1a';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query, page = 1, perPage = 15) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page,
    per_page: perPage,
  };

  try {
    const response = await axios.get(BASE_URL, { params });
    return response.data;
  } catch (error) {
    throw new Error(`An error occurred: ${error.message}`);
  }
}
