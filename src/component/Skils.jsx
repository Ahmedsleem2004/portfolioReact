import { motion } from "framer-motion";

const skills = [
  { name: "HTML", level: "95%" },
  { name: "CSS", level: "90%" },
  { name: "JavaScript", level: "85%" },
  { name: "React", level: "88%" },
  { name: "TypeScript", level: "80%" },
];

export default function Skills() {
  return (
    <section id="about" className="py-20 bg-black text-white">

      <h2 className="text-4xl font-bold text-center mb-12">
        My <span className="text-red-500">Skills</span>
      </h2>

      <div className="container mx-auto px-6 space-y-6">

        {skills.map((s, i) => (
          <div key={i}>
            <div className="flex justify-between mb-1">
              <span>{s.name}</span>
              <span>{s.level}</span>
            </div>

            <div className="w-full bg-zinc-800 rounded-full h-2">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: s.level }}
                transition={{ duration: 1 }}
                className="h-2 bg-red-600 rounded-full"
              />
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}