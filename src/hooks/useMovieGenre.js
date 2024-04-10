import { useQuery } from "@tanstack/react-query"
import api from "../utils/api"

const fetchMovieGenre = () => api.get(`/genre/movie/list?language=ko-KR`)

const useMovieGenreQuery = () => useQuery({
    queryKey:['movie-genre'],
    queryFn:fetchMovieGenre,
    select:(result)=>result.data.genres,
    staleTime: 300000
})

export default useMovieGenreQuery