import React from "react";
import BlogCard from "../components/BlogCard";

const Blogs = () => {
  return (
    <div>
      <div className="blog-container container mx-auto">
        <div className="blogs-content grid grid-cols-8 items-start gap-5 font-noto">
          {/* blog sidebar */}
          <div className="blog-sidebar p-5 bg-white col-span-2 sticky top-10">
            <div className="my-3">
              <h3 className=" text-2xl mb-2 font-bold">
                <span className="text-yellow-500">Blogs</span> Page
              </h3>
              <div className="w-20 border-2 border-yellow-500 "></div>
            </div>

            <div className="blog-sidebar-content my-5">
              <h1 className="text-lg  mb-0 text-gray-800">Search by name</h1>
              <input
                type="text"
                className="w-full border rounded mt-2 bg-gray-50 outline-none p-4"
                placeholder="Search"
              />
            </div>
            <div className="blog-sidebar-content mb-5">
              <h1 className="text-lg  mb-0 text-gray-800">Sort by</h1>
              <select
                name=""
                className="w-full border rounded mt-2 bg-gray-50 outline-none p-4 cursor-pointer"
                id=""
              >
                <option value="">Recent Upload</option>
                <option value="">Last upload</option>
              </select>
            </div>
            <div className="blog-sidebar-content">
              <h1 className="text-lg  mb-0 text-gray-800">Categories</h1>
              <select
                name=""
                className="w-full border rounded mt-2 bg-gray-50 outline-none p-4 cursor-pointer"
                id=""
              >
                <option value="">All</option>
                <option value="">All</option>
                <option value="">All</option>
              </select>
            </div>
            <div className="blog-sidebar-content mt-5">
              <h1 className="text-lg  mb-0 text-gray-800">Tags</h1>
              <ul className="my-4 flex flex-wrap gap-2 text-sm">
                <li className="text-yellow-500 bg-yellow-100 rounded-sm uppercase p-2 cursor-pointer ">
                  Reading
                </li>
                <li className="text-gray-500 bg-gray-100 rounded-sm uppercase p-2 cursor-pointer">
                  Blog
                </li>
                <li className="text-gray-500 bg-gray-100 rounded-sm uppercase p-2 cursor-pointer">
                  Freelancing
                </li>
                <li className="text-gray-500 bg-gray-100 rounded-sm uppercase p-2 cursor-pointer">
                  Job
                </li>
                <li className="text-gray-500 bg-gray-100 rounded-sm uppercase p-2 cursor-pointer">
                  Interview
                </li>
              </ul>
            </div>
          </div>
          {/* blog sidebar end */}
          <div className="blog-main col-span-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mb-36">
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
