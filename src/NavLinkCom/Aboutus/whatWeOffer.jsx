import React from "react";
import card1 from "../../assets/GameCard/card1.png";
import card2 from "../../assets/GameCard/card2.png";
import card3 from "../../assets/GameCard/card3.png";
import card4 from "../../assets/GameCard/card4.png";
import { Link } from "react-router-dom";
const WhatWeOffer = () => {
  const Card = [
    {
      img: card1,
      title: "Rummy",
      herf: "/game_rummy",
    },
    {
      img: card2,
      title: "Pool",
      herf: "/game_pool",
    },
    {
      img: card3,
      title: "Poker",
      herf: "/game_poker",
    },
    {
      img: card4,
      title: "More Games",
      herf: "/game_rummy",
    },
  ];
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-[#0b050c] text-white py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-10">
          What We Offer
        </h2>

        {/* Game Cards */}
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {Card.map((item, index) => (
              <div
                key={index}
                className="group p-5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center hover:-translate-y-2"
                style={{
                  background: "linear-gradient(to bottom, #0B050C, #340408)",
                  boxShadow: "0 0 10px #221624",
                  minHeight: "350px",
                  border: "1px solid #2c1a2b",
                }}
              >
                <div className="flex-1 flex flex-col items-center justify-center">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-32 h-32 sm:w-40 sm:h-40 object-contain mb-4 transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="text-center">
                    <h3
                      className="text-white text-xl sm:text-2xl font-semibold tracking-wide mb-1"
                      style={{ textShadow: "0 2px 4px rgba(0,0,0,0.3)" }}
                    >
                      {item.title}
                    </h3>
                    <span className="text-gray-400 text-xs sm:text-sm">
                      18+ Only | Play Responsibly
                    </span>
                  </div>
                </div>
                <Link to={item.herf} className="w-full mt-4">
                  <button
                    className="w-full bg-red-500 px-4 py-2 rounded-sm text-gray-200 tracking-wide hover:bg-red-600 transition-all duration-300
                  focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50"
                    style={{
                      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    }}
                    onClick={goToTop}
                  >
                    START GAME
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Game Descriptions */}
        <div className="space-y-6 text-left text-sm md:text-base">
          <div className="bg-[#110707] border border-gray-700 rounded-md p-6">
            <h3 className="text-lg font-bold mb-2">Rummy Games:</h3>
            <ul className="list-disc list-inside space-y-1 tracking-wide">
              <li className="mb-4 text-[15px] text-gray-300 leading-6 ">
                <strong className="text-gray-50 mr-1">Points Rummy:</strong>{" "}
                Fast-paced format where players compete for points with
                real-cash value. Great for quick matches
              </li>
              <li className="mb-4 text-[15px] text-gray-300 leading-6  ">
                <strong className="text-gray-50 mr-1">Pool Rummy:</strong>{" "}
                Elimination-style play. Stay in the game by keeping your score
                low—perfect for strategy lovers.
              </li>
              <li className="mb-4 text-[15px] text-gray-300 leading-6 ">
                <strong className="text-gray-50 mr-1">Deals Rummy:</strong>{" "}
                Fixed number of deals with preset chips. The player with the
                highest chips at the end wins.
              </li>
            </ul>
          </div>

          <div className="bg-[#110707] border border-gray-700 rounded-md p-6">
            <h3 className="text-lg font-bold mb-2">Pool Games:</h3>
            <p className="text-gray-300">
              Play classic 8-ball pool with predefined stakes. Test your precision and tactics in real-time against real opponents. Perfect for casual players and competitive spirits alike.

            </p>
          </div>

          <div className="bg-[#110707] border border-gray-700 rounded-md p-6">
            <h3 className="text-lg font-bold mb-2">Poker Games:</h3>
            <p className="text-gray-300">
             Join thrilling Poker tables—choose Texas Hold’em or Omaha (PLO). Whether you're bluffing your way through or calling calculated bets, it’s all about skill, timing, and mental grit.

            </p>
          </div>
        </div>

        {/* Bonus Table */}
        <div className="mt-12 overflow-x-auto">
          <h3 className="text-3xl font-semibold mb-4 text-left">
            Security and Fair Play
          </h3>
          <p className="text-gray-300 text-sm mb-6 text-left">
            Our platform is protected with SSL encryption and anti-fraud
            detection. We promote responsible gaming and protect user data and
            funds.
          </p>
          <table className="min-w-full text-sm text-left border border-gray-700">
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className="px-4 py-2 border border-gray-700">
                  Recharge Cash
                </th>
                <th className="px-4 py-2 border border-gray-700">Bonus</th>
                <th className="px-4 py-2 border border-gray-700">Percentage</th>
                <th className="px-4 py-2 border border-gray-700">Coins</th>
              </tr>
            </thead>
            <tbody>
              {[
                [100, 5, "5%", 1000],
                [300, 45, "15%", 3000],
                [500, 100, "20%", 5000],
                [1000, 300, "30%", 10000],
                [2000, 500, "30%", 15000],
                [5000, 1500, "30%", 30000],
                [10000, 3500, "35%", 50000],
                [20000, 8000, "40%", 100000],
              ].map(([cash, bonus, percent, coins], idx) => (
                <tr key={idx} className="text-gray-300">
                  <td className="px-4 py-2 border border-gray-700">{cash}</td>
                  <td className="px-4 py-2 border border-gray-700">{bonus}</td>
                  <td className="px-4 py-2 border border-gray-700">
                    {percent}
                  </td>
                  <td className="px-4 py-2 border border-gray-700">{coins}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
