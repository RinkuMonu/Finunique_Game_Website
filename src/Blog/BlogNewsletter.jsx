import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const BlogNewsletter = () => {
  const { register, handleSubmit, reset, trigger } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    const valid = await trigger("email");
    if (!valid) return;
    setLoading(true);

    const payload = {
      name: "Newsletter Subscriber",
      email: data.email,
      phone: "N/A",
      message: "Lead from FinUnique",
      service: "Newsletter",
      notes: "lead from finunique",
      website_id: 6,
    };

    try {
      const response = await fetch(
        "https://cms.sevenunique.com/apis/contact-query/set-contact-details.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer jibhfiugh84t3324fefei#*fef`,
          },
          body: JSON.stringify(payload),
        }
      );
      const result = await response.json();
      
      if (result.response==200) {
        toast.success("Thank you for subscribing!");
        reset();
      } else {
        toast.error("Subscription failed. Try again.");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Toaster />
      <div className="bg-[#09030a] py-12 px-4">
        <div className="container mx-auto max-w-4xl bg-gradient-to-r from-[#180f1a] to-[#180f1a] rounded-xl p-8 shadow-2xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2 text-white">
                Stay Updated
              </h3>
              <p className="text-gray-300">
                Subscribe to our newsletter for the latest Rummy strategies,
                tournament updates, and exclusive offers.
              </p>
            </div>

            <div className="md:w-1/2 w-full">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col sm:flex-row gap-3"
              >
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="Your email address"
                  className="flex-grow px-4 py-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  required
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-yellow-700 hover:bg-purple-700 hover:text-gray-200 text-black font-bold py-3 px-6 rounded-md transition whitespace-nowrap disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Subscribe"}
                </button>
              </form>
              <p className="text-xs text-gray-400 mt-2">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-950 to-red-800 p-10 rounded-lg text-center mt-8">
            <h3 className="font-bold text-lg mb-2 text-gray-100">
              Play Rummy Now!
            </h3>
            <p className="text-sm mb-3 text-gray-400">
              Join thousands of players and win real cash prizes
            </p>
            <Link
              to={"/download_apk"}
              className="bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-bold hover:text-yellow-500 hover:bg-red-900 transition-all mt-3 cursor-pointer hover:tracking-wider duration-500"
            >
              Download App
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogNewsletter;
