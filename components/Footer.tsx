import Link from 'next/link'
import React from 'react'
import { FaLink, FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col md:flex-row items-center py-12  border-b mx-20 border-slate-900">
        <p className="text-4xl font-extrabold pb-10 md:pb-0">Watches.</p>
        <div className="flex flex-col md:flex-row mx-auto gap-10 items-center md:items-start">
          <Link href="/">Home</Link>
          <Link href="/products">Watches</Link>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact Us</Link>
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
        <p className="text-center">© 2023 Copyright. Developed by fiskryeziu</p>
      </div>
    </div>
  )
}

export default Footer
