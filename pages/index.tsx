import { IProduct } from '@/typings'
import Image from 'next/image'
import Link from 'next/link'
import client, { urlFor } from '../lib/client'

export default function Home({ product }: { product: IProduct[] }) {
  return (
    <>
      {product[0].image.map((item, i) => (
        <Link key={i} href={`products/${product[0].slug.current}`}>
          <Image src={urlFor(item).url()} alt="" width={200} height={200} />
        </Link>
      ))}
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
