import { useAppContext } from '@/context/state'
import { urlFor } from '@/lib/client'
import getStripe from '@/lib/getStripe'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'

const Cart = () => {
  const { cartItems, totalPrice, removeItem, updateQty } = useAppContext()

  const handleCheckout = async () => {
    const stripe = await getStripe()
    if (stripe) {
      const response = await fetch('/api/stripe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cartItems),
      })

      if (response.status === 500) return

      const data = await response.json()

      // toast.loading('Redirecting...')

      stripe.redirectToCheckout({ sessionId: data.id })
    }
  }
  return (
    <div className="flex flex-col px-2">
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
      {cartItems.length > 0 ? (
        <div className="flex items-center justify-center flex-col">
          <form className="container">
            <table className="w-full flex flex-row md:inline-table items-stretch">
              <thead className="hidden md:table-header-group ">
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
                {cartItems.map((item) => (
                  <tr
                    key={item._id}
                    className="flex flex-col md:table-row mb-2 sm:mb-0 text-center py-10"
                  >
                    <td className="p-5">
                      {' '}
                      <button
                        onClick={() => removeItem(item._id)}
                        className="ml-2 my-auto w-5 h-5 rounded-full text-sm font-bold text-red-600 hover:bg-red-600 hover:text-white"
                      >
                        X
                      </button>
                    </td>
                    <td className="hidden md:block p-5">
                      <Image
                        src={urlFor(item.image[0]).url()}
                        width={80}
                        height={80}
                        alt="watch image"
                      />
                    </td>
                    <td className="flex justify-between md:table-cell">
                      <th className="inline md:hidden">Product</th>
                      <p className="line-clamp-1">{item.name}</p>
                    </td>
                    <td className="flex justify-between md:table-cell">
                      <th className="inline md:hidden">Price</th>${item.price}
                    </td>
                    <td className="flex justify-between md:table-cell">
                      <th className="inline md:hidden">Quantity</th>
                      <div>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault()
                            updateQty(item._id, 'dec')
                          }}
                          className="px-4 py-1 border border-black"
                        >
                          <p className="text-xl font-semibold">-</p>
                        </button>
                        <input
                          type="text"
                          value={item.qty}
                          className="w-9 text-center h-10"
                        />
                        <button
                          onClick={(e) => {
                            e.preventDefault()
                            updateQty(item._id, 'inc')
                          }}
                          type="button"
                          className="px-4 py-1 border border-black"
                        >
                          <p className="text-xl font-semibold">+</p>
                        </button>
                      </div>
                    </td>
                    <td className="flex justify-between md:table-cell">
                      <th className="inline md:hidden">Subtotal</th>
                      {item.price * item.qty}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </form>

          <div className="flex flex-col justify-center w-full md:w-1/5 md:items-center px-5">
            <h1 className="text-2xl font-semibold">Cart total</h1>
            <div className="flex justify-between w-full p-2">
              <p className="font-bold">Subtotal:</p>
              <p>${totalPrice}</p>
            </div>
            <button
              onClick={handleCheckout}
              className="text-center px-6 py-2 bg-orange-500 text-white hover:bg-orange-600"
            >
              Proceed to checkout
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-3 mb-56">
          <FaShoppingCart className="text-8xl text-red-500" />
          <p className="text-base font-medium text-red-500">
            Your cart is empty
          </p>
        </div>
      )}
    </div>
  )
}

export default Cart
