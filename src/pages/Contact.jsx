function Contact() {
  return (
    <div className="bg-white min-h-screen">

      {/* HERO SECTION */}
      <section className="py-24 border-b bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT TEXT */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Let’s Connect
            </h1>

            <p className="mt-6 text-slate-600 text-lg">
              Whether you're buying, selling or renting,
              our real estate experts are here to guide you
              every step of the way.
            </p>

            <div className="mt-10 space-y-6">

              <div>
                <p className="text-sm text-slate-500 uppercase tracking-wide">
                  Email
                </p>
                <p className="text-lg font-medium">
                  support@homefinder.com
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500 uppercase tracking-wide">
                  Phone
                </p>
                <p className="text-lg font-medium">
                  +91 90000 00000
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500 uppercase tracking-wide">
                  Office
                </p>
                <p className="text-lg font-medium">
                  Mumbai, India
                </p>
              </div>

            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000"
              alt="Real Estate Office"
              className="rounded-3xl shadow-xl"
            />
          </div>

        </div>
      </section>


      {/* FORM SECTION */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">

          <div className="bg-slate-50 rounded-3xl p-12 shadow-md">
            <h2 className="text-2xl font-semibold mb-10 text-center">
              Send Us a Message
            </h2>

            <form className="space-y-8">

              <div className="grid md:grid-cols-2 gap-8">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full border-b border-slate-300 bg-transparent py-3 focus:outline-none focus:border-slate-900"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full border-b border-slate-300 bg-transparent py-3 focus:outline-none focus:border-slate-900"
                />
              </div>

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full border-b border-slate-300 bg-transparent py-3 focus:outline-none focus:border-slate-900"
              ></textarea>

              <div className="text-center pt-4">
                <button
                  type="submit"
                  className="px-10 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-700 transition"
                >
                  Submit Inquiry
                </button>
              </div>

            </form>
          </div>

        </div>
      </section>

    </div>
  );
}

export default Contact;
