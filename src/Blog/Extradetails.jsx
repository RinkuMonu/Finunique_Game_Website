import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import DOMPurify from "dompurify";
import blogImg from "../assets/bannerimg/blogbanner.jpg";

const cleanContent = (html) => {
  return DOMPurify.sanitize(html, {
    FORBID_ATTR: [""], // removes inline styles
  });
};

const BlogPostDetail = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [categoryname, setCategoryName] = useState([]);

  useEffect(() => {
    setPost(null);
    setLoading(true);

    const fetchBlogPost = async () => {
      try {
        const [postRes, relatedRes] = await Promise.all([
          fetch(
            `https://cms.sevenunique.com/apis/blogs/get-blogs.php?status=2&slug=${slug}&website_id=6`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer jibhfiugh84t3324fefei#*fef",
              },
            }
          ),
          fetch(
            `https://cms.sevenunique.com/apis/blogs/get-blogs.php?status=2&limit=3&website_id=6`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer jibhfiugh84t3324fefei#*fef",
              },
            }
          ),
        ]);

        const postJson = await postRes.json();
        const relatedJson = await relatedRes.json();

        if (postJson.status === "success" && postJson.data.length > 0) {
          const matchedPost = postJson.data.find((p) => p.slug === slug);
          if (matchedPost) {
            matchedPost.content = cleanContent(matchedPost.content);
            setPost(matchedPost);
          }
        }

        setRelatedPosts(relatedJson);
      } catch (err) {
        console.error("Failed to fetch blog post:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPost();
  }, [slug]);

  useEffect(() => {
    const fetchCategory = async () => {
      if (!post?.category_id) return;

      try {
        const res = await fetch(
          `https://cms.sevenunique.com/apis/category/get_category_by_id.php?category_id=${post.category_id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer jibhfiugh84t3324fefei#*fef",
            },
          }
        );
        const data = await res.json();
        setCategoryName(data);
      } catch (err) {
        console.error("Failed to fetch category:", err);
      }
    };

    fetchCategory();
  }, [post?.category_id]);

  if (loading) {
    return (
      <div className="w-full min-h-[90vh] flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
          <div className="absolute -top-2 -right-2">
            <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center shadow-md animate-bounce">
              <div className="w-6 h-6 bg-red-700 rounded-full"></div>
            </div>
          </div>
        </div>
        <p className="mt-6 text-xl font-medium text-yellow-400 animate-pulse">
          Loading blog content...
        </p>
        <p className="mt-2 text-gray-400 text-sm">
          Getting the latest betting insights ready for you
        </p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="w-full min-h-[90vh] flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 to-red-900/30">
        <div className="relative mb-6 animate-pulse">
          <div className="w-20 h-20 bg-white bg-opacity-90 rounded-lg shadow-xl flex items-center justify-center rotate-12">
            <div className="text-4xl text-red-500 font-bold">!</div>
          </div>
          <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-gray-100 rounded flex items-center justify-center shadow-md">
            <div className="grid grid-cols-2 gap-1">
              {[1, 2, 3, 4].map((dot) => (
                <div
                  key={dot}
                  className="w-1 h-1 bg-gray-800 rounded-full"
                ></div>
              ))}
            </div>
          </div>
        </div>
        <h2 className="text-2xl font-bold text-red-400 mb-2">Post Not Found</h2>
        <p className="text-gray-300 max-w-md text-center px-4 mb-6">
          The article you're looking for doesn't exist or may have been removed.
        </p>
        <button
          onClick={() => window.history.back()}
          className=" px-6 py-2 bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-medium rounded-lg transition-colors flex items-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          Back to Blog
        </button>
      </div>
    );
  }

  return (
    <div
      className=" min-h-screen "
      style={{
        background: "#f5c9b8",
        boxShadow: "0 0 10px #221624",
      }}
    >
      {/* Hero Section */}
      <div
        className="relative bg-black/20 opacity-90 py-16"
        style={{
          backgroundImage: `url(${blogImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          boxShadow: "0 0 10px #221624",
        }}
      >
        <div className="absolute inset-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-3xl mx-auto text-center">
            <button
              onClick={() => window.history.back()}
              className="mb-6 inline-flex items-center px-4 py-2 bg-gray-900 bg-opacity-50 text-white rounded-lg hover:bg-opacity-70 transition-all mt-5 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Back to Blog
            </button>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4 italic">
              {post.title}
            </h3>
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-300">
              <span>
                {new Date(post.created_at).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span>•</span>
              <span>
                {Math.ceil(post.content.split(" ").length / 200)} min read
              </span>
              <span>•</span>
              <span>{categoryname?.data?.name}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ">
        <div className=" rounded-xl shadow-xl overflow-hidden">
          {post.image && (
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover"
            />
          )}

          <div className="">
            <div
              className="max-w-none p-5 text-white"
              dangerouslySetInnerHTML={{ __html: post.content }}
              style={{
                lineHeight: "1.8",
                fontSize: "1rem",
              }}
            />
          </div>
        </div>
        <button className="mb-6 inline-flex items-center px-4 py-2 bg-gray-900 bg-opacity-50 text-white rounded-lg hover:bg-opacity-70 transition-all mt-5 cursor-pointer">
          <Link to={"/our_blog"} className="inline-flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Back to Blog
          </Link>
        </button>
        {/* Author Section */}
        <div className="mt-12 bg-gray-800 rounded-xl p-6 flex items-center">
          <div className="w-16 h-16 rounded-full bg-gray-700 flex items-center justify-center text-2xl font-bold text-yellow-400">
            FU
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-bold text-white">FinUnique Team</h3>
            <p className="text-gray-400">
              Betting experts with years of experience
            </p>
          </div>
        </div>

        {/* Related Posts */}
        {/* {relatedPosts.length > 0 && ( */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-700 mb-6">
            More Betting Insights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts?.data?.map((relatedPost) => (
              <div key={relatedPost.id}>
                <Link to={`/blog/post/${relatedPost?.slug}`}>
                  <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                    {relatedPost.image && (
                      <img
                        src={relatedPost?.image}
                        alt={relatedPost?.title}
                        className="w-full h-40 object-cover"
                      />
                    )}
                    <div className="p-4">
                      <h3 className="font-bold text-white mb-2 line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-3">
                        {new Date(relatedPost.created_at).toLocaleDateString()}
                      </p>
                      <button className="text-yellow-400 text-sm font-medium hover:text-yellow-300 transition-colors">
                        Read Article →
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        {/* )} */}
      </div>
    </div>
  );
};

export default BlogPostDetail;
