import { useQuery } from "@tanstack/react-query";
import api from "../utils/api"

const fetchMovies = (url) => api.get(`/movie/${url}?language=ko-KR`)

const useMoviesQuery = (key,url) => useQuery({
    queryKey: key,
    queryFn:fetchMovies(url),
    select: (result) => result.data
})

export default useMoviesQuery