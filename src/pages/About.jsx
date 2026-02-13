function About() {
  return (
    <div className="bg-slate-50 min-h-screen">

      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold">
            About HomeFinder
          </h1>
          <p className="mt-4 text-slate-600">
            We help people discover their dream homes with trust, transparency and simplicity.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-4">
            Our Mission
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Our mission is to make property search easy and reliable for everyone.
            We connect buyers, sellers and renters through verified listings
            and experienced agents across major cities in India.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-center mb-10">
            Why Choose Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="font-semibold text-lg">
                Verified Listings
              </h3>
              <p className="text-slate-600 mt-2">
                All properties are verified before publishing.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Trusted Agents
              </h3>
              <p className="text-slate-600 mt-2">
                Work with experienced and reliable real estate professionals.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Transparent Pricing
              </h3>
              <p className="text-slate-600 mt-2">
                No hidden costs. Clear and honest property pricing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          
          <div>
            <h3 className="text-2xl font-bold">500+</h3>
            <p className="text-slate-600 mt-2">Properties Listed</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold">50+</h3>
            <p className="text-slate-600 mt-2">Cities Covered</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold">10k+</h3>
            <p className="text-slate-600 mt-2">Happy Clients</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold">8+</h3>
            <p className="text-slate-600 mt-2">Years Experience</p>
          </div>

        </div>
      </section>

    </div>
  );
}

export default About;
