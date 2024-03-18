import { useState } from "react"
import ScissorImg from '../assets/images/project01/scissors.png'
import RockImg from '../assets/images/project01/rock.png'
import PaperImg from '../assets/images/project01/paper.png'
import RockPaperScissorBox from '../component/RockPaperScissorBox';

const choice = {
    rock: {
        name: "Rock",
        img: RockImg
    },
    scissors: {
        name: "Scissors",
        img: ScissorImg
    },
    paper: {
        name: "Paper",
        img: PaperImg
    }
}

const RockPaperScissor = () => {
    const [userSelect, setUserSelect] = useState(null)
    const [computerSelect, setComputerSelect] = useState(null)
    const [result, setResult] = useState(null)

    const play = (userChoice) => {
        setUserSelect(choice[userChoice])

        let computerChoice = randomChoice()
        setComputerSelect(computerChoice)

        setResult(judgement(choice[userChoice], computerChoice))
    }

    const judgement = (user, computer) => {
        if(user.name === computer.name) {
            return 0
        } else if(user.name === "Rock") {
            return computer.name === "Scissors" ? 1 : -1
        } else if(user.name === "Scissors") {
            return computer.name === "Paper" ? 1 : -1
        } else if(user.name === "Paper") {
            return computer.name === "Rock" ? 1 : -1
        }
    }

    const randomChoice = () => {
        let itemArray = Object.keys(choice)
        let randomItem = Math.floor(Math.random() * itemArray.length)
        let final = itemArray[randomItem]

        return choice[final]
    }

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
                onClick={() => play("scissors")}
                className="rps-btn scissor">가위</button>
            <button 
                onClick={() => play("rock")}
                className="rps-btn rock">바위</button>
            <button 
                onClick={() => play("paper")}
                className="rps-btn paper">보</button>
        </div>
        </div>
    )
}

export default RockPaperScissor