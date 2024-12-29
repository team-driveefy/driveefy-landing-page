"use client";

import { Fragment, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

import { CompanyIcon } from "@/shared/icons";
import { NAVBAR } from "@/shared/constant";
import { Button } from "@/shared/ui/Button";
import { notify } from "@/utils/notify";

import Navbar from "./Navbar";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => notify("info", "Coming");
  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="container fixed top-0 left-0 right-0 bg-white/40 backdrop-blur-md shadow-sm z-50 rounded-full mt-5">
        <div className="mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo Section */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <CompanyIcon className="w-40" />
              </Link>
            </div>

            {/* Desktop Navbar */}
            <div className="hidden md:block">
              <Navbar />
            </div>

            {/* Mobile Hamburger */}
            <div className="block md:hidden">
              <Menu className="h-6 w-6 text-gray-800" onClick={toggleMenu} />
            </div>

            {/* Action Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="secondary" title="Log In" />
              <Button
                variant="primary"
                title="Get Demo"
                onClick={handleClick}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Overlay Menu */}
      {menuOpen && (
        <Fragment>
          <div
            className="fixed top-0 left-0 bg-black/50 z-[51] w-screen h-screen overflow-hidden md:hidden"
            onClick={toggleMenu}
          ></div>
          <div className="fixed top-0 left-0 w-screen h-screen inset-0 z-[51] flex justify-start items-center animate-slide-to-right overflow-hidden md:hidden">
            <div className="bg-white rounded-lg p-5 w-[80%] h-full">
              <X
                className="h-6 w-6 ms-auto text-gray-800"
                onClick={toggleMenu}
              />
              <nav className="flex flex-col space-y-4">
                {NAVBAR.map(({ href, title }, idx) => (
                  <Link
                    key={idx}
                    href={`/${href === "home" ? "" : href}`}
                    onClick={closeMenu}
                    className="capitalize"
                  >
                    {title}
                  </Link>
                ))}
              </nav>
              <Button variant="secondary" title="Log In" className="my-4" />
              <Button
                className="w-full"
                variant="primary"
                title="Get Demo"
                onClick={handleClick}
              />
            </div>
          </div>
        </Fragment>
      )}
    </>
  );
}
