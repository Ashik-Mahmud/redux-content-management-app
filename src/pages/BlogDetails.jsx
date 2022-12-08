import React from "react";
import { BiCategory, BiCloud, BiEdit } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const BlogDetails = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="container mx-auto bg-gray-50 p-12">
        <div className="blog-title flex items-center gap-5">
          <span className="back cursor-pointer" onClick={() => navigate(-1)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
          </span>
          <h1 className="text-4xl font-bold">Blog Title</h1>
        </div>

        <div className="blog-image my-6 border rounded-md overflow-hidden bg-gray-100 p-3">
          <img
            src="https://images.unsplash.com/photo-1670491777181-c1fd8ce8b23d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="blog"
            className="w-full h-96 object-cover"
          />
        </div>

        <div className="meta bg-gray-100 p-4">
          <div className="meta flex items-center gap-8 text-sm text-gray-500 ">
            <span className="date flex items-center gap-1 capitalize text-xl">
              <BiEdit /> Jhonson
            </span>
            <span className="date flex items-center gap-1 capitalize text-xl">
              <BiCategory /> Freelancing
            </span>
            <span className="author flex items-center gap-1">
              <BiCloud /> 150
            </span>
          </div>
        </div>
        <div className="blog-content mt-5 bg-gray-100 p-5">
          <p className="text-gray-600 leading-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            quod, voluptate, quia, voluptates quas voluptatibus quibusdam
            voluptatum quae quidem quos quas voluptatibus quibusdam voluptatum
            quae quidem quos quas voluptatibus quibusdam voluptatum quae quidem
            quos quas voluptatibus quibusdam voluptatum quae quidem quos quas
            voluptatibus quibusdam voluptatum quae quidem quos quas voluptatibus
            quibusdam voluptatum quae quidem quos quas voluptatibus quibusdam
            voluptatum quae quidem quos quas voluptatibus quibusdam Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Ullam libero error nam,
            natus saepe magni odit repudiandae aut, dolorem officia, tempore
            illum sed minima esse delectus blanditiis! Expedita obcaecati,
            aliquam dolores libero quaerat veritatis, dolore placeat aliquid
            eveniet exercitationem unde saepe. Maiores similique sed dolorum eos
            cupiditate commodi aut et ullam modi nulla. Voluptatum magni
            similique incidunt, explicabo distinctio ut eaque facere beatae vero
            adipisci porro, ipsa, maiores sapiente voluptates iure quibusdam nam
            nihil. Vel, harum quaerat? Placeat obcaecati cum nobis sunt libero!
            Odit recusandae neque ab obcaecati vel, vero iure repellat totam id
            dicta commodi, ea voluptas, impedit sapiente accusamus excepturi
            dolor pariatur vitae odio animi a ratione quam. Fugit, libero!
            Explicabo, dicta numquam quaerat assumenda eaque cupiditate vel
            asperiores temporibus natus quibusdam ipsa culpa dolor odio
            voluptates soluta, ex impedit vero itaque minima esse illo autem
            consequuntur. Dolores, repellat dolore inventore perspiciatis
            aliquam porro quo a quisquam nesciunt doloribus laudantium rerum
            voluptas impedit velit dolor debitis deleniti vero saepe explicabo
            asperiores ullam optio. Nostrum sint ratione quos aliquid hic,
            corporis architecto quibusdam dolorum illum ducimus rem odit maxime,
            amet iusto qui adipisci earum repellat nemo excepturi labore quasi
            animi atque. Veritatis in provident pariatur voluptates hic. Amet,
            iusto.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
