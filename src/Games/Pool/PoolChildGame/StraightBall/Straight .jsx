import React from "react";
import pointrummy from "../../../../assets/deals-rummy/deal.png";
import StraightBallRuleRulesSection from "./StraightBallRulesSection";
import Banner from "../../../../Reuseable Com/Banner";

export const StraightBallPool = () => {
  return (
    <>
      <Banner
        img={pointrummy}
        heading="Straight Pool"
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
            Straight Pool, also known as 14.1 Continuous, is a classic cue sport
            loved for its strategy, precision, and scoring potential. Unlike
            8-ball or 9-ball, players can pocket any ball on the table, with
            each successful shot earning one point. The goal is to reach a
            predetermined score—typically 100 or 150—before your opponent. It's
            a game of endurance, focus, and consistent accuracy, ideal for
            players who enjoy tactical depth and long runs.
          </p>
        </div>

        {/* Info Cards */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 px-2">
          <div className="border border-gray-700 bg-[#151015] p-6 rounded-lg shadow">
            <h3 className="font-semibold text-white mb-3">
              Skill Required to Master Straight Pool
            </h3>
            <p className="text-gray-400 text-sm">
              Straight Pool demands a high level of cue control, shot planning,
              and patience. To excel, players must develop: Positional
              Awareness: Carefully manage cue ball placement for the next shot.
              Pattern Recognition: Identify the best sequence to clear the rack
              efficiently. Break Shot Technique: Master the end-of-rack break to
              keep your run going. Mental Stamina: Stay focused across long,
              uninterrupted turns. Precision Shooting: Minimize errors to
              maintain control and momentum. This format rewards disciplined,
              thoughtful players who thrive under pressure.
            </p>
          </div>
          <div className="border border-gray-700 bg-[#151015] p-6 rounded-lg shadow">
            <h3 className="font-semibold text-white mb-3">
              Winning Strategies for Straight Pool
            </h3>
            <p className="text-gray-400 text-sm">
              Success in Straight Pool is about more than just potting
              balls—it's about maintaining a run: Plan 3–5 Shots Ahead: Think
              beyond the current ball to keep position. Master the Break Shot: A
              controlled break of the racked balls after 14 are cleared is
              critical. Minimize Risks: Don’t go for low-percentage shots unless
              absolutely necessary. Keep the Cue Ball in the Center Table:
              Offers more positional options for the next shot. Practice
              Defensive Play: When runs aren't possible, leave tough positions
              for your opponent. The game is won by outthinking and
              outmaneuvering, not just outshooting.
            </p>
          </div>
        </div>
      </div>
      <StraightBallRuleRulesSection />
    </>
  );
};
