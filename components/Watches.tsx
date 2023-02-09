import React from 'react'

const Watches = () => {
  return (
    <div className="flex flex-col md:flex-row my-10">
      <div className="flex flex-col items-start basis-1/2 bg-blue-700">
        <p>From 500$</p>
        <p>Watches for him</p>
        <button>More Details</button>
      </div>
      <div className="basis-1/2 bg-pink-700"></div>
    </div>
  )
}

export default Watches
