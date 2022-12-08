import React from "react";
import BlogCard from "../components/BlogCard";

const Blogs = () => {
  return (
    <div>
      <div className="blog-container">
        <div className="blog-main grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <BlogCard />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
