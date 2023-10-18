import axios from 'axios';
import { envVariables } from '../environment';

export const fetchAllCharacters = axios
    .get(`${envVariables.CHARACTERS_API_URL}`)
    .then((response) => response)
    .catch((error) => {
        console.log(error);
        return error;
    });
