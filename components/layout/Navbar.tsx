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

  const isTutorialActive = pathname.startsWith("/blog");

  return (
    <header className="border-b border-slate-200 bg-slate-900 text-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-6 sm:py-4">

        {/* LOGO */}

        <Link
          href="/"
          onClick={closeMenu}
          className="text-2xl font-bold text-white"
        >
          Career Tech
        </Link>

        {/* DESKTOP NAVIGATION */}

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

          {/* TUTORIALS */}

          <li>
            <Link
              href="/blog"
              className={
                isTutorialActive
                  ? "font-semibold text-blue-400"
                  : "hover:text-blue-400"
              }
            >
              Tutorials
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

        </ul>

        {/* START LEARNING */}

        <Link
          href="/courses"
          className="hidden rounded-lg bg-blue-600 px-5 py-2 font-semibold text-white transition hover:bg-blue-700 md:block"
        >
          Start Learning
        </Link>

        {/* MOBILE MENU BUTTON */}

        <button
          type="button"
          onClick={() =>
            setMenuOpen((current) => !current)
          }
          className="flex h-10 w-10 items-center justify-center rounded-lg text-2xl text-white transition hover:bg-white/10 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </nav>

      {/* MOBILE NAVIGATION */}

      {menuOpen && (
        <div className="border-t border-white/10 bg-slate-900 px-5 py-4 md:hidden">

          <div className="flex flex-col gap-1">

            <Link
              href="/"
              onClick={closeMenu}
              className="rounded-lg px-3 py-3 hover:bg-white/10"
            >
              Home
            </Link>

            <Link
              href="/about"
              onClick={closeMenu}
              className="rounded-lg px-3 py-3 hover:bg-white/10"
            >
              About
            </Link>

            <Link
              href="/courses"
              onClick={closeMenu}
              className="rounded-lg px-3 py-3 hover:bg-white/10"
            >
              Courses
            </Link>

            {/* MOBILE TUTORIALS */}

            <Link
              href="/blog"
              onClick={closeMenu}
              className="rounded-lg px-3 py-3 hover:bg-white/10"
            >
              Tutorials
            </Link>

            <Link
              href="/contact"
              onClick={closeMenu}
              className="rounded-lg px-3 py-3 hover:bg-white/10"
            >
              Contact
            </Link>

            <Link
              href="/courses"
              onClick={closeMenu}
              className="mt-2 rounded-lg bg-blue-600 px-3 py-3 font-semibold text-white hover:bg-blue-700"
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