import axios from "axios";

const MOVIE_API_KEY = process.env.REACT_APP_MOVIE_API_KEY;

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  timeout: 1000,
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${MOVIE_API_KEY}`
  }
});

// 요청 인터셉터 추가하기
axios.interceptors.request.use((config) => 
    // 요청이 전달되기 전에 작업 수행
     config
  , (error) => 
    // 요청 오류가 있는 작업 수행
     Promise.reject(error)
  );

// 응답 인터셉터 추가하기
axios.interceptors.response.use((response) => 
    // 2xx 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 데이터가 있는 작업 수행
     response
  , (error) => 
    // 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 오류가 있는 작업 수행
     Promise.reject(error)
  );

export default api