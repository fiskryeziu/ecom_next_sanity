import client from '@/lib/client'
import { IProduct } from '@/typings'
import { GetStaticPaths, GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring'
import React from 'react'

const ProductDetails = ({ product }: { product: IProduct }) => {
  return <div>ProductDetails</div>
}

export default ProductDetails

interface IParams extends ParsedUrlQuery {
  slug: string
}

export const getStaticPaths: GetStaticPaths = async () => {
  const query = `*[_type=="product"]{slug{current}}`
  const products = await client.fetch(query)

  const paths = products.map((product: IProduct) => {
    return {
      params: { slug: product.slug.current },
    }
  })
  return { paths, fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams

  const query = `*[_type=="product" && slug.current == '${slug}'][0]`
  const product = await client.fetch(query)

  return {
    props: { product },
  }
}
