import { IProduct } from '@/typings'
import { createContext, ReactNode, useContext, useState } from 'react'

interface IContext {
  cartItems: IProduct[]
  addToCart: (item: any) => void
  //   productQty: number
  //   totalQty: number
}

const Context = createContext<IContext>({} as IContext)

type Props = {
  children: ReactNode
}
export function AppWrapper({ children }: Props) {
  const [cartItems, setCartItems] = useState<IProduct[]>([])
  const [totalQty, settotalQty] = useState(null)

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
  console.log(cartItems)
  return (
    <Context.Provider value={{ cartItems, addToCart }}>
      {children}
    </Context.Provider>
  )
}

export function useAppContext() {
  return useContext(Context)
}
