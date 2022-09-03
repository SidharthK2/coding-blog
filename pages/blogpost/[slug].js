import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

const slug = (props) => {
  const [blog, setBlog] = useState(props.myBlog);
  return (
    <div className="flex flex-col max-w-md m-4 p-4 gap-1">
      <h1 className="font-medium">{blog && blog.title}</h1>
      <hr />
      <p className="text-xs">{blog && blog.content}</p>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { slug } = context.query;
  let data = await fetch(`http://localhost:3000/api/getBlog?slug=${slug}`);
  let myBlog = await data.json();
  return {
    props: { myBlog },
  };
}
export default slug;
