
import { MoviesList } from '../components/MoviesList';
import { MoviesContainer } from '../style/MoviesContainer';
import { MovieService } from '../services/MovieServices';
import { useState, useEffect } from 'react';

export const Home = () => {
    const [movies, setMovies] = useState([]);
    const fetchMovies = async() => {
    const retorno = await MovieService.getMovies();
        setMovies(retorno.data.results);
    }

    useEffect(() => {
     fetchMovies()
    }, []);

    return(
    <MoviesContainer>
        <MoviesList movies={movies}/>
    </MoviesContainer>)
}