"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { NAVBAR } from "@/shared/constant";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isActive, setIsActive] = useState("home");
  const currentPath = usePathname();

  useEffect(() => {
    setIsActive(currentPath.split("/")[1] || "home");
  }, [currentPath]);

  return (
    <nav className="hidden md:block">
      <ul className="items-center space-x-8 flex">
        {NAVBAR.map(({ title, href }, index) => (
          <li key={index}>
            <Link
              href={`/${href === "home" ? "" : href}`}
              className={`${
                isActive === href ? "text-red-800" : "text-gray-800"
              } hover:text-primary capitalize font-semibold`}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
