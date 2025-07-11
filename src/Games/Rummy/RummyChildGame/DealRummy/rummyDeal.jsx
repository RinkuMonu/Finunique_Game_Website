import React from "react";
import Banner from "../../../../Reuseable Com/Banner";
import pointrummy from "../../../../assets/deals-rummy/deal.png"
import DealRummyRulesSection from "./rummyDealRule";



export const RummyDealGame = () => {
  return (
    <>
      <Banner
        img={pointrummy}
        heading="Deal Rummy"
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
           Deal Rummy is a thrilling variation of the classic Rummy game, where a fixed number of deals are played, and each player is given a pre-decided number of chips at the beginning. At the end of all the deals, the player with the highest number of chips wins. It’s a fast-paced, chip-based version that adds a competitive edge to the traditional gameplay.

          </p>
        </div>

        {/* Info Cards */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 px-2">
          <div className="border border-gray-700 bg-[#151015] p-6 rounded-lg shadow">
            <h3 className="font-semibold text-white mb-3">
              The History and Evolution of Rummy
            </h3>
            <p className="text-gray-400 text-sm">
             Rummy is a game rooted in history, originating from traditional matching games played across continents. With time, Rummy has evolved into multiple formats — from casual play to competitive formats like Deal Rummy. Its consistent popularity is a testament to its engaging mix of skill and strategy.

            </p>
          </div>
          <div className="border border-gray-700 bg-[#151015] p-6 rounded-lg shadow">
            <h3 className="font-semibold text-white mb-3">
              Why Rummy is a Game of Skill?
            </h3>
            <p className="text-gray-400 text-sm">
            Deal Rummy, like all Rummy variants, requires players to use logical thinking, memory, and strategy. Each move can impact the outcome of the game. Choosing when to pick, drop, declare, or even bluff plays a crucial role. It’s not about luck — it’s about making the smartest choices.

            </p>
          </div>
        </div>
      </div>
      <DealRummyRulesSection />
    </>
  );
};
