"use client";

import { useState } from "react";

import About from "./components/about/page";
import Education from "./components/education/page";
import Experience from "./components/experience/page";
import Contact from "./components/contact/page";
import Social from "./components/social/page";
import TechStack from "./components/skills/page";

export default function Page() {
  const [active, setActive] = useState("About");

  const menu = [
    { id: "About", label: "👨 About Me" },
    { id: "education", label: "🎓 Education" },
    { id: "experience", label: "💼 Experience" },
    { id: "contact", label: "📞 Contact" },
    { id: "social", label: "🌐 Social" },
    { id: "skills", label: "🚀 Skills" },
  ];

  return (
    <section className="min-h-screen bg-black text-white py-10">
      <div className="container mx-auto px-4">

        <div className="grid lg:grid-cols-4 gap-8">

          {/* Sidebar */}
          <div className="lg:col-span-1">

            <div className="sticky top-24 rounded-3xl border border-gray-800 bg-gray-950 p-6 shadow-2xl">

              <h2 className="mb-6 text-center text-3xl font-bold bg-gradient-to-r from-cyan-400 via-green-400 to-blue-500 bg-clip-text text-transparent">
                Portfolio
              </h2>

              <div className="space-y-4">
                {menu.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActive(item.id)}
                    className={`w-full rounded-xl px-5 py-4 text-left font-semibold transition-all duration-300

                    ${
                      active === item.id
                        ? "bg-gradient-to-r from-green-500 via-cyan-500 to-blue-500 text-white shadow-[0_0_25px_rgba(34,197,94,.5)] scale-105"
                        : "bg-gray-900 text-gray-300 border border-gray-700 hover:border-cyan-400 hover:bg-gradient-to-r hover:from-purple-600 hover:via-pink-600 hover:to-red-500 hover:text-white hover:scale-105"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

            </div>

          </div>

          {/* Content */}
          <div className="lg:col-span-3">

            <div className="rounded-3xl border border-gray-800 bg-gray-950 p-8 shadow-xl">
              {active === "About" && <About />}

              {active === "education" && <Education />}

              {active === "experience" && <Experience />}

              {active === "contact" && <Contact />}

              {active === "social" && <Social />}

              {active === "skills" && <TechStack />}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}