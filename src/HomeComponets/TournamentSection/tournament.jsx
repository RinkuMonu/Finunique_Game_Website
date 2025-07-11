import React, { useContext } from "react";
import { FaGift } from "react-icons/fa6";
import { RiCoupon3Fill } from "react-icons/ri";
import bounas from "../../assets/home/bounas.png";
import coupan from "../../assets/home/coupan.png";
import { Link } from "react-router-dom";
import { ContextData } from "../../Service/context";

export default function TournamentsSection() {
  const { token } = useContext(ContextData);
  return (
    <div className="bg-gradient-to-r from-black via-[#1b0d13] to-black text-white py-10 px-4 md:px-16">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-6">
        <div className=" text-center">
          {/* Left: Title */}
          <div className="md:col-span-1 space-y-5">
            <h2 className="text-3xl font-semibold">Tournaments</h2>
            <p className="text-sm text-gray-300 mb-3">Rewards Bonuses</p>
          </div>

          {/* Middle: Bonuses */}
          <div className="flex gap-4 justify-center flex-wrap md:col-span-1 ">
            <div className="border border-gray-600 rounded-lg p-4 w-40 text-center hover:shadow-lg transition">
              <div>
                <img src={bounas} alt="bonus" />
              </div>
              <h3 className="font-medium">
                Welcome
                <br />
                Bonus
              </h3>
            </div>
            <div className="border border-gray-600 rounded-lg p-4 w-40 text-center hover:shadow-lg transition">
              <div>
                <img src={coupan} alt="coupan" />
              </div>
              <h3 className="font-medium">
                Referral
                <br />
                Program
              </h3>
            </div>
          </div>
        </div>
        {/* Right: Upcoming Matches */}
        <div
          className="border border-gray-600 rounded-lg p-4 space-y-4 md:col-span-1 flex flex-col justify-between "
          style={{
            maxWidth: "450px",
          }}
        >
          <div>
            <h3 className="text-2xl font-semibold">Upcoming Matches</h3>
            <p className="text-sm text-gray-400 py-4">Upcoming Tournaments</p>
            <div className="flex justify-between mt-3 text-white">
              <span className="text-md">April 30, 5.00 PM</span>
              <div className="text-right">
                <p className="text-2xl font-bold tracking-widest">₹ 500</p>
                <span className="text-xs text-gray-300">Entry Fee</span>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-4 text-center flex justify-between items-center">
            <p className="text-sm text-gray-400 mb-2">Entry Fees</p>
            <Link
              to={token ? "/game_rummy" : "/login"}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              {token ? "JOIN NOW" : "REGISTER"}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
