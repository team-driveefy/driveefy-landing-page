"use client";

import { useState } from "react";
import { Truck, Menu, X } from "lucide-react";
import Link from "next/link";

import { notify } from "@/utils/utils";
import Navbar from "./Navbar";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => notify("info", "Coming");
  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="container fixed top-0 left-0 right-0 bg-white/40 backdrop-blur-md shadow-sm z-50 rounded-full mt-5">
      <div className="mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Truck className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-primary">DRIVEEFY</span>
            </Link>
          </div>

          {/* Desktop Navbar */}
          <div className="hidden md:block">
            <Navbar />
          </div>

          {/* Mobile Hamburger */}
          <div className="block md:hidden">
            <button onClick={toggleMenu} aria-label="Toggle Menu">
              {menuOpen ? (
                <X className="h-6 w-6 text-gray-800" />
              ) : (
                <Menu className="h-6 w-6 text-gray-800" />
              )}
            </button>
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-800 hover:text-primary">Log In</button>
            <button
              className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-800"
              onClick={handleClick}
            >
              Get Demo
            </button>
          </div>
        </div>
      </div>

      {/* Overlay Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-center items-center">
          <div className="bg-white w-screen h-screen rounded-lg p-5">
            <nav className="flex flex-col space-y-4">
              <Link href="/" onClick={closeMenu}>
                Home
              </Link>
              <Link href="/about" onClick={closeMenu}>
                About
              </Link>
              <Link href="/services" onClick={closeMenu}>
                Services
              </Link>
              <Link href="/contact" onClick={closeMenu}>
                Contact
              </Link>
            </nav>
            <button
              className="mt-4 bg-primary text-white w-full py-2 rounded-lg hover:bg-blue-800"
              onClick={handleClick}
            >
              Get Demo
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
