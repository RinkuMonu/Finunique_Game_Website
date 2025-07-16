import React, { useEffect, useState } from "react";
import BlogPostCard from "./BlogPostCard";
import { FaRegNewspaper } from "react-icons/fa6";

const BlogPostsGrid = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const limit = 6;

  const fetchBlogs = async (currentPage = 1) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://cms.sevenunique.com/apis/blogs/get-blogs.php?website_id=6&status=2&page=${currentPage}&limit=${limit}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer jibhfiugh84t3324fefei#*fef",
          },
        }
      );

      const data = await res.json();
      const newBlogs = data?.data || [];
      const pagination = data?.pagination || {};

      setBlogPosts((prev) => [...prev, ...newBlogs]);

      if (pagination.total_pages) {
        setTotalPages(pagination.total_pages);
      }

      if (currentPage >= pagination.total_pages) {
        setHasMore(false);
      }
    } catch (error) {
      console.log("Error fetching blogs:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchBlogs(1);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 600 &&
        !loading &&
        hasMore
      ) {
        const nextPage = page + 1;
        setPage(nextPage);
        fetchBlogs(nextPage);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, hasMore, page]);

  return (
    <>
      <div>
        <h2 className="text-3xl md:text-4xl font-bold pb-2 text-[#db8990] drop-shadow-[0_0_5px_#a855f7] md:drop-shadow-[0_0_10px_#a855f7] flex items-center gap-2 justify-center my-9 p-5">
          <FaRegNewspaper /> Latest blog
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-10">
          {blogPosts?.map((post) => (
            <BlogPostCard key={post?.slug} post={post} />
          ))}
        </div>

        {loading && (
          <div className="flex justify-center mt-6">
            <div className="w-8 h-8 border-4 border-t-transparent border-[#a855f7] rounded-full animate-spin"></div>
          </div>
        )}

        {!hasMore && blogPosts.length > 0 && (
          <p className="text-center mt-4 text-gray-500">No more blogs to load</p>
        )}
      </div>
    </>
  );
};

export default BlogPostsGrid;
