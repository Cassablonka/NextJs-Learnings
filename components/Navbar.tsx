import Link from "next/link"

const links = [
    { href: '/client', label: 'client' },
    { href: '/drinks', label: 'drinks' },
    { href: '/tasks', label: 'tasks' },
    { href: '/query', label: 'query' },
    {href: '/prisma', label: 'prisma'}
]

const Navbar = () => {
  return (
    <nav className="bg-base-300 py-2">
      <div className="navbar px-20 mx-auto">
        <Link href="/" className="btn btn-primary">
        Next.Js
        </Link>
      <ul className="menu menu-horizontal py-4">
        {links.map((link) => {
            return (
                <li className="capitalize mx-2" key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                </li>
            )
        })}
      </ul>
      </div>
    </nav>
  )
}

export default Navbar
