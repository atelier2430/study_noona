import React from 'react';

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

export default RockPaperScissorBox;
