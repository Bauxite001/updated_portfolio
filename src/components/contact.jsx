export const Contact = () => {
  return (
    <>
      {/* CONTACT SECTION */}
      <section id="contact" className=" my-12 px-6 md:px-12">
        <div className="max-full mx-auto">
          <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
          <div className="w-3/5">
            <p className="text-gray-400 mb-12 text-lg">
              Have a project in mind, a question, or just want to say hello?
              Fill the form below and I’ll get back to you.
            </p>

            <form className="grid md:grid-cols-2 gap-8">
              {/* Name */}
              <div className="flex flex-col">
                <label className="mb-2 text-sm text-gray-400">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="contact-input"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <label className="mb-2 text-sm text-gray-400">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="johndoe@email.com"
                  className="contact-input"
                />
              </div>

              {/* Message */}
              <div className="md:col-span-2 flex flex-col">
                <label className="mb-2 text-sm text-gray-400">Message</label>
                <textarea
                  rows="6"
                  placeholder="Tell me about your project..."
                  className="contact-input resize-none"
                />
              </div>

              {/* Button */}
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="mt-4 px-10 py-4 bg-white text-black font-semibold rounded-lg hover:opacity-80 transition"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-neutral-950 text-gray-400 py-10 px-6 md:px-20 border-t border-gray-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm">
            © {new Date().getFullYear()} Bauzy Tech. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-white transition">
              GitHub
            </a>
            <a href="#" className="hover:text-white transition">
              LinkedIn
            </a>
            <a href="#" className="hover:text-white transition">
              Twitter
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};
