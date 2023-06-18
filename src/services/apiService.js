import axios from 'axios';

const API_URL = 'https://rickandmortyapi.com/api';

export const getCharacters = (name) => {
  const params = name ? { name } : {}; // Tạo đối tượng params nếu có tham số name

  return axios.get(`${API_URL}/character`, { params });
};

export const getCharacterById = (characterId) => {
  return axios.get(`${API_URL}/character/${characterId}`);
};

