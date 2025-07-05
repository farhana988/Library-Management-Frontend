import { CiFacebook, CiInstagram, CiLinkedin, CiTwitter } from "react-icons/ci";
const socialLinks = [
  { href: "https://facebook.com", icon: <CiFacebook /> },
  { href: "https://twitter.com", icon: <CiTwitter /> },
  { href: "https://instagram.com", icon: <CiInstagram /> },
  { href: "https://linkedin.com", icon: <CiLinkedin /> },
];
const Footer = () => {
  return (
    <footer className="bg-primary py-6 mt-32">
      <div className="md:w-5/6 xl:w-1/2 mx-auto px-4">
        {/* Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/*  Website Name */}
          <div className="mb-4 md:mb-0 text-center md:text-start">
            <h1 className="text-xl xl:text-3xl font-bold italic">Read Mate</h1>
            <p className="md:w-4/6 md:mx-0">
              BookMate offers a functional and efficient solution for managing a
              small library of books
            </p>
          </div>

          {/* Social Media Links */}
          <div className="flex gap-6 text-2xl">
            {socialLinks.map(({ href, icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright Info */}
        <div className="mt-14 text-center text-sm">
          <p>&copy; 2025 Read Mate. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
