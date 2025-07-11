import React from "react";
import Banner from "../../../../Reuseable Com/Banner";
import pointrummy from "../../../../assets/points-rummy/point1.png";
import PointRummyRulesSection from "./rummypointrule";

export const RummyPointGame = () => {
  return (
    <>
      <Banner
        img={pointrummy}
        heading="points Rummy"
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
            Points Rummy is a fast-paced and exciting version of the classic
            13-card Rummy game. Each game lasts just one round, making it ideal
            for players who enjoy quick and competitive gameplay. Points have a
            fixed monetary value, and players aim to make the best hand possible
            to win the round.
          </p>
        </div>

        {/* Info Cards */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 px-2">
          <div className="border border-gray-700 bg-[#151015] p-6 rounded-lg shadow">
            <h3 className="font-semibold text-white mb-3">
              The History and Evolution of Rummy
            </h3>
            <p className="text-gray-400 text-sm">
             Rummy is one of the oldest card games, believed to have originated from a mix of traditional matching card games. Over time, it has evolved into various formats across different cultures. Points Rummy is one of the most popular modern adaptations, offering a perfect blend of skill, logic, and entertainment.

            </p>
          </div>
          <div className="border border-gray-700 bg-[#151015] p-6 rounded-lg shadow">
            <h3 className="font-semibold text-white mb-3">
              Why Rummy is a Game of Skill?
            </h3>
            <p className="text-gray-400 text-sm">
            Unlike pure games of chance, Rummy demands mental calculation, memory, strategy, and decision-making. Players must plan their moves, analyze the table, and calculate outcomes to stay ahead. The consistent application of skill is what makes Rummy a recognized skill-based game in many jurisdictions.

            </p>
          </div>
        </div>
      </div>
      <PointRummyRulesSection />
    </>
  );
};
