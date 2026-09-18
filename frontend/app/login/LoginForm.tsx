"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";
interface Props {
  isOpen: boolean;
}

export default function LoginForm({ isOpen }: Props) {
  const [show, setShow] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const [error, setError] = useState({
    email: "",
    password: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value, checked, type } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    setError((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newError = {
      email: "",
      password: "",
    };

    if (!formData.email.trim()) {
      newError.email = "📧 Email is required";
    }

    if (!formData.password.trim()) {
      newError.password = "🔒 Password is required";
    }

    setError(newError);

    if (newError.email || newError.password) return;

    console.log(formData);

    alert("Login Success");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{
            opacity: 0,
            y: 100,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: 100,
          }}
          transition={{
            duration: 0.4,
          }}
          className="
          w-full
          max-w-md
          rounded-3xl
          bg-white/10
          backdrop-blur-xl
          border
          border-white/20
          p-8
          text-white
          shadow-2xl
          "
        >
          <h1 className="text-3xl font-bold text-center mb-8">
            Login
          </h1>

          <form onSubmit={handleSubmit}>
            {/* Email */}

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className={`
                w-full
                rounded-xl
                bg-black/30
                p-4
                outline-none
                border
                transition-all
                duration-300
                ${
                  error.email
                    ? "border-red-500"
                    : "border-white/10 focus:border-yellow-400"
                }
              `}
            />

            <AnimatePresence>
              {error.email && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="
                  text-red-400
                  text-sm
                  mt-2
                  ml-2
                  font-medium
                  "
                >
                  {error.email}
                </motion.p>
              )}
            </AnimatePresence>

            {/* Password */}

            <div className="relative mt-5">
              <input
                type={show ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className={`
                  w-full
                  rounded-xl
                  bg-black/30
                  p-4
                  outline-none
                  border
                  transition-all
                  duration-300
                  ${
                    error.password
                      ? "border-red-500"
                      : "border-white/10 focus:border-yellow-400"
                  }
                `}
              />

              <button
                type="button"
                onClick={() => setShow(!show)}
                className="
                absolute
                right-4
                top-1/2
                -translate-y-1/2
                text-yellow-300
                font-semibold
                hover:text-yellow-400
                transition
                "
              >
                {show ? "Hide" : "Show"}
              </button>
            </div>

            <AnimatePresence>
              {error.password && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="
                  text-red-400
                  text-sm
                  mt-2
                  ml-2
                  font-medium
                  "
                >
                  {error.password}
                </motion.p>
              )}
            </AnimatePresence>

            {/* Remember */}

            <div
              className="
              flex
              justify-between
              items-center
              mt-6
              text-sm
              "
            >
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="remember"
                  checked={formData.remember}
                  onChange={handleChange}
                />

                Remember me
              </label>

              <a
                href="/forgot-password"
                className="
                text-yellow-300
                hover:text-yellow-400
                hover:underline
                transition
                "
              >
                Forgot Password?
              </a>
            </div>

            {/* Login Button */}

            <button
              type="submit"
              className="
              mt-8
              w-full
              rounded-xl
              bg-gradient-to-r
              from-yellow-400
              to-orange-500
              py-4
              font-bold
              text-black
              hover:scale-105
              active:scale-95
              transition-all
              duration-300
              shadow-lg
              "
            >
              Login
            </button>
          </form>

          <p
            className="
            text-center
            mt-7
            text-gray-300
            "
          >
            Don't have an account?

            <a
              href="/register"
              className="
              ml-2
              text-yellow-300
              font-bold
              hover:text-yellow-400
              hover:underline
              transition
              "
            >
              Register
            </a>
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}