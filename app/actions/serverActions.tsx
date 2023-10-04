'use server';

import { revalidateTag } from "next/cache"
import { Product } from "../../typings";

export const addProductToDatabase = async (e: FormData) => {

  const product = e.get("product")?.toString()
  const price = e.get("price")?.toString()

  if (!product || !price) return

  const newProduct: Product = {
    product, price
  }

  await fetch('https://651da56844e393af2d5a20df.mockapi.io/api/v1/products', {
    method: 'POST',
    body: JSON.stringify(newProduct),
    headers: {
      'Content-Type': 'application/json'
    }
  })

  // like for refetch
  revalidateTag('products')
}