"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="border-b border-slate-200 bg-slate-900 text-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-slate-900 text-white"
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
      ? "text-blue-400 font-semibold"
      : "hover:text-blue-400"
  }
>
  Home
</Link>
          </li>

          <li>
            <Link href="/about"  className={
    pathname === "/about"
      ? "text-blue-400 font-semibold"
      : "hover:text-blue-400"
  }>
              About
            </Link>
          </li>

          <li>
            <Link href="/courses"  className={
    pathname === "/courses"
      ? "text-blue-400 font-semibold"
      : "hover:text-blue-400"
  }>
              Courses
            </Link>
          </li>

          <li>
            <Link href="/contact"  className={
    pathname === "/contact"
      ? "text-blue-400 font-semibold"
      : "hover:text-blue-400"
  }>
              Contact
            </Link>
          </li>
        </ul>

        {/* Desktop CTA */}
        <Link
          href="/courses"
          className="hidden rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700 md:block"
        >
          Start Learning
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl md:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-slate-200 bg-white px-6 py-5 md:hidden">

          <div className="flex flex-col gap-5">

            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="hover:text-blue-700"
            >
              Home
            </Link>

            <Link
              href="/about"
              onClick={() => setMenuOpen(false)}
              className="hover:text-blue-700"
            >
              About
            </Link>

            <Link
              href="/courses"
              onClick={() => setMenuOpen(false)}
              className="hover:text-blue-700"
            >
              Courses
            </Link>

            <Link
  href="/contact"
  onClick={() => setMenuOpen(false)}
  className="text-slate-700 hover:text-blue-700"
>
  Contact
</Link>

            <Link
              href="/courses"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg bg-blue-600 px-5 py-3 text-center font-semibold text-white hover:bg-blue-700"
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