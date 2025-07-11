import React, { useState, useEffect, useRef, useContext } from "react";
import { SignModal } from "../../PopUpModal/signModal";
import { SignUpModal } from "../../PopUpModal/signupModal";
import { CiLogin } from "react-icons/ci";
import { LuDownload } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import logo from "../../assets/icon/rummy-logo.png";
import { ContextData } from "../../Service/context";

export default function Navbar() {
  const drawerRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSignUP, setIsOpenSignUP] = useState(false);
  const { token } = useContext(ContextData);

  const openModal = () => {
    setIsOpen(true);
  };
  const openSignUPModal = () => {
    setIsOpenSignUP(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setIsOpenSignUP(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { label: "Home", href: "/", onclick: null },
    { label: "About", href: "/aboutus", onclick: null },
    { label: "Contact us", href: "/contactus", onclick: null },
    { label: "Blog", href: "/our_blog", onclick: null },
  ];
  return (
    <>
      <nav
        className="p-2 sticky top-0 z-50 shadow-lg"
        style={{
          backgroundColor: "#0B050C",
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div className="container mx-auto flex justify-between items-center">
          {/* <a
            href="/"
            className="text-white text-xl md:text-2xl font-bold tracking-wider transition duration-300 cursor-pointer"
            style={{ fontFamily: "'Lobster', cursive" }}
          >
            L<span className="transition duration-300 text-red-400">O</span>
            GO
          </a> */}
          <div className="w-20px">
            <a href="/">
              <img
                src={logo}
                alt="rummyLogo"
                className="w-[130px] cursor-pointer"
              />
            </a>
          </div>
          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-6 lg:space-x-6 flex  justify-center items-center text-center">
            {navLinks.map(({ label, href }, index) => (
              <li key={index}>
                <a
                  href={href}
                  className={`text-white hover:text-red-500 transition duration-300 tracking-wider font-[400] py-2 px-1`}
                  onClick={navLinks[index].onclick}
                >
                  {label}
                </a>
              </li>
            ))}
            {!token && (
              <li>
                <a
                  href="/login"
                  className={`text-white hover:text-red-500 transition duration-300 tracking-wider font-[400]  flex  justify-center items-center text-center gap-1`}
                >
                  <CiLogin size={22} />
                  Login
                </a>
              </li>
            )}
            <li>
              <a
                href="/download_apk"
                className={` transition duration-300 tracking-wider font-[400] py-2 px-2  rounded-md flex  justify-center items-center text-center gap-1 bg-blue-500 hover:bg-red-500`}
                style={{
                  color: "#00f7ff",
                  textShadow: "0 0 5px #00f7ff, 0 0 10px #00f7ff",
                }}
              >
                <LuDownload size={18} /> Download
              </a>
            </li>
            {token && (
              <li>
                <a
                  href="/profile"
                  className={` transition duration-300 tracking-wider font-[400] py-2 px-2  rounded-md flex  justify-center items-center text-center  gap-1 bg-red-800    hover:text-red-500 text-gray-100`}
                >
                  <CgProfile size={18} />
                  Profile
                </a>
              </li>
            )}
          </ul>

          {/* Mobile Menu Toggle Button */}
          <button
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
            className="md:hidden text-white focus:outline-none"
          >
            {isMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>

          {/* Mobile Menu Drawer */}
          {isMenuOpen && (
            <div
              ref={drawerRef}
              className="fixed inset-0 z-40 bg-[#0B050C] bg-opacity-95 md:hidden transition-all duration-500 ease-in-out transform animate-slideDown "
            >
              <div className="flex justify-end pt-5 px-4">
                <button
                  onClick={closeMenu}
                  className="text-white hover:text-red-400 focus:outline-none"
                  aria-label="Close menu"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex flex-col items-center text-center space-y-2 text-lg p-4     font-semibold tracking-wider text-gray-200 bg-[#0B050C]">
                {navLinks.map(({ label, href }, index) => (
                  <a
                    key={index}
                    href={href}
                    onClick={closeMenu}
                    className="text-white hover:text-purple-400 transition duration-300 border-b border-transparent hover:border-gray-500 pb-1"
                  >
                    {label}
                  </a>
                ))}
                {!token && (
                  <a
                    href="/login"
                    className={`text-white hover:text-red-500 transition duration-300 tracking-wider font-[400]  flex  justify-center items-center text-center gap-1`}
                  >
                    <CiLogin size={22} />
                    Login
                  </a>
                )}
                <a
                  href="/profile"
                  className={` transition duration-300 tracking-wider font-[400] py-2 px-2  rounded-md flex  justify-center items-center text-center  gap-1 bg-red-800    hover:text-red-500 text-gray-100`}
                >
                  <CgProfile size={18} />
                  Profile
                </a>
                <a
                  href="/download_apk"
                  className={` transition duration-300 tracking-wider font-[400] py-2 px-2  rounded-md flex  justify-center items-center text-center gap-1 bg-blue-500 hover:bg-red-500`}
                  style={{
                    color: "#00f7ff",
                    textShadow: "0 0 5px #00f7ff, 0 0 10px #00f7ff",
                  }}
                >
                  <LuDownload size={18} /> Download
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
      <SignModal
        openModal={openModal}
        isOpen={isOpen}
        closeModal={closeModal}
      />
      <SignUpModal
        openModal={openSignUPModal}
        isOpen={isOpenSignUP}
        closeModal={closeModal}
      />
    </>
  );
}
