import Link from 'next/link'
import React, { useEffect } from 'react'
import { BsBagCheckFill } from 'react-icons/bs'
import { runFireworks } from '@/lib/confeti'

const Success = () => {
  useEffect(() => {
    runFireworks()
  }, [])
  return (
    <div className="flex justify-center items-center p-2">
      <div className="w-full md:w-2/3 h-96 flex flex-col space-y-6 items-center bg-gray-200 my-20">
        <BsBagCheckFill className="text-4xl text-green-600 my-10" />
        <div className="text-center">
          <p className="text-3xl md:text-5xl text-slate-700 font-bold">
            Thank you for your order!
          </p>
          <p className="text-sm my-2">Check you email inbox for receipt</p>
        </div>
        <p className="text-xs md:text-sm text-center">
          For any question about products, please email{' '}
          <span className="text-red-600">example@example.com</span>
        </p>
        <Link
          href="/"
          className=" bg-orange-500 px-5 py-2 rounded-full text-white"
        >
          Continue shopping
        </Link>
      </div>
    </div>
  )
}

export default Success
