// import axios from 'axios';

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

async function getSuperhero(name = '') {
  try {
    const response = await fetch(`${api.baseUrl}${api.token}/search/${name}`, { mode: 'no-cors' });
    const data = await response.json();
    return data;
  } catch (e) {
    return {
      error: e.message,
    };
  }
}

export default getSuperhero;
