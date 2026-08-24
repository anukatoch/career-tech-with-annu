import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">

        {/* Brand */}

        <div>
          <h2 className="text-3xl font-bold text-blue-400">
            Career Tech
          </h2>

          <p className="mt-4 leading-7 text-slate-300">
            Learn Skills. Build Career.
            Practical learning that prepares students for real careers.
          </p>
        </div>

        {/* Quick Links */}

        <div>
          <h3 className="mb-5 text-xl font-semibold">
            Quick Links
          </h3>

          <ul className="space-y-3 text-slate-300">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/courses">Courses</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Courses */}

        <div>
          <h3 className="mb-5 text-xl font-semibold">
            Popular Courses
          </h3>

       <ul className="space-y-3 text-slate-300">
  <li>
    <Link
      href="/courses/ai-full-stack"
      className="transition hover:text-blue-400"
    >
      AI Powered Full Stack
    </Link>
  </li>

  <li>
    <Link
      href="/courses/ui-ux"
      className="transition hover:text-blue-400"
    >
      UI/UX Design
    </Link>
  </li>

  <li>
    <Link
      href="/courses/react"
      className="transition hover:text-blue-400"
    >
      React.js
    </Link>
  </li>

  <li>
    <Link
      href="/courses/nextjs"
      className="transition hover:text-blue-400"
    >
      Next.js
    </Link>
  </li>
</ul>
        </div>

        {/* Contact */}

        <div>
          <h3 className="mb-5 text-xl font-semibold">
            Contact
          </h3>

          <div className="space-y-3 text-slate-300">
            <p>📞 +91 98765 43210</p>
            <p>📧 info@careertech.com</p>
            <p>📍 Dwarka, New Delhi</p>
          </div>
        </div>

      </div>

      <div className="border-t border-slate-700 py-6 text-center text-sm text-slate-400">
        © 2026 Career Tech. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;