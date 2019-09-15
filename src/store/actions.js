import axios from 'axios';

const fetchData = () => {
    const API_KEY = 'OcHmRVTkygJIEp6xyajgvM8npBUC5tIfphQrMO7L';
    const END_POINT = 'https://api.nasa.gov/planetary/apod?api_key=';
    const request = axios.get(END_POINT+API_KEY);

    return {
        type: 'FETCH_DATA',
        payload: request
    }
}

export default fetchData;
