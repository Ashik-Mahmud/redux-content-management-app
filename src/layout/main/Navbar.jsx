import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="p-5 bg-gray-50">
      <div className="container mx-auto">
        <div>
          <div className="flex space-x-4 justify-between items-center">
            <div className="flex items-center">
              <ul className="flex items-center gap-3">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/blogs">Blogs</Link>
                </li>
                <li>
                  <Link to="/reading-history">Reading History</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
