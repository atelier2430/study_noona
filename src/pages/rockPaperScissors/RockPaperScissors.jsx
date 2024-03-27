import React, { useState } from 'react';
import ScissorImg from '../../assets/images/project01/scissors.png';
import RockImg from '../../assets/images/project01/rock.png';
import PaperImg from '../../assets/images/project01/paper.png';
import RockPaperScissorBox from '../../component/rockPaperScissors/RockPaperScissorBox';

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

function RockPaperScissors() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState(null);

  const judgement = (user, computer) => {
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

  const randomChoice = () => {
    const itemArray = Object.keys(choice);
    const randomItem = Math.floor(Math.random() * itemArray.length);
    const final = itemArray[randomItem];

    return choice[final];
  };

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);

    const computerChoice = randomChoice();
    setComputerSelect(computerChoice);

    setResult(judgement(choice[userChoice], computerChoice));
  };

  return (
    <div className="rps-wrap">
      <div className="rps-box-area">
        <RockPaperScissorBox
          title="You"
          item={userSelect}
          result={result}
        />
        <RockPaperScissorBox
          title="Computer"
          item={computerSelect}
          result={result * -1}
        />
      </div>
      <div className="rps-btn-area">
        <button
          type="button"
          onClick={() => play('scissors')}
          className="rps-btn scissor"
        >
          가위
        </button>
        <button
          type="button"
          onClick={() => play('rock')}
          className="rps-btn rock"
        >
          바위
        </button>
        <button
          type="button"
          onClick={() => play('paper')}
          className="rps-btn paper"
        >
          보
        </button>
      </div>
    </div>
  );
}

export default RockPaperScissors;
