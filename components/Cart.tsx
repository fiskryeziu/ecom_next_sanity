import Link from 'next/link'
import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'

interface IState {
  setOpen: (value: boolean) => void
  open: boolean
}
const Cart = ({ setOpen, open }: IState) => {
  return (
    <div
      className={`fixed w-screen h-full top-0 ${
        open ? 'right-0 opacity-100' : 'invisible opacity-0'
      } z-10 transition-all ease-in-out duration-200`}
    >
      <div
        className={`flex absolute right-0 top-0 max-w-[360px] w-full h-full bg-[#f7f7f7] ${
          open ? 'right-0' : 'right-[-3000px]'
        } z-10 transition-all ease duration-700`}
      >
        <div className="w-full relative flex flex-col">
          <div className="flex justify-between pt-5 px-2">
            <p className="p-2  left-5 top-6">Shopping Cart</p>
            <button className="p-2" onClick={() => setOpen(!open)}>
              <AiOutlineClose className="text-xl font-black" />
            </button>
          </div>

          <div className="flex flex-col overflow-y-auto pb-10">
            {/* items */}
            {[1, 2, 3, 4, 5, 6].map((_, idx) => (
              <div key={idx} className="flex mt-4 px-4">
                <img
                  src="https://images.pexels.com/photos/47856/rolex-wrist-watch-clock-gmt-47856.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                  width={50}
                  height={50}
                />
                <div className="flex flex-col w-full justify-between">
                  <p className="text-blue-700 text-sm font-medium">
                    Watch name
                  </p>
                  <p className="text-right text-sm">1 x 3,890,000$</p>
                </div>
                <button className="ml-2 my-auto w-5 h-5 rounded-full text-sm font-bold text-red-600  hover:bg-red-600 hover:text-white">
                  X
                </button>
              </div>
            ))}
          </div>
          <div className="flex item-center justify-end p-2">
            <p>Subtotal : 100,000$</p>
          </div>
          <div className="flex gap-2 px-2 pb-10 pt-2 justify-center">
            <Link
              href="/cart"
              className="px-10 py-2 bg-orange-500 rounded-full text-white hover:brightness-125 hover:duration-200 duration-200"
            >
              Cart
            </Link>
            <Link
              href="/checkout"
              className="px-10 py-2 bg-orange-500 rounded-full text-white hover:brightness-125 hover:duration-200 duration-200"
            >
              Checkout
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute left-0 top-0 w-full h-full bg-black opacity-40 z-0"></div>
    </div>
  )
}

export default Cart
