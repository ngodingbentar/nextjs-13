import AddProductButton from "../components/AddProductButton"
import { Product } from "../typings"
import { addProductToDatabase } from "./actions/serverActions"

async function Home () {
  const res = await fetch('https://651da56844e393af2d5a20df.mockapi.io/api/v1/products', {
    cache: 'no-cache',
    next: {
      tags: ["products"]
    }
  })

  const products: Product[] = await res.json()


  return (
    <main className="p-10">
      <h1>Product warehouse</h1>
      <AddProductButton />

      <form
        action={addProductToDatabase}
        className="flex flex-col gap-5 max-w-xl mx-auto p-5 bg-gray-300"
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