import React, { useContext } from "react";
import Banner from "../Reuseable Com/Banner";
import img from "../assets/privacy,terms,refund-banner/prc-01.png";
import {
  FiInfo,
  FiUserCheck,
  FiKey,
  FiShield,
  FiRefreshCw,
  FiMail,
} from "react-icons/fi";
import { FaDice, FaCoins } from "react-icons/fa";
import SEO from "../Reuseable Com/SeoHelment";
import { ContextData } from "../Service/context";

const TermsAndConditions = () => {
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
      <Banner img={img} heading="Terms & Conditions" />
      <div className="min-h-screen bg-gradient-to-b from-[#0B050C] to-[#1a0a1a] py-8 px-4 sm:px-6 lg:px-8">
        <div className="absolute top-20 left-10 opacity-20">
          <FaDice className="text-[#5e0d0d] text-4xl rotate-12" />
        </div>
        <div className="absolute bottom-20 right-10 opacity-20">
          <FaCoins className="text-[#5e0d0d] text-4xl -rotate-12" />
        </div>

        <div className="max-w-4xl mx-auto bg-[#1e1e1e] rounded-xl shadow-lg overflow-hidden border border-[#5e0d0d]/30 relative z-10">
          <div className="bg-gradient-to-r from-[#5e0d0d] to-[#3a0a3a] px-6 py-5">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-white">
                  Read carefully Terms & Conditions
                </h1>
                <p className="mt-1 text-[#ffb4b4]">
                  Last updated: {new Date().toLocaleDateString()}
                </p>
              </div>
              <div className="hidden sm:block bg-[#ffffff10] p-2 rounded-lg">
                <FaDice className="text-white text-2xl" />
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8 bg-[#141414]">
            <div className="prose max-w-none text-gray-300 space-y-10">
              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 flex items-center gap-3">
                  <FiInfo className="text-white text-xl" /> 1. Acceptance of
                  Terms
                </h2>
                <p>
                  By accessing and using Finunique Small Private Limited's
                  platform, mobile application, and services, you acknowledge
                  that you have read, understood, and agree to be bound by these
                  Terms and Conditions ("Terms").
                </p>
                <p>
                  These Terms constitute a legally binding agreement between you
                  ("User," "Player," or "You") and Finunique Small Private
                  Limited ("Company," "We," "Us," or "Our"). If you do not agree
                  to these Terms, you must not use our services.
                </p>
                <p>
                  We reserve the right to modify these Terms at any time.
                  Changes will be effective immediately upon posting on our
                  platform. Your continued use of our services after such
                  changes constitutes acceptance of the new Terms.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 flex items-center gap-3">
                  <FiUserCheck className="text-white text-xl" /> 2. Eligibility
                  Requirements
                </h2>
                <ul className="list-disc pl-5">
                  <li>Be at least 18 years of age</li>
                  <li>Be a legal resident of India</li>
                  <li>Reside in a state where skill-based gaming is legal</li>
                  <li>
                    Have the legal capacity to enter into binding agreements
                  </li>
                  <li>
                    Provide accurate and complete registration information
                  </li>
                  <li>
                    Complete KYC (Know Your Customer) verification when required
                  </li>
                </ul>
                <p className="mt-2 font-semibold">Important Notice:</p>
                <p>
                  Our services are not available in states where real-money
                  gaming is prohibited by law. It is your responsibility to
                  ensure compliance with local laws.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 flex items-center gap-3">
                  <FiKey className="text-white text-xl" /> 3. Account
                  Registration & Security
                </h2>
                <p className="font-semibold">Account Creation</p>
                <ul className="list-disc pl-5">
                  <li>You may create only one account per person</li>
                  <li>All information provided must be accurate and current</li>
                  <li>You must verify your mobile number and email address</li>
                  <li>KYC verification is mandatory for withdrawals</li>
                </ul>
                <p className="font-semibold mt-4">Account Security</p>
                <ul className="list-disc pl-5">
                  <li>
                    You are responsible for maintaining account confidentiality
                  </li>
                  <li>Notify us immediately of any unauthorized access</li>
                  <li>
                    Use strong passwords and enable two-factor authentication
                  </li>
                  <li>Do not share your account credentials with others</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 flex items-center gap-3">
                  <FaDice className="text-white text-xl" /> 4. Gaming Rules &
                  Fair Play
                </h2>
                <p className="font-semibold">Game Integrity</p>
                <ul className="list-disc pl-5">
                  <li>
                    All games use certified Random Number Generators (RNG)
                  </li>
                  <li>Game outcomes are determined by skill and chance</li>
                  <li>We employ anti-fraud measures to ensure fair play</li>
                  <li>
                    Collusion, cheating, or exploitation is strictly prohibited
                  </li>
                </ul>
                <p className="font-semibold mt-4">Player Conduct</p>
                <ul className="list-disc pl-5">
                  <li>Play responsibly and within your means</li>
                  <li>Respect other players and maintain proper conduct</li>
                  <li>Do not use automated software or bots</li>
                  <li>Report suspicious activities to our support team</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 flex items-center gap-3">
                  <FaCoins className="text-white text-xl" /> 5. Payments &
                  Transactions
                </h2>
                <p className="font-semibold">Deposits</p>
                <ul className="list-disc pl-5">
                  <li>Minimum deposit amount is ₹10</li>
                  <li>
                    All deposits are processed through secure payment gateways
                  </li>
                  <li>Deposits are typically credited instantly</li>
                  <li>We reserve the right to verify the source of funds</li>
                </ul>
                <p className="font-semibold mt-4">Withdrawals</p>
                <ul className="list-disc pl-5">
                  <li>Minimum withdrawal amount is ₹100</li>
                  <li>KYC verification is mandatory for withdrawals</li>
                  <li>Processing time: Instant to 24 hours</li>
                  <li>
                    We may request additional verification for large withdrawals
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 flex items-center gap-3">
                  <FiShield className="text-white text-xl" /> 6. Prohibited
                  Activities
                </h2>
                <ul className="list-disc pl-5">
                  <li>Creating multiple accounts</li>
                  <li>Using automated software, bots, or scripts</li>
                  <li>Colluding with other players</li>
                  <li>Exploiting software bugs or glitches</li>
                  <li>Money laundering or fraudulent transactions</li>
                  <li>Sharing account credentials</li>
                  <li>Underage gambling</li>
                  <li>Playing from restricted jurisdictions</li>
                  <li>Abusive or inappropriate behavior</li>
                  <li>Attempting to manipulate game outcomes</li>
                </ul>
                <p className="font-semibold mt-2">Violation Consequences</p>
                <p>
                  Violation of these terms may result in account suspension,
                  forfeiture of funds, and permanent ban from our platform.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 flex items-center gap-3">
                  <FiInfo className="text-white text-xl" /> 7. Limitation of
                  Liability
                </h2>
                <p>
                  Finunique Small Private Limited provides its services "as is"
                  and makes no warranties, express or implied, regarding the
                  platform's availability, accuracy, or reliability.
                </p>
                <p>
                  We shall not be liable for any direct, indirect, incidental,
                  special, or consequential damages arising from your use of our
                  services, including but not limited to:
                </p>
                <ul className="list-disc pl-5">
                  <li>Loss of funds due to technical issues</li>
                  <li>Service interruptions or downtime</li>
                  <li>Third-party payment gateway failures</li>
                  <li>Internet connectivity issues</li>
                  <li>Force majeure event</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 flex items-center gap-3">
                  <FiRefreshCw className="text-white text-xl" /> 8. Account
                  Termination
                </h2>
                <p className="font-semibold">Voluntary Termination</p>
                <p>
                  You may close your account at any time by contacting our
                  customer support. Upon closure, you may withdraw any remaining
                  balance subject to our verification procedures.
                </p>
                <p className="font-semibold mt-4">Involuntary Termination</p>
                <p>
                  We reserve the right to suspend or terminate your account if:
                </p>
                <ul className="list-disc pl-5">
                  <li>You violate these Terms and Conditions</li>
                  <li>You engage in fraudulent or illegal activities</li>
                  <li>You fail to complete required verification procedures</li>
                  <li>Your account remains inactive for an extended period</li>
                </ul>
                <p className="mt-4 font-semibold">Contact Information</p>
                <p>Email: info@finuniques.in</p>
                <p>Email: support@finuniques.in</p>
                <p>Phone: 0141-4511098</p>
                <p>
                  Address: Plot No 97, Dakshinpuri - I, Shri Kishanpura,
                  Sanganer, Jagatpura, Rajasthan, India – 302017
                </p>
                <p className="mt-4 font-semibold">Agreement Acknowledgment</p>
                <p>
                  By using Finunique Small Private Limited's services, you
                  acknowledge that you have read, understood, and agree to be
                  bound by these Terms and Conditions.
                </p>
                <p>
                  I Accept – <a href="/register" className="underline"> Create Account</a>
                </p>
                <p>
                  Have Questions? <a href="/contactus" className="underline"> Contact Us</a>
                </p>
              </section>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#5e0d0d] to-[#3a0a3a] px-6 py-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-[#ffb4b4]">
                &copy; {new Date().getFullYear()} Finunique Small Private
                Limited. All rights reserved.
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

export default TermsAndConditions;
