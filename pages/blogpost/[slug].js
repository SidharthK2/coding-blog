import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

const slug = () => {
  const [blog, setBlog] = useState([]);
  const router = useRouter();
  useEffect(() => {
    if (!router.isReady) return;
    const { slug } = router.query;
    fetch(`http://localhost:3000/api/getBlog?slug=${slug}`)
      .then((v) => v.json())
      .then((data) => {
        setBlog(data);
      });
  }, [router.isReady]);

  return (
    <div className="flex flex-col max-w-md m-4 p-4 gap-1">
      <h1 className="font-medium">{blog && blog.title}</h1>
      <hr />
      <p className="text-xs">{blog && blog.content}</p>
    </div>
  );
};

export default slug;
