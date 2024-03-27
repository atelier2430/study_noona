import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";

function LoadingComp({loading}) {
  return (
    <div className={`loading-area ${loading && 'show'}`}>
      <ClipLoader
        color="#ffffff"
        loading={loading}
        size={80}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  )
}

export default LoadingComp