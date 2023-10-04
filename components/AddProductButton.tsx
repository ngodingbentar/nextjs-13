'use client'

import { useTransition } from "react"
import { addProductToDatabase } from "../app/actions/serverActions"

function AddProductButton() {
  const [isPending, startTransition] = useTransition()

  const formData = new FormData()
  formData.append("product", "macbook")
  formData.append("price", "12300")

  return (
    <>
      <button
        onClick={() => startTransition(() => addProductToDatabase(formData))}
        className="fixed bottom-10 right-10 bg-green-300 border text-white rounded-md w-48"
      >
        {isPending ? "Adding..." : "Add macbook"}
      </button>

    </>
  )
}

export default AddProductButton