import React from "react";
import pointrummy from "../../../assets/poker/pokerbanner.png";

import Banner from "../../../Reuseable Com/Banner";
import TexasRule from "./texasRule";

export const Texas = () => {
  return (
    <>
      <Banner
        img={pointrummy}
        heading="Texas Hold’em"
        button="play now"
        subheading="18+ Only | Play Responsibly"
      />
      <div className="bg-[#0B050C] text-white px-4 md:px-10 py-16">
        {/* Introduction */}
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            What is Texas Hold’em?
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Texas Hold’em is the most popular variant of poker played
            worldwide—from online platforms to global tournaments. Each player
            receives two private hole cards, and five community cards are dealt
            face-up on the table. The goal is to make the best five-card hand
            using any combination of your hole cards and the community cards.
            Its perfect blend of strategy, skill, and psychology makes it the
            gold standard of poker.
          </p>
        </div>

        {/* Info Cards */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 px-2">
          <div className="border border-gray-700 bg-[#151015] p-6 rounded-lg shadow">
            <h3 className="font-semibold text-white mb-3">
              Skill Required to Master Texas Hold’em
            </h3>
            <p className="text-gray-400 text-sm">
              Winning at Texas Hold’em isn’t just about the cards you hold. It’s
              about reading opponents, calculating odds, knowing when to fold or
              go all-in, and managing your chip stack. Success depends on
              critical thinking, emotional control, and long-term strategy
              rather than short-term luck.
            </p>
          </div>
          <div className="border border-gray-700 bg-[#151015] p-6 rounded-lg shadow">
            <h3 className="font-semibold text-white mb-3">
              Winning Strategies for Texas Hold’em
            </h3>
            <p className="text-gray-400 text-sm">
              Play selectively: Don’t chase every hand. Focus on starting hand
              strength.
              <br />
              Position matters: Act later in the betting round to gain more
              information.
              <br />
              Bluff wisely: A well-timed bluff can win big pots, but overuse can
              be costly.
              <br />
              Read opponents: Pay attention to betting patterns, timing, and
              behavior.
              <br />
              Bankroll discipline: Stick to limits you can afford and play the
              long game.
            </p>
          </div>
        </div>
      </div>
      <TexasRule />
    </>
  );
};
