import React, { useContext } from "react";
import Banner from "../Reuseable Com/Banner";
import img from "../assets/privacy,terms,refund-banner/prc-01.png";
import {
  FiInfo,
  FiDatabase,
  FiKey,
  FiShield,
  FiUserCheck,
  FiRefreshCw,
  FiMail,
} from "react-icons/fi";
import { FaCookie, FaDice, FaCoins } from "react-icons/fa";
import { ContextData } from "../Service/context";
import SEO from "../Reuseable Com/SeoHelment";

const PrivacyPolicy = () => {
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
      <Banner img={img} heading="Privacy Policy" />
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
                  Privacy Policy
                </h1>
                <p className="mt-1 text-[#ffb4b4]">
                  Last updated: January 15, 2024
                </p>
              </div>
              <div className="hidden sm:block bg-[#ffffff10] p-2 rounded-lg">
                <FaDice className="text-white text-2xl" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8 bg-[#141414] text-gray-300">
            <div className="prose max-w-none">
              <h2 className="text-xl font-bold text-white mb-2">
                Privacy at a Glance
              </h2>
              <ul className="list-disc pl-5 mb-6 marker:text-[#5e0d0d]">
                <li>Secure Encryption: 256-bit SSL protection</li>
                <li>No Data Selling: We never sell your data</li>
                <li>Your Control: Manage your privacy</li>
              </ul>

              <h2 className="text-xl font-bold text-white mb-2">
                1. Information We Collect
              </h2>
              <h3 className="font-semibold text-white">Personal Information</h3>
              <ul className="list-disc pl-5 mb-4 marker:text-[#5e0d0d]">
                <li>Name, email address, and mobile number</li>
                <li>
                  Date of birth and government-issued ID for age verification
                </li>
                <li>Bank account details and payment information</li>
                <li>Address and location data for compliance purposes</li>
                <li>Profile photos and other optional information</li>
              </ul>
              <h3 className="font-semibold text-white">
                Automatically Collected Information
              </h3>
              <ul className="list-disc pl-5 mb-6 marker:text-[#5e0d0d]">
                <li>
                  Device information (model, operating system, unique
                  identifiers)
                </li>
                <li>IP address and location data</li>
                <li>Game play data and statistics</li>
                <li>App usage patterns and preferences</li>
                <li>Technical logs and error reports</li>
              </ul>

              <h2 className="text-xl font-bold text-white mb-2">
                2. How We Use Your Information
              </h2>
              <ul className="list-disc pl-5 mb-4 marker:text-[#5e0d0d]">
                <li>Provide and maintain our gaming services</li>
                <li>Process payments and withdrawals securely</li>
                <li>Verify your identity and prevent fraud</li>
                <li>Comply with legal and regulatory requirements</li>
                <li>Improve our games and user experience</li>
                <li>Send important updates and promotional offers</li>
                <li>Provide customer support and resolve issues</li>
                <li>Analyze usage patterns to enhance our platform</li>
              </ul>
              <p className="mb-6">
                We process your data based on legitimate business interests,
                legal compliance, and your consent where required.
              </p>

              <h2 className="text-xl font-bold text-white mb-2">
                3. Data Security & Protection
              </h2>
              <h3 className="font-semibold text-white">Security Measures</h3>
              <ul className="list-disc pl-5 mb-4 marker:text-[#5e0d0d]">
                <li>256-bit SSL encryption for all data transmission</li>
                <li>Secure servers with regular security audits</li>
                <li>Multi-factor authentication for account access</li>
                <li>Regular security updates and patches</li>
                <li>
                  Restricted access to personal data on a need-to-know basis
                </li>
                <li>Secure payment processing through certified gateways</li>
              </ul>
              <h3 className="font-semibold text-white">Data Storage</h3>
              <ul className="list-disc pl-5 mb-6 marker:text-[#5e0d0d]">
                <li>Data stored on secure servers in India</li>
                <li>Regular backups with encryption</li>
                <li>Compliance with Indian data protection laws</li>
                <li>Automatic data purging for inactive accounts</li>
              </ul>

              <h2 className="text-xl font-bold text-white mb-2">
                4. Information Sharing
              </h2>
              <p className="mb-2">We may share your information with:</p>
              <ul className="list-disc pl-5 mb-4 marker:text-[#5e0d0d]">
                <li>Payment processors</li>
                <li>KYC verification services</li>
                <li>Cloud storage providers</li>
                <li>Analytics services</li>
              </ul>
              <p className="mb-4">
                We also may share data with legal authorities where required by
                law.
              </p>
              <p className="mb-6 font-semibold text-white">
                We Never Sell Your Data
              </p>

              <h2 className="text-xl font-bold text-white mb-2">
                5. Your Privacy Rights
              </h2>
              <ul className="list-disc pl-5 mb-4 marker:text-[#5e0d0d]">
                <li>Access your data</li>
                <li>Correct inaccurate data</li>
                <li>Delete your personal information</li>
                <li>Request data portability</li>
                <li>Restrict processing</li>
                <li>Object to certain uses</li>
                <li>Withdraw consent</li>
              </ul>
              <p className="mb-6">
                Contact our privacy team at support@finuniques.in . We respond
                within 30 days.
              </p>

              <h2 className="text-xl font-bold text-white mb-2">
                6. Cookies & Tracking
              </h2>
              <ul className="list-disc pl-5 mb-4 marker:text-[#5e0d0d]">
                <li>Essential Cookies</li>
                <li>Performance Cookies</li>
                <li>Functional Cookies</li>
                <li>Analytics Cookies</li>
              </ul>
              <p className="mb-6">
                You can manage cookies in your browser settings.
              </p>

              <h2 className="text-xl font-bold text-white mb-2">
                7. Data Retention
              </h2>
              <p className="mb-2">We keep your data for the time needed to:</p>
              <ul className="list-disc pl-5 mb-6 marker:text-[#5e0d0d]">
                <li>Provide services</li>
                <li>Meet legal requirements</li>
                <li>Resolve disputes</li>
                <li>Prevent fraud</li>
              </ul>
              <p className="mb-6">
                Account Data: 7 years, Transaction Data: 10 years, Marketing
                Data: deleted upon request
              </p>

              <h2 className="text-xl font-bold text-white mb-2">
                8. Children's Privacy
              </h2>
              <p className="mb-6">
                Our services are not for users under 18. We delete such data
                immediately if collected inadvertently.
              </p>

              <h2 className="text-xl font-bold text-white mb-2">
                9. Contact Our Privacy Team
              </h2>
              <p className="mb-1">Phone: 0141-4511098</p>
              <p className="mb-1">
                Email:{" "}
                <a href="mailto:support@finuniques.in" className="underline">
                  support@finuniques.in
                </a>
              </p>
              <p className="mb-1">
                Email:{" "}
                <a href="mailto:support@finuniques.in" className="underline">
                  info@finuniques.in
                </a>
              </p>
              <p className="mb-6">
                Address: Plot No 97, Dakshinpuri - I, Shrikishan, Sanganer,
                Jagatpura, Jaipur Rajasthan, India, 302017
              </p>

              <h2 className="text-xl font-bold text-white mb-2">
                10. Policy Updates
              </h2>
              <p>
                We will notify you about major updates via email or platform
                messages. Continued use means acceptance.
              </p>
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
                <FaDice className="text-white" />
                <FaCoins className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
