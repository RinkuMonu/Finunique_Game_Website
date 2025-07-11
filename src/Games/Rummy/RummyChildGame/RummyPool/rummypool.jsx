import React from "react";
import Banner from "../../../../Reuseable Com/Banner";
import pointrummy from "../../../../assets/pool-rummy/plr.png"
import PoolRummyRulesSection from "./rummypoolrule";



export const RummyPoolGame = () => {
  return (
    <>
      <Banner
        img={pointrummy}
        heading="Pool Rummy"
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
          Pool Rummy is a popular variation of the classic 13-card Indian Rummy, designed for players who enjoy longer, strategic gameplay. Unlike Points Rummy, Pool Rummy is played over multiple rounds until a player reaches the maximum point limit and gets eliminated. The last player remaining in the pool wins the game.

          </p>
        </div>

        {/* Info Cards */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 px-2">
          <div className="border border-gray-700 bg-[#151015] p-6 rounded-lg shadow">
            <h3 className="font-semibold text-white mb-3">
              The History and Evolution of Rummy
            </h3>
            <p className="text-gray-400 text-sm">
            Rummy has been played for generations in various forms. Its origin can be traced to traditional card-matching games that emphasize skill and strategy. Over the years, Rummy has evolved into different formats — with Pool Rummy emerging as a favorite due to its longer duration and competitive nature.

            </p>
          </div>
          <div className="border border-gray-700 bg-[#151015] p-6 rounded-lg shadow">
            <h3 className="font-semibold text-white mb-3">
              Why Rummy is a Game of Skill?
            </h3>
            <p className="text-gray-400 text-sm">
            Rummy is legally classified as a game of skill in many countries. Players must make thoughtful decisions, track discarded cards, use jokers wisely, and adapt strategies in real-time. The outcome is determined by mental sharpness and planning — not chance.

            </p>
          </div>
        </div>
      </div>
      <PoolRummyRulesSection/>
    </>
  );
};
