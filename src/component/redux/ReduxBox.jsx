import React from 'react'
import { useSelector } from 'react-redux'

function ReduxBox() {
  const count = useSelector(state=>state.counter.count)
  return (
    <div className="text top">My Count : {count}</div>
  )
}

export default ReduxBox