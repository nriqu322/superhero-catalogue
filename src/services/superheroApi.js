// import axios from 'axios';

// const cors = 'https://cors-anywhere.herokuapp.com/';
const api = {
  baseUrl: 'https://superheroapi.com/api/',
  token: '10158849047488054',
};

// const url = `${api.baseUrl}${api.token}`;

// const getSuperhero = async (name = '') => {
//   axios
//     .get(`${cors}${url}/search/${name}`)
//     .then(response => response.data);
// };

async function getSuperhero(name) {
  try {
    const response = await fetch(`${api.baseUrl}${api.token}/search/${name}`);
    const data = await response.json();
    return data.results;
  } catch (e) {
    return {
      error: e.message,
    };
  }
}

// const getSuperhero = name => new Promise((resolve, reject) => {
//   axios
//     .get(
//       `${cors}${api.baseUrl}${api.token}/search/${name}`,
//     )
//     .then(data => {
//       resolve(data.data.results);
//       reject(new Error('something bad happened'));
//     });
// });

export default getSuperhero;
