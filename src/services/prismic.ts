import * as Prismic from '@prismicio/client'

export function getPrismicClient() {
  const prismic = Prismic.createClient(
    process.env.NEXT_PUBLIC_PRISMIC_ENDPOINT,
    {
      accessToken: process.env.NEXT_PUBLIC_PRISMIC_ACESS_TOKEN
    }
  )

  return prismic
}