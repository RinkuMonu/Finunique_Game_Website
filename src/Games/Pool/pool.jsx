import React, { useContext } from "react";
import Banner from "../../Reuseable Com/Banner";
import bannerimg from "../../assets/pool/p1.png";
import poolCard from "../../assets/pool/poolcard.png";
import PoolRulesSection from "./poolRule";
import { Link } from "react-router-dom";
import { ContextData } from "../../Service/context";
import SEO from "../../Reuseable Com/SeoHelment";

export const PoolGame = () => {
    const { seo } = useContext(ContextData);
  
  const Card = [
    {
      img: poolCard,
      title: "8-Ball Pool ",
      herf:"/pool_eight_game"
    },
    {
      img: poolCard,
      title: "9-Ball Pool",
      herf:"/pool_nine_game"
    },
    {
      img: poolCard,
      title: "Straight Pool",
      herf:"/pool_straight_game"
    },
  ];
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
        img={bannerimg}
        heading="Pool"
        button="play now"
        subheading="18+ Only | Play Responsibly"
      />
      <div className="bg-[#0B050C] text-white px-4 md:px-10 py-16">
        {/* Introduction */}
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            What is Pool?
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Pool is a classic cue sport played on a rectangular table with six
            pockets, cue sticks, and colored balls. Popular worldwide, Pool
            combines precision, patience, and tactical play. Whether it's casual
            8-ball with friends or a competitive 9-ball tournament, the
            objective is to legally pocket specific balls before your opponent
            does.
          </p>
        </div>

        {/* Info Cards */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 px-2">
          <div className="border border-gray-700 bg-[#151015] p-6 rounded-lg shadow">
            <h3 className="font-semibold text-white mb-3">
              Skill Required to master Pool
            </h3>
            <p className="text-gray-400 text-sm">
              Mastering Pool requires more than just aiming at the right ball.
              Players must develop.
              <br /> Strategic shot selection Cue ball control Table awareness
              Positional play and safety shots Mental focus under pressure
              Experienced players use physics, angles, and spin to control
              outcomes and plan several shots in advance. Winning Strategies for
              Pool <br />
              Experienced players use physics, angles, and spin to control
              outcomes and plan several shots in advance.
            </p>
          </div>
          <div className="border border-gray-700 bg-[#151015] p-6 rounded-lg shadow">
            <h3 className="font-semibold text-white mb-3">
              Winning Strategies for Pool
            </h3>
            <p className="text-gray-400 text-sm">
              To consistently win at Pool, consider the following strategies{" "}
              <br />
              Break smartly: A strong, well-controlled break can determine the
              flow of the game. Plan your runs: Map out your next few shots,
              ensuring cue ball position for each. Master safety: If you can’t
              make a shot, leave your opponent in a tough spot. Know the rules:
              Different formats have different fouls and win conditions —
              precision and awareness matter.
            </p>
          </div>
        </div>

        {/* Game Types */}
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Popular variations of Pool
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-4 md:px-0">
            {Card.map((item, index) => (
              <Link to={item.herf}
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
                <div className="w-full mb-2 my-3">
                  <button
                    className="w-full bg-red-500 px-4 py-2 rounded-sm text-gray-200 tracking-wide hover:bg-red-600 transition-all duration-300
                  focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50"
                    style={{
                      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    START GAME
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <PoolRulesSection />
    </>
  );
};
