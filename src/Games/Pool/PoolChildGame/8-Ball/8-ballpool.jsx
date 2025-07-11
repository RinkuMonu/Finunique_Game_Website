import React from "react";
import Banner from "../../../../Reuseable Com/Banner";
import pointrummy from "../../../../assets/deals-rummy/deal.png"
import EightBallRuleRulesSection from "./8-BallRuleRulesSection";



export const EightBallPool = () => {
  return (
    <>
      <Banner
        img={pointrummy}
        heading="8-Ball Pool"
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
          8-Ball Pool is one of the most popular cue sports worldwide, known for its balance of precision, strategy, and real-time thrill. Played with 15 object balls and a cue ball, the game pits two players against each other in a race to legally pot all their designated balls—stripes or solids—and finally the 8-ball. With easy-to-understand rules and deep tactical gameplay, 8-Ball Pool is perfect for casual players and competitive gamers alike.


          </p>
        </div>

        {/* Info Cards */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 px-2">
          <div className="border border-gray-700 bg-[#151015] p-6 rounded-lg shadow">
            <h3 className="font-semibold text-white mb-3">
             The History and Evolution of Pool
            </h3>
            <p className="text-gray-400 text-sm">
           8-Ball Pool traces its roots back to the early 1900s in the United States and evolved from earlier cue games like Pyramid Pool and Snooker. Over the decades, the game became a global phenomenon, played both recreationally and professionally in clubs, homes, and now online. With digital platforms enabling real-money competitions, 8-Ball Pool has become a favorite among skill gamers looking for both fun and profit.

            </p>
          </div>
          <div className="border border-gray-700 bg-[#151015] p-6 rounded-lg shadow">
            <h3 className="font-semibold text-white mb-3">
              Why 8-Ball Pool is a Game of Skill
            </h3>
            <p className="text-gray-400 text-sm">
           8-Ball Pool is not just about hitting balls—it’s about strategy, positioning, control, and foresight. Every shot involves calculating angles, predicting outcomes, and managing the cue ball for the next play. Consistent success requires focus, muscle memory, and game sense. These skill-based elements make it one of the most respected and competitive games in the world of online real-money gaming.

            </p>
          </div>
        </div>
      </div>
      <EightBallRuleRulesSection />
    </>
  );
};
