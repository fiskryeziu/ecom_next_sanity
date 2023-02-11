import React from 'react'
import { FaLink, FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col md:flex-row items-center py-12  border-b mx-20 border-slate-900">
        <p className="text-4xl font-extrabold">Watches.</p>
        <div className="flex mx-auto gap-20">
          <p>Home</p>
          <p>Products</p>
          <p>About Us</p>
          <p>Contact Us</p>
        </div>
      </div>
      <div className="flex justify-center flex-col gap-5 items-center py-20">
        <div className="flex gap-6">
          <a href="https://www.fisnik.dev" target="_blank" rel="noreferrer">
            <FaLink size={20} />
          </a>
          <a
            href="https://github.com/fiskryeziu"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={20} />
          </a>
        </div>
        <p>© 2023 Copyright. Developed by fiskryeziu</p>
      </div>
    </div>
  )
}

export default Footer
