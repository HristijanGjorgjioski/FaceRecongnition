import axios from 'axios';

const url = 'http://localhost:5000';

export const createUser = axios.post(`${url}/register`);
