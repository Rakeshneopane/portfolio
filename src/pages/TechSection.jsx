export default function TechSection() {
  const techStack = [
    "React",
    "Bootstrap",
    "Express",
    "Node.js",
    "MongoDB",
    "Mongoose",
    "JWT",
    "Vercel",
    "GitHub",
    "DevTools",
  ];

  return (
    <section id="tech" className="max-w-6xl mx-auto px-6 py-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-2">Tech Stack</h2>
        <p className="text-gray-600">
          Technologies and tools I work with
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="px-4 py-2 bg-gray-100 text-sm font-medium rounded-full
                       hover:bg-blue-100 hover:text-blue-700 transition"
          >
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
}
