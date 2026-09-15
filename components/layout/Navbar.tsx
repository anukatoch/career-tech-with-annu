"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="border-b border-slate-200 bg-slate-900 text-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-6 sm:py-4">

        {/* Logo */}
        <Link
          href="/"
          onClick={closeMenu}
          className="text-2xl font-bold text-white"
        >
          Career Tech
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-8 md:flex">
          <li>
            <Link
              href="/"
              className={
                pathname === "/"
                  ? "font-semibold text-blue-400"
                  : "hover:text-blue-400"
              }
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/about"
              className={
                pathname === "/about"
                  ? "font-semibold text-blue-400"
                  : "hover:text-blue-400"
              }
            >
              About
            </Link>
          </li>

          <li>
            <Link
              href="/courses"
              className={
                pathname === "/courses"
                  ? "font-semibold text-blue-400"
                  : "hover:text-blue-400"
              }
            >
              Courses
            </Link>
          </li>

          <li>
            <Link
              href="/contact"
              className={
                pathname === "/contact"
                  ? "font-semibold text-blue-400"
                  : "hover:text-blue-400"
              }
            >
              Contact
            </Link>
          </li>

          <li>
  <Link
    href="/blog/javascript"
    className={
      pathname.startsWith("/blog")
        ? "font-semibold text-blue-400"
        : "hover:text-blue-400"
    }
  >
    Tutorials
  </Link>
</li>
        </ul>

        {/* Desktop CTA */}
        <Link
          href="/courses"
          className="hidden rounded-lg bg-blue-600 px-5 py-2 font-semibold text-white transition hover:bg-blue-700 md:block"
        >
          Start Learning
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen((current) => !current)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-2xl text-white transition hover:bg-white/10 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-slate-900 px-5 py-4 md:hidden">
          <div className="flex flex-col gap-1">

            <Link
              href="/"
              onClick={closeMenu}
              className={`rounded-lg px-4 py-3 font-medium transition ${
                pathname === "/"
                  ? "bg-white/10 text-blue-400"
                  : "text-white hover:bg-white/10 hover:text-blue-400"
              }`}
            >
              Home
            </Link>

            <Link
              href="/about"
              onClick={closeMenu}
              className={`rounded-lg px-4 py-3 font-medium transition ${
                pathname === "/about"
                  ? "bg-white/10 text-blue-400"
                  : "text-white hover:bg-white/10 hover:text-blue-400"
              }`}
            >
              About
            </Link>

            <Link
              href="/courses"
              onClick={closeMenu}
              className={`rounded-lg px-4 py-3 font-medium transition ${
                pathname === "/courses"
                  ? "bg-white/10 text-blue-400"
                  : "text-white hover:bg-white/10 hover:text-blue-400"
              }`}
            >
              Courses
            </Link>

            <Link
              href="/contact"
              onClick={closeMenu}
              className={`rounded-lg px-4 py-3 font-medium transition ${
                pathname === "/contact"
                  ? "bg-white/10 text-blue-400"
                  : "text-white hover:bg-white/10 hover:text-blue-400"
              }`}
            >
              Contact
            </Link>
<Link
  href="/blog/javascript"
  onClick={closeMenu}
  className={`rounded-lg px-4 py-3 font-medium transition ${
    pathname.startsWith("/blog")
      ? "bg-white/10 text-blue-400"
      : "text-white hover:bg-white/10 hover:text-blue-400"
  }`}
>
  Tutorials
</Link>
            

            {/* Mobile CTA */}
            <Link
              href="/courses"
              onClick={closeMenu}
              className="mt-2 rounded-lg bg-blue-600 px-5 py-3 text-center font-semibold text-white transition hover:bg-blue-700"
            >
              Start Learning
            </Link>

          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;