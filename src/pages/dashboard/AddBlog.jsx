import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addBlogSuccess } from "../../redux/ActionCreator/BlogCreator";

const AddBlog = () => {
  const dispatch = useDispatch();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const blogs = useSelector((state) => state.blogReducer);

  /* handle blog save */
  const handleBlogSave = handleSubmit(async (data) => {
    const sendingData = {
      _id: blogs?.blogs?.length + 1,
      date: new Date(),
      ...data,
    };

    dispatch(addBlogSuccess(sendingData));
  });

  console.log(blogs);

  return (
    <div>
      <div className="add-blog-content">
        <h1 className="text-2xl my-5">Add Blog</h1>
        <form
          className="flex flex-col items-start gap-3"
          onSubmit={handleBlogSave}
        >
          <div className="form-group flex items-stretch w-full gap-2 flex-col">
            <label htmlFor="title">Author</label>
            <input
              type="text"
              className="form-control w-full p-3 border border-gray-300 rounded-md focus:outline-blue-500"
              id="author"
              placeholder="Enter author"
              {...register("author", { required: true })}
            />
            {errors.author && (
              <span className="text-red-500 my-1">
                Author field is required
              </span>
            )}
          </div>
          <div className="form-group flex items-stretch w-full gap-2 flex-col">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control w-full p-3 border border-gray-300 rounded-md focus:outline-blue-500"
              id="title"
              placeholder="Enter title"
              {...register("title", { required: true })}
            />
            {errors.title && (
              <span className="text-red-500 my-1">Title field is required</span>
            )}
          </div>
          <div className="form-group flex items-stretch w-full gap-2 flex-col">
            <label htmlFor="Category">Category</label>
            <select
              className="form-control w-full p-3 border border-gray-300 rounded-md focus:outline-blue-500 cursor-pointer"
              id="Category"
              {...register("category", { required: true })}
            >
              <option value={""}>Select Category</option>
              <option value={"Development"}>Development</option>
              <option value={"Comic"}>Comic</option>
              <option value={"Reading"}>Reading</option>
            </select>
            {errors.category && (
              <span className="text-red-500 my-1">
                Category field is required
              </span>
            )}
          </div>
          <div className="form-group flex flex-col items-start w-full gap-2">
            <label htmlFor="content">Content</label>
            <textarea
              className="form-control w-full p-5 border border-gray-300 rounded-md focus:outline-blue-500"
              id="content"
              rows="3"
              {...register("content", { required: true })}
            ></textarea>
            {errors.content && (
              <span className="text-red-500 my-1">
                Content field is required
              </span>
            )}
          </div>
          <div className="form-group flex flex-col gap-2 w-full">
            <label htmlFor="image">Image</label>
            <input
              type="url"
              className="form-control w-full p-3 border border-gray-300 rounded-md focus:outline-blue-500"
              id="image"
              {...register("image", { required: true })}
              placeholder="Enter image url"
            />
            {errors.image && (
              <span className="text-red-500 my-1">Image field is required</span>
            )}
          </div>
          <button
            type="submit"
            className="btn btn-primary px-5 py-3 bg-blue-500 text-white rounded-sm"
          >
            Save Blog
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBlog;
