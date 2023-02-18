import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import client, { urlFor } from '@/lib/client'
import { IAbout } from '@/typings'

const About = ({ about }: { about: IAbout }) => {
  return (
    <div className="flex flex-col px-2 md:px-5 lg:px-20">
      <p className="py-10">
        <Link
          href="/"
          className="hover:text-blue-600 hover:duration-200 duration-200"
        >
          Home
        </Link>
        <span className="p-2"> &#62;</span>
        About us
      </p>
      <div className="w-full flex pt-32 flex-col md:flex-row items-center justify-center  gap-10 md:gap-0">
        <div className="md:w-2/3 flex">
          <div className="flex flex-col px-2 md:px-10 lg:px-20 gap-5">
            <p className="text-blue-700">{about.name}</p>
            <p className=" text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">
              {about.title}
            </p>
            <p>{about.desc}</p>
          </div>
        </div>
        <div className="w-full md:w-1/3 flex justify-center">
          <Image
            src={urlFor(about.image).url()}
            width={400}
            height={400}
            alt="aboutus"
          />
        </div>
      </div>
    </div>
  )
}

export default About

export const getStaticProps = async () => {
  const query = `*[_type=='about']`

  const about = await client.fetch(query)

  return {
    props: {
      about: about[0],
    },
  }
}
