import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'

interface IState {
  setOpen: (value: boolean) => void
  open: boolean
}
const MobileNavBar = ({ setOpen, open }: IState) => {
  return (
    <div
      className={`fixed w-screen h-full top-0 ${
        open ? ' left-[0px]' : 'left-[-3000px]'
      } z-10 transition-all ease-in-out duration-700`}
    >
      <div className="flex absolute left-0 top-0 w-72 h-full bg-[#f7f7f7] z-10">
        <div className="w-full relative flex flex-col">
          <button
            className="p-2 border border-black absolute right-5 top-6"
            onClick={() => setOpen(!open)}
          >
            <AiOutlineClose size={18} />
          </button>
          <div className="mt-24">
            <p className="px-4 py-2 font-semibold">Home</p>
            <p className="px-4 py-2 font-semibold">Home</p>
            <p className="px-4 py-2 font-semibold">Home</p>
            <p className="px-4 py-2 font-semibold">Home</p>
          </div>
        </div>
      </div>

      <div className="absolute left-0 top-0 w-full h-full bg-black opacity-40 z-0"></div>
    </div>
  )
}

export default MobileNavBar
