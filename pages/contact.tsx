import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import client, { urlFor } from '@/lib/client'
import { IContact } from '@/typings'
import { GetStaticProps } from 'next'
import { FaFacebook, FaInstagram, FaLink } from 'react-icons/fa'
import { useRouter } from 'next/router'

type TForm = {
  name: string
  email: string
  subject: string
  message: string
}

const Contact = ({ contact }: { contact: IContact }) => {
  const [formData, setFormData] = useState<TForm>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const { name, email, subject, message } = formData

  const submitHandler = () => {
    console.log('Hi!')
  }
  return (
    <div className="flex flex-col px-2 md:px-5 lg:px-20 justify-center">
      <p className="py-10">
        <Link
          href="/"
          className="hover:text-blue-600 hover:duration-200 duration-200"
        >
          Home
        </Link>
        <span className="p-2"> &#62;</span>
        Contact us
      </p>
      <div className="flex  w-full items-center justify-around">
        <div className="flex flex-col items-center justify-center gap-3">
          <a href="" target="_blank" rel="noreferrer">
            <FaFacebook className="text-slate-800 text-xl md:text-3xl" />
          </a>
          <p className="text-sm md:text-base">Facebook</p>
          <div className="w-10 h-[1px] sm:h-1 bg-slate-900"></div>
        </div>
        <div className="flex flex-col items-center justify-center gap-3">
          <a href="" target="_blank" rel="noreferrer">
            <FaInstagram className="text-slate-800 text-xl md:text-3xl" />
          </a>
          <p className="text-sm md:text-base">Instagram</p>
          <div className="w-10 h-[1px] sm:h-1 bg-slate-900"></div>
        </div>
        <div className="flex flex-col items-center justify-center gap-3">
          <a href="" target="_blank" rel="noreferrer">
            <FaLink className="text-slate-800 text-xl md:text-3xl" />
          </a>
          <p className="text-sm md:text-base">Dev</p>
          <div className="w-10 h-[1px] sm:h-1 bg-slate-900"></div>
        </div>
      </div>
      <div className="w-full flex justify-center mt-20">
        <div className="w-full md:w-1/2 flex items-center flex-col gap-2">
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus sequi assumenda voluptatem nemo minima repellat
            eligendi autem est officiis ea.
          </p>
          <p className="text-2xl md:text-3xl text-center">
            Contact Us Directly
          </p>
          <form onSubmit={submitHandler} className="py-10 space-y-10">
            <div className="flex flex-col items-center">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                value={name}
                className="bg-slate-100 rounded-lg px-2 py-2 border border-slate-300"
              />
            </div>

            <div className="flex flex-col items-center">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                value={email}
                className="bg-slate-100 rounded-lg px-2 py-2 border border-slate-300"
              />
            </div>

            <div className="flex flex-col items-center">
              <label htmlFor="Subject">Subject</label>
              <input
                type="text"
                name="subject"
                value={subject}
                className="bg-slate-100 rounded-lg px-2 py-2 border border-slate-300"
              />
            </div>

            <div className="flex flex-col items-center">
              <label htmlFor="yourmessage">Your Message</label>
              <input
                type="textarea"
                name="message"
                value={message}
                className="bg-slate-100 rounded-lg px-2 py-2 border border-slate-300"
              />
            </div>
            <button className="bg-[#eb6a2a] px-4 py-2 rounded-md text-white hover:brightness-125">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact

export const getStaticProps: GetStaticProps = async () => {
  const query = `*[_type=='contact']`

  const contact = await client.fetch(query)

  return {
    props: {
      about: contact[0],
    },
  }
}
