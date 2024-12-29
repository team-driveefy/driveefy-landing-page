import { NAVBAR } from "@/shared/constant";
import { CompanyIcon } from "@/shared/icons";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-primary text-gray-300 py-8">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <CompanyIcon className="w-40" fillClassName="fill-white" />
        </div>
        {/* Company Address */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Company Address
          </h3>
          <p className="text-sm">
            1234 Main Street
            <br />
            City, State, ZIP Code
            <br />
            Country
          </p>
          <p className="mt-2">Email: human-resources@driveefy.com</p>
          <p>Phone: +123 456 7890</p>
        </div>

        {/* Sitemap */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            {NAVBAR.map(({ href, title }) => (
              <li key={title}>
                <Link
                  href={`/${href === "home" ? "" : href}`}
                  className="hover:text-white capitalize"
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-white pt-4 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Driveefy. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
