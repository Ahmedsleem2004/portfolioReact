import { motion } from "framer-motion";
import image from'../../public/WhatsApp Image 2026-05-08 at 5.14.50 PM.jpeg'
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-linear-to-br from-black via-zinc-900 to-red-950 text-white"
    >
      <div className="container mx-30 px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-12">

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 1 }}
          transition={{ duration: 1 }}
          className="text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Hi, I'm{" "}
            <span className="text-red-500">Ahmed Sleem</span>
          </h1>

          <p className="mt-4 text-gray-300 text-lg">
            Front-End Developer | React | JavaScript | AI Enthusiast
          </p>
            {/* SOCIAL ICONS */}
          <div className="flex gap-5 mt-6 justify-center md:justify-start text-2xl">

            <a
              href="https://www.linkedin.com/in/your-profile"
              target="_blank"
              className="text-gray-300 hover:text-red-500 transition hover:scale-110"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/your-username"
              target="_blank"
              className="text-gray-300 hover:text-red-500 transition hover:scale-110"
            >
              <FaGithub />
            </a>

            <a
              href="https://facebook.com/your-profile"
              target="_blank"
              className="text-gray-300 hover:text-red-500 transition hover:scale-110"
            >
              <FaFacebook />
            </a>

          </div>

          <div className="mt-6 flex gap-4 justify-center md:justify-start">
            <button className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 transition hover:scale-105">
              View Projects
            </button>

            <button className="px-6 py-3 rounded-xl border border-red-500 hover:bg-red-500/10 transition hover:scale-105">
              Contact Me
            </button>
          </div>
        </motion.div>

        
        <motion.div
        
         initial={{ y: 80, opacity: 0 }}
          animate={{ y: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center md:text-left"
        >
            

          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-zinc-900 border-4 border-red-800 flex items-center justify-center overflow-hidden">
            <span className="text-gray-400"><img src={image} alt="" /></span>
          </div>

          {/* Glow */}
          <div className="absolute inset-20 rounded-full blur-3xl bg-red-500 opacity-10 animate-pulse"></div>
          
        </motion.div>
 
      </div>
      
    </section>
  );
}