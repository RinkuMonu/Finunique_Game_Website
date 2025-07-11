import { Download } from "lucide-react";
import React from "react";
import { useContext } from "react";
import { ContextData } from "../Service/context";

export const DownloadCTA = () => {
  const { downLoadApk } = useContext(ContextData);
  return (
    <>
      <section className="text-center ">
        {/* <section className="text-center bg-gradient-to-r from-red-500/10 to-gold-500/10"> */}
        <div className="card-gaming p-12 ">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Winning?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Join over 10 lakh players who are already winning real money daily.
            Download now and get your ₹50 bonus!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center font-medium tracking-wider">
            <a
              href="https://www.indusappstore.com/apps/strategy/finunique/com.digitalcrew.finunique?page=details&id=com.digitalcrew.finunique"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-8 py-4 hover:outline-1 outline-gray-100 rounded-md bg-[#ff1028]"
            >
              <Download className="inline-block h-6 w-6 mr-2" />
              Download from Indus App Store
            </a>
            <button
              className="btn-secondary text-lg px-8 py-4 bg-blue-400 hover:outline-1 outline-gray-100 rounded-md"
              onClick={downLoadApk}
            >
              <Download className="inline-block h-6 w-6 mr-2" />
              Download APK
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
