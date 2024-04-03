import React from 'react'
import { useSelector } from 'react-redux'

function WarningBox() {
  const count = useSelector(state=>state.counter.count)
  return (
    <div className="warning-box">
      <p>{count >= 20 ? 'The maximum number is 20.' : ''}</p>
      <p>{count <= -20 ? 'The minimum number is -20.' : ''}</p>
    </div>
  )
}

export default WarningBox