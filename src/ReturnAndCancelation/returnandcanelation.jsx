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
import SEO from "../Reuseable Com/SeoHelment";
import { ContextData } from "../Service/context";

const ReturnAndCancelation = () => {
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
      <Banner img={img} heading="Refund, Return & Cancellation" />
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
                  Refund, Return & Cancellation
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

          <div className="p-6 sm:p-8 bg-[#141414]">
            <div className="prose max-w-none">
              <section className="mb-10 group">
                <div className="flex items-center gap-4 mb-3">
                  <div className="bg-[#5e0d0d] p-2 rounded-lg group-hover:bg-[#7e0d0d] transition-colors">
                    <FiInfo className="text-white text-xl" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white">
                    1. Cancellation Policy
                  </h2>
                </div>
                <div className="ml-14 text-gray-300 space-y-3">
                  <p>
                    <strong>Game Participation:</strong> Once you join a
                    real-money game on Finunique Small Private Limited,
                    cancellation is not allowed unless the game is cancelled by
                    us due to technical or operational issues.
                  </p>
                  <p>
                    If Finunique Small Private Limited cancels a game for any
                    reason, the entry fee will be automatically refunded to your
                    wallet.
                  </p>
                  <p>
                    <strong>Deposit Cancellations:</strong> Deposits made to
                    your Finunique Small Private Limited account cannot be
                    cancelled once successfully processed.
                  </p>
                  <p>
                    In case of duplicate deposits or errors, contact our support
                    team immediately for assistance.
                  </p>
                </div>
              </section>

              <section className="mb-10 group">
                <div className="flex items-center gap-4 mb-3">
                  <div className="bg-[#5e0d0d] p-2 rounded-lg group-hover:bg-[#7e0d0d] transition-colors">
                    <FiRefreshCw className="text-white text-xl" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white">
                    2. Refund Policy
                  </h2>
                </div>
                <div className="ml-14 text-gray-300 space-y-3">
                  <p>
                    <strong>Eligible for Refund:</strong>
                  </p>
                  <ul className="list-disc pl-6 marker:text-[#5e0d0d]">
                    <li>Game cancelled due to server or technical error</li>
                    <li>Payment was made twice or by mistake</li>
                    <li>Amount was debited but not credited</li>
                    <li>Unauthorized transaction reported within 24 hours</li>
                  </ul>
                  <p>
                    <strong>Not Eligible for Refund:</strong>
                  </p>
                  <ul className="list-disc pl-6 marker:text-[#5e0d0d]">
                    <li>Loss due to internet disconnection or device issues</li>
                    <li>Voluntary withdrawal or game quit by the user</li>
                    <li>
                      Violation of Finunique Small Private Limited gaming rules
                      or policies
                    </li>
                    <li>
                      Refund requests made after 24 hours of the transaction
                    </li>
                  </ul>
                </div>
              </section>

              <section className="mb-10 group">
                <div className="flex items-center gap-4 mb-3">
                  <div className="bg-[#5e0d0d] p-2 rounded-lg group-hover:bg-[#7e0d0d] transition-colors">
                    <FiKey className="text-white text-xl" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white">
                    3. Refund Process
                  </h2>
                </div>
                <div className="ml-14 text-gray-300 space-y-3">
                  <p>To initiate a refund:</p>
                  <ul className="list-disc pl-6 marker:text-[#5e0d0d]">
                    <li>
                      Contact our customer support with transaction details
                    </li>
                    <li>Clearly state the issue and reason for your request</li>
                    <li>
                      Allow time for internal verification (up to 5 business
                      days)
                    </li>
                    <li>
                      If approved, your refund will be credited within 7 working
                      days to your wallet or original payment method
                    </li>
                  </ul>
                </div>
              </section>

              <section className="group">
                <div className="flex items-center gap-4 mb-3">
                  <div className="bg-[#5e0d0d] p-2 rounded-lg group-hover:bg-[#7e0d0d] transition-colors">
                    <FiMail className="text-white text-xl" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white">
                    4. Contact Us
                  </h2>
                </div>
                <div className="ml-14">
                  <p className="text-gray-300 mb-4">
                    Need help with a refund or cancellation? Reach out to the
                    Finunique Small Private Limited support team:
                  </p>
                  <div className="bg-[#1e1e1e] border border-[#5e0d0d]/30 rounded-lg p-4">
                    <div className="flex items-start gap-4 mb-3">
                      <div className="bg-[#5e0d0d] p-2 rounded-lg">
                        <FiMail className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-medium text-white">Email</h3>
                        <p className="text-[#bebdbd]">
                          <a href="mailto:support@finuniques.in" className="underline">
                            support@finuniques.in
                          </a>
                        </p>
                        <p className="text-[#bebdbd]">
                          <a href="mailto:support@finuniques.in" className="underline">
                            info@finuniques.in
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-[#5e0d0d] p-2 rounded-lg">
                        <FiMail className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-medium text-white">
                          Registered Office
                        </h3>
                        <address className="text-gray-300 not-italic">
                          Plot No 97, Dakshinpuri - I,
                          <br />
                          Shri Kishanpura, Sanganer, Jagatpura,
                          <br />
                          Rajasthan, India – 302017
                        </address>
                      </div>
                    </div>
                  </div>
                </div>
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

export default ReturnAndCancelation;
