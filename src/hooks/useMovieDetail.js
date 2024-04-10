import { useQuery } from "@tanstack/react-query";
import api from "../utils/api"

const fetchMovieDetail = ({id}) => api.get(`/movie/${id}?language=ko-KR`)

const useMovieDetail = ({id}) => useQuery({
    queryKey: ['movie-detail', {id}],
    queryFn: fetchMovieDetail({id}),
})

export default useMovieDetail