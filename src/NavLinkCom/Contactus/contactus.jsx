import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import bgcimg from "../../assets/bannerimg/contactus.png";
import { DownloadCTA } from "../../DownloadAPK/DownloadCTA";
import { ContextData } from "../../Service/context";
import SEO from "../../Reuseable Com/SeoHelment";

export default function ContactUs() {
  const [loading, setLoading] = useState(false);
  const [contactDetails, setContactDetails] = useState(null);
  const { seo } = useContext(ContextData);

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm({ mode: "onChange" });

  useEffect(() => {
    const fetchContactDetails = async () => {
      try {
        const [contactDtails] = await Promise.all([
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
        ]);
        const contactjson = await contactDtails.json();
        setContactDetails(contactjson?.data);
      } catch (error) {
        console.error("Error fetching contact details:", error);
      }
    };
    fetchContactDetails();
  }, []);
  const onSubmit = async (data) => {
    const valid = await trigger();
    if (!valid) return;
    setLoading(true);
    const payload = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message,
      service: "N/A",
      website_id: 6,
    };
    try {
      const response = await fetch(
        "https://cms.sevenunique.com/apis/contact-query/set-contact-details.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer jibhfiugh84t3324fefei#*fef",
          },
          body: JSON.stringify(payload),
        }
      );
      const result = await response.json();
      // console.log(result);
      if (result.status) {
        toast.success("team will contact you soon!");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

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
      <div
        className="bg-[#0B050C] text-white py-10 px-4 tracking-wider lg:h-[90vh]"
        style={{ background: "linear-gradient(to bottom, #11050B, #11050B)" }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start p-6">
          <div>
            <h2 className="text-4xl font-semibold mb-4">Get up</h2>
            <p className="mb-6 text-gray-300">
              We are here to help. Share your details, and our team will soon
              reach you.
            </p>

            <div className="mb-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-gray-200 rounded-full p-2 ">
                  <FaEnvelope className="text-red-500" />
                </div>
                <div>
                  {contactDetails?.email ? (
                    <>
                      <p className="font-semibold">Email Us</p>
                      {contactDetails?.email &&
                        contactDetails?.email.split(",").map((email, index) => (
                          <div key={index}>
                            <a
                              href={`mailto:${email.trim()}`}
                              className="text-sm text-gray-300 hover:underline"
                            >
                              {email.trim()}
                            </a>
                          </div>
                        ))}
                    </>
                  ) : (
                    <p className="text-sm text-gray-300">Loading...</p>
                  )}
                </div>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-start gap-3">
                <div className="bg-gray-200 rounded-full p-2 ">
                  <FaMapMarkerAlt className="text-red-500 " />
                </div>
                <div>
                  {contactDetails?.address ? (
                    <>
                      <p className="font-semibold">Visit Us</p>
                      <p className="text-sm text-gray-300">
                        {contactDetails.address}
                      </p>
                    </>
                  ) : (
                    <p className="text-sm text-gray-300">Loading...</p>
                  )}
                </div>
              </div>
            </div>

            <div className="text-sm">
              <p className="font-semibold">Office Hours</p>
              <p className="text-gray-300">
                Monday - Friday: 9:30 AM – 6:30 PM
              </p>
              <p className="text-gray-300">
                Saturday: 09:30 AM - 6:30 PM (2nd and 4th Saturday closed)
              </p>
              <p className="text-gray-300">Sunday: Closed</p>
            </div>
          </div>

          <div
            className="relative rounded border border-gray-700 backdrop-blur-sm shadow-md overflow-hidden"
            style={{
              backgroundImage: `url(${bgcimg})`,
              backgroundSize: "cover",
              backgroundPosition: "right",
            }}
          >
            <div className="absolute inset-0 bg-black/70 bg-opacity-60 z-0"></div>
            <form
              className="relative z-10 space-y-5 p-6"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-100">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  {...register("name", {
                    required: "Full name is required",
                    pattern: {
                      value: /^[A-Za-z ]+$/,
                      message: "Only letters and spaces allowed",
                    },
                  })}
                  onInput={(e) => {
                    e.target.value = e.target.value.replace(/[^A-Za-z ]/g, "");
                  }}
                  onKeyUp={() => trigger("name")}
                  className="w-full px-4 py-2 border rounded-md bg-transparent text-red-200 placeholder:text-gray-400 focus:outline-none focus:ring focus:border-red-400"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 text-gray-100">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="example@example.com"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+\.\S+$/,
                      message: "Invalid email address",
                    },
                  })}
                  onKeyUp={() => trigger("email")}
                  className="w-full px-4 py-2 border rounded-md bg-transparent text-red-200 placeholder:text-gray-400 focus:outline-none focus:ring focus:border-red-400"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 text-gray-100">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+91-9876543210"
                  maxLength={10}
                  inputMode="numeric"
                  onInput={(e) => {
                    e.target.value = e.target.value.replace(/\D/g, "");
                    if (
                      e.target.value.length === 1 &&
                      !/^[6-9]$/.test(e.target.value)
                    ) {
                      e.target.value = "";
                    }
                    if (e.target.value.length > 10) {
                      e.target.value = e.target.value.slice(0, 10);
                    }
                  }}
                  {...register("phone", {
                    required: "Phone number is required & starting with 6-9",
                    pattern: {
                      value: /^[6-9]\d{9}$/,
                      message: "Enter valid 10-digit number starting with 6-9",
                    },
                  })}
                  onKeyUp={() => trigger("phone")}
                  className="w-full px-4 py-2 border rounded-md bg-transparent text-red-200 placeholder:text-gray-400 focus:outline-none focus:ring focus:border-red-400"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 text-gray-100">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="How can we help you?"
                  {...register("message", {
                    required: "Message is required",
                  })}
                  onKeyUp={() => trigger("message")}
                  className="w-full px-4 py-2 border rounded-md bg-transparent text-white placeholder:text-gray-400 focus:outline-none focus:ring focus:border-red-400"
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-red-500 to-pink-500 hover:opacity-90 text-white py-2 rounded-md transition flex items-center justify-center cursor-pointer"
              >
                {loading ? (
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8z"
                    ></path>
                  </svg>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>
        </div>
        <ToastContainer position="top-right" />
      </div>
      <div className="bg-[#0B050C]">
        <DownloadCTA />
      </div>
    </>
  );
}
