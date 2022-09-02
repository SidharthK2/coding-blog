import React from "react";
import Link from "next/link";

const Blogs = () => {
  return (
    <div className="flex flex-col m-2 p-2">
      <h2 className="text-xl my-4">Latest Blogs</h2>
      <div className="blogs flex flex-col gap-6">
        <div className="blogItem">
          <Link href={"./blogpost/learn-js"}>
            <h3 className="font-medium cursor-pointer">
              How to learn JavaScript in 2022
            </h3>
          </Link>
          <p className="text-sm">
            JavaScript is the language used for building the web.
          </p>
        </div>
        <div className="blogItem">
          <h3 className="font-medium cursor-pointer">
            How to learn JavaScript in 2022
          </h3>
          <p className="text-sm">
            JavaScript is the language used for building the web.
          </p>
        </div>
        <div className="blogItem">
          <h3 className="font-medium cursor-pointer">
            How to learn JavaScript in 2022
          </h3>
          <p className="text-sm">
            JavaScript is the language used for building the web.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
