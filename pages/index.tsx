import Banner from '@/components/Banner'
import { IProduct } from '@/typings'
import Image from 'next/image'
import Link from 'next/link'
import client, { urlFor } from '../lib/client'

export default function Home({ product }: { product: IProduct[] }) {
  return (
    <>
      <Banner />
    </>
  )
}

export const getServerSideProps = async () => {
  const query = `*[_type=='product']`

  const product = await client.fetch(query)

  return {
    props: {
      product,
    },
  }
}
