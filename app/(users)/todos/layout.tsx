import React from 'react'
import TodosList from './TodosList';

function RootLayout({
  children,
} : {
  children: React.ReactNode;
}) {
  return (
    <main className='flex p-5'>
      <div>
        <TodosList />
      </div>
      <div className="flex-1 ml-4">{children}</div>
    </main>
  )
}

export default RootLayout