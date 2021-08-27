import axios from 'axios';

const API_KEY = "9a7420218e16e67e1b41691d65aa7d8b";
const BASE_URL =   "https://api.themoviedb.org/3/"
const withBaseUrl = path => `${BASE_URL}${path}?api_key=${API_KEY}`;

export class MovieService{
    static getMovies() {

        console.log(withBaseUrl('movie/popular'))
        return axios(withBaseUrl('movie/popular'));
    }

    static getMovie1ById(id) {
        return axios(withBaseUrl(`movie/${id}`));
    }
}