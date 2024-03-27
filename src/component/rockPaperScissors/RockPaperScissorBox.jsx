import React from 'react';
import PropTypes from 'prop-types';
import RockImg from '../../assets/images/project01/rock.png';

function RockPaperScissorBox({ result, item, title }) {
  function calculateGameResult() {
    if (result > 0) {
      return 'win';
    } if (result < 0) {
      return 'lose';
    }
    return 'tie';
  }

  const gameResult = calculateGameResult();

  return (
    <div className={`rps-box ${item && gameResult}`}>
      <div className="title">{title}</div>
      {item && <img src={item.img} alt="" />}
      <div className="result">{item && gameResult}</div>
    </div>
  );
}

// props 유효성 검사 추가
RockPaperScissorBox.propTypes = {
  result: PropTypes.number.isRequired,
  item: PropTypes.string,
  title: PropTypes.string.isRequired,
};

// 필수값이 아닌 props에 대한 기본값 설정
RockPaperScissorBox.defaultProps = {
  item: {
    name: 'Rock',
    img: RockImg,
  },
};

export default RockPaperScissorBox;
