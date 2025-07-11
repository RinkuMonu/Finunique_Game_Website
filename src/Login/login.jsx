import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LogIn, Shield, Eye, EyeOff } from "lucide-react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import api from "../Service/axios";
import { ContextData } from "../Service/context";

const LoginPage = () => {
  const { token } = useContext(ContextData);
  useEffect(() => {
    if (token) {
      window.history.back();
    }
  }, [token]);

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loginMode, setLoginMode] = useState("password");
  const [sendingOtp, setSendingOtp] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    watch,
  } = useForm({ mode: "onChange" });

  const data = watch();

  const onSubmit = async (data) => {
    setLoading(true);
    // const toastId = toast.loading("Logging in...");

    try {
      const payload =
        loginMode === "password"
          ? { emailOrMobile: data.email, password: data.password }
          : { emailOrMobile: data.mobile, otp: data.otp };

      const res = await api.post("/auth/login", payload);

      if (res.status === 200) {
        toast.success(res?.data?.message || "Login successful");
        localStorage.setItem("token", res.data.token);
        setTimeout(() => {
          window.location.href = "/";
        }, 2000);
      }
    } catch (err) {
      console.error("Login error", err);
      const message = err?.response?.data?.message || "Login failed";
    } finally {
      setLoading(false);
    }
  };

  const handleSendOtp = async () => {
    const valid = await trigger("mobile");
    if (!valid) return;

    setSendingOtp(true);
    const toastId = toast.loading("Sending OTP...");
    try {
      const res = await api.post("/auth/send-otp", {
        mobile: watch("mobile"),
        forLogin: true,
      });
      toast.success(res.data.message);
    } catch (err) {
      if (toast.isActive(toastId)) {
        toast.error(err?.response?.data?.message || "Failed to send OTP");
      }
    } finally {
      setSendingOtp(false);
    }
  };

  return (
    <>
      <Toaster />
      <div className="min-h-screen bg-[#17040A] py-6 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="w-full max-w-md space-y-10">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
              Welcome Back to{" "}
              <span
                className="text-glow text-primary-500 flex justify-center gap-2"
                style={{
                  color: "#ff1028",
                  textShadow:
                    "0 0 5px #FF10F0, 0 0 10px #FF10F0, 0 0 20px #FF10F0",
                  letterSpacing: "3px",
                }}
              >
                FinUnique zone
                <LogIn className="h-10 w-10 text-white" />
              </span>
            </h1>
            <p className="text-gray-400 text-sm sm:text-base">
              Login to continue your winning streak!
            </p>
          </div>

          <div className="card-gaming p-6 sm:p-8 bg-dark-800 rounded-lg shadow-lg outline-1 outline-gray-400">
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  {loginMode === "password"
                    ? "Enter your email"
                    : "Enter your mobile number"}
                </label>

                {loginMode === "password" ? (
                  <>
                    <input
                      type="text"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^\S+@\S+\.\S+$/,
                          message: "Enter a valid email",
                        },
                      })}
                      onKeyUp={() => trigger("email")}
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-gray-400"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </>
                ) : (
                  <>
                    <input
                      type="text"
                      inputMode="numeric"
                      maxLength={10}
                      {...register("mobile", {
                        required: "Mobile number is required",
                        validate: (value) => {
                          if (!/^[6-9]/.test(value))
                            return "Must start with 6-9";
                          if (value.length !== 10)
                            return "Mobile number must be exactly 10 digits";
                          return true;
                        },
                      })}
                      onInput={(e) => {
                        e.target.value = e.target.value
                          .replace(/[^0-9]/g, "")
                          .slice(0, 10);
                      }}
                      onKeyUp={() => trigger("mobile")}
                      placeholder="Enter your mobile number"
                      className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-gray-400"
                    />
                    {errors.mobile && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.mobile.message}
                      </p>
                    )}

                    <button
                      type="button"
                      disabled={sendingOtp}
                      onClick={handleSendOtp}
                      className={`text-sm mt-2 flex items-center gap-2 ${
                        sendingOtp
                          ? "text-gray-400"
                          : "text-blue-400 hover:text-blue-300"
                      } ${errors.mobile && "hidden"}`}
                    >
                      {sendingOtp ? (
                        <span className="loader w-4 h-4 border-2 border-t-white border-b-white border-l-transparent border-r-transparent rounded-full animate-spin"></span>
                      ) : (
                        "Send OTP"
                      )}
                    </button>
                  </>
                )}
              </div>

              {loginMode === "password" ? (
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      {...register("password", {
                        required: "Password is required",
                        minLength: {
                          value: 6,
                          message: "Minimum 6 characters",
                        },
                      })}
                      onKeyUp={() => trigger("password")}
                      className="w-full px-4 py-3 pr-12 bg-dark-700 border border-dark-600 rounded-lg text-white"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                      aria-label="Toggle Password Visibility"
                    >
                      {showPassword ? <EyeOff /> : <Eye />}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.password.message}
                    </p>
                  )}
                </div>
              ) : (
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    OTP
                  </label>
                  <input
                    type="text"
                    maxLength={6}
                    {...register("otp", {
                      required: "OTP is required",
                      pattern: {
                        value: /^\d{6}$/,
                        message: "Enter valid 6-digit OTP",
                      },
                    })}
                    onInput={(e) => {
                      e.target.value = e.target.value.replace(/\D/g, "");
                    }}
                    onKeyUp={() => trigger("otp")}
                    placeholder="Enter 6-digit OTP"
                    className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white"
                  />
                  {errors.otp && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.otp.message}
                    </p>
                  )}
                </div>
              )}

              <div className="flex justify-center gap-4 mt-2">
                <button
                  type="button"
                  className={`px-3 py-1 rounded ${
                    loginMode === "password"
                      ? "bg-red-700 text-white"
                      : "bg-gray-700 text-gray-300"
                  }`}
                  onClick={() => setLoginMode("password")}
                >
                  Login with Password
                </button>
                <button
                  type="button"
                  className={`px-3 py-1 rounded ${
                    loginMode === "otp"
                      ? "bg-red-700 text-white"
                      : "bg-gray-700 text-gray-300"
                  }`}
                  onClick={() => setLoginMode("otp")}
                >
                  Login with OTP
                </button>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full hover:outline-1 flex items-center justify-center space-x-2 py-3 rounded-lg text-white font-semibold bg-[#ff1028]"
              >
                {loading ? (
                  <span className="loader w-5 h-5 border-2 border-t-white border-b-white border-l-transparent border-r-transparent rounded-full animate-spin"></span>
                ) : (
                  <>
                    <LogIn className="h-5 w-5" />
                    <span
                      style={{
                        color: "#ffff",
                        textShadow:
                          "0 0 5px #FF10F0, 0 0 10px #FF10F0, 0 0 20px #FF10F0",
                        letterSpacing: "3px",
                      }}
                    >
                      Login to Play
                    </span>
                  </>
                )}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-400 text-sm">
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="text-primary-400 hover:text-primary-300 font-semibold"
                >
                  Register now
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
