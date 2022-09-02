import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Coding Blog</title>
        <meta name="keywords" content="coding, blog, coding blog" />
      </Head>

      <nav className="w-screen p-2 m-2">
        <ul className="flex justify-evenly text-xs">
          <Link href="/home">
            <li>Home</li>
          </Link>
          <Link href="/about">
            <li>About</li>
          </Link>
          <Link href="/blogs">
            <li>Blogs</li>
          </Link>
          <Link href="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </nav>

      <main className="main flex flex-col h-screen">
        <div className="title flex flex-col gap-2 my-4 p-2 text-center">
          <h1 className="text-4xl font-medium">Coding Blog</h1>
          <p className="text-sm">A blog for everything code</p>
        </div>
        <div className="blogs flex flex-col gap-6 text-center">
          <h2 className="text-xl">Popular Blogs</h2>
          <div className="blogItem">
            <h3 className="font-medium">How to learn JavaScript in 2022</h3>
            <p className="text-sm">
              JavaScript is the language used for building the web.
            </p>
          </div>
          <div className="blogItem">
            <h3 className="font-medium">How to learn JavaScript in 2022</h3>
            <p className="text-sm">
              JavaScript is the language used for building the web.
            </p>
          </div>
          <div className="blogItem">
            <h3 className="font-medium">How to learn JavaScript in 2022</h3>
            <p className="text-sm">
              JavaScript is the language used for building the web.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
