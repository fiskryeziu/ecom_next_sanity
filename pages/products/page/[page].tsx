import { GetServerSideProps } from 'next'
import React, { useEffect, useState } from 'react'
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
  const [price, setPrice] = useState<number>(0)

  const [sort, setSort] = useState<string | undefined>(undefined)

  const router = useRouter()

  const getSort = router.query?.sort ?? 'noSort'
  const getFilter = router.query?.filter ?? 'noFilter'
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    router.push(`/products?filter=${price}&sort=${sort ?? 'asc'}`)
  }

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault()
    setSort(e.target.value)
  }

  useEffect(() => {
    if (sort) {
      router.push(
        `/products?filter=${
          getFilter !== 'noFilter' ? getFilter : price
        }&sort=${sort}`
      )
    }
  }, [sort])

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
          <form className="flex flex-col " onSubmit={submitHandler}>
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
              <select onChange={onChange} defaultValue="default">
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
                  getSort === 'noSort' && getFilter === 'noFilter'
                    ? `/products/page/${page}`
                    : `/products/page/${page}?filter=${getFilter}&sort=${
                        getSort ?? 'asc'
                      }`
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
  const { filter: nFilter, sort: nSort } = context.query

  let filter = nFilter ?? '0'
  let sort = nSort ?? 'asc'

  const { products, total } = await getProducts({
    limit: PER_PAGE,
    page,
    filter,
    sort,
  })

  if (!products.length) {
    return {
      notFound: true,
    }
  }

  // Redirect the first page to `/category` to avoid duplicated content

  return {
    props: {
      products,
      totalProducts: total,
      currentPage: page,
    },
  }
}

// export const getStaticPaths: GetStaticPaths = async () => {
//   return {
//     // Prerender the next 5 pages after the first page, which is handled by the index page.
//     // Other pages will be prerendered at runtime.
//     paths: Array.from({ length: 5 }).map((_, i) => `/products/page/${i + 2}`),
//     // Block the request for non-generated pages and cache them in the background
//     fallback: 'blocking',
//   }
// }

export default Page

//pagination 16th february
