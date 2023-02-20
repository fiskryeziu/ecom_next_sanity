import { createContext, ReactNode, useContext } from 'react'

const Context = createContext({})

type Props = {
  children: ReactNode
}
export function AppWrapper({ children }: Props) {
  const value = {
    sample: 'sampleValue',
  }

  return <Context.Provider value={value}>{children}</Context.Provider>
}

export function useAppContext() {
  return useContext(Context)
}
