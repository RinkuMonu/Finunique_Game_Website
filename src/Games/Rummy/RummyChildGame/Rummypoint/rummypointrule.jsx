import React from "react";
import rummySideImg from "../../../../assets/rummy/rummy.png";
import "../../MainRummy/rummy.css";
import {
  FaArrowRight,
  FaChess,
  FaTrophy,
  FaListAlt,
  FaPlayCircle,
} from "react-icons/fa";
import TotalGame from "../../../../HomeComponets/TotalGame/totalgame";
import { Link } from "react-router-dom";

const PointRummyRulesSection = () => {
  return (
    <>
      <section className="bg-gradient-to-b from-[#0B050C] to-[#1a0a1a] text-white px-4 sm:px-6 py-12 md:py-20 overflow-hidden relative">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 opacity-10">
          <FaChess className="text-[#5e0d0d] text-4xl rotate-12" />
        </div>
        <div className="absolute bottom-20 right-10 opacity-10">
          <FaTrophy className="text-[#5e0d0d] text-4xl -rotate-12" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b6b] to-[#5e0d0d]">
              How to play Point Rummy Game ?
            </span>
          </h2>

          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Rules Steps */}
            <div className="w-full lg:w-1/1 space-y-5">
              <div className="group p-6 bg-[#1e1e1e] rounded-xl border-l-4 border-[#5e0d0d] hover:border-[#ff6b6b] transition-all duration-300 hover:shadow-lg hover:shadow-[#5e0d0d]/20">
                <div className="flex items-start gap-4">
                  <div className="bg-[#5e0d0d] p-3 rounded-lg group-hover:bg-[#ff6b6b] transition-colors">
                    <FaListAlt className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-md md:text-sm mb-3 flex items-center gap-2">
                      <span className="text-[#5e0d0d] group-hover:text-[#ff6b6b] transition-colors">
                        Step 1.
                      </span>
                      Card Distribution
                    </h3>
                    <p className="text-gray-300 text-[14px] leading-relaxed">
                      Each player is dealt 13 cards from a standard deck. One
                      card is placed face-up to start the open deck, and the
                      rest form the closed deck. The dealer is chosen randomly
                      at the start.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group p-6 bg-[#1e1e1e] rounded-xl border-l-4 border-[#5e0d0d] hover:border-[#ff6b6b] transition-all duration-300 hover:shadow-lg hover:shadow-[#5e0d0d]/20">
                <div className="flex items-start gap-4">
                  <div className="bg-[#5e0d0d] p-3 rounded-lg group-hover:bg-[#ff6b6b] transition-colors">
                    <FaChess className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-md md:text-sm mb-3 flex items-center gap-2">
                      <span className="text-[#5e0d0d] group-hover:text-[#ff6b6b] transition-colors">
                        Step 2.
                      </span>
                      Game Objective
                    </h3>
                    <p className="text-gray-300 text-[14px] leading-relaxed">
                      The aim is to arrange all 13 cards into valid combinations
                      — sequences or sets. A valid declaration must include at
                      least two sequences, and one of them must be a pure
                      sequence (formed without using a joker).
                    </p>
                  </div>
                </div>
              </div>

              <div className="group p-6 bg-[#1e1e1e] rounded-xl border-l-4 border-[#5e0d0d] hover:border-[#ff6b6b] transition-all duration-300 hover:shadow-lg hover:shadow-[#5e0d0d]/20">
                <div className="flex items-start gap-4">
                  <div className="bg-[#5e0d0d] p-3 rounded-lg group-hover:bg-[#ff6b6b] transition-colors">
                    <FaPlayCircle className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-md md:text-sm mb-3 flex items-center gap-2">
                      <span className="text-[#5e0d0d] group-hover:text-[#ff6b6b] transition-colors">
                        Step 3.
                      </span>
                      Gameplay Mechanics
                    </h3>
                    <p className="text-gray-300 text-[14px] leading-relaxed">
                      Players take turns drawing a card from either the open or
                      closed deck and discarding one card to the open pile.
                      Jokers can be used as substitutes to form sets and impure
                      sequences. Strategic use of opponents’ discarded cards can
                      give you a winning edge.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group p-6 bg-[#1e1e1e] rounded-xl border-l-4 border-[#5e0d0d] hover:border-[#ff6b6b] transition-all duration-300 hover:shadow-lg hover:shadow-[#5e0d0d]/20">
                <div className="flex items-start gap-4">
                  <div className="bg-[#5e0d0d] p-3 rounded-lg group-hover:bg-[#ff6b6b] transition-colors">
                    <FaTrophy className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-md md:text-sm mb-3 flex items-center gap-2">
                      <span className="text-[#5e0d0d] group-hover:text-[#ff6b6b] transition-colors">
                        Step 4.
                      </span>
                      Declaring and Winning
                    </h3>
                    <p className="text-gray-300 text-[14px] leading-relaxed">
                      When a player forms valid combinations, they discard one
                      card and declare. If the declaration is valid, they win
                      the round. Points are calculated based on the unmatched
                      cards of the losing players. The fewer the points, the
                      better your chances of long-term success.
                    </p>
                  </div>
                </div>
              </div>
              <Link to={"/download_apk"}>
                <button className="mt-6 flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#5e0d0d] to-[#ff6b6b] text-white rounded-lg font-medium hover:shadow-lg hover:shadow-[#5e0d0d]/50 transition-all duration-300 mx-auto lg:mx-0">
                  Play Now <FaArrowRight />
                </button>
              </Link>
            </div>

            {/* Image on Right Side */}
            <div className="hidden lg:block w-full lg:w-1/2 relative ruleSectionimg ">
              <div className="relative w-full h-full min-h-[500px]">
                <img
                  src={rummySideImg}
                  alt="Rummy Cards"
                  className="absolute w-full h-full object-contain animate-float left-40"
                />
                <div className="absolute inset-0 bg-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TotalGame />
    </>
  );
};

export default PointRummyRulesSection;
