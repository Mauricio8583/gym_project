import axios from "axios";
import { apiKey } from "../constants";

const baseURL = 'https://exercisedb.p.rapidapi.com';

const apiCall = async (url, params) => {
    const options = {
        method: 'GET',
        url,
        params,
        headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
    };

    const response = await axios.request(options);
    return response.data
}

export const exercicesByBodyPart = async (bodyPart) => {
    let data = await apiCall(baseURL + `/exercises/bodyPart/${bodyPart}`);
    return data
}