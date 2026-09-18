"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import image from "@/public/image/logo.png";

type MenuItem = {
  name: string;
  href: string;
};

const menuItems: MenuItem[] = [
  { name: "Home", href: "/home" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "More Details", href: "/more" },
  { name: "Login", href: "/login" },
];

const navLinkGradient =
  "inline-block px-3 py-2 font-medium bg-gradient-to-r from-green-500 via-red-500 to-blue-500 bg-clip-text text-transparent transition-all duration-300 hover:text-white";


const navLinkGlass =
  "rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-green-500 hover:via-red-500 hover:to-blue-500 hover:shadow-[0_0_20px_rgba(92,98,232,0.6)]";


export default function Navbar(): React.JSX.Element {

  const [open, setOpen] = useState(false);


  return (
    <nav className="sticky top-0 z-50 w-full bg-black shadow-lg">

      <div className="container mx-auto px-4">

        <div className="flex h-16 items-center justify-between">


          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">

            <Image
              src={image}
              alt="Logo"
              width={50}
              height={50}
              priority
              className="rounded-full"
            />


            <span
              className="
              hidden md:block
              text-xl font-bold
              bg-gradient-to-r from-[#2cf005] via-[#eb7304] to-[#450be4]
              bg-clip-text text-transparent
              transition-transform duration-300 hover:scale-105
              "
            >
              Eng Md Shamioul Islam
            </span>

          </Link>



          {/* Desktop Menu */}
          <ul className="hidden items-center gap-2 md:flex">

            {menuItems.map((item) => (

              <li key={item.href} className={navLinkGlass}>

                <Link
                  href={item.href}
                  className={navLinkGradient}
                >
                  {item.name}
                </Link>

              </li>

            ))}

          </ul>



          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="rounded-xl p-2 text-white transition hover:bg-gray-700 md:hidden"
            aria-label="Toggle Menu"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>


        </div>



        {/* Mobile Menu */}

        <div
          className={`
          overflow-hidden transition-all duration-300 md:hidden
          ${open ? "max-h-screen pb-3" : "max-h-0"}
          `}
        >

          <ul className="flex flex-col gap-1 bg-gray-900 rounded-xl p-3">

            {menuItems.map((item) => (

              <li
                key={item.href}
                className={navLinkGlass}
              >

                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={navLinkGradient}
                >
                  {item.name}
                </Link>

              </li>

            ))}

          </ul>

        </div>


      </div>

    </nav>
  );
}