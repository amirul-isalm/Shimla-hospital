import React from "react";
import useDataAndAuth from "../Context/useDataAndAuth";
import BlogCart from "./BlogCart";

const Blogs = () => {
  const { blogs } = useDataAndAuth();
 

  return (
    <div className="row my-5 ">
      <h1 className="text-danger fw-bold ">Our Blogs</h1>
      <hr className="w-75 mx-auto" />
      {blogs.length &&
        blogs.map((blog) => <BlogCart key={blog.id} blog={blog}></BlogCart>)}
    </div>
  );
};

export default Blogs;
