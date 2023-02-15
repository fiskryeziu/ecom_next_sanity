import client, { urlFor } from '@/lib/client'
import { IProduct } from '@/typings'
import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ParsedUrlQuery } from 'querystring'
import React, { useState } from 'react'

const ProductDetails = ({ product }: { product: IProduct }) => {
  const [index, setIndex] = useState(0)
  const [qty, setQty] = useState<number>(1)
  return (
    <div className="flex flex-col items-center p">
      <p className="p-10">
        <Link
          href={'/'}
          className="hover:text-blue-600 hover:duration-200 duration-200"
        >
          Home
        </Link>
        <span className="p-2"> &#62;</span>
        <Link
          href={'/products'}
          className="hover:text-blue-600 hover:duration-200 duration-200"
        >
          Watches
        </Link>
        <span className="p-2">&#62;</span>
        {product.slug.current}
      </p>
      <div className="flex flex-col md:flex-row gap-2">
        <div className="basis-1/2 flex flex-col items-center">
          <Image
            src={urlFor(product.image[index]).url()}
            width={400}
            height={200}
            className="h-96 object-contain"
            alt=""
          />
          <div className="flex">
            {product.image.map((image, idx) => (
              <Image
                src={urlFor(image).url()}
                key={idx}
                width={100}
                height={100}
                className="w-1/5 lg:w-24  object-cover bg-white opacity-50 hover:opacity-100 hover:duration-200 duration-200"
                onMouseOver={() => setIndex(idx)}
                alt=""
              />
            ))}
          </div>
        </div>
        <div className="basis-1/2 my-0 md:my-auto space-y-10 px-2 sm:px-10 md:px-2">
          <p className="text-xl font-bold">{product.name}</p>
          <p className="text-slate-700">Model: {product.model}</p>
          <p className="text-slate-800">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum odio
            autem blanditiis a placeat nulla maxime pariatur qui animi fugit.
          </p>
          <p className="text-xl font-bold">${product.price}</p>
          <div className="flex gap-2 md:gap-10">
            <div>
              <button
                onClick={() => setQty((prev) => (prev >= 2 ? prev - 1 : prev))}
                className="px-4 py-1 border border-black"
              >
                <p className="text-xl font-semibold">-</p>
              </button>
              <input
                type="text"
                value={qty}
                onChange={(e) => setQty(+e.target.value)}
                className="w-9 text-center h-10"
              />
              <button
                onClick={() => setQty((prev) => prev + 1)}
                className="px-4 py-1 border border-black"
              >
                <p className="text-xl font-semibold">+</p>
              </button>
            </div>
            <button className="bg-orange-500 px-5 text-white hover:brightness-110">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails

interface IParams extends ParsedUrlQuery {
  slug: string
}

export const getStaticPaths: GetStaticPaths = async () => {
  const query = `*[_type=="product"]{slug{current}}`
  const products = await client.fetch(query)

  const paths = products.map((product: IProduct) => {
    return {
      params: { slug: product.slug.current },
    }
  })
  return { paths, fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams

  const query = `*[_type=="product" && slug.current == '${slug}'][0]`
  const product = await client.fetch(query)

  return {
    props: { product },
  }
}
