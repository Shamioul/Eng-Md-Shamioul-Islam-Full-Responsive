import { AtSign, MapPinned,ArrowUp  } from "lucide-react";
import GoogleMapComponent from "../map/map";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="w-full bg-black text-white shadow-2xl">
      <div className="mx-auto grid grid-cols-12 p-4">

        {/* Map */}
        <div className="col-span-12 md:col-span-3 h-[80px]">
          <GoogleMapComponent />
        </div>

        {/* CENTER TEXT */}
        <div className="col-span-12 md:col-span-4 flex flex-col items-center justify-center text-center gap-3">

          <div className="flex items-center gap-2 text-sm">
            <AtSign size={16} />
            <span>2026 Eng Md Shamioul Islam. All rights reserved.</span>
          </div>

          <div className="text-xs text-gray-400">
            Built with Next.js, React, Node.js, MongoDB, Tailwind CSS & TypeScript
          </div>

          <div className="flex items-center gap-2 text-sm">
            <span>Made With ❤️ In Bangladesh 🇧🇩</span>
            <MapPinned size={16} />
          </div>

        </div>
        {/* Right */}
        <div className="col-span-12 md:col-span-5 flex items-center justify-center text-gray-400">
        <ul className=" bg-transparent flex flex-col gap-1 text-xs md:flex-row md:gap-4 ">
          <li className="hover:text-white rounded-lg shadow-[0_0_25px_rgba(255,255,255,0.4)] transition-all duration-300 ease-in-out hover:shadow-[0_0_25px_rgba(255,255,255,0.8)] p-2 ">Privacy Policy</li>
          <li className="hover:text-white rounded-lg shadow-[0_0_25px_rgba(255,255,255,0.4)] transition-all duration-300 ease-in-out hover:shadow-[0_0_25px_rgba(255,255,255,0.8)] p-2 ">Terms of Service</li>
          <li className="hover:text-white rounded-lg shadow-[0_0_25px_rgba(255,255,255,0.4)] transition-all duration-300 ease-in-out hover:shadow-[0_0_25px_rgba(255,255,255,0.8)] p-2 ">Cookies Policy</li>
          <li className="hover:text-white rounded-lg shadow-[0_0_25px_rgba(255,255,255,0.4)] transition-all duration-300 ease-in-out hover:shadow-[0_0_25px_rgba(255,255,255,0.8)] p-2 ">Sitemap</li>
          <li className="hover:text-white rounded-lg shadow-[0_0_25px_rgba(255,255,255,0.4)] transition-all duration-300 ease-in-out hover:shadow-[0_0_25px_rgba(255,255,255,0.8)] p-2 ">Version 6.1.5 </li>
        </ul>
        <button type="button" className="text-center ml-4 bg-white text-black hover:bg-gray-200 rounded-lg shadow-[0_0_25px_rgba(255,255,255,0.4)] transition-all duration-300 ease-in-out hover:shadow-[0_0_25px_rgba(255,255,255,0.8)] p-2 ">
          <Link href="/" >Back to Top</Link>
          <ArrowUp size={16} className="inline-block ml-1 animate-bounce" />
        </button>
        </div>
       
      </div>
    </footer>
  );
}