export default function SkillsSlider() {
  const skills = [
    {
      name: "React",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "JavaScript",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "TypeScript",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "Tailwind",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "Bootstrap",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    },
    {
      name: "HTML",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
  ];

  return (
    <div className="py-10 bg-black border-y border-red-900/30 overflow-hidden">

      <div className="flex w-max animate-scroll gap-20 items-center">

        {/* duplicate for infinite effect */}
        {[...skills, ...skills].map((skill, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center gap-2 opacity-80 hover:opacity-100 transition"
          >
            <img
              src={skill.img}
              alt={skill.name}
              className="w-12 h-12 md:w-14 md:h-14"
            />
            <span className="text-white text-sm">{skill.name}</span>
          </div>
        ))}

      </div>

    </div>
  );
}