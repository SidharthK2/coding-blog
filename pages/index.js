import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen m-2">
      <Head>
        <title>Coding Blog</title>
        <meta name="keywords" content="coding, blog, coding blog" />
      </Head>

      <main className="main flex flex-col h-screen">
        <div className="title flex flex-col gap-2 my-4 p-2 text-center">
          <h1 className="text-4xl font-medium">Coding Blog</h1>
          <p className="text-sm mb-3">A blog for everything code</p>

          <Image
            className="rounded-t-2xl rounded-l-2xl"
            src="/coding.jpg"
            width={5}
            height={3}
            layout="responsive"
          ></Image>
        </div>
        <div className="flex flex-col text-center">
          <h2 className="text-xl my-2">Popular Blogs</h2>
          <div className="blogs flex flex-col gap-6 text-center">
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
        </div>
      </main>
    </div>
  );
}
