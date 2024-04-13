import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { Alert, Container, Row, Col } from 'react-bootstrap';
import useSearchMovieQuery from '../../hooks/useSearchMovie'
import LoadingComp from '../../component/common/Loading';
import MovieCard from '../../common/MovieCard/MovieCard';
import MovieFilter from './components/MovieFilter/MovieFilter';

import './MoviePage.style.css'

// 경로 1. navbar에서 클릭 > popular
// 경로 2. 키워드 검색 > 키워드 관련 영화

function MoviePage() {
  const [query, setQuery] = useSearchParams();
  const [page, setPage] = useState(1);
  const keyword = query.get('q');
  const { data, isLoading, isError, error } = useSearchMovieQuery({keyword, page})
  const [sortedMovieList, setSortedMovieList] = useState(null)
  if(isLoading){
      <LoadingComp />
  }
  if(isError) {
      <Alert variant="danger">{error.message}</Alert>
  }

  useEffect(() => {
    if (data && data.results) {
      setSortedMovieList(data.results);
    }
  }, [data]);

  useEffect(()=>{setQuery('')},[])

  const handlePageClick = ({selected}) => {
    setPage(selected+1)
  }

  const handleSortChange = (sortType) => {
    setSortedMovieList(prevData => [...prevData].sort((a, b) => {
        if (sortType === 'popularity') {
          return b.popularity - a.popularity;
        } if (sortType === 'release_date') {
          return new Date(b.release_date) - new Date(a.release_date);
        }
        return 0;
      }));
  };


  return (

    <Container>
      <Row>
        <Col lg={4} xs={12}>
          <MovieFilter onSortChange={handleSortChange} />
        </Col>
        <Col lg={8} xs={12}>
          <Row className="g-4">
            {sortedMovieList &&
            sortedMovieList.map(movie => (
              <Col lg={4} xs={6} key={movie.id}>
                <MovieCard movie={movie}/>
              </Col>
            ))}
          </Row>
          <ReactPaginate
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={data?data.total_pages:0}
            previousLabel="<"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
            forcePage={Math.max(0, page-1)}
          />
        </Col>
      </Row>
    </Container>
  )
}

export default MoviePage