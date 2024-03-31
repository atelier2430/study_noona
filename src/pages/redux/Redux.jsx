import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ReduxBox from '../../component/redux/ReduxBox'
import WarningBox from '../../component/redux/WarningBox'
import ResetBotton from '../../component/redux/ResetBotton'

function Redux() {
  const count = useSelector(state=>state.count)
  const dispatch = useDispatch()

  const increase = (myNum) => {
    dispatch({type:'INCREMENT', payload: {num: myNum}})
  }

  const decrease = (myNum) => {
    dispatch({type:'DECREMENT', payload: {num: myNum}})
  }

  return (
    <div className="redux-page">
      <div className="game-machine">
        <img src="http://eychoi.com/portfolio/2020/img/gameMachine.png" alt="" />
        <div className="monitor">
          <ReduxBox/>
          <div className="text count">{count}</div>
          <WarningBox />
          <ResetBotton />
        </div>
        <div className="btn-area">
          <button type="button" onClick={() => decrease(5)} className="btn-arrow down">아래
            <img src="http://eychoi.com/portfolio/2020/img/btn_3_off.png" alt="" />
            <img src="http://eychoi.com/portfolio/2020/img/btn_3_on.png" alt="" />
            <span>-5</span>
          </button>
          <button type="button" onClick={() => decrease(1)} className="btn-arrow down">아래
            <img src="http://eychoi.com/portfolio/2020/img/btn_3_off.png" alt="" />
            <img src="http://eychoi.com/portfolio/2020/img/btn_3_on.png" alt="" />
            <span>-1</span>
          </button>
          <button type="button" onClick={() => increase(1)} className="btn-arrow up">위
            <img src="http://eychoi.com/portfolio/2020/img/btn_2_off.png" alt="" />
            <img src="http://eychoi.com/portfolio/2020/img/btn_2_on.png" alt="" />
            <span>+1</span>
          </button>
          <button type="button" onClick={() => increase(5)} className="btn-arrow up">위
            <img src="http://eychoi.com/portfolio/2020/img/btn_2_off.png" alt="" />
            <img src="http://eychoi.com/portfolio/2020/img/btn_2_on.png" alt="" />
            <span>+5</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Redux