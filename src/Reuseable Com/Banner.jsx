import React from "react";
import "./banner.css";
import { Link } from "react-router-dom";
const Banner = ({ img, heading, button, subheading, cta }) => {
  return (
    <div className="relative max-w-full  max-h-[50vh] md:h-[80vh]">
      <img src={img} alt="Banner" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-red-800/45 via-red/10 to-black/50 flex items-center justify-center flex-col gap-4">
        <h1 className=" italic text-gray-300 text-3xl md:text-6xl font-bold text-center px-4 mb-2">
          {heading}
        </h1>
        <div className="text-center bnnerbtn">
          {button && (
            <Link to={"/download_apk"}>
              <button className="bg-red-500/80 px-6 py-2 text-lg font-[500] text-gray-200 rounded-md uppercase tracking-wide bg-gradient-to-r from-red-500 via-black/10 to-black/30 hover:bg-red-500 ">
                {button}
              </button>
            </Link>
          )}
          {subheading && (
            <p className="mt-1 text-sm text-gray-400">{subheading}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner;
