import axios from 'axios';

const pokeApi = axios.create({
  baseURL: 'http://192.168.1.105:1337/api',
});

export default pokeApi;
