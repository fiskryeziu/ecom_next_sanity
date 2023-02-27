import { useAppContext } from '@/context/state'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import {
  FaGlobeEurope,
  FaTruck,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaSearch,
  FaShoppingBag,
  FaBars,
} from 'react-icons/fa'
import Cart from './Cart'
import MobileNavBar from './MobileNavBar'

const NavBar = () => {
  const router = useRouter()
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [search, setSearch] = useState('')
  const { cartItems, cartShow, setCartShow, open, setOpen } = useAppContext()

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    router.push(`/products?query=${search}`)
    setIsSearchOpen(!isSearchOpen)
  }
  return (
    <nav className="bg-[#f6f7fb] flex flex-col">
      <div className="h-10 hidden sm:flex justify-between items-center px-4">
        <div className="flex gap-6">
          <div className="flex items-center gap-2">
            <FaTruck />
            <p>Free Delivery</p>
          </div>
          <div className="flex items-center gap-2">
            <FaGlobeEurope />
            <p>Returns Policy</p>
          </div>
          <div className="flex items-center gap-2">
            <p>Follow Us</p>
          </div>
          <div className="flex items-center gap-2">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
            <FaPinterest />
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center border border-b-2 border-t-2 h-20">
        <div className="hidden md:block md:basis-1/4"></div>
        <div className="hidden md:flex gap-4 justify-center basis-1/2">
          <Link href="/">Home</Link>
          <Link href="/products">Watches</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact Us</Link>
        </div>
        <div className="flex justify-between  md:justify-end pr-10 lg:pr-32 basis-full md:basis-1/4 gap-4">
          <div className="pl-5">
            <button className="flex items-center md:hidden">
              <FaBars
                size={28}
                color="#eb6a2a"
                onClick={() => setOpen(!open)}
              />
            </button>
          </div>
          <div className="flex gap-5">
            <div className="relative">
              <FaSearch
                size={28}
                color="#eb6a2a"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              />
              <div
                className={`absolute border border-black  right-0 z-50 ${
                  isSearchOpen
                    ? 'visible top-10 duration-300 '
                    : 'invisible top-5'
                }`}
              >
                <form
                  onSubmit={submitHandler}
                  className="flex items-center justify-center"
                >
                  <input
                    type="text"
                    value={search}
                    placeholder="search..."
                    className="h-12 w-80"
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </form>
              </div>
            </div>

            <div
              className="flex relative"
              onClick={() => setCartShow(!cartShow)}
            >
              <FaShoppingBag size={28} color="#eb6a2a" />
              <p className="flex items-center justify-center absolute w-5 h-5 bg-[#eb6a2a] rounded-full top-[-.2em] right-[-.7em] border-2 border-white text-white ">
                {cartItems.length}
              </p>
            </div>
          </div>
        </div>
      </div>
      <MobileNavBar />
      <Cart />
    </nav>
  )
}

export default NavBar
