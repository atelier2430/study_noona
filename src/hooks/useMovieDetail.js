import { useQuery } from "@tanstack/react-query";
import api from "../utils/api"

const fetchMovieDetail = ({id}) => api.get(`/movie/${id}?language=ko-KR`)

const useMovieDetailQuery = ({id}) => useQuery({
    queryKey: ['movie-detail', {id}],
    queryFn: () => fetchMovieDetail({id}),
    select: (result) => result.data
})

export default useMovieDetailQuery