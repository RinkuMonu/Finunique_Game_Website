import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ContextData } from "../../Service/context";
import logo from "../../assets/icon/rummy-logo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import { FaBuilding, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

const Footer = () => {
  const { scrollToTop } = useContext(ContextData);

  const [contactDetails, setContactDetails] = useState(null);
  const [socailDetails, setSocailDetails] = useState([]);

  useEffect(() => {
    const fetchContactDetails = async () => {
      try {
        const [contactDtails, socialLink] = await Promise.all([
          fetch(
            "https://cms.sevenunique.com/apis/contact/get-contact-details.php?website_id=6",
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer jibhfiugh84t3324fefei#*fef",
              },
            }
          ),
          fetch(
            "https://cms.sevenunique.com/apis/social-media/get-social-accounts.php?website_id=6 ",
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer jibhfiugh84t3324fefei#*fef",
              },
            }
          ),
        ]);
        const contactjson = await contactDtails.json();
        const socialjson = await socialLink.json();
        setContactDetails(contactjson?.data);
        setSocailDetails(socialjson?.data);
      } catch (error) {
        console.error("Error fetching contact details:", error);
      }
    };
    fetchContactDetails();
  }, []);

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8 px-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
          {/* FinUnique Zone */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4 flex justify-center sm:justify-start">
              <img
                src={logo}
                alt="logo"
                className="w-[140px] bg-black text-cyan-400 px-6 py-2 rounded-md shadow-[0_0_12px_#00ffff] hover:shadow-[0_0_20px_#00ffff] transition"
              />
            </div>
            <p className="text-sm text-center sm:text-left">
              India's premier real-money gaming platform featuring Rummy, Poker,
              and Pool. Play responsibly and win big with our secure gaming
              environment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-center sm:text-left">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="text-center sm:text-left">
                <Link
                  to=""
                  onClick={scrollToTop}
                  className="hover:text-red-400"
                >
                  Games
                </Link>
              </li>
              <li className="text-center sm:text-left">
                <Link to="/our_blog" className="hover:text-red-400">
                  Blog
                </Link>
              </li>
              <li className="text-center sm:text-left">
                <Link to="/download_apk" className="hover:text-red-400">
                  Download App
                </Link>
              </li>
              <li className="text-center sm:text-left">
                <Link to="/download_apk" className="hover:text-red-400">
                  Refer & Earn
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-center sm:text-left">
              Support
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="text-center sm:text-left">
                <Link to="/contactus" className="hover:text-red-400">
                  Contact Us
                </Link>
              </li>
              <li className="text-center sm:text-left">
                <Link to="/terms_and_conditions" className="hover:text-red-400">
                  Terms & Conditions
                </Link>
              </li>
              <li className="text-center sm:text-left">
                <Link to="/privacy_policy" className="hover:text-red-400">
                  Privacy Policy
                </Link>
              </li>
              <li className="text-center sm:text-left">
                <Link to="/return_cancellation" className="hover:text-red-400">
                  Return & Cancellation
                </Link>
              </li>
              <li className="text-center sm:text-left">
                <Link to="/content_policy" className="hover:text-red-400">
                  Content Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg font-bold mb-4 text-center sm:text-left">
              Contact Us
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex flex-col gap-2">
                <p className="flex gap-1.5 items-center justify-center sm:justify-start">
                  <FaPhone className="mt-0.5" size={15} />
                  {contactDetails?.phone || "0141-4511098"}
                </p>
                <p className="flex gap-1.5 items-center sm:items-start justify-center sm:justify-start">
                  <FaBuilding className="mt-1" size={25} />
                  <span className="text-left">
                    {contactDetails?.address ||
                      "Plot No 97, Dakshinpuri - I, Shrikishan, Sanganer, Jagatpura, Jaipur Rajasthan, India, 302017"}
                  </span>
                </p>
                {(contactDetails?.email || "").split(",").map((email, i) => (
                  <a
                    key={i}
                    href={`mailto:${email.trim()}?subject=Support%20Query&body=Hi%20Team,`}
                    className="text-sm text-gray-300 hover:underline flex gap-1.5 items-center justify-center sm:justify-start"
                  >
                    <MdEmail className="mt-0.5" size={15} />
                    {email.trim() || "support@finuniques.in"}
                  </a>
                ))}
              </div>

              {/* Social Icons */}
              <div className="flex items-center justify-center sm:justify-start gap-4 mt-4">
                {socailDetails?.map((social, index) => (
                  <a
                    key={index}
                    href={social.account_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                    dangerouslySetInnerHTML={{ __html: social.icon_class }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm">
          <p>
            © 2024 Finunique small private limited. All rights reserved. Play
            responsibly. 18+
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
