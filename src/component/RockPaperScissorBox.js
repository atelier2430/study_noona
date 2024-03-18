import React from 'react'

const RockPaperScissorBox = (props) => {
    const result = props.result > 0 ? "win" : (props.result < 0 ? "lose" : "tie")
    return (
        <div className={`rps-box ${props.item && result}`}>
            <div className="title">{props.title}</div>
            {props.item && 
            <img src={props.item.img} alt="" />
            }
            <div className="result">{props.item && result}</div>
        </div>
    )
}

export default RockPaperScissorBox