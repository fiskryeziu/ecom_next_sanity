import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaShoppingBasket } from 'react-icons/fa'
import { IProduct } from '@/typings'
import { urlFor } from '@/lib/client'
import { useAppContext } from '@/context/state'

const Card = ({ product }: { product: IProduct }) => {
  const { addToCart } = useAppContext()
  return (
    <div className="relative flex w-full md:w-1/4 max-h-80 overflow-hidden items-center justify-center group border-t md:border">
      <div className="flex flex-col gap-1 w-56">
        <div className="w-full h-56">
          <Image
            src={urlFor(product.image[0]).url()}
            alt="trending-watch"
            width={250}
            height={250}
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-slate-400 text-xs">Watch</p>
        <p className="text-sm font-medium line-clamp-1">{product.name}</p>
        <p className="text-right font-semibold ">${product.price}</p>
        <div
          onClick={() => addToCart(product, 1)}
          className="w-full z-40 cursor-pointer flex  gap-2 justify-center invisible -translate-y-10 transition-transform ease  duration-300 group-hover:visible group-hover:translate-y-0"
        >
          <FaShoppingBasket size={16} className="text-slate-400" />
          <p className="text-slate-400 text-sm">Add to cart</p>
        </div>
        <Link
          href={`/products/${product.slug.current}`}
          className="absolute w-full h-full top-0 left-0 group-hover:bg-white opacity-50 group-hover:duration-300 duration-300"
        ></Link>
      </div>
    </div>
  )
}

export default Card
