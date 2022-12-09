import React from "react";

const AddBlog = () => {
  return (
    <div>
      <div className="add-blog-content">
        <h1 className="text-2xl my-5">Add Blog</h1>
        <form className="flex flex-col items-start gap-3">
          <div className="form-group flex items-stretch w-full gap-2 flex-col">
            <label htmlFor="title">Author</label>
            <input
              type="text"
              className="form-control w-full p-3 border border-gray-300 rounded-md focus:outline-blue-500"
              id="author"
              placeholder="Enter author"
            />
          </div>
          <div className="form-group flex items-stretch w-full gap-2 flex-col">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control w-full p-3 border border-gray-300 rounded-md focus:outline-blue-500"
              id="title"
              placeholder="Enter title"
            />
          </div>
          <div className="form-group flex items-stretch w-full gap-2 flex-col">
            <label htmlFor="title">Category</label>
            <select
              className="form-control w-full p-3 border border-gray-300 rounded-md focus:outline-blue-500 cursor-pointer"
              id="title"
            >
              <option value={1}>Category 1</option>
              <option value={2}>Category 2</option>
              <option value={3}>Category 3</option>
            </select>
          </div>
          <div className="form-group flex flex-col items-start w-full gap-2">
            <label htmlFor="content">Content</label>
            <textarea
              className="form-control w-full p-5 border border-gray-300 rounded-md focus:outline-blue-500"
              id="content"
              rows="3"
            ></textarea>
          </div>
          <div className="form-group flex flex-col gap-2 w-full">
            <label htmlFor="image">Image</label>
            <input
              type="url"
              className="form-control w-full p-3 border border-gray-300 rounded-md focus:outline-blue-500"
              id="image"
              placeholder="Enter image url"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary px-5 py-3 bg-blue-500 text-white rounded-sm"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBlog;
