import axios from 'axios';

export const fetchImages = async (searchQuery, page = 1) => {
  const API_KEY = '48797096-f4883239ab22667ebb957e7d3';
  const BASE_URL = 'https://pixabay.com/api/';

  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: '48797096-f4883239ab22667ebb957e7d3',
        q: searchQuery,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: page,
        per_page: 9,
      },
    });

    return response.data.hits;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
};
