import React, { useState } from "react";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-green-700 text-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">

        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="AgroLink AI Logo"
            className="h-12 w-auto object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-8 md:flex">
          <li>
            <a href="#" className="transition hover:text-yellow-300">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="transition hover:text-yellow-300">
              Marketplace
            </a>
          </li>
          <li>
            <a href="#" className="transition hover:text-yellow-300">
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="transition hover:text-yellow-300">
              About
            </a>
          </li>
        </ul>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button className="rounded-lg bg-yellow-400 px-5 py-2 font-semibold text-green-900 transition hover:bg-yellow-300">
            Get Started
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="text-3xl md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "×" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-green-600 bg-green-800 md:hidden">
          <ul className="flex flex-col px-6 py-4">
            <li className="border-b border-green-700 py-3">
              <a href="#" className="block hover:text-yellow-300">
                Home
              </a>
            </li>
            <li className="border-b border-green-700 py-3">
              <a href="#" className="block hover:text-yellow-300">
                Marketplace
              </a>
            </li>
            <li className="border-b border-green-700 py-3">
              <a href="#" className="block hover:text-yellow-300">
                Dashboard
              </a>
            </li>
            <li className="border-b border-green-700 py-3">
              <a href="#" className="block hover:text-yellow-300">
                About
              </a>
            </li>

            <li className="pt-4">
              <button className="w-full rounded-lg bg-yellow-400 px-5 py-2 font-semibold text-green-900">
                Get Started
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;