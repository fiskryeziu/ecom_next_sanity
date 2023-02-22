import Link from 'next/link'
import React from 'react'

const Cart = () => {
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
      <div className="flex items-center justify-center">
        <form className="container">
          <table className="w-full flex flex-row md:inline-table items-stretch">
            <thead className="flex md:table-header-group ">
              <tr className="flex flex-col md:table-row items-baseline justify-end">
                <th className=""></th>
                <th className=""></th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody className="flex-1 md:flex-none">
              <tr className="flex flex-col md:table-row mb-2 sm:mb-0 text-center">
                <td className="">X</td>
                <td className="">image here</td>
                <td>Seiko gray</td>
                <td>245$</td>
                <td>-1+</td>
                <td>245$</td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>
  )
}

export default Cart
