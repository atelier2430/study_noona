import { useQuery } from "@tanstack/react-query"
import api from "../utils/api"

const fetchSearchMovie = ({keyword, page}) => (
        keyword
        ? api.get(`/search/movie?query=${keyword}&page=${page}&language=ko-KR`)
        : api.get(`/movie/popular?page=${page}&language=ko-KR`)
    )

const useSearchMovieQuery = ({keyword, page}) => useQuery({
        queryKey: ['movie-search', {keyword, page}],
        queryFn: ()=>fetchSearchMovie({keyword, page}),
        select: (result) => result.data
    })

export default useSearchMovieQuery