import Image from "next/image";
import image from "@/public/image/shami.png";
import AnimatedText from "@/app/components/Name/name";
import Typewriter from "@/app/components/Name/Typewriter";
import ScrambleText from "@/app/components/Name/ScrambleText";
import Link from "next/link";
import { MapPinPlus } from "lucide-react";
import {  BriefcaseBusiness,  FolderGit2, Clock3,  HeartHandshake, Laptop } from "lucide-react";


export default function Page() {
  return (
    <section className="min-h-0 w-full bg-black ">
      <div className="container mx-auto min-h-screen grid grid-cols-1 md:grid-cols-2 items-center gap-8 p-4">

        {/* Left Side */}
        <div className="flex justify-center">
          <Image
            src={image}
            alt="Shamioul"
            width={350}
            height={350}
            className="rounded-xl shadow-2xl bg-gradient-to-r bg-amber-200 from-blue-200 via-green-400 to-yellow-200 shadow-green-500"/>
        </div>
        {/* Right Side */}
        <div className="text-center md:text-left">

          <h1 className="bg-gradient-to-r from-red-500 via-green-500 to-yellow-500 text-4xl font-bold bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(168,85,247,0.7)]">
            <Typewriter words={["Hello, I'm"]}  />
          </h1>

          <h1 className="text-blue-500 font-bold text-3xl md:text-4xl mb-5 mt-5">
            <AnimatedText texts={[ "Eng. Md Shamioul Islam",
  "Bsc in Computer Science & Engineering",]} design={ `text-4xl
      font-extrabold
      bg-gradient-to-r
      from-violet-500
      via-fuchsia-500
      via-red-500
      to-orange-400
      bg-clip-text
      text-transparent
      drop-shadow-[0_0_10px_rgba(168,85,247,.7)]
      drop-shadow-[0_0_25px_rgba(236,72,153,.5)]
      transition-all
      duration-300
      `} />
          </h1>
          <h1 className="text-blue-500 font-bold text-xl md:text-2xl mb-6">
            <ScrambleText words={[
  "Full Stack Web Desing & Developer",
  "MERN Stack Web Desing & Developer",
  "UI Architectss"
]} />
          </h1>
          <h1 className="flex items-center justify-center md:justify-start gap-3 text-xl font-bold">

            <MapPinPlus className="size-8 md:size-10 text-green-500" />

            <span className="bg-gradient-to-r from-green-500 via-red-500 to-gray-500 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(168,85,247,0.7)]">
              <Typewriter words={ ["Uttar Badda, Dhaka, Bangladesh"]} />
            </span>
          </h1>
          {/* Buttons */}
        <div className="mt-8">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-5 text-center">

  <a
  href="/resume/cv.png"
  download="Md_Shamioul_Islam_CV.png"
  className="block"
>
  <div
    className="
      rounded-xl 
      bg-gradient-to-r 
      from-violet-600 
      to-fuchsia-600 
      px-5 
      py-3 
      text-sm 
      font-medium 
      text-white 
      shadow-lg 
      transition-all 
      duration-300 
      hover:scale-105 
      hover:shadow-violet-500/50
    "
  >
    📄 Download CV
  </div>
</a>

  <a
  href="/resume/education.png"
  download="Md_Shamioul_Islam_Education_Details.png"
  className="block"
>
  <div
    className="
      rounded-xl 
      bg-gradient-to-r 
      from-violet-600 
      to-fuchsia-600 
      px-5 
      py-3 
      text-sm 
      font-medium 
      text-white 
      shadow-lg 
      transition-all 
      duration-300 
      hover:scale-105 
      hover:shadow-violet-500/50
    "
  >
    🎓 Download Education
  </div>
</a>



<a
  href="/resume/experience.png"
  download="Md_Shamioul_Islam_Experience.png"
  className="block"
>
  <div className="rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-5 py-3 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-violet-500/50">
    💼 Download Experience
  </div>
</a>


<a
  href="/resume/project.png"
  download="Md_Shamioul_Islam_Projects.png"
  className="block"
>
  <div className="rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-5 py-3 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-violet-500/50">
    🚀 Download Projects
  </div>
</a>


<a
  href="/resume/cv.png"
  download="Md_Shamioul_Islam_Contact.png"
  className="block"
>
  <div className="rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-5 py-3 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-violet-500/50">
    📧 Download Contact
  </div>
</a>


  </div>
</div>
  </div>
    </div>
       <div className="container mx-auto px-4 pb-10 ">
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-5">
          {/* Experience */}
          <div className="group rounded-2xl p-[1px] bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 transition-all duration-300 hover:scale-105 active:scale-95">
            <div className="rounded-2xl bg-gray-950 p-5 text-center shadow-lg hover:shadow-purple-500/40 transition">
              <BriefcaseBusiness className="mx-auto mb-3 size-8 text-purple-400 group-hover:rotate-12 transition duration-300" />
              <h3 className="text-2xl font-bold text-white">2+</h3>
              <p className="text-sm text-gray-400">Years Experience</p>
            </div>
          </div>

          {/* Projects */}
          <div className="group rounded-2xl p-[1px] bg-gradient-to-r from-green-500 via-cyan-500 to-green-500 transition-all duration-300 hover:scale-105 active:scale-95">
            <div className="rounded-2xl bg-gray-950 p-5 text-center shadow-lg hover:shadow-green-500/40 transition">
              <FolderGit2 className="mx-auto mb-3 size-8 text-green-400 group-hover:rotate-12 transition duration-300" />
              <h3 className="text-2xl font-bold text-white">20+</h3>
              <p className="text-sm text-gray-400">Projects Completed</p>
            </div>
          </div>

          {/* Response */}
          <div className="group rounded-2xl p-[1px] bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500 transition-all duration-300 hover:scale-105 active:scale-95">
            <div className="rounded-2xl bg-gray-950 p-5 text-center shadow-lg hover:shadow-blue-500/40 transition">
              <Clock3 className="mx-auto mb-3 size-8 text-blue-400 group-hover:rotate-12 transition duration-300" />
              <h3 className="text-2xl font-bold text-white">2 Hours</h3>
              <p className="text-sm text-gray-400">Response Time</p>
            </div>
          </div>

          {/* Satisfaction */}
          <div className="group rounded-2xl p-[1px] bg-gradient-to-r from-red-500 via-orange-500 to-red-500 transition-all duration-300 hover:scale-105 active:scale-95">
            <div className="rounded-2xl bg-gray-950 p-5 text-center shadow-lg hover:shadow-red-500/40 transition">
              <HeartHandshake className="mx-auto mb-3 size-8 text-red-400 group-hover:rotate-12 transition duration-300" />
              <h3 className="text-2xl font-bold text-white">100%</h3>
              <p className="text-sm text-gray-400">Client Satisfaction</p>
            </div>
          </div>

          {/* Freelance */}
          <div className="group rounded-2xl p-[1px] bg-gradient-to-r from-yellow-500 via-green-500 to-yellow-500 transition-all duration-300 hover:scale-105 active:scale-95">
            <div className="rounded-2xl bg-gray-950 p-5 text-center shadow-lg hover:shadow-yellow-500/40 transition">
              <Laptop className="mx-auto mb-3 size-8 text-yellow-400 group-hover:rotate-12 transition duration-300" />
              <h3 className="text-lg font-bold text-white">Available</h3>
              <p className="text-sm text-gray-400">Freelance & Fiverr</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}