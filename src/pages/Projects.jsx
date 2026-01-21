import merzeImage from "../assets/merze-image.png";
import anvayaImage from "../assets/anvaya-image.png";

function ProjectCard({ title, image, description, tech }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <img src={image} alt={title} className="h-48 w-full object-cover" />

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>

        <ul className="flex flex-wrap gap-2 mb-4 text-sm">
          {tech.map((t) => (
            <li key={t} className="px-3 py-1 bg-gray-100 rounded-full">
              {t}
            </li>
          ))}
        </ul>

        <div className="flex gap-3">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
            Demo
          </button>
          <button className="px-4 py-2 border rounded-lg">
            Code
          </button>
        </div>
      </div>
    </div>
  );
}


export default function Projects() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>

      <div className="grid gap-10 md:grid-cols-2">
        <ProjectCard
          title="Merze"
          image={merzeImage}
          description="A modern e-commerce platform with real-time inventory management, secure payment processing, and personalized recommendations."
          tech={["React", "Node.js", "MongoDB"]}
        />

        <ProjectCard
          title="Anvaya"
          image={anvayaImage}
          description="An intuitive CRM system designed for lead management with pipeline visualization, automated follow-ups, and detailed analytics."
          tech={["React", "Node.js", "MongoDB"]}
        />
      </div>
    </section>
  );
}