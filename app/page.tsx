import { Suspense } from "react"
import TodosList from "./(users)/todos/TodosList"

function Home () {
  return (
    <>
      <Suspense fallback={<p className="text-red-500">Loading the todos...</p>}>
        <div className="flex space-x-2">
          <TodosList />
        </div>
      </Suspense>
      <Suspense fallback={<p>Loading the shopping...</p>}>
        <div className="flex space-x-2">
          <TodosList />
        </div>
      </Suspense>
    </>
  )
}

export default Home