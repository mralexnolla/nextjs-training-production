import Link from "next/link";

const links = [
  { href: "client", lable: "client" },
  { href: "drinks", lable: "drinks" },
  { href: "prisma-example", lable: "prisma" },
  { href: "tasks", lable: "tasks" }
];


import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-base-300 py-4">
        <div className="navbar px-8 max-w-6xl mx-auto flex-col sm:flex-row">
           <li>
              <Link href="/" className="btn btn-primary">
                  Next.js
              </Link>
           </li>
           <ul className="menu menu-horizontal md:ml-8">
              {links.map((link,idx) => {
                return (
                  <li key={idx}>
                    <Link href={link.href} className="capitalize">
                      {link.lable}
                    </Link>
                  </li>
                );
              })}
           </ul>
        </div>
    </nav>
  )
}

export default Navbar