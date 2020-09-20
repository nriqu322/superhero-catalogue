const cors = 'https://cors-anywhere.herokuapp.com/';
const api = {
  baseUrl: 'https://superheroapi.com/api/',
  token: '10158849047488054',
};

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

// async function getSuperheroId(id) {
//   try {
//     const response = await fetch(`${api.baseUrl}${api.token}/${id}`);
//     const data = await response.json();
//     return data.results;
//   } catch (e) {
//     return {
//       error: e.message,
//     };
//   }
// }

export default getSuperhero;
