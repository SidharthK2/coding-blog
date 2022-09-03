import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import * as fs from "fs";

const Slug = (props) => {
  const [blog, setBlog] = useState(props.myBlog);
  function createMarkup(c) {
    return { __html: c };
  }

  return (
    <div className="flex flex-col max-w-md m-4 p-4 gap-1">
      <h1 className="font-medium">{blog && blog.title}</h1>
      <hr />
      {blog && <div dangerouslySetInnerHTML={createMarkup(blog.content)}></div>}
    </div>
  );
};

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: "how-to-learn-js" } },
      { params: { slug: "how-to-learn-py" } },
      { params: { slug: "how-to-learn-react" } },
    ],
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps(context) {
  const { slug } = context.params;
  let myBlog = await fs.promises.readFile(`blogdata/${slug}.json`, "utf-8");
  return {
    props: { myBlog: JSON.parse(myBlog) },
  };
}
export default Slug;
