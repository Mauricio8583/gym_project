import axios from "axios"
import { apiKeyTranslate } from "../constants";
import 'react-native-url-polyfill/auto'

export const apiCallTranslate = async (sentence) => {
    const options = {
        method: 'POST',
        url: 'https://microsoft-translator-text.p.rapidapi.com/translate',
        params: {
          'to[0]': 'pt',
          'api-version': '3.0',
          profanityAction: 'NoAction',
          textType: 'plain'
        },
        headers: {
          'content-type': 'application/json',
          'X-RapidAPI-Key': apiKeyTranslate,
          'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com'
        },
        data: [
          {
            Text: sentence
          }
        ]
      };
      
      let response = await axios.request(options);
      return response.data
          
}