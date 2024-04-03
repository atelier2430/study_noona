import React from 'react'
import { useDispatch } from 'react-redux'
import { counterActions } from '../../redux/reducer/counterReducer'

function ResetBotton() {
  const dispatch = useDispatch()

  const reset = () => {
    dispatch(counterActions.countReset())
  }

  return (
    <button type="button" className="btn-reset text" onClick={reset}>Reset</button>
  )
}

export default ResetBotton