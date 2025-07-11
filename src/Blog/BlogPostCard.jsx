import React from "react";
import { Link } from "react-router-dom";

const BlogPostCard = ({ post }) => {
  return (
    <div className="bg-[#180f1a] bg-opacity-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
      <Link to={`/blog/post/${post?.slug}`}>
        <div className="relative h-48 overflow-hidden p-1">
          <img
            src={post?.image}
            alt={post?.title}
            className="w-full h-full object-cover hover:scale-105 transition duration-500 rounded-md "
          />
          {/* <div className="absolute bottom-0 left-0 bg-purple-600 text-white px-3 py-1 text-xs font-semibold">
            Category ID: {post.category_id}
          </div> */}
        </div>
      </Link>

      <div className="p-5">
        <Link to={`/blog/post/${post?.slug}`}>
          <h3 className="text-[1.2rem] font-bold mb-2 hover:text-yellow-400 transition">
            {post?.title.split(" ").slice(0, 7).join(" ")}...
          </h3>
        </Link>

        <p className="text-gray-300 mb-4 text-[14px]">
          {post?.summary.split(" ").slice(0, 20).join(" ")}...
        </p>
      </div>
    </div>
  );
};

export default BlogPostCard;
