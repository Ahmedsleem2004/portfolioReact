import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "E-Commerce App",
    desc: "Full shopping experience with cart & checkout.",
    img: "https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=1400&q=80",
    live: "https://ahmedsleem2004.github.io/f-project/",
    github: "https://github.com/your-username/project1",
  },
  {
    title: "Travel Website",
    desc: "Travel website with React & Tailwind.",
    img: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1400&q=80",
    live: "https://ahmedsleem2004.github.io/travel/",
    github: "https://github.com/your-username/project2",
  },
  {
    title: "E-commerce JS App",
    desc: "E-commerce built with vanilla JavaScript.",
    img: "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?auto=format&fit=crop&w=1400&q=80",
    live: "https://ahmedsleem2004.github.io/E-commerce/",
    github: "https://github.com/your-username/project3",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-b from-black via-zinc-900 to-red-950 text-white"
    >
      <h2 className="text-4xl font-bold text-center mb-12">
        My <span className="text-red-500">Projects</span>
      </h2>

      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">

        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="group bg-zinc-900 border border-red-900/30 rounded-2xl overflow-hidden hover:border-red-500 transition"
          >

            {/* Image */}
            <img
              src={p.img}
              alt={p.title}
              className="h-48 w-full object-cover group-hover:scale-110 transition duration-500"
            />

            {/* Content */}
            <div className="p-5">

              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="text-gray-400 text-sm mt-2">{p.desc}</p>

              {/* Buttons */}
              <div className="flex gap-4 mt-4">

                {/* Live Demo */}
                <a
                  href={p.live}
                  target="_blank"
                  className="flex items-center gap-2 px-3 py-2 text-sm bg-red-600 rounded-lg hover:bg-red-700 transition"
                >
                  <FaExternalLinkAlt />
                  Live
                </a>

                {/* GitHub */}
                <a
                  href={p.github}
                  target="_blank"
                  className="flex items-center gap-2 px-3 py-2 text-sm border border-red-500 rounded-lg hover:bg-red-500/10 transition"
                >
                  <FaGithub />
                  Code
                </a>

              </div>

            </div>

          </motion.div>
        ))}

      </div>
    </section>
  );
}