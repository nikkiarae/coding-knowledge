import React from "react";
import { FOOTER_LINKS, SOCIAL_LINKS } from "@/lib/constants/navigation";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* Footer Links */}
        <nav className="flex space-x-4">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-white transition"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Social Links */}
        <div className="flex space-x-4">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <social.icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
      <p className="text-center text-sm mt-4">
        © {new Date().getFullYear()} MyWebsite. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;