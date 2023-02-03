import { sanityClient } from '@sanity/client'
import { ImageUrlBuilder } from 'next-sanity-image'

const client = sanityClient({
  projectId: '18zc82sj',
  dataset: 'production',
  apiVersion: '2023-02-03', // use current UTC date - see "specifying API version"!
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN, // or leave blank for unauthenticated usage
  useCdn: true, // `false` if you want to ensure fresh data
})

const builder = ImageUrlBuilder(myConfiguredSanityClient)

export const urlFor = (source) => builder.image(source)

export default client
