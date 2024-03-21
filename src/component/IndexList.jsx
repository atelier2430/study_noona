import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function IndexList({ week, title, dueDate, submittedDate, url }) {
  return (
    <li className={`item ${dueDate && "has-assign"}`}>
      <Link to={url}>
        <span className={`tag tag0${week}`}>
          {week}
          주차
        </span>
        <span className="title">{title}</span>
        <span className="date-area">
          <span className="date">
            <span>과제 제출 마감</span>
            <span>{dueDate || "-"}</span>
          </span>
          <span className="date">
            <span>제출 일자</span>
            <span>{submittedDate || "-"}</span>
          </span>
        </span>
      </Link>
    </li>
  );
}

// props 유효성 검사 추가
IndexList.propTypes = {
  week: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  dueDate: PropTypes.string,
  submittedDate: PropTypes.string,
  url: PropTypes.string.isRequired,
};

// 필수값이 아닌 props에 대한 기본값 설정
IndexList.defaultProps = {
  dueDate: "",
  submittedDate: "",
};

export default IndexList;
