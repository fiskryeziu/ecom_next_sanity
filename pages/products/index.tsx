import Card from '@/components/Card'
import PaginationPage from '@/components/PaginatedPage'
import Pagination from '@/components/Pagination'
import client from '@/lib/client'
import getProducts from '@/lib/getProducts'
import { IProduct } from '@/typings'
import { GetServerSideProps, GetStaticProps } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

import { PER_PAGE } from './page/[page]'

const Products = ({
  products,
  currentPage,
  totalProducts,
}: {
  products: IProduct[]
  currentPage: any
  totalProducts: any
}) => {
  const [price, setPrice] = useState<number>(0)
  const router = useRouter()

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    router.push(`/products?filter=${price}`)
  }
  return (
    <div className="flex flex-col">
      <p className="p-10">
        <Link
          href="/"
          className="hover:text-blue-600 hover:duration-200 duration-200"
        >
          Home
        </Link>
        <span className="p-2"> &#62;</span>
        Watches
      </p>
      <div className="flex flex-col md:flex-row">
        <div className="basis-1/3 items-start my-10 p-2 md:p-0 md:pl-10">
          <form className="flex flex-col" onSubmit={submitHandler}>
            <p>Filter</p>
            <input
              type="range"
              min={0}
              max={10000}
              value={price}
              step={1000}
              onChange={(e) => setPrice(+e.target.value)}
            />
            <p>Price: ${price}</p>
            <button className="px-2 py-2 bg-blue-900 text-white">Filter</button>
          </form>
        </div>
        <div className="flex flex-col basis-2/3 p-2 md:p-0">
          <div className="flex justify-between items-center mb-5">
            <div>
              <p>Watch</p>
            </div>
            <div>
              <label>Sort By</label>
              <select>
                <option selected disabled></option>
                <option value="">Low to price</option>
                <option value="">High to price</option>
                <option value="">Newest to price</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col md:flex-row px-2 gap-4 flex-wrap justify-center">
            {products.map((product, i) => (
              <Card key={product._id} product={product} />
            ))}
          </div>
          <div>
            <Pagination
              totalItems={totalProducts}
              currentPage={currentPage}
              itemsPerPage={PER_PAGE}
              renderPageLink={(page) => `/products/page/${page}`}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { filter: nFilter, sort: nSort } = context.query

  let filter = nFilter ?? '0'
  let sort = nSort ?? 'asc'

  const { products, total } = await getProducts({
    limit: PER_PAGE,
    page: 1,
    filter,
    sort,
  })

  return {
    props: { products, totalProducts: total, currentPage: 1 },
  }
}
