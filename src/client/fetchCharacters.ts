import axios from "axios";
import { envVariables } from "../environment";

export const fetchAllCharacters = axios.get(`${envVariables.url}`);
