import React from "react";
import { NAV_LINKS } from "@/lib/constants/navigation";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          Coding Principles
        </Link>

        {/* Navigation Links */}
        <nav className="flex space-x-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              className="text-white hover:text-gray-300 transition"
              href={link.href}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;