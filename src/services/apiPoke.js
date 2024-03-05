import axios from 'axios';

const pokeApi = axios.create({
  baseURL: 'http://192.168.4.232/api',
});

export default pokeApi;
