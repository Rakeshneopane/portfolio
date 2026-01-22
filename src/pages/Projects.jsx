import merzeImage from "../assets/merze-image.png";
import anvayaImage from "../assets/anvaya-image.png";

function ProjectCard({ title, image, description, tech, loom, github }) {
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
            <a 
              href={loom}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg inline-flex items-center justify-center"
            > 
              Demo 
            </a>
           <a 
              href={github}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 bg-white text-black border-1 rounded-lg inline-flex items-center justify-center"
            >  Code
          </a>
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
          loom = {"https://www.loom.com/share/25adf0ed43c242d1adc0fad96495302f"}
          github = {"https://github.com/Rakeshneopane/my-ecommerce-frontend.git"}
        />

        <ProjectCard
          title="Anvaya"
          image={anvayaImage}
          description="An intuitive CRM system designed for lead management with pipeline visualization, automated follow-ups, and detailed analytics."
          tech={["React", "Node.js", "MongoDB"]}
          loom = {"https://www.loom.com/share/01ec0a872c6f4316ad0ecd71b48de80c"}
          github = {"https://github.com/Rakeshneopane/CRM-frontend.git"}
        />
      </div>
    </section>
  );
}