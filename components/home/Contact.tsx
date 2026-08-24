const Contact = () => {
    return (
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-5xl rounded-3xl bg-blue-600 px-8 py-16 text-center text-white shadow-xl">
  
          <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold">
            CONTACT US
          </span>
  
          <h2 className="mt-6 text-4xl font-bold md:text-5xl">
            Ready to Start Your Tech Career?
          </h2>
  
          <p className="mx-auto mt-6 max-w-2xl text-lg text-blue-100">
            Get free career guidance from our mentors and choose the right learning path for your future.
          </p>
  
          <div className="mt-10 space-y-3 text-lg">
            <p>📞 +91 98765 43210</p>
            <p>📧 info@careertech.com</p>
            <p>📍 Dwarka, New Delhi</p>
          </div>
  
          <button className="mt-10 rounded-xl bg-white px-8 py-4 font-semibold text-blue-600 transition hover:scale-105">
            Get Free Career Guidance
          </button>
  
        </div>
      </section>
    );
  };
  
  export default Contact;