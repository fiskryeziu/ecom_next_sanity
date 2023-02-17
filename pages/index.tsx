import Banner from '@/components/Banner'
import Card from '@/components/Card'
import InfoSection from '@/components/InfoSection'
import TopBrands from '@/components/TopBrands'
import Watches from '@/components/Watches'
import { IBanner, IProduct } from '@/typings'
import client from '../lib/client'

export default function Home({
  products,
  banner,
}: {
  products: IProduct[]
  banner: IBanner[]
}) {
  return (
    <>
      <Banner data={banner} />
      <Watches />
      <div className="flex flex-col">
        <p className="text-2xl font-semibold text-center my-10">Trending Now</p>
        <div className="flex flex-col md:flex-row px-2 gap-4">
          {products &&
            products.map((product) => (
              <Card key={product._id} product={product} />
            ))}
        </div>
      </div>
      <TopBrands />
      <InfoSection />
    </>
  )
}

export const getServerSideProps = async () => {
  const query = `*[_type=='product'] | order(priority desc, _updatedAt desc)[0...4]
  `
  const bannerQuery = `*[_type=='banner']`

  const products = await client.fetch(query)
  const banner = await client.fetch(bannerQuery)

  return {
    props: {
      products,
      banner,
    },
  }
}
