import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://udemy-react-3cb2b.firebaseio.com/'
})

export default instance;
