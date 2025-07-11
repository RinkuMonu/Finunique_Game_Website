import React from "react";
import Banner from "../../../../Reuseable Com/Banner";
import pointrummy from "../../../../assets/deals-rummy/deal.png";
import NineBallRuleRulesSection from "./9-BallRuleRulesSection";

export const NineBallPool = () => {
  return (
    <>
      <Banner
        img={pointrummy}
        heading="9-Ball Pool"
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
            9-Ball Pool is a fast-paced, professional-style cue sport that’s
            perfect for competitive and skilled players. Played with balls
            numbered 1 through 9 and a cue ball, the game is all about
            precision, planning, and tactical play. Players must hit the
            lowest-numbered ball on the table first, with the goal of legally
            potting the 9-ball to win. With its quick format and focus on
            strategy, 9-Ball Pool is a favorite among cue sports enthusiasts
            worldwide.
          </p>
        </div>

        {/* Info Cards */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 px-2">
          <div className="border border-gray-700 bg-[#151015] p-6 rounded-lg shadow">
            <h3 className="font-semibold text-white mb-3">
              The History and Evolution of 9-Ball Pool
            </h3>
            <p className="text-gray-400 text-sm">
              9-Ball originated in the United States in the 1920s and quickly
              rose to prominence due to its dynamic gameplay and suitability for
              televised matches. It is now recognized as the official format in
              many professional pool tournaments globally. Unlike traditional
              pool games, 9-Ball’s sequence-based play emphasizes both offensive
              and defensive strategies, making it ideal for competitive gaming
              platforms
            </p>
          </div>
          <div className="border border-gray-700 bg-[#151015] p-6 rounded-lg shadow">
            <h3 className="font-semibold text-white mb-3">
              Why 9-Ball Pool is a Game of Skill
            </h3>
            <p className="text-gray-400 text-sm">
              In 9-Ball, every shot matters. Success depends on reading the
              table, calculating angles, planning shot sequences, and
              maintaining control of the cue ball. Players need strong judgment
              and quick decision-making skills, as one mistake can shift the
              momentum. This complexity makes 9-Ball Pool a true test of
              skill—and a rewarding challenge for serious gamers.
            </p>
          </div>
        </div>
      </div>
      <NineBallRuleRulesSection />
    </>
  );
};
