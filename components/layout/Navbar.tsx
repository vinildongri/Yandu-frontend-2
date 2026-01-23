import React from 'react'
import Link from "next/link"

const Navbar = () => {
  return (
    <nav className='flex gap-6 [&>*]:transition-colors [&>*]:hover:text-blue-500 '>
        <Link href="/">Home</Link>
        <Link href="/services">Services</Link>
        {/* <Link href="./Footer">Footer</Link> */}
    </nav>
  );
};

export default Navbar;
  // "https://images.unsplash.com/photo-1522071823991-b99c223a709e?auto=format&fit=crop&w=1920&q=80",
