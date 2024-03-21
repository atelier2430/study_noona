import React, { Component } from 'react';

export default class RockPaperScissorBoxClass extends Component {
  constructor(props) {
    super(props);
// eslint: Useless constructor
    console.log('constructor');
  }

  calculateGameResult() {
    const { result } = this.props;
    if (result > 0) {
      return 'win';
    } if (result < 0) {
      return 'lose';
    }
    return 'tie';
  };

  render() {
    const { item, title } = this.props;
    const gameResult = this.calculateGameResult();
    return (
      <div className={`rps-box ${item && gameResult}`}>
        <div className="title">{title}</div>
        {item && <img src={item.img} alt="" />}
        <div className="result">{item && gameResult}</div>
      </div>
    );
  }
}
