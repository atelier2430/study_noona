import { useQuery } from "@tanstack/react-query";
import api from "../utils/api"

const fetchMovies = () => api.get('/movie/top_rated?language=ko-KR')

const useTopRatedMoviesQuery = () => useQuery({
    queryKey:['movie-top-rated'],
    queryFn:fetchMovies,
    select: (result) => result.data
})

export default useTopRatedMoviesQuery