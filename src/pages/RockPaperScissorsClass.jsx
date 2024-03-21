import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ScissorImg from '../assets/images/project01/scissors.png';
import RockImg from '../assets/images/project01/rock.png';
import PaperImg from '../assets/images/project01/paper.png';
import RockPaperScissorBoxClass from '../component/RockPaperScissorBoxClass';

const choice = {
  rock: {
    name: 'Rock',
    img: RockImg,
  },
  scissors: {
    name: 'Scissors',
    img: ScissorImg,
  },
  paper: {
    name: 'Paper',
    img: PaperImg,
  },
};

export default class RockPaperScissorsClass extends Component {
  constructor(props) {
// super()와 super(props)의 차이: https://developer-talk.tistory.com/136
    super(props);
    this.state = {
      userSelect: null,
      computerSelect: null,
      result: null,
    };
  }

  judgement(user, computer) {
// eslint: class 컴포넌트 안의 함수는 this를 사용해야 함. 로직에서 사용되지 않아서 임의로 콘솔 추가
    if (this === undefined) console.log(this);
    if (user.name === computer.name) {
      return 0;
    } if (user.name === 'Rock') {
      return computer.name === 'Scissors' ? 1 : -1;
    } if (user.name === 'Scissors') {
      return computer.name === 'Paper' ? 1 : -1;
    } if (user.name === 'Paper') {
      return computer.name === 'Rock' ? 1 : -1;
    }
    return undefined;
  };

  randomChoice() {
    if (this === undefined) console.log(this);
// choice는 클래스 컴포넌트 밖에 있어서 this를 붙이지 않음
    const itemArray = Object.keys(choice);
    const randomItem = Math.floor(Math.random() * itemArray.length);
    const final = itemArray[randomItem];

    return choice[final];
  };

  play(userChoice) {
    const computerSelect = this.randomChoice();
    const userSelect = choice[userChoice];
    const result = this.judgement(userSelect, computerSelect);

    this.setState({ userSelect, computerSelect, result });
  };

  render() {
// eslint: Must use destructuring props assignment 해결하기 위해서 구조분해할당 사용
    const { userSelect, computerSelect, result } = this.state;

    return (
      <div className="rps-wrap">
        <Link to="/" className="back" />
        <h1>Class Component</h1>
        <div className="rps-box-area">
{/* 구조분해할당 사용으로 this를 붙이지 않아도 됨 */}
          <RockPaperScissorBoxClass
            title="You"
            item={userSelect}
            result={result}
          />
          <RockPaperScissorBoxClass
            title="Computer"
            item={computerSelect}
            result={result * -1}
          />
        </div>
        <div className="rps-btn-area">
          <button
            type="button"
            onClick={() => this.play('scissors')}
            className="rps-btn scissor"
          >
            가위
          </button>
          <button
            type="button"
            onClick={() => this.play('rock')}
            className="rps-btn rock"
          >
            바위
          </button>
          <button
            type="button"
            onClick={() => this.play('paper')}
            className="rps-btn paper"
          >
            보
          </button>
        </div>
      </div>
    );
  }
}
