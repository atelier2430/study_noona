import React from 'react'
import { useDispatch } from 'react-redux'

function ResetBotton() {
  const dispatch = useDispatch()

  const reset = () => {
    dispatch({type: "COUNT_RESET"})
  }

  return (
    <button type="button" className="btn-reset text" onClick={reset}>Reset</button>
  )
}

export default ResetBotton