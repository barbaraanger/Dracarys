import axios from 'axios';
import { envVariables } from '../environment';

const headers = {
    'X-Api-Key': `${envVariables.NEWS_API_KEY}`,
};

const params = {
    'searchIn': 'title',
    'language': 'en'
};

export const fetchNews = axios.get(envVariables.NEWS_API_URL || '', { headers, params });