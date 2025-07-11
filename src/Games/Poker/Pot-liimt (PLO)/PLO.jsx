import React from "react";
import pointrummy from "../../../assets/poker/pokerbanner.png";

import Banner from "../../../Reuseable Com/Banner";
import PLOrule from "./PLORule";

export const PLOpokar = () => {
  return (
    <>
      <Banner
        img={pointrummy}
        heading="Pot-Limit Omaha (PLO)"
        button="play now"
        subheading="18+ Only | Play Responsibly"
      />
      <div className="bg-[#0B050C] text-white px-4 md:px-10 py-16">
        {/* Introduction */}
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            What is Pot-Limit Omaha (PLO)?
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Pot-Limit Omaha, often called PLO, is a popular and action-packed
            variant of poker known for bigger pots and deeper strategy. Unlike
            Texas Hold’em, each player is dealt four hole cards, but must use
            exactly two of them in combination with three community cards to
            form the best five-card hand. The betting structure is Pot-Limit,
            meaning players can only bet up to the size of the current pot.
          </p>
        </div>

        {/* Info Cards */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 px-2">
          <div className="border border-gray-700 bg-[#151015] p-6 rounded-lg shadow">
            <h3 className="font-semibold text-white mb-3">
              Skill Required to Master PLO
            </h3>
            <p className="text-gray-400 text-sm">
              PLO is a game of sharp mathematics, precise hand selection, and
              positional awareness. With more cards comes more complexity, and
              strong players learn to evaluate draws, protect big hands, and
              recognize disguised outs. The margin for error is thinner,
              demanding both patience and aggression.
            </p>
          </div>
          <div className="border border-gray-700 bg-[#151015] p-6 rounded-lg shadow">
            <h3 className="font-semibold text-white mb-3">
              Winning Strategies for Pot-Limit
            </h3>
            <p className="text-gray-400 text-sm">
              Stick to strong starting hands: Prefer double-suited and connected
              cards.
              <br />
              Think beyond top pair: Look for hands that can make straights,
              flushes, or full houses.
              <br />
              Play tighter out of position: Acting early limits your information
              and edge.
              <br />
              Understand pot odds and equity: Accurate calculations help in
              making profitable calls.
              <br />
              Don’t overvalue weak hands: Top pair hands rarely hold up in PLO.
            </p>
          </div>
        </div>
      </div>
      <PLOrule />
    </>
  );
};
