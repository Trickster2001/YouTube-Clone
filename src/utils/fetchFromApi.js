import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
const REACT_APP_RAPID_API_KEY = '68d7b7cdedmsh30ef293e63cec9ep1460f8jsnf3053725c33e'

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key': REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};

