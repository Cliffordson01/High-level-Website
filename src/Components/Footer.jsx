/* Author:............... Cliffordson Cetoute*/
/* Objective:............ Design a Website using React.js / Tailwind CSS / GSAP*/
/* Date:................ 20/01/2025*/

import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";

const links = [
  { href: "https://github.com/Cliffordson01", icon: <FaGithub /> },
  {
    href: "https://www.instagram.com/cliff_neatq/?hl=en",
    icon: <FaInstagram />,
  },
  { href: "https://www.linkedin.com/login/pt", icon: <FaLinkedin /> },
];
const Footer = () => {
  return (
    <footer className="w-screen bg-violet-300 py-4 text-black">
      <div
        className="container mx-auto flex flex-col items-center
        justify-between gap-4 px-4 md:flex-row"
      >
        <p className="text-center text-sm md:text-left">
          &copy; Cliffordson 2025. All rights reserved
        </p>
        <div className="flex justify-center gap-4 md:justify-start">
          {links.map((link) => (
            <a
              key={link}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black
                transition-colors duration-500 ease-in-out hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>
        <a
          href="#privacy-policy"
          className="text-center text-sm hover:underline md:text-right"
        >
          privacy policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
