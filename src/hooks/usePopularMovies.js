import { useQuery } from "@tanstack/react-query";
import api from "../utils/api"

const fetchPopularMovies = () => api.get('/movie/popular?language=ko-KR')

const usePopularMoviesQuery = () => useQuery({
    queryKey:['movie-popular'],
    queryFn:fetchPopularMovies,
    select: (result) => result.data
})

export default usePopularMoviesQuery