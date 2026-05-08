import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-black via-zinc-900 to-red-950 text-white"
    >
      <div className="container mx-auto px-6">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Get In <span className="text-red-500">Touch</span>
        </motion.h2>

        {/* Card */}
        <div className="max-w-3xl mx-auto bg-zinc-900/60 backdrop-blur-md border border-red-900/30 rounded-2xl p-8 shadow-lg">

          <form className="space-y-5">

            {/* Name */}
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 bg-black border border-red-900/30 rounded-xl outline-none focus:border-red-500 transition"
            />

            {/* Email */}
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 bg-black border border-red-900/30 rounded-xl outline-none focus:border-red-500 transition"
            />

            {/* Message */}
            <textarea
              rows="5"
              placeholder="Your Message..."
              className="w-full p-4 bg-black border border-red-900/30 rounded-xl outline-none focus:border-red-500 transition resize-none"
            />

            {/* Button */}
            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-red-600 to-red-900 hover:scale-[1.02] transition font-semibold"
            >
              Send Message 
            </button>

          </form>

        </div>

        {/* Extra Info */}
        <div className="text-center mt-10 text-gray-400 text-sm">
          Or contact me directly: <a href="a7medsleem2004@gmail.com" className="text-red-500">a7medsleem2004@gmail.com</a>
        </div>

      </div>
    </section>
  );
}