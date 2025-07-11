import React, { useContext } from "react";
import Banner from "../Reuseable Com/Banner";
import img from "../assets/privacy,terms,refund-banner/prc-01.png";
import {
  FiAlertTriangle,
  FiBook,
  FiEdit,
  FiFlag,
  FiLock,
  FiUsers,
} from "react-icons/fi";
import { FaDice, FaCoins, FaRegHandshake } from "react-icons/fa";
import { ContextData } from "../Service/context";
import SEO from "../Reuseable Com/SeoHelment";

const ContentPolicy = () => {
  const { seo } = useContext(ContextData);

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
      <Banner img={img} heading="Content Policy" />
      <div className="min-h-screen bg-gradient-to-b from-[#0B050C] to-[#1a0a1a] py-8 px-4 sm:px-6 lg:px-8">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 opacity-20">
          <FaDice className="text-[#5e0d0d] text-4xl rotate-12" />
        </div>
        <div className="absolute bottom-20 right-10 opacity-20">
          <FaCoins className="text-[#5e0d0d] text-4xl -rotate-12" />
        </div>

        <div className="max-w-4xl mx-auto bg-[#1e1e1e] rounded-xl shadow-lg overflow-hidden border border-[#5e0d0d]/30 relative z-10">
          {/* Header with gradient */}
          <div className="bg-gradient-to-r from-[#5e0d0d] to-[#3a0a3a] px-6 py-5">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-white">
                  Content Policy
                </h1>
                <p className="mt-1 text-[#ffb4b4]">
                  Last updated: January 15, 2024
                </p>
              </div>
              <div className="hidden sm:block bg-[#ffffff10] p-2 rounded-lg">
                <FiBook className="text-white text-2xl" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8 bg-[#141414] text-gray-300">
            <div className="prose max-w-none">
              <h2 className="text-xl font-bold text-white mb-2">
                Content Guidelines Overview
              </h2>
              <ul className="list-disc pl-5 mb-6 marker:text-[#5e0d0d]">
                <li>Safe and respectful gaming environment</li>
                <li>Zero tolerance for harmful content</li>
                <li>Fair play and sportsmanship</li>
              </ul>

              <h2 className="text-xl font-bold text-white mb-2">
                1. Prohibited Content
              </h2>
              <h3 className="font-semibold text-white">Strictly Forbidden</h3>
              <ul className="list-disc pl-5 mb-4 marker:text-[#5e0d0d]">
                <li>Hate speech or discriminatory content</li>
                <li>Harassment or bullying of any kind</li>
                <li>Sexually explicit material</li>
                <li>Violent or threatening language</li>
                <li>Cheating methods or hacks</li>
                <li>Personal information of others</li>
                <li>Spam or repetitive unwanted messages</li>
                <li>Illegal activities or substances</li>
              </ul>

              <h2 className="text-xl font-bold text-white mb-2">
                2. User-Generated Content
              </h2>
              <ul className="list-disc pl-5 mb-6 marker:text-[#5e0d0d]">
                <li>Usernames must be appropriate</li>
                <li>Profile pictures must follow guidelines</li>
                <li>Chat messages are monitored</li>
                <li>Game room names must be respectful</li>
                <li>You retain ownership but grant us license</li>
              </ul>

              <h2 className="text-xl font-bold text-white mb-2">
                3. Reporting Violations
              </h2>
              <ul className="list-disc pl-5 mb-4 marker:text-[#5e0d0d]">
                <li>Use in-app reporting tools</li>
                <li>Include screenshots when possible</li>
                <li>Report to support@finuniques.in</li>
                <li>We investigate all reports within 24 hours</li>
              </ul>
              <p className="mb-6">
                False reports may result in account penalties.
              </p>

              <h2 className="text-xl font-bold text-white mb-2">
                4. Enforcement Actions
              </h2>
              <h3 className="font-semibold text-white">
                Possible Consequences
              </h3>
              <ul className="list-disc pl-5 mb-6 marker:text-[#5e0d0d]">
                <li>Content removal without notice</li>
                <li>Temporary chat restrictions</li>
                <li>Temporary account suspension</li>
                <li>Permanent account termination</li>
                <li>Legal action for severe violations</li>
              </ul>

              <h2 className="text-xl font-bold text-white mb-2">
                5. Age Restrictions
              </h2>
              <ul className="list-disc pl-5 mb-6 marker:text-[#5e0d0d]">
                <li>No users under 18 years old</li>
                <li>Age verification may be required</li>
                <li>Parental controls available</li>
              </ul>

              <h2 className="text-xl font-bold text-white mb-2">
                6. Intellectual Property
              </h2>
              <ul className="list-disc pl-5 mb-6 marker:text-[#5e0d0d]">
                <li>Respect all copyrights and trademarks</li>
                <li>No unauthorized game modifications</li>
                <li>Original content only in profiles</li>
                <li>Our branding cannot be misused</li>
              </ul>

              <h2 className="text-xl font-bold text-white mb-2">
                7. Commercial Content
              </h2>
              <ul className="list-disc pl-5 mb-6 marker:text-[#5e0d0d]">
                <li>No unauthorized advertising</li>
                <li>No affiliate marketing</li>
                <li>No pyramid schemes</li>
                <li>Sponsorships require prior approval</li>
              </ul>

              <h2 className="text-xl font-bold text-white mb-2">
                8. Policy Updates
              </h2>
              <p className="mb-6">
                We may update this policy periodically. Continued use of our
                services means you accept the current policy version.
              </p>

              <h2 className="text-xl font-bold text-white mb-2">
                9. Contact Our Content Team
              </h2>
              <p className="mb-1">
                Email:{" "}
                <a href="mailto:support@finuniques.in" className="underline">
                  support@finuniques.in
                </a>
              </p>
              <p className="mb-6">In-app: Use the "Report Content" feature</p>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-gradient-to-r from-[#5e0d0d] to-[#3a0a3a] px-6 py-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-[#ffb4b4]">
                &copy; {new Date().getFullYear()} Rummy Pool Games. All rights
                reserved.
              </p>
              <div className="flex gap-4 mt-2 md:mt-0">
                <FiFlag className="text-white" />
                <FiLock className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentPolicy;
