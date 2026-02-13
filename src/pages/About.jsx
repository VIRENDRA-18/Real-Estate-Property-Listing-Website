const teamMembers = [
  {
    id: 1,
    name: "Virendra Singh",
    role: "Founder & CEO",
    image:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400",
  },
  {
    id: 2,
    name: "Vedant Joshi",
    role: "Head of Sales",
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=400",
  },
  {
    id: 3,
    name: "Radhika Verma",
    role: "Operations Manager",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
  },
];

function About() {
  return (
    <div className="bg-slate-50 min-h-screen">

      {/* HERO */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">

          {/* Left Content */}
          <div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Building Trust <br />
              Through Real Estate
            </h1>

            <p className="mt-4 md:mt-6 text-slate-600 text-base md:text-lg">
              At HomeFinder, we believe that finding a home should be an
              exciting journey. We connect buyers, sellers and renters
              with verified listings and experienced professionals.
            </p>

            {/* Buttons Responsive */}
            <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="/properties"
                className="px-6 py-3 bg-slate-900 text-white rounded-lg text-center hover:bg-slate-700 transition"
              >
                Explore Properties
              </a>

              <a
                href="/contact"
                className="px-6 py-3 border border-slate-900 rounded-lg text-center hover:bg-slate-100 transition"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900"
              alt="About"
              className="rounded-3xl shadow-2xl w-full h-64 md:h-[450px] object-cover"
            />
          </div>

        </div>
      </section>

      {/* MISSION */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">

          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
              Our Mission
            </h2>

            <p className="text-slate-600 leading-relaxed text-sm md:text-base">
              Our mission is to simplify the property search journey.
              We connect buyers, sellers and renters through verified
              listings and experienced agents across major cities.
            </p>

            <p className="text-slate-600 leading-relaxed mt-4 text-sm md:text-base">
              We believe finding a home should be exciting — not stressful.
              That’s why we focus on transparency, technology and trust.
            </p>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800"
              alt="Mission"
              className="rounded-2xl shadow-lg w-full h-60 md:h-96 object-cover"
            />
          </div>

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">
            Why Choose Us
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">

            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-md border-t-4 border-blue-500 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-lg font-semibold text-blue-600">
                Verified Listings
              </h3>
              <p className="text-slate-600 mt-3 text-sm md:text-base">
                Every property goes through a strict verification process to ensure authenticity.
              </p>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-md border-t-4 border-green-500 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-lg font-semibold text-green-600">
                Trusted Agents
              </h3>
              <p className="text-slate-600 mt-3 text-sm md:text-base">
                Our agents are experienced professionals who prioritize your needs.
              </p>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-md border-t-4 border-purple-500 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-lg font-semibold text-purple-600">
                Transparent Pricing
              </h3>
              <p className="text-slate-600 mt-3 text-sm md:text-base">
                No hidden charges. Clear and honest pricing for every property.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-xl md:text-2xl font-semibold text-center mb-8 md:mb-10">
            Meet Our Team
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 text-center">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-slate-50 p-6 rounded-lg shadow hover:shadow-lg transition"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full mx-auto object-cover"
                />

                <h3 className="mt-4 font-semibold text-base md:text-lg">
                  {member.name}
                </h3>

                <p className="text-slate-600 text-sm mt-1">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

export default About;
