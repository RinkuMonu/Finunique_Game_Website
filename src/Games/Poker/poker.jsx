import React, { useContext } from "react";
import Banner from "../../Reuseable Com/Banner";
import bannerimg from "../../assets/poker/pokerbanner.png";
import pokerCard from "../../assets/poker/pokerCard.png";
import PokerRuleSection from "./pokerRule";
import { Link } from "react-router-dom";
import { ContextData } from "../../Service/context";
import SEO from "../../Reuseable Com/SeoHelment";

export const PokerGame = () => {
  const { seo } = useContext(ContextData);
  const Card = [
    {
      img: pokerCard,
      title: "Texas Hold'em ",
      herf: "/pokar_texas_game",
    },
    {
      img: pokerCard,
      title: "Pot-limmt",
      herf: "/pokar_pot_game",
    },
    {
      img: pokerCard,
      title: "Pot-liimt (PLO)",
      herf: "/pokar_plo_game",
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
        heading="Poker"
        button="play now"
        subheading="18+ Only | Play Responsibly"
      />
      <div className="bg-[#0B050C] text-white px-4 md:px-10 pt-16 pb-2">
        {/* Introduction */}
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            What is Poker?
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Poker is a globally popular card game that blends psychology,
            probability, and strategy. Players place bets based on the strength
            of their hand, aiming to either have the best five-card combination
            or bluff their way to victory. With various betting rounds, dynamic
            gameplay, and endless strategy, poker offers a high-stakes thrill
            whether you’re a beginner or a seasoned pro.
          </p>
        </div>

        {/* Info Cards */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 px-2">
          <div className="border border-gray-700 bg-[#151015] p-6 rounded-lg shadow">
            <h3 className="font-semibold text-white mb-3">
              How to play poker?
            </h3>
            <p className="text-gray-400 text-sm">
              Poker games follow a general flow, especially in popular formats
              like Texas Hold’em or Pot-Limit Omaha (PLO): <br /> 1. The Deal
              Each player receives a set of hole cards (private cards).
              Community cards are dealt face-up in the center of the table
              across several betting rounds.
              <br /> 2. The Betting Rounds Players place bets in four rounds:
              pre-flop, flop, turn, and river. You can fold, call, raise, or
              check depending on your hand and strategy.
              <br /> 3. The Showdown After the final betting round, if more than
              one player remains, all active players reveal their hands. The
              player with the best hand (based on poker hand rankings) wins the
              pot.
            </p>
          </div>
          <div className="border border-gray-700 bg-[#151015] p-6 rounded-lg shadow">
            <h3 className="font-semibold text-white mb-3">
              Why Poker is a Game of Skill ?
            </h3>
            <p className="text-gray-400 text-sm">
              Contrary to popular belief, poker is not purely about luck.
              Successful players rely on a combination of-
              <br />
              Mathematical calculations (pot odds, hand probabilities)
              <br />
              Game theory strategy
              <br />
              Reading opponents’ behavior
              <br />
              Emotional control and discipline
              <br />
              In the long run, consistent winners are those who study, adapt,
              and execute advanced strategies — making poker a recognized game
              of skill.
            </p>
          </div>
        </div>

        {/* Game Types */}
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Popular variations of Poker
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-4 md:px-0">
            {Card.map((item, index) => (
              <div
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
                <Link to={item.herf} className="w-full mb-2 my-4">
                  <button
                    className="w-full bg-red-500 px-4 py-2 rounded-sm text-gray-200 tracking-wide hover:bg-red-600 transition-all duration-300
                  focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50"
                    style={{
                      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    START GAME
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <PokerRuleSection />
    </>
  );
};
