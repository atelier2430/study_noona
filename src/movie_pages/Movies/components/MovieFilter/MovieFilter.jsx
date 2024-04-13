import React from 'react'
import './MovieFilter.style.css'

function MovieFilter({ onSortChange, onGenreChange }) {
    const genres = [
        { "id": 28, "name": "액션" },
        { "id": 12, "name": "모험" },
        { "id": 16, "name": "애니메이션" },
        { "id": 35, "name": "코미디" },
        { "id": 80, "name": "범죄" },
        { "id": 99, "name": "다큐멘터리" },
        { "id": 18, "name": "드라마" },
        { "id": 10751, "name": "가족" },
        { "id": 14, "name": "판타지" },
        { "id": 36, "name": "역사" },
        { "id": 27, "name": "공포" },
        { "id": 10402, "name": "음악" },
        { "id": 9648, "name": "미스터리" },
        { "id": 10749, "name": "로맨스" },
        { "id": 878, "name": "SF" },
        { "id": 10770, "name": "TV 영화" },
        { "id": 53, "name": "스릴러" },
        { "id": 10752, "name": "전쟁" },
        { "id": 37, "name": "서부" }
    ]

    const handleSortChange = (event) => {
        onSortChange(event.target.value);
    };

    const handleGenreChange = (event) => {
        // 장르id와 체크여부 전달
        // input value는 string으로 전달됨. Number로 변환해서 전달
        const genreId = Number(event.target.value)
        onGenreChange(genreId, event.target.checked);
    };

    return (
        <div className="filter-area">
            <div className="filter-item">
                <div className="radio-area">
                    <input id="orderPopular" type="radio" name="movieOrder" value="popularity" onChange={handleSortChange}/>
                    <label htmlFor="orderPopular">인기순</label>
                </div>
                <div className="radio-area">
                    <input id="orderRelease" type="radio" name="movieOrder" value="release_date" onChange={handleSortChange}/>
                    <label htmlFor="orderRelease">최신순</label>
                </div>
            </div>
            <div className="filter-item">
                {genres.map(genre => (
                    <div key={genre.id} className="chkbox-area">
                        <input id={genre.id} type="checkbox" name="genre" value={genre.id} onChange={handleGenreChange} />
                        <label htmlFor={genre.id}>{genre.name}</label>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MovieFilter