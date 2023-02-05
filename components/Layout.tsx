import React from 'react'
import Head from 'next/head'

const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <div className="layout">
      <Head>
        <title>Watch store</title>
      </Head>
      <header>{/* <Navbar /> */}</header>
      <main className="main-container">{children}</main>
      <footer>{/* <Footer /> */}</footer>
    </div>
  )
}

export default Layout
