import React from 'react'
import { Todo } from '../../typings'
import Link from 'next/link'

const fetchTodos = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  const todos: Todo[] = await res.json()
  // console.log('todos', todos)
  return todos
}

async function TodosList() {
  const todos = await fetchTodos()
  return (
    <>
      <div>TodosList</div>
      {todos.map((todo) => (
        <p key={todo.id}>
          <Link href={`/todos/${todo.id}`}>
            Todo: {todo.id}
          </Link>
        </p>
      ))}
    </>
  )
}

export default TodosList