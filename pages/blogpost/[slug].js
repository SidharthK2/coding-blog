import React from "react";
import { useRouter } from "next/router";

const slug = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div className="flex flex-col max-w-md m-4 p-4 gap-1">
      <h1 className="font-medium">Title of the page {slug}</h1>
      <hr />
      <p className="text-xs">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure culpa
        doloribus ad assumenda non, nulla repellat quas temporibus, atque sit
        optio et eos.
      </p>
    </div>
  );
};

export default slug;
