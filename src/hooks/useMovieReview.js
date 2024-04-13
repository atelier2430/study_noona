import { useQuery } from "@tanstack/react-query";
import api from "../utils/api"

const fetchMovieReviews = ({id}) => api.get(`/movie/${id}/reviews?page=1`)

const useMovieReviews = ({id}) => useQuery({
    queryKey: ['movie-reviews', {id}],
    queryFn: () => fetchMovieReviews({id}),
    select: (result) => result.data
})

export default useMovieReviews