import { useParams } from "react-router"
import { MovieService } from "../services/MovieServices";
import { useState, useEffect } from "react";

export const  Detalhe = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState([]);
    
    const fetchMovie = async() => {
        const {data} = await MovieService.getMovie1ById(id);
        console.log(data)
        setMovie(data);
    }

    useEffect(() => {
     fetchMovie()
    }, []);

    return (
        <>
            <h1>{movie.title} </h1>
            <article>
                {movie.overview}
            </article>
        </>
       
    )
}