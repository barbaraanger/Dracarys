import axios from 'axios';
import { envVariables } from '../environment';

export const fetchHouses = axios.get(`${envVariables.API_URL}/houses`);