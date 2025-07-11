import React, { useContext, useEffect, useState } from "react";
import BlogPostsGrid from "./BlogPostsGrid";
import BlogNewsletter from "./BlogNewsletter";
import bannerimg from "../assets/bannerimg/aboutBanner.jpg";
import Banner from "../Reuseable Com/Banner";
import SEO from "../Reuseable Com/SeoHelment";
import { ContextData } from "../Service/context";

const BlogPage = () => {
  const { seo } = useContext(ContextData);
  return (
    <>
      <SEO
        meta_title={seo?.meta_title}
        meta_description={seo?.meta_description}
        meta_keywords={seo?.meta_keywords}
        og_title={seo?.og_title}
        og_description={seo?.og_description}
        og_type={seo?.og_type}
        og_url={seo?.og_url}
        og_image={seo?.og_image}
        og_site_name={seo?.og_site_name}
        canonical_tag={seo?.canonical_tag}
      />

      <Banner
        button={"join now"}
        img={bannerimg}
        heading={
          <>
            <span className="text-red-900">Bet Big .</span>
            <span className="text-gray-300">
              <br />. Win Big
            </span>
          </>
        }
      />
      <div className="relative w-full overflow-hidden bg-gradient-to-r from-[#17040A] to-red-950">
        {/* Floating elements for desktop */}
        <div className="hidden lg:block">
          <div className="absolute top-1/4 left-10 w-8 h-8 bg-white bg-opacity-30 rounded-full"></div>
          <div className="absolute bottom-1/3 right-20 w-6 h-6 bg-yellow-400 rounded-full"></div>
          <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-red-500 rounded-full"></div>
        </div>
      </div>

      <div className="min-h-screen bg-[#0B050C] text-white">
        <div className="container mx-auto px-4 py-">
          <div className="flex flex-col lg:flex-row gap-8">
            <main className="">
              <BlogPostsGrid />
            </main>
          </div>
        </div>

        <BlogNewsletter />
      </div>
    </>
  );
};

export default BlogPage;
