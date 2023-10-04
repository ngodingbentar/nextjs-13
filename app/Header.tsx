import Link from "next/link"
import './header.css'
function Header () {
  return (
    <header className="header p-5 bg-blue-600">
      <Link href="/" className="px-2 py-1 bg-white text-blue-500">
        Home
      </Link>
    </header>
  )
}

export default Header