import React from 'react'

function MovieFilter({ onSortChange }) {
    const handleSortChange = (event) => {
        onSortChange(event.target.value);
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
                <div className="chkbox-area">
                    <input id="genre1" type="checkbox" name="genre" />
                    <label htmlFor="genre1">1</label>
                </div>
                <div className="chkbox-area">
                    <input id="genre2" type="checkbox" name="genre" />
                    <label htmlFor="genre1">2</label>
                </div>
                <div className="chkbox-area">
                    <input id="genre3" type="checkbox" name="genre" />
                    <label htmlFor="genre1">3</label>
                </div>
                <div className="chkbox-area">
                    <input id="genre4" type="checkbox" name="genre" />
                    <label htmlFor="genre1">4</label>
                </div>
            </div>
        </div>
    )
}

export default MovieFilter