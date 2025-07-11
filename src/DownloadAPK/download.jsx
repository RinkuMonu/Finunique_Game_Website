import React, { useContext, useEffect, useState } from "react";
import {
  Download,
  Smartphone,
  Shield,
  Star,
  CheckCircle,
  QrCode,
} from "lucide-react";
import { DownloadCTA } from "./DownloadCTA";
import SEO from "../Reuseable Com/SeoHelment";
import { ContextData } from "../Service/context";
import first from "../assets/gameSS/secondd.jpg";
import second from "../assets/gameSS/first.jpeg";
import third from "../assets/gameSS/third.jpeg";
import four from "../assets/gameSS/four.jpg"

const DownloadPage = () => {
  const { seo, downLoadApk } = useContext(ContextData);
  const screenshots = [four,first, second, third,]; // Add more if needed

  return (
    <>
      <SEO
        meta_title={seo?.meta_title}
        meta_description={seo?.meta_description}
        meta_keywords={seo?.meta_keywords}
        og_title={seo?.og_title}
        og_description={seo?.og_description}
        og_type={seo?.og_type}
        og_url={seo?.og_url}
        og_image={seo?.og_image}
        og_site_name={seo?.og_site_name}
        canonical_tag={seo?.canonical_tag}
      />
      <div className="min-h-screen py-8 bg-[#17040A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1
              className="text-4xl md:text-6xl font-bold text-white mb-4"
              style={{
                color: "#ff1028",
                textShadow:
                  "0 0 5px #FF10F0, 0 0 10px #FF10F0, 0 0 20px #FF10F0",
                letterSpacing: "3px",
              }}
            >
              Download <span className="text-glow text-primary-500">App</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Get the ultimate gaming experience on your mobile device. Play
              Rummy, Poker & Pool anytime, anywhere!
            </p>
          </div>

          {/* Download Buttons */}
          <section className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-white">
                    Play on the Go with Our{" "}
                    <span className="text-gold-500">Mobile App</span>
                  </h2>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Experience seamless gaming with our feature-rich mobile app.
                    Optimized for Android devices with lightning-fast gameplay,
                    secure transactions, and exclusive mobile-only bonuses.
                  </p>
                </div>

                <div className="space-y-4">
                  <a
                    href="https://www.indusappstore.com/apps/strategy/finunique/com.digitalcrew.finunique?page=details&id=com.digitalcrew.finunique"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" bg-[#ff1028] flex items-center justify-center space-x-4 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-bold py-4 px-8 rounded-xl shadow-2xl transition-all duration-300 transform hover:scale-105 animate-glow"
                  >
                    <Download className="h-8 w-8" />
                    <div className="text-left ">
                      <div className="text-sm opacity-90">Download from</div>
                      <div className="text-xl">Indus App Store</div>
                    </div>
                  </a>

                  <div className="flex items-center space-x-4 text-gray-400">
                    <div className="flex-1 h-px bg-gray-600"></div>
                    <span>or</span>
                    <div className="flex-1 h-px bg-gray-600"></div>
                  </div>

                  <button className="bg-[#ff1028] w-full flex items-center justify-center space-x-4 bg-gradient-to-r from-neon-500 to-neon-600 hover:from-neon-600 hover:to-neon-700 text-white font-bold py-4 px-8 rounded-xl shadow-2xl transition-all duration-300 transform hover:scale-105">
                    <Download className="h-8 w-8" />
                    <div className="text-left">
                      <button onClick={downLoadApk}>
                        <div className="text-sm opacity-90">
                          Direct Download
                        </div>
                        <div className="text-xl">APK File</div>
                      </button>
                    </div>
                  </button>
                </div>

                <div className="bg-gold-500/10 border border-gray-300 rounded-lg p-4">
                  <div className="flex items-center space-x-3">
                    <Star className="h-6 w-6 text-yellow-500" />
                    <div>
                      <div className="text-white font-semibold">
                        Get ₹50 Bonus
                      </div>
                      <div className="text-gray-400 text-sm">
                        Instant bonus on app download & signup!
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* QR Code Section */}
              <div className="card-gaming p-8 text-center">
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-primary-500 to-primary-600 w-20 h-20 mx-auto rounded-full flex items-center justify-center">
                    <QrCode className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Quick Download
                  </h3>
                  <p className="text-gray-400">
                    Scan QR code with your phone camera
                  </p>

                  {/* QR Code Placeholder */}
                  <div className="bg-white p-6 rounded-lg mx-auto w-48 h-48 flex items-center justify-center">
                    <div className="text-dark-900 text-center">
                      <QrCode className="h-16 w-16 mx-auto mb-2" />
                      <div className="text-sm font-medium">QR Code</div>
                    </div>
                  </div>

                  <p className="text-sm text-gray-400">
                    Point your camera at the QR code to download instantly
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* App Features */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                App <span className="text-neon-500">Features</span>
              </h2>
              <p className="text-xl text-gray-400">
                Everything you need for the perfect gaming experience
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: "Secure & Safe",
                  description:
                    "Bank-level security with 256-bit SSL encryption for all transactions",
                  color: "from-blue-500 to-blue-600",
                },
                {
                  icon: Smartphone,
                  title: "Optimized Performance",
                  description:
                    "Smooth gameplay on all Android devices with minimal battery usage",
                  color: "from-red-500 to-red-600",
                },
                {
                  icon: Download,
                  title: "Instant Deposits",
                  description:
                    "Add money instantly via UPI, NetBanking, and all major payment methods",
                  color: "from-orange-500 to-orange-600",
                },
                {
                  icon: Star,
                  title: "Exclusive Bonuses",
                  description:
                    "Mobile-only promotions and daily rewards for app users",
                  color: "from-yellow-500 to-yellow-600",
                },
                {
                  icon: CheckCircle,
                  title: "Offline Mode",
                  description:
                    "Practice games available even without internet connection",
                  color: "from-gray-500 to-gray-600",
                },
                {
                  icon: Shield,
                  title: "24/7 Support",
                  description:
                    "In-app customer support with instant chat and call options",
                  color: "from-green-500 to-green-600",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="card-gaming p-6 text-center hover:transform hover:scale-105 transition-all duration-300"
                >
                  <div
                    className={`bg-gradient-to-r ${feature.color} w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4`}
                  >
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* App Screenshots */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                App <span className="text-gold-500">Screenshots</span>
              </h2>
              <p className="text-xl text-gray-400">
                See what awaits you in our mobile app
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {screenshots.map((screenshot, index) => (
                <div
                  key={index}
                  className=" outline-1 outline-gray-400 hover:outline-gray-200 rounded-md bg-gray-100/20 card-gaming  hover:transform hover:scale-105 transition-all duration-300"
                >
                  <div className="bg-gradient-to-br from-dark-700 to-dark-600 aspect-[9/17] rounded-lg overflow-hidden">
                    <img
                      src={screenshot}
                      alt={`App screenshot ${index + 1}`}
                      className="w-full h-full object- "
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* System Requirements */}
          <section className="mb-16">
            <div className="card-gaming p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">
                  System <span className="text-primary-500">Requirements</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white">
                    Minimum Requirements
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Android 5.0 (API level 21) or higher
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      2GB RAM minimum
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      100MB free storage space
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Stable internet connection
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white">Recommended</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center">
                      <Star className="h-4 w-4 text-gold-500 mr-2" />
                      Android 8.0 or higher
                    </li>
                    <li className="flex items-center">
                      <Star className="h-4 w-4 text-gold-500 mr-2" />
                      4GB RAM or more
                    </li>
                    <li className="flex items-center">
                      <Star className="h-4 w-4 text-gold-500 mr-2" />
                      500MB free storage space
                    </li>
                    <li className="flex items-center">
                      <Star className="h-4 w-4 text-gold-500 mr-2" />
                      4G/WiFi connection
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Download CTA */}
          <DownloadCTA />
        </div>
      </div>
    </>
  );
};

export default DownloadPage;
