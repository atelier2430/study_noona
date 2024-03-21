import React from 'react';
import { Link } from 'react-router-dom';

function IndexList({
  week, title, dueDate, submittedDate, url,
}) {
  return (
    <li className={`item ${dueDate && 'has-assign'}`}>
      <Link to={url}>
        <span className={`tag tag0${week}`}>
          {week}
          주차
        </span>
        <span className="title">{title}</span>
        <span className="date-area">
          <span className="date">
            <span>과제 제출 마감</span>
            <span>{dueDate || '-'}</span>
          </span>
          <span className="date">
            <span>제출 일자</span>
            <span>{submittedDate || '-'}</span>
          </span>
        </span>
      </Link>
    </li>
  );
}

export default IndexList;
