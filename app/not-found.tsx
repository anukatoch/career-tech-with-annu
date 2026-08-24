import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-slate-50 px-6 py-20">
      <div className="max-w-2xl text-center">

        <p className="text-7xl font-bold text-blue-600">
          404
        </p>

        <h1 className="mt-6 text-3xl font-bold text-slate-900 md:text-4xl">
          Page Not Found
        </h1>

        <p className="mt-4 text-lg leading-7 text-slate-600">
          Sorry, the page you are looking for doesn't exist
          or may have been moved.
        </p>

        <Link
          href="/"
          className="mt-8 inline-block rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Back to Home
        </Link>

      </div>
    </main>
  );
}