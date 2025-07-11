import React, { useContext } from "react";
import rummyyy from "../../../assets/rummy/rummyyy.png";
import rummyCard from "../../../assets/rummy/rummyCard.png";
import RummyRulesSection from "./rummyRule";
import Banner from "../../../Reuseable Com/Banner";
import { Link } from "react-router-dom";
import SEO from "../../../Reuseable Com/SeoHelment";
import { ContextData } from "../../../Service/context";

export const RummyGame = () => {
    const { seo } = useContext(ContextData);
  
  const Card = [
    {
      img: rummyCard,
      title: "Points Rummy",
      herf: "/point_rummy_game",
    },
    {
      img: rummyCard,
      title: "Pool Rummy",
      herf: "/pool_rummy_game",
    },
    {
      img: rummyCard,
      title: "Deals Rummyoker",
      herf: "/deal_rummy_game",
    },
  ];
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
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
        img={rummyyy}
        heading="Welcome to the Ultimate Rummy! "
        button="play now"
        subheading="18+ Only | Play Responsibly"
      />
      <div className="bg-[#0B050C] text-white px-4 md:px-10 py-16">
        {/* Introduction */}
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Introduction
          </h2>
          <p className="text-gray-300 leading-relaxed">
           Dive into the thrilling world of competitive card gaming, where skill and excitement go hand in hand. Whether you are starting now or you are an experienced supporter, there is something for all on our platform.
          </p>
        </div>

        {/* Info Cards */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 px-2">
          <div className="border border-gray-700 bg-[#151015] p-6 rounded-lg shadow">
            <h3 className="font-semibold text-white mb-3">
              The History and Evolution of Rummy
            </h3>
            <p className="text-gray-400 text-sm">
             Rummy has deep historical roots and has evolved through centuries into one of the most widely played card games. From traditional versions to modern formats, its appeal has only grown...
            </p>
          </div>
          <div className="border border-gray-700 bg-[#151015] p-6 rounded-lg shadow">
            <h3 className="font-semibold text-white mb-3">
              Why Rummy is a Game of Skill?
            </h3>
            <p className="text-gray-400 text-sm">
             Success in Rummy requires focus, memory, and strategy. It’s not about luck—it’s about how well you play your hand. Sharpen your decision-making and outplay your opponents...

            </p>
          </div>
        </div>

        {/* Game Types */}
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Different Types of Rummy Games
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-4 md:px-0">
            {Card.map((item, index) => (
              <Link
                to={item.herf}
                key={index}
                className="group p-5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center hover:-translate-y-2"
                style={{
                  background: "linear-gradient(to bottom, #0B050C, #340408)",
                  boxShadow: "0 0 10px #221624",
                  minHeight: "300px",
                }}
              >
                <div className="flex-1 flex flex-col  ustify-center">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full object-contain mb- transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="text-center">
                    <h3
                      className="text-white text-xl sm:text-2xl font-semibold tracking-wide "
                      style={{ textShadow: "0 2px 4px rgba(0,0,0,0.3)" }}
                    >
                      {item.title}
                    </h3>
                  </div>
                </div>
                <div className="w-full">
                  <button
                    className="w-full bg-red-500 px-4 py-2 rounded-sm text-gray-200 tracking-wide hover:bg-red-600 transition-all duration-300
                  focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50"
                    style={{
                      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    }}
                    onClick={goToTop}
                  >
                    START GAME
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <RummyRulesSection />
    </>
  );
};
