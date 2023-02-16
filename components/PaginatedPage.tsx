import React from 'react'
import Card from './Card'
import Pagination from './Pagination'

type PageProps = {
  products: any[]
  currentPage: number
  totalProducts: number
  perPage: number
}

const ProductCard = ({ name, description, price }: any) => (
  <div className="my-10 border-2 border-sky-500 p-3">
    <p>{name}</p>
    <p className="my-3">${price}</p>
    <p className="my-8">{description}</p>
  </div>
)

const PaginationPage = ({
  currentPage,
  totalProducts,
  perPage,
  products,
}: PageProps): JSX.Element => {
  return (
    <div>
      <p>Page {currentPage}</p>
      <Pagination
        totalItems={totalProducts}
        currentPage={currentPage}
        itemsPerPage={perPage}
        renderPageLink={(page) => `/products/page/${page}`}
      />
      <div className="flex flex-col md:flex-row px-2 gap-4 flex-wrap justify-center">
        {products.map((product, i) => (
          <Card key={product._id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default PaginationPage
