"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "blog", label: "Blog" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollPosition = window.scrollY + 120;

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const element = document.getElementById(section.id);

        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (
            scrollPosition >= top &&
            scrollPosition < top + height
          ) {
            setActive(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">

        {/* Logo */}
        <a href="#home" className="font-bold text-lg transform scale-95 transition-transform duration-300 hover:scale-100">BIKASH</a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          {sections.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={
                active === item.id
                  ? "text-primary font-semibold"
                  : "text-textMuted hover:text-primary"
              }
            >
              {item.label}
            </a>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />

          <button
            onClick={() => setOpen(!open)}
            className="p-2 border border-gray-300 dark:border-gray-600 rounded-md"
            aria-label="Toggle Menu"
          >
            {open ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
      <div className="md:hidden">
        <div
          className="
            absolute top-16 left-0 w-full
            bg-white/70 dark:bg-gray-900/70
            backdrop-blur-md
            border-t border-gray-200/50 dark:border-gray-800/50
            z-40">
          <div className="flex flex-col gap-6 px-6 py-8 text-base">

            <a href="#home" onClick={() => setOpen(false)}>Home</a>
            <a href="#about" onClick={() => setOpen(false)}>About</a>
            <a href="#education" onClick={() => setOpen(false)}>Education</a>
            <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
            <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
            <a href="#blog" onClick={() => setOpen(false)}>Blog</a>
            <a href="#contact" onClick={() => setOpen(false)}>Contact</a>

          </div>
        </div>
      </div>
    )}

    </nav>
  );
}