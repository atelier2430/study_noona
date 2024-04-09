import { useQuery } from "@tanstack/react-query";
import api from "../utils/api"

const fetchMovies = () => api.get('/movie/upcoming?language=ko-KR')

const useUpcomingdMoviesQuery = () => useQuery({
    queryKey:['movie-upcoming'],
    queryFn:fetchMovies,
    select: (result) => result.data
})

export default useUpcomingdMoviesQuery