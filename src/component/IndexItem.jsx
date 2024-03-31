import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCrown } from '@fortawesome/free-solid-svg-icons'

function IndexItem({
  week, title, standardDate, dueDate, submittedDate, pass, crown, url,
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
            <span>수강일</span>
            <span>{standardDate || '-'}</span>
          </span>
          <span className="date">
            <span>과제 제출 마감 (2am)</span>
            <span>{dueDate || '-'}</span>
          </span>
          <span className="date">
            <span>제출 일자</span>
            <span className={(pass && submittedDate)?'pass':''}>
              {submittedDate || '-'}
            </span>
            {crown && <FontAwesomeIcon icon={faCrown} className="crown"/>}
          </span>
        </span>
      </Link>
    </li>
  );
}

// props 유효성 검사 추가
IndexItem.propTypes = {
  week: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  standardDate: PropTypes.string,
  dueDate: PropTypes.string,
  submittedDate: PropTypes.string,
  pass: PropTypes.bool,
  url: PropTypes.string.isRequired,
};

// 필수값이 아닌 props에 대한 기본값 설정
IndexItem.defaultProps = {
  standardDate: '',
  dueDate: '-',
  submittedDate: '-',
  pass: false,
};


export default IndexItem;
