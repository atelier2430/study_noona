import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ReduxBox from '../../component/redux/ReduxBox'
import WarningBox from '../../component/redux/WarningBox'
import ResetBotton from '../../component/redux/ResetBotton'

import { counterActions } from '../../redux/reducer/counterSlice'

import gameMachineImg from '../../assets/images/project04/game-machine.png'
import btnDownImg from '../../assets/images/project04/btn_down_off.png'
import btnDownPressImg from '../../assets/images/project04/btn_down_on.png'
import btnUpImg from '../../assets/images/project04/btn_up_off.png'
import btnUpPressImg from '../../assets/images/project04/btn_up_on.png'

function Redux() {
  const count = useSelector(state=>state.counter.count)
  const dispatch = useDispatch()

  const increase = (myNum) => {
    dispatch(counterActions.increment({num: myNum}))
  }

  const decrease = (myNum) => {
    dispatch(counterActions.decrement({num: myNum}))
  }

  return (
    <div className="redux-page">
      <div className="game-machine">
        <img src={gameMachineImg} alt="" />
        <div className="monitor">
          <ReduxBox/>
          <div className="text count">{count}</div>
          <WarningBox />
          <ResetBotton />
        </div>
        <div className="btn-area">
          <button type="button" onClick={() => decrease(5)} className="btn-arrow down">아래
            <img src={btnDownImg} alt="" />
            <img src={btnDownPressImg} alt="" />
            <span>-5</span>
          </button>
          <button type="button" onClick={() => decrease(1)} className="btn-arrow down">아래
            <img src={btnDownImg} alt="" />
            <img src={btnDownPressImg} alt="" />
            <span>-1</span>
          </button>
          <button type="button" onClick={() => increase(1)} className="btn-arrow up">위
            <img src={btnUpImg} alt="" />
            <img src={btnUpPressImg} alt="" />
            <span>+1</span>
          </button>
          <button type="button" onClick={() => increase(5)} className="btn-arrow up">위
            <img src={btnUpImg} alt="" />
            <img src={btnUpPressImg} alt="" />
            <span>+5</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Redux