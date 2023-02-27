import { GetServerSideProps } from 'next'
import React, { useState } from 'react'
import getProducts from '@/lib/getProducts'
import Card from '@/components/Card'
import Pagination from '@/components/Pagination'
import Link from 'next/link'
import { useRouter } from 'next/router'

type PageProps = {
  products: any[]
  currentPage: number
  totalProducts: number
}

export const PER_PAGE = 2

function Page({ products, currentPage, totalProducts }: PageProps) {
  const [price, setPrice] = useState<string>('0')
  const router = useRouter()

  const { query = 'all', sort = 'default', filter = 'all' } = router.query

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    filterSearch({ filter: price })
  }

  const filterSearch = ({
    sort,
    searchQuery,
    filter,
  }: {
    sort?: string | 'default'
    searchQuery?: string | 'all'
    filter?: string | 'all'
  }) => {
    const path = router.pathname
    const { query } = router
    if (searchQuery) query.searchQuery = searchQuery
    if (sort) query.sort = sort
    if (filter) query.filter = filter

    router.push({
      pathname: path,
      query: query,
    })
  }

  const sortHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    filterSearch({ sort: e.target.value })
  }
  const filterHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.value)
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
              max={100000}
              value={price === '0' ? 0 : price}
              step={1000}
              onChange={filterHandler}
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
              <select onChange={sortHandler} defaultValue="default">
                <option selected></option>
                <option value="asc">Price: low to high</option>
                <option value="desc">Price: high to low</option>
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
              renderPageLink={(page) =>
                `${
                  sort === 'default' && filter === 'all'
                    ? `/products/page/${page}`
                    : `/products/page/${page}?filter=${filter}&sort=${sort}`
                }`
              }
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const page = Number(context.params?.page) || 1
  const { filter = 'all', sort = 'default', query = 'all' } = context.query

  const { products, total } = await getProducts({
    limit: PER_PAGE,
    page,
    filter,
    sort,
    query,
  })

  if (!products.length) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      products,
      totalProducts: total,
      currentPage: page,
    },
  }
}

export default Page
