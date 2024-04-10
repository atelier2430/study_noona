import { useQuery } from "@tanstack/react-query";
import api from "../utils/api"

const fetchMovieDetailCredits = ({id}) => api.get(`/movie/${id}/credits?language=ko-KR`)

const useMovieDetailCredits = ({id}) => useQuery({
    queryKey: ['movie-credits', {id}],
    queryFn: () => fetchMovieDetailCredits({id}),
    select: (result) => result.data
})

export default useMovieDetailCredits