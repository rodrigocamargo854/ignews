import Prismic from '@prismicio/client'

export const PrismicPredicates = Prismic.Predicates

export function getPrismicClient(req?: unknown) {
  const prismic = Prismic.client(
    process.env.NEXT_PUBLIC_PRISMIC_ENDPOINT,
    {
      req,
      accessToken: process.env.NEXT_PUBLIC_PRISMIC_ACESS_TOKEN,
    }
  )

  return prismic
}