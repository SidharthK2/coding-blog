import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Blogs(props) {
  const [blogs, setBlogs] = useState(props.allBlogs);
  return (
    <div className="flex flex-col m-2 p-2">
      <h2 className="text-xl m-4">Latest Blogs</h2>
      <div className="blogs flex flex-col gap-6">
        {blogs.map((item) => {
          return (
            <div key={item.slug} className="blogItem p-2">
              <Link href={`./blogpost/${item.slug}`}>
                <h3 className="font-medium cursor-pointer p-2">{item.title}</h3>
              </Link>
              <hr />

              <p className="text-sm p-2">
                {item.content.slice(0, 150) + "..."}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  let data = await fetch("http://localhost:3000/api/blog");
  let allBlogs = await data.json();
  return {
    props: { allBlogs },
  };
}
