import axios from 'axios';
const API_KEY = '49339329-0a7bb8ed4f14e1ebd3c55d65b';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchData(query, page = 1, perPage = 15) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        page,
        per_page: perPage,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}
