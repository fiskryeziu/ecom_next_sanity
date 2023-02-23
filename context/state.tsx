import { IProduct } from '@/typings'
import { createContext, ReactNode, useContext, useState } from 'react'

interface IContext {
  cartItems: IProduct[]
  addToCart: (item: any) => void
  totalPrice: number
  removeItem: (id: string) => void
  updateQty: (id: string, value: string) => void
}

const Context = createContext<IContext>({} as IContext)

type Props = {
  children: ReactNode
}
export function AppWrapper({ children }: Props) {
  const [cartItems, setCartItems] = useState<IProduct[]>([])
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.qty * item.price,
    0
  )

  const addToCart = (item: IProduct) => {
    if (cartItems.length > 0) {
      const findProduct = cartItems.find((x) => x._id === item._id)
      if (findProduct) {
        const newItem = item
        const result = cartItems.map((x) => {
          if (x._id === newItem._id) {
            x.qty++
            return x
          } else {
            return x
          }
        })
        setCartItems(result)
      } else {
        const newItem = item
        newItem.qty = 1
        setCartItems((prev) => [...prev, newItem])
      }
    } else {
      const newItem = item
      newItem.qty = 1
      setCartItems((prev) => [...prev, newItem])
    }
  }

  const removeItem = (id: string) => {
    const filterItem = cartItems.filter((item) => item._id !== id)
    setCartItems(filterItem)
  }

  const updateQty = (id: string, value: string) => {
    const findProduct = cartItems.find((x) => x._id === id)
    const newCartItems = cartItems.filter((item) => item._id !== id)
    console.log(id)
    if (findProduct) {
      if (value === 'inc') {
        setCartItems((prev) =>
          prev.map((item) => {
            if (item._id === id) {
              return { ...item, qty: findProduct.qty + 1 }
            }
            return item
          })
        )
      } else if (value === 'dec') {
        if (findProduct.qty > 1) {
          setCartItems((prev) =>
            prev.map((item) => {
              if (item._id === id) {
                return { ...item, qty: findProduct.qty - 1 }
              }
              return item
            })
          )
        }
      }
    }
  }

  return (
    <Context.Provider
      value={{ cartItems, addToCart, totalPrice, removeItem, updateQty }}
    >
      {children}
    </Context.Provider>
  )
}

export function useAppContext() {
  return useContext(Context)
}
