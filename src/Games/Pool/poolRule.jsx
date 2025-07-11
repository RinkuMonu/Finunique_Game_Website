import React from "react";
import {
  FaListAlt,
  FaFlagCheckered,
  FaTasks,
  FaPlayCircle,
  FaBullseye,
} from "react-icons/fa";
import poolCardsImg from "../../assets/pool/poolcard.png";
import { FaArrowRight } from "react-icons/fa6";
import TotalGame from "../../HomeComponets/TotalGame/totalgame";
import { Link } from "react-router-dom";

const rules = [
  {
    title: "The Break",
    desc: "Each player is dealt 13 cards. The remaining cards form the closed deck, with one card placed face-up to start the open deck. The dealer is chosen randomly at the beginning.",
    icon: <FaTasks />,
    step: "Step 1.",
  },
  {
    title: "Game Objective",
    desc: "Depending on the variation (e.g., 8-ball or 9-ball), the player must legally pot all required balls in sequence or category to win the game.",
    icon: <FaBullseye />,
    step: "Step 2.",
  },
  {
    title: "Taking Turns",
    desc: "Players alternate turns, attempting to pot a ball legally. Failing to do so gives the turn to the opponent. Fouls may result in ball-in-hand for the opposing player.",
    icon: <FaPlayCircle />,
    step: "Step 3.",
  },
  {
    title: "Winning the Game",
    desc: "Declare your hand by placing all cards in valid sequences/sets with one discard. First valid declaration wins. Points are calculated based on opponents’ ungrouped cards.",
    icon: <FaFlagCheckered />,
    step: "Step 4.",
  },
];

const PoolRulesSection = () => {
  return (
    <>
      <section className="relative bg-[#0B050C] text-white px-4 md:px-10 py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-red-400">
            Pool Game Rules
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Rules */}
            <div className="space-y-6">
              {rules.map((rule, index) => (
                <div
                  key={index}
                  className="group p-6 bg-[#1e1e1e] rounded-xl border-l-4 border-[#5e0d0d] hover:border-[#ff6b6b] transition-all duration-300 hover:shadow-lg hover:shadow-[#5e0d0d]/20"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-[#5e0d0d] p-3 rounded-lg group-hover:bg-[#ff6b6b] transition-colors">
                      {React.cloneElement(rule.icon, {
                        className: "text-white text-xl",
                      })}
                    </div>
                    <div>
                      <h3 className="font-bold text-[25px] md:text-[16px] mb-3 flex items-center gap-2 text-gray-200">
                        <span className="text-[#5e0d0d] group-hover:text-[#ff6b6b] transition-colors">
                          {rule.step}
                        </span>
                        {rule.title}
                      </h3>
                      <p className="text-gray-300 text-[15px] leading-relaxed">
                        {rule.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Image */}
            <div className="flex justify-center md:justify-end">
              <img
                src={poolCardsImg}
                alt="Pool Card Stack"
                className="w-full max-w-md object-contain opacity-90"
              />
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-start mt-10">
            <Link to={"/download_apk"}>
              <button className="mt-6 flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#5e0d0d] to-[#ff6b6b] text-white rounded-lg font-medium hover:shadow-lg hover:shadow-[#5e0d0d]/50 transition-all duration-300 mx-auto lg:mx-0">
                Play Now <FaArrowRight />
              </button>
            </Link>
          </div>
        </div>
      </section>
      <TotalGame />
    </>
  );
};

export default PoolRulesSection;
