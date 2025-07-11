import React from "react";
import { FaBullseye } from "react-icons/fa";
import { FaFlagCheckered } from "react-icons/fa6";

const IntroductionSection = () => {
  return (
    <section className="bg-[#0b050c] text-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          Introduction
        </h2>
        <p className="text-gray-300 mb-12">
          At Finunique Small Private Limited, we’re redefining the online
          skill-gaming experience. Whether you're a seasoned player or just
          getting started, our platform offers secure, fair, and thrilling
          gameplay across a variety of games like Rummy, Poker, and Pool. With
          24/7 accessibility and an engaging user interface, we give every
          player a chance to level up.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Vision Card */}
          <div className="border border-gray-700 p-6 rounded-md shadow-md text-left">
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
              Our Vision <FaBullseye className="text-pink-500" />
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              To become India’s most trusted and dynamic platform for
              skill-based real-money gaming, where every player experiences fair
              play, community, and constant evolution.
            </p>
          </div>

          {/* Mission Card */}
          <div className="border border-gray-700 p-6 rounded-md shadow-md text-left">
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
              Our Mission <FaFlagCheckered className="text-blue-500" />
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              We aim to provide a responsible and rewarding gaming ecosystem
              powered by cutting-edge technology, top-tier security, and a deep
              respect for user experience. Our mission is to nurture a gaming
              culture that promotes skill-building, entertainment, and
              transparency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
