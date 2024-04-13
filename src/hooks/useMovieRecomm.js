import { useQuery } from "@tanstack/react-query";
import api from "../utils/api"

const fetchMovieRecomm = ({id}) => api.get(`/movie/${id}/recommendations?page=1`)

const useMovieRecommQuery = ({id}) => useQuery({
    queryKey: ['movie-recommendations', {id}],
    queryFn: () => fetchMovieRecomm({id}),
    select: (result) => result.data
})

export default useMovieRecommQuery