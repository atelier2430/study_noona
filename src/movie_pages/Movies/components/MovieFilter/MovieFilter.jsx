import React from 'react'

function MovieFilter({ onSortChange, onGenreChange }) {
    const genres = [
        { "id": 28, "name": "Action" },
        { "id": 12, "name": "Adventure" },
        { "id": 16, "name": "Animation" },
        { "id": 35, "name": "Comedy" },
        { "id": 80, "name": "Crime" },
        { "id": 99, "name": "Documentary" },
        { "id": 18, "name": "Drama" },
        { "id": 10751, "name": "Family" },
        { "id": 14, "name": "Fantasy" },
        { "id": 36, "name": "History" },
        { "id": 27, "name": "Horror" },
        { "id": 10402, "name": "Music" },
        { "id": 9648, "name": "Mystery" },
        { "id": 10749, "name": "Romance" },
        { "id": 878, "name": "Science Fiction" },
        { "id": 10770, "name": "TV Movie" },
        { "id": 53, "name": "Thriller" },
        { "id": 10752, "name": "War" },
        { "id": 37, "name": "Western" }
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