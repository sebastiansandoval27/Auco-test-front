import React from 'react'

const Loader = () => {
  return (
    <div className="w-full flex flex-col items-center justify-start my-2 pb-5">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary-100"></div>
    </div>
  )
}

export default Loader