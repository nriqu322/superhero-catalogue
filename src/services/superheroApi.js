import axios from 'axios';

const api = {
  baseUrl: 'https://superheroapi.com/api/',
  token: '10158849047488054',
};

const url = `${api.baseUrl}${api.token}`;

const getSuperhero = async name => axios
  .get(`${url}/search/${name}`)
  .then(response => response.data);

export default getSuperhero;
