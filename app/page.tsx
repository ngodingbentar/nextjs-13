import { revalidateTag } from "next/cache"

export interface Product {
  id?: number
  product: string
  price: string
}

async function Home () {
  const res = await fetch('https://651da56844e393af2d5a20df.mockapi.io/api/v1/products', {
    cache: 'no-cache',
    next: {
      tags: ["products"]
    }
  })

  const products: Product[] = await res.json()

  const addProductToDatabase = async (e: FormData) => {
    'use server';

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

  return (
    <main className="p-10">
      <h1>Product warehouse</h1>

      <form
        action={addProductToDatabase}
        className="flex flex-col gap-5 max-w-xl mx-auto p-5 bg-gray-200"
        >
        <input name="product" />
        <input name="price"/>
        <button>Add Product</button>
      </form>

      <h2>List products</h2>
      <div className="flex flex-wrap gap-5">
        {products.map((product) => (
          <div className="p-5 shadow" key={product.id}>
            <p>{product.product}</p>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </main>
  )
}

export default Home