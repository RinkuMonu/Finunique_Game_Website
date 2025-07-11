import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserPlus, Shield, Eye, EyeOff, Check } from "lucide-react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import api from "../Service/axios";
import { ContextData } from "../Service/context";
import SEO from "../Reuseable Com/SeoHelment";

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [tempUserData, setTempUserData] = useState(null);
  const { token, seo } = useContext(ContextData);

  useEffect(() => {
    if (token) {
      window.history.back();
    }
  }, [token]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    trigger,
    reset,
    setError,
  } = useForm({ mode: "onChange" });

  const {
    register: registerOTP,
    handleSubmit: handleOtpSubmit,
    formState: { errors: otpErrors },
    trigger: triggerOtp,
  } = useForm({ mode: "onChange" });

  const password = watch("password");

  const onSubmit = async (data) => {
    const valid = await trigger();
    if (!valid) return;
    setLoading(true);
    const toastId = toast.loading("Sending OTP...", {
      id: "send-otp",
      duration: 1000,
      position: "top-center",
      style: {
        background: "#1E293B",
        color: "#fff",
        fontWeight: "bold",
        border: "1px solid #FF10F0",
        padding: "12px 16px",
      },
      icon: "📲",
    });

    try {
      const res = await api.post("/auth/send-otp", {
        mobile: data.mobile,
        email: data.email,
        forLogin: false,
      });

      if (res?.data?.success) {
        toast.success(res?.data?.message || "OTP sent successfully", {
          id: toastId,
        });
        setTempUserData(data);
        setStep(2);
      } else {
        toast.dismiss(toastId);
      }
    } catch (err) {
      console.error("OTP Send Error", err);
      if (toast.isActive(toastId)) {
        toast.error(err.response?.data?.message || "Failed to send OTP", {
          id: toastId,
        });
      }
    } finally {
      setLoading(false);
    }
  };

  const onVerifyOtp = async (otpData) => {
    const valid = await triggerOtp();
    if (!valid) return;

    setLoading(true);
    const toastId = toast.loading("Verifying OTP...");

    try {
      const verifyotp = await api.post("/auth/verify-otp", {
        mobile: tempUserData.mobile,
        otp: otpData.otp,
      });

      if (verifyotp?.data?.success) {
        const res = await api.post("/auth/register", tempUserData);

        if (res?.data?.status) {
          toast.dismiss(toastId);
          toast.success("Account created successfully!");

          await fetch("https://cms.sevenunique.com/apis/leads/set-leads.php", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer jibhfiugh84t3324fefei#*fef",
            },
            body: JSON.stringify({
              website_id: 6,
              name: `${tempUserData.firstName} ${tempUserData.lastName}`,
              mobile_number: tempUserData.mobile,
              email: tempUserData.email,
              notes: "Lead from FinUnique small private limited",
            }),
          });
        }
      }

      reset();
      setTempUserData(null);
      setTimeout(() => {
        window.location.href = "/login";
      }, 2000);
    } catch (err) {
      toast.dismiss(toastId);

      console.error("OTP Verification Error", err);

      const errorMessage =
        err?.response?.data?.message || "OTP verification failed";
      // Update the existing toast instead of creating another
      toast.update(toastId, {
        render: errorMessage,
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
      // Set manual form error
      if (err?.response?.data?.message) {
        setError("otp", { type: "manual", message: err.response.data.message });
      }
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
      <Toaster />
      <div className="min-h-screen py-3 bg-[#17040A]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 flex justify-center gap-2">
              Join <UserPlus className="h-10 w-10 text-white" />
              <span
                className="text-glow text-primary-500 flex justify-center gap-2 text-3xl md:text-4xl font-bold text-white mb-2"
                style={{
                  color: "#ff1028",
                  textShadow:
                    "0 0 5px #FF10F0, 0 0 10px #FF10F0, 0 0 20px #FF10F0",
                  letterSpacing: "3px",
                }}
              >
                FinUnique
              </span>
            </h1>
            <p className="text-gray-400">
              Create your account and start winning!
            </p>
          </div>

          {step === 1 ? (
            <div className="card-gaming p-5 bg-[#240612] rounded-md outline-1 outline-red-300 ">
              <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      First Name <span className="text-red-700">*</span>
                    </label>
                    <input
                      type="text"
                      {...register("firstName", {
                        required: "First name is required",
                        pattern: {
                          value: /^[A-Za-z\s]+$/,
                          message: "Only letters and spaces allowed",
                        },
                      })}
                      onKeyUp={() => trigger("firstName")}
                      onInput={(e) => {
                        e.target.value = e.target.value.replace(
                          /[^A-Za-z\s]/g,
                          ""
                        );
                      }}
                      className="w-full px-2 py-2 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-gray-400"
                      placeholder="First name"
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.firstName.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Last Name <span className="text-red-700">*</span>
                    </label>
                    <input
                      type="text"
                      {...register("lastName", {
                        required: "Last name is required",
                        pattern: {
                          value: /^[A-Za-z\s]+$/,
                          message: "Only letters and spaces allowed",
                        },
                      })}
                      onKeyUp={() => trigger("lastName")}
                      onInput={(e) => {
                        e.target.value = e.target.value.replace(
                          /[^A-Za-z\s]/g,
                          ""
                        );
                      }}
                      className="w-full px-2 py-2 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-gray-400"
                      placeholder="Last name"
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.lastName.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Mobile Number <span className="text-red-700">*</span>
                    </label>
                    <div className="flex">
                      <span className="inline-flex items-center px-1 rounded-l-lg border border-r-0 border-dark-600 bg-dark-700 text-gray-400 text-sm">
                        +91
                      </span>
                      <input
                        type="text"
                        maxLength={10}
                        inputMode="numeric"
                        {...register("mobile", {
                          required:
                            "Mobile number is required and start within 6-9",
                          pattern: {
                            value: /^[6-9]\d{9}$/,
                            message:
                              "Must start with 6-9 and be exactly 10 digits",
                          },
                        })}
                        onKeyUp={() => trigger("mobile")}
                        onInput={(e) => {
                          let val = e.target.value.replace(/\D/g, "");

                          if (val.length === 1 && !/^[6-9]$/.test(val)) {
                            val = "";
                          }

                          if (val.length > 10) {
                            val = val.slice(0, 10);
                          }

                          e.target.value = val;
                        }}
                        className="w-full px-2 py-2 bg-dark-700 border border-dark-600 rounded-br-lg rounded-tr-lg text-white placeholder-gray-400"
                        placeholder="Mobile number"
                      />
                    </div>
                    {errors.mobile && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.mobile.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="text"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: "Invalid email",
                        },
                      })}
                      onKeyUp={() => trigger("email")}
                      className="w-full px-2 py-2 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-gray-400"
                      placeholder="email"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Password <span className="text-red-700">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        {...register("password", {
                          required: "Password is required",
                          minLength: {
                            value: 6,
                            message: "Minimum 6 characters",
                          },
                        })}
                        onKeyUp={() => trigger("password")}
                        className="w-full px-2 py-2 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-gray-400 pr-12"
                        placeholder="Create password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                      >
                        {showPassword ? (
                          <EyeOff className="h-5 w-5" />
                        ) : (
                          <Eye className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                    {errors.password && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.password.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Confirm Password <span className="text-red-700">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        {...register("confirmPassword", {
                          required: "Confirm your password",
                          validate: (val) =>
                            val === password || "Passwords do not match",
                        })}
                        onKeyUp={() => trigger("confirmPassword")}
                        className="w-full px-2 py-2 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-gray-400 pr-12"
                        placeholder="Confirm password"
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="h-5 w-5" />
                        ) : (
                          <Eye className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                    {errors.confirmPassword && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.confirmPassword.message}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Referral Code (Optional)
                  </label>
                  <input
                    type="text"
                    {...register("referralCode")}
                    className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-gray-400"
                    placeholder="Enter referral code"
                  />
                </div>
                <div className="space-y-4">
                  <label className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      {...register("termsAccepted", { required: true })}
                      className="w-4 h-4 text-primary-500 bg-dark-700 border-dark-600 rounded mt-1 cursor-pointer"
                    />
                    <span className="text-sm text-gray-300">
                      I agree to the{" "}
                      <Link
                        to="/terms"
                        className="text-primary-400 hover:text-primary-300"
                      >
                        Terms & Conditions
                      </Link>{" "}
                      and{" "}
                      <Link
                        to="/privacy"
                        className="text-primary-400 hover:text-primary-300"
                      >
                        Privacy Policy
                      </Link>
                    </span>
                  </label>
                  {errors.termsAccepted && (
                    <p className="text-red-500 text-xs">Required</p>
                  )}
                  <label className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      {...register("is18Confirmed", { required: true })}
                      className="w-4 h-4 text-primary-500 bg-dark-700 border-dark-600 rounded mt-1 cursor-pointer"
                    />
                    <span className="text-sm text-gray-300">
                      I confirm that I am 18 years or older and understand the{" "}
                      <Link
                        to="/responsible-gaming"
                        className="text-primary-400 hover:text-primary-300"
                      >
                        Responsible Gaming
                      </Link>{" "}
                      guidelines
                    </span>
                  </label>
                  {errors.is18Confirmed && (
                    <p className="text-red-500 text-xs">Required</p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-primary flex items-center justify-center space-x-2 bg-[#ff1028] flex-1 py-2 px-4 rounded-md font-medium transition-all duration-300 text-sm sm:text-base hover:outline-1 outline-gray-200 hover:text-gray-200 tracking-wider cursor-pointer"
                >
                  {loading ? (
                    <span className="loader w-5 h-5 border-2 border-t-white border-b-white border-l-transparent border-r-transparent rounded-full animate-spin"></span>
                  ) : (
                    <>
                      <UserPlus className="h-5 w-5" />
                      <span>Create Account</span>
                    </>
                  )}
                </button>
              </form>
              <div className="mt-6 text-center">
                <p className="text-gray-400">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="text-primary-400 hover:text-primary-300 font-semibold cursor-pointer"
                  >
                    Login here
                  </Link>
                </p>
              </div>
            </div>
          ) : (
            <div className="card-gaming p-8">
              <div className="text-center mb-6">
                <div className="bg-gradient-to-r from-neon-500 to-neon-600 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">
                  Verify Your Mobile
                </h2>
                <p className="text-gray-400">
                  We've sent a 6-digit OTP to your mobile number
                </p>
                <p className="text-primary-400 font-semibold">+91 ******</p>
              </div>
              <form
                className="space-y-6"
                onSubmit={handleOtpSubmit(onVerifyOtp)}
              >
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2 text-center">
                    Enter 6-Digit OTP
                  </label>
                  <input
                    type="text"
                    maxLength={6}
                    {...registerOTP("otp", {
                      required: "OTP is required",
                      pattern: {
                        value: /^\d{6}$/,
                        message: "Enter valid 6-digit OTP",
                      },
                    })}
                    onKeyUp={() => triggerOtp("otp")}
                    className="w-full text-center text-xl font-bold bg-dark-700 border border-dark-600 rounded-lg text-white px-4 py-2"
                    placeholder="Enter OTP"
                  />
                  {otpErrors.otp && (
                    <p className="text-red-500 text-xs mt-1">
                      {otpErrors.otp.message}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-primary flex items-center justify-center space-x-2 bg-[#ff1028] flex-1 py-2 px-4 rounded-md font-medium text-white cursor-pointer"
                >
                  {loading ? (
                    <span className="loader w-5 h-5 border-2 border-t-white border-b-white border-l-transparent border-r-transparent rounded-full animate-spin"></span>
                  ) : (
                    <>
                      <Check className="h-5 w-5" />
                      <span>Verify OTP</span>
                    </>
                  )}
                </button>
                <div className="mt-4 text-center">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="text-sm text-gray-400 hover:text-white cursor-pointer"
                  >
                    ← Back to Registration
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
