import Banner from '@/components/Banner'
import Card from '@/components/Card'
import InfoSection from '@/components/InfoSection'
import TopBrands from '@/components/TopBrands'
import Watches from '@/components/Watches'
import { IProduct } from '@/typings'
import Image from 'next/image'
import Link from 'next/link'
import client, { urlFor } from '../lib/client'

export default function Home({ product }: { product: IProduct[] }) {
  return (
    <>
      <Banner />
      <Watches />
      <div className="flex flex-col">
        <p className="text-2xl font-semibold text-center my-10">Trending Now</p>
        <div className="flex flex-col md:flex-row px-2 sm:px-10 lg:px-32 gap-5 lg:gap-10">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <TopBrands />
      <InfoSection />
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
