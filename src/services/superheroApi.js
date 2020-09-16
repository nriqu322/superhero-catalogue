// import axios from 'axios';

const cors = 'https://cors-anywhere.herokuapp.com/';
const api = {
  baseUrl: 'https://superheroapi.com/api/',
  token: '10158849047488054',
};

// const url = `${api.baseUrl}${api.token}`;

// const getSuperhero = async (name = '') => {
//   axios
//     .get(`${url}/search/batman`)
//     .then(response => response.data);
// };

async function getSuperhero(name) {
  try {
    const response = await fetch(`${cors}${api.baseUrl}${api.token}/search/${name}`);
    const data = await response.json();
    return data.results;
  } catch (e) {
    return {
      error: e.message,
    };
  }
}

export default getSuperhero;
