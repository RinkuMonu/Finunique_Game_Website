import React, { useContext, useEffect, useState } from "react";
import Navbar from "../HomeComponets/Navbar/navbar";
import NeonBanner from "../HomeComponets/HeroSection/Hero";
import TournamentsSection from "../HomeComponets/TournamentSection/tournament";
import GuideSection from "../HomeComponets/Guide/guide";
import Footer from "../HomeComponets/Footer/footer";
import { DownloadCTA } from "../DownloadAPK/DownloadCTA";
import SEO from "../Reuseable Com/SeoHelment";
import { ContextData } from "../Service/context";

export const AppLayout = () => {
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

      <NeonBanner />
      <TournamentsSection />
      <GuideSection />
      <div className="bg-[#0B050C]">
        <DownloadCTA />
      </div>
    </>
  );
};
