import merzeImage from "../assets/merze-image.png";
import anvayaImage from "../assets/anvaya-image.png";
import workAssignImage from "../assets/workAssign-image.png"
import kaviosPixImage from "../assets/kaviosPix-image.png"

function ProjectCard({ title, image, description, tech, demo, loom, github }) {
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
              href={demo}
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
    <section id="projects" className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-5xl font-bold mb-10 text-center">Projects</h2>

      <div className="grid gap-10 md:grid-cols-2">
        <ProjectCard
          title="KaviosPix"
          image={kaviosPixImage}
          description="A full-stack photo management platform with Google OAuth, permission-based album sharing, and AI-powered captioning and semantic search — backed by a standalone Python/FastAPI microservice using Google Gemini and PostgreSQL/pgvector, containerized with Docker and deployed on AWS EC2."
          tech={["React",
            "Redux Toolkit",
            "React Router DOM",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Google OAuth",
            "JWT",
            "Cloudinary",
            "Tailwind CSS",
            "RBAC",
            "Python",
            "FastAPI",
            "PostgreSQL",
            "Docker",
            "AWS EC2",
            "Google Gemini API",
            "Vector Embedding"
          ]}
          demo={"https://kavios-pix-app-mu.vercel.app/"}
          loom = {"https://www.loom.com/share/0a8a820dfe4546a9bb70263e7684def3"}
          github = {"https://github.com/Rakeshneopane/KaviosPix"}
        />

        <ProjectCard
          title="WorkAssign"
          image={workAssignImage}
          description="A full-stack task management platform with JWT authentication and role-based access control. Organizes work by project, team, and tag, with a reporting engine covering last-week completions, pending tasks, and closed-task breakdowns by owner or team."
          tech={["React", "React Router DOM", "Node.js", "Express.js", "MongoDB", "JWT", "Google OAuth", "Joi", "Tailwind CSS", "RBAC"]}
          demo={"https://work-assign-jt.vercel.app"}
          loom = {""}
          github = {"https://github.com/Rakeshneopane/WorkAssign"}
        />

        <ProjectCard
          title="Anvaya"
          image={anvayaImage}
          description="A CRM built around lead management, authenticated with Clerk. Tracks customers and leads through their full lifecycle — status updates, agent assignment, tagging, and a comment/interaction history — so nothing about a deal gets lost between follow-ups."
          tech={["React", "React Router", "Node.js", "Express.js", "MongoDB", "REST APIs", "Bootstrap", "Clerk Authentication"]}
          demo={"https://anvaya-crm-ten-nu.vercel.app"}
          loom = {"https://www.loom.com/share/01ec0a872c6f4316ad0ecd71b48de80c"}
          github = {"https://github.com/Rakeshneopane/Anvaya"}
        />

        <ProjectCard
          title="Merze"
          image={merzeImage}
          description="A full-stack e-commerce application covering the complete shopper workflow — product browsing, cart management, address handling, and order placement — built to nail a clean, RESTful frontend-backend integration with reusable UI components before layering on payments or auth."
          tech={["React", "React Router", "Node.js", "Express.js", "MongoDB", "REST APIs", "Bootstrap", "Tailwind CSS"]}
          demo = {"https://merze.vercel.app/"}
          loom = {"https://www.loom.com/share/25adf0ed43c242d1adc0fad96495302f"}
          github = {"https://github.com/Rakeshneopane/Merze"}
        />
      </div>
    </section>
  );
}
