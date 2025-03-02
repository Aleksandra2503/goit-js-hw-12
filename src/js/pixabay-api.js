import axios from 'axios';

export const fetchImages = async (searchQuery, page = 1) => {
  const API_KEY = '48797096-f4883239ab22667ebb957e7d3';
  const BASE_URL = 'https://pixabay.com/api/';

  try {
    console.log('Запит до API:', BASE_URL, {
      params: {
        key: API_KEY,
        q: searchQuery,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: page,
        per_page: 40,
      },
    });

    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: searchQuery,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: page,
        per_page: 40,
      },
    });

    console.log('Відповідь від API:', response.data);

    return response.data;
  } catch (error) {
    console.error(
      'Помилка при отриманні зображень:',
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};
