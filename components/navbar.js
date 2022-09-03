import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-screen m-1 p-1">
      <ul className="flex justify-evenly text-xs">
        <Link href="/">
          <a>
            <li>Home</li>
          </a>
        </Link>
        <Link href="/about">
          <a>
            <li>About</li>
          </a>
        </Link>
        <Link href="/blogs">
          <a>
            <li>Blogs</li>
          </a>
        </Link>
        <Link href="/contact">
          <a>
            <li>Contact</li>
          </a>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
