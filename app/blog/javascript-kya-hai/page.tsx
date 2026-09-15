export default function JavaScriptIntroPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <article className="mx-auto max-w-7xl px-5 py-8 md:px-8 lg:px-10">

        {/* ================= HERO ================= */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 px-7 py-12 text-white shadow-xl md:px-12 md:py-16">

          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />

          <div className="relative">

            <a
              href="/blog"
              className="mb-8 inline-flex items-center text-base font-medium text-blue-200 transition hover:text-white"
            >
              ← Back to Tutorials
            </a>

            <div className="mb-6 flex flex-wrap gap-3">
              <span className="rounded-full bg-yellow-400 px-4 py-2 text-sm font-bold text-slate-900">
                JavaScript
              </span>

              <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-blue-100 ring-1 ring-white/20">
                Beginner
              </span>

              <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-blue-100 ring-1 ring-white/20">
                ⏱ 8 min read
              </span>
            </div>

            <h1 className="max-w-5xl text-4xl font-extrabold leading-tight tracking-tight md:text-6xl lg:text-7xl">
              JavaScript Kya Hai?
            </h1>

            <p className="mt-6 max-w-4xl text-lg leading-8 text-blue-100 md:text-xl md:leading-9">
              Complete Beginner Guide with Real-World Examples,
              Coding Practice and Interview Questions.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <span className="rounded-xl bg-white/10 px-4 py-2.5 text-base ring-1 ring-white/10">
                ✓ Easy Explanation
              </span>

              <span className="rounded-xl bg-white/10 px-4 py-2.5 text-base ring-1 ring-white/10">
                ✓ Real-World Examples
              </span>

              <span className="rounded-xl bg-white/10 px-4 py-2.5 text-base ring-1 ring-white/10">
                ✓ Coding Practice
              </span>

              <span className="rounded-xl bg-white/10 px-4 py-2.5 text-base ring-1 ring-white/10">
                ✓ Interview Questions
              </span>
            </div>

          </div>
        </section>


        {/* ================= MAIN CONTENT + SIDEBAR ================= */}
        <div className="mt-10 grid gap-10 lg:grid-cols-[280px_minmax(0,1fr)]">


          {/* ================= SIDEBAR ================= */}
          <aside className="lg:sticky lg:top-6 lg:h-fit">

            <nav className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-xl">
                  📚
                </span>

                <h2 className="text-xl font-bold text-slate-900">
                  Contents
                </h2>
              </div>

              <div className="space-y-1">

                <a
                  href="#introduction"
                  className="block rounded-lg px-3 py-2.5 text-base font-medium text-slate-600 transition hover:bg-blue-50 hover:text-blue-600"
                >
                  01. Introduction
                </a>

                <a
                  href="#what-is-javascript"
                  className="block rounded-lg px-3 py-2.5 text-base font-medium text-slate-600 transition hover:bg-blue-50 hover:text-blue-600"
                >
                  02. What is JavaScript?
                </a>

                <a
                  href="#why-javascript"
                  className="block rounded-lg px-3 py-2.5 text-base font-medium text-slate-600 transition hover:bg-blue-50 hover:text-blue-600"
                >
                  03. Why Do We Need JavaScript?
                </a>

                <a
                  href="#html-css-javascript"
                  className="block rounded-lg px-3 py-2.5 text-base font-medium text-slate-600 transition hover:bg-blue-50 hover:text-blue-600"
                >
                  04. HTML vs CSS vs JavaScript
                </a>

                <a
                  href="#what-can-build"
                  className="block rounded-lg px-3 py-2.5 text-base font-medium text-slate-600 transition hover:bg-blue-50 hover:text-blue-600"
                >
                  05. What Can We Build?
                </a>

                <a
                  href="#first-program"
                  className="block rounded-lg px-3 py-2.5 text-base font-medium text-slate-600 transition hover:bg-blue-50 hover:text-blue-600"
                >
                  06. First JavaScript Program
                </a>

                <a
                  href="#run-javascript"
                  className="block rounded-lg px-3 py-2.5 text-base font-medium text-slate-600 transition hover:bg-blue-50 hover:text-blue-600"
                >
                  07. How to Run JavaScript
                </a>

                <a
                  href="#real-world-example"
                  className="block rounded-lg px-3 py-2.5 text-base font-medium text-slate-600 transition hover:bg-blue-50 hover:text-blue-600"
                >
                  08. Real-World Example
                </a>

                <a
                  href="#interview-questions"
                  className="block rounded-lg px-3 py-2.5 text-base font-medium text-slate-600 transition hover:bg-blue-50 hover:text-blue-600"
                >
                  09. Interview Ready
                </a>

                <a
                  href="#practice"
                  className="block rounded-lg px-3 py-2.5 text-base font-medium text-slate-600 transition hover:bg-blue-50 hover:text-blue-600"
                >
                  10. Practice Challenge
                </a>

                <a
                  href="#whats-next"
                  className="block rounded-lg px-3 py-2.5 text-base font-medium text-slate-600 transition hover:bg-blue-50 hover:text-blue-600"
                >
                  11. What's Next?
                </a>

              </div>

            </nav>

          </aside>


          {/* ================= ARTICLE CONTENT ================= */}
          <div className="min-w-0 rounded-3xl border border-slate-200 bg-white px-6 py-8 shadow-sm md:px-10 md:py-10">


            {/* Introduction */}
            <section id="introduction">

              <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                Introduction
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-700 md:text-xl md:leading-9">
                If you are starting your journey in Web Development,
                JavaScript is one of the most important technologies you
                should learn.
              </p>

              <p className="mt-5 text-lg leading-8 text-slate-700 md:text-xl md:leading-9">
                JavaScript helps us create interactive and dynamic websites.
                Simple words mein, HTML website ka structure banata hai,
                CSS website ko design karta hai, aur JavaScript website ko
                behavior and functionality deta hai.
              </p>

            </section>


            {/* What is JavaScript */}
            <section id="what-is-javascript" className="mt-16">

              <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                What is JavaScript?
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-700 md:text-xl md:leading-9">
                JavaScript is a programming language used to create
                interactive and dynamic web pages and applications.
              </p>

              <div className="mt-7 rounded-2xl border border-blue-100 bg-blue-50 p-6 md:p-7">
                <p className="text-lg leading-8 text-slate-700 md:text-xl">
                  💡 <strong>Simple Definition:</strong> JavaScript adds
                  functionality and behavior to websites.
                </p>
              </div>

            </section>


            {/* Why JavaScript */}
            <section id="why-javascript" className="mt-16">

              <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                Why Do We Need JavaScript?
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-700 md:text-xl md:leading-9">
                Without JavaScript, most websites would be static.
                JavaScript allows users to interact with web pages and
                applications.
              </p>

              <div className="mt-8 grid gap-5 md:grid-cols-3">

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <div className="text-3xl">🖱️</div>

                  <h3 className="mt-4 text-xl font-bold text-slate-900">
                    User Interaction
                  </h3>

                  <p className="mt-3 text-base leading-7 text-slate-600">
                    Handle clicks, buttons, menus and user actions.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <div className="text-3xl">⚡</div>

                  <h3 className="mt-4 text-xl font-bold text-slate-900">
                    Dynamic Content
                  </h3>

                  <p className="mt-3 text-base leading-7 text-slate-600">
                    Change website content dynamically without reloading.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <div className="text-3xl">🌐</div>

                  <h3 className="mt-4 text-xl font-bold text-slate-900">
                    Web Applications
                  </h3>

                  <p className="mt-3 text-base leading-7 text-slate-600">
                    Build modern and interactive web applications.
                  </p>
                </div>

              </div>

            </section>


            {/* HTML CSS JavaScript */}
            <section id="html-css-javascript" className="mt-16">

              <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                HTML vs CSS vs JavaScript
              </h2>

              <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200">
                <table className="w-full min-w-[650px] text-left text-base md:text-lg">

                  <thead className="bg-slate-100">
                    <tr>
                      <th className="p-5 font-bold text-slate-900">
                        Technology
                      </th>

                      <th className="p-5 font-bold text-slate-900">
                        Role
                      </th>

                      <th className="p-5 font-bold text-slate-900">
                        Example
                      </th>
                    </tr>
                  </thead>

                  <tbody>

                    <tr className="border-t">
                      <td className="p-5 font-semibold">HTML</td>
                      <td className="p-5">Structure</td>
                      <td className="p-5">Button</td>
                    </tr>

                    <tr className="border-t">
                      <td className="p-5 font-semibold">CSS</td>
                      <td className="p-5">Design</td>
                      <td className="p-5">Button Color</td>
                    </tr>

                    <tr className="border-t">
                      <td className="p-5 font-semibold">JavaScript</td>
                      <td className="p-5">Behavior</td>
                      <td className="p-5">Button Click</td>
                    </tr>

                  </tbody>

                </table>
              </div>

            </section>


            {/* What Can We Build */}
            <section id="what-can-build" className="mt-16">

              <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                What Can We Build with JavaScript?
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-700 md:text-xl md:leading-9">
                JavaScript is not limited to simple websites. Today it is
                used across many areas of software development.
              </p>

              <ul className="mt-7 space-y-4 text-lg leading-8 text-slate-700 md:text-xl">

                <li>🌐 Interactive Websites</li>
                <li>⚛️ React Applications</li>
                <li>🟢 Node.js Backend Applications</li>
                <li>📱 Mobile Applications</li>
                <li>🤖 AI-Powered Web Applications</li>
                <li>🛒 E-commerce Applications</li>

              </ul>

            </section>


            {/* First Program */}
            <section id="first-program" className="mt-16">

              <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                💻 Your First JavaScript Program
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-700 md:text-xl">
                Let us write our first JavaScript program.
              </p>

              <div className="mt-7 overflow-hidden rounded-2xl bg-slate-950 shadow-lg">

                <div className="border-b border-slate-800 px-5 py-3">
                  <span className="text-sm font-medium text-slate-400">
                    JavaScript
                  </span>
                </div>

                <pre className="overflow-x-auto p-6 text-base leading-8 text-white md:text-lg">
                  <code>{`console.log("Hello Career Tech!");`}</code>
                </pre>

              </div>

              <p className="mt-6 text-lg leading-8 text-slate-700 md:text-xl">
                <strong>console.log()</strong> is commonly used to display
                information in the browser console or Node.js terminal.
              </p>

            </section>


            {/* How to Run */}
            <section id="run-javascript" className="mt-16">

              <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                How to Run JavaScript
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-700 md:text-xl">
                Beginners can run JavaScript in multiple ways.
              </p>

              <div className="mt-8 grid gap-5 md:grid-cols-3">

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <h3 className="text-xl font-bold">
                    🌐 Browser Console
                  </h3>

                  <p className="mt-3 text-base leading-7 text-slate-600">
                    Open Chrome DevTools and use the Console.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <h3 className="text-xl font-bold">
                    💻 VS Code
                  </h3>

                  <p className="mt-3 text-base leading-7 text-slate-600">
                    Write JavaScript files and run them using Node.js.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <h3 className="text-xl font-bold">
                    🟢 Node.js
                  </h3>

                  <p className="mt-3 text-base leading-7 text-slate-600">
                    Execute JavaScript directly from the terminal.
                  </p>
                </div>

              </div>

            </section>


            {/* Real World Example */}
            <section id="real-world-example" className="mt-16">

              <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                🌍 Real-World Example
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-700 md:text-xl md:leading-9">
                Imagine an online shopping website. HTML creates the product
                and button, CSS makes them attractive, and JavaScript handles
                what happens when the user clicks “Add to Cart”.
              </p>

              <div className="mt-7 rounded-2xl border border-indigo-100 bg-indigo-50 p-6 md:p-7">
                <p className="text-lg leading-8 text-slate-700 md:text-xl">
                  🛒 <strong>Example:</strong> When you click “Add to Cart”,
                  JavaScript can update the cart count and product information
                  dynamically.
                </p>
              </div>

            </section>


            {/* Interview */}
            <section
              id="interview-questions"
              className="mt-16 rounded-3xl border border-blue-100 bg-blue-50 p-7 md:p-9"
            >

              <div className="flex items-center gap-3">
                <span className="text-3xl">💼</span>

                <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                  Interview Ready
                </h2>
              </div>

              <h3 className="mt-8 text-xl font-bold text-slate-900 md:text-2xl">
                What is JavaScript?
              </h3>

              <div className="mt-4 rounded-xl bg-white p-6">
                <p className="text-lg leading-8 text-slate-700 md:text-xl">
                  JavaScript is a programming language mainly used to create
                  interactive and dynamic web applications.
                </p>
              </div>

              <div className="mt-7 rounded-xl border border-yellow-200 bg-yellow-50 p-6">

                <p className="text-lg font-bold text-slate-900 md:text-xl">
                  🧠 Tricky Question
                </p>

                <p className="mt-3 text-lg leading-8 text-slate-700">
                  Is JavaScript the same as Java?
                </p>

                <p className="mt-3 text-lg leading-8 text-slate-700">
                  <strong>Answer:</strong> No. JavaScript and Java are
                  different programming languages.
                </p>

              </div>

            </section>


            {/* Practice */}
            <section
              id="practice"
              className="mt-16 rounded-3xl border border-emerald-100 bg-emerald-50 p-7 md:p-9"
            >

              <div className="flex items-center gap-3">

                <span className="text-3xl">🎯</span>

                <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                  Practice Challenge
                </h2>

              </div>

              <p className="mt-6 text-lg leading-8 text-slate-700 md:text-xl">
                Write a JavaScript program that prints a welcome message,
                your name and the technology you are learning.
              </p>

              <div className="mt-7 rounded-2xl bg-slate-950 p-6 shadow-lg">

                <p className="mb-4 text-sm font-medium text-slate-400">
                  Your Challenge
                </p>

                <pre className="overflow-x-auto text-base leading-8 text-white md:text-lg">
                  <code>{`console.log("Welcome to Career Tech!");
console.log("My name is Annu");
console.log("I am learning JavaScript");`}</code>
                </pre>

              </div>

            </section>


            {/* What's Next */}
            <section
              id="whats-next"
              className="mt-16 border-t border-slate-200 pt-10"
            >

              <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
                What’s Next?
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                JavaScript Variables — var, let and const
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600 md:text-xl">
                In the next tutorial, we will learn JavaScript variables
                with practical examples and interview questions.
              </p>

              <a
                href="/blog/javascript-variables"
                className="mt-8 inline-flex items-center rounded-xl bg-blue-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-blue-700"
              >
                Next Tutorial →
              </a>

            </section>

          </div>
        </div>

      </article>
    </main>
  );
}