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
  const [sortedMovieList, setSortedMovieList] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  if(isLoading){
      <LoadingComp />
  }
  if(isError) {
      <Alert variant="danger">{error.message}</Alert>
  }

  const handleSortChange = (sortType) => {
    // sortedMovieList가 초기화되지 않았다면 바로 반환해서 불필요하게 로직을 돌지 않게 함
    if (!sortedMovieList) return;

    // 정렬을 위해 sortedMovieList 배열 복제함.
    // sort()는 원본 배열을 직접 변경시키기 때문에 복사해서 사용한다.
    const sortedData = [...sortedMovieList].sort((a, b) => {
      if (sortType === 'popularity') {
        return b.popularity - a.popularity;
      } if (sortType === 'release_date') {
        return new Date(b.release_date) - new Date(a.release_date);
      }
      return 0;
    });

    setSortedMovieList(sortedData);
  };

  const handleGenreChange = (genreId, isChecked) => {
    setSelectedGenres(prevGenres => {
      if (isChecked) {
        // 장르id가 체크되어서 전달되면 업데이트
        return [...prevGenres, genreId];
      } 
        // 장르id가 체크가 안되어서 전달되면 제외하고 나머지 장르만 반환
        return prevGenres.filter(id => id !== genreId);
      
    });
  };

  // 장르필터랑 정렬 한번에 적용
  const filterAndSortMovies = () => {
    let filtered = data.results;
    // 사용자가 선택한 장르가 1개 이사 있으면
    if (selectedGenres.length > 0) {
      // filtered에 filter 다시 적용해서 새로 반환
      filtered = filtered.filter(movie =>
        movie.genre_ids.some(id => selectedGenres.includes(id))
      );
    } else {
      filtered = data.results;
    }
    setSortedMovieList(filtered);
  };

  useEffect(() => {
    if (data && data.results) {
      filterAndSortMovies();
    }
    // api호출 data와 selectedGenres 업데이트 시에만 filterAndSortMovies 실행
  }, [data, selectedGenres]);

  // setQuery() 미사용 eslint 경고로 인해 작성함. eslint 경고를 끄는 것 말고 방법이 있을까?
  useEffect(()=>{setQuery('')},[])

  const handlePageClick = ({selected}) => {
    setPage(selected+1)
  }



  return (
    <Container>
      <Row>
        <Col lg={4} xs={12}>
          <MovieFilter onSortChange={handleSortChange} onGenreChange={handleGenreChange} />
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