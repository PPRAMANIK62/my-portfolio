"use client";
import RevealLogo from "@/app/utils/RevealLogo.jsx";
import RevealNavbar from "@/app/utils/RevealNavbar.jsx";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import MenuOverlay from "./MenuOverlay.jsx";
import Navlink from "./Navlink.jsx";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact Me",
    path: "#contact",
  },
];

function Navbar() {
  const [navBarOpen, setNavBarOpen] = useState(false);

  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-20 bg-black bg-opacity-90">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-8 py-4 md:px-12">
        <RevealLogo>
          <a href="#" className="text-2xl md:text-5xl text-white font-semibold">
            LOGO
          </a>
        </RevealLogo>
        <div className="mobile-menu block md:hidden">
          {!navBarOpen ? (
            <button
              onClick={() => setNavBarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white transition-all"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavBarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white transition-all"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <RevealNavbar key={index} index={index}>
                <li>
                  <Navlink href={link.path} title={link.title} />
                </li>
              </RevealNavbar>
            ))}
          </ul>
        </div>
      </div>
      {navBarOpen ? (
        <MenuOverlay links={navLinks} navBarOpen={navBarOpen} setNavBarOpen={setNavBarOpen} />
      ) : null}
    </nav>
  );
}

export default Navbar;
