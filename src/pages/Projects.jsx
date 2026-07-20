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
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>

      <div className="grid gap-10 md:grid-cols-2">

        <ProjectCard
          title="KaviosPix"
          image={kaviosPixImage}
          description="KaviosPix is a full-stack photo management platform built with React, Redux Toolkit, Node.js, Express, and MongoDB that focuses on solving real-world engineering challenges such as authentication, state persistence, concurrency handling, and permission-based access control while providing secure album organization and sharing capabilities. It also integrates a standalone Python/FastAPI microservice for AI-powered image captioning and semantic search, using Google Gemini's generation and embedding APIs with PostgreSQL/pgvector, containerized with Docker and deployed on AWS EC2."
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
            "Google Gemini API"]}
          demo={"https://image-app-frontend-mu.vercel.app/"}
          loom = {"https://www.loom.com/share/0a8a820dfe4546a9bb70263e7684def3"}
          github = {"https://github.com/Rakeshneopane/image-App-frontend"}
        />

        <ProjectCard
          title="WorkAssign"
          image={workAssignImage}
          description="A full-stack task management platform with JWT authentication and role-based access control. Supports task, project, team, and tag management, plus a reporting engine for last-week completions, pending tasks, and closed tasks grouped by team/project/owner."
          tech={["React", "React Router DOM", "Node.js", "Express.js", "MongoDB", "JWT", "Google OAuth", "Joi", "Tailwind CSS", "RBAC"]}
          demo={"https://work-assign-frontend-6wjt.vercel.app/"}
          loom = {""}
          github = {"https://github.com/Rakeshneopane/workAssign-frontend"}
        />

        <ProjectCard
          title="Anvaya"
          image={anvayaImage}
         description="A CRM system for lead management, built with Clerk authentication. Tracks customers, leads, and interactions with status updates (New, Contacted, Converted, Lost), agent assignment, tagging, and comment/interaction history on each lead."
          tech={["React", "React Router", "Node.js", "Express.js", "MongoDB", "REST APIs", "Bootstrap", "Clerk Authentication"]}
          demo={"https://crm-frontend-ten-nu.vercel.app/"}
          loom = {"https://www.loom.com/share/01ec0a872c6f4316ad0ecd71b48de80c"}
          github = {"https://github.com/Rakeshneopane/CRM-frontend.git"}
        />

        <ProjectCard
          title="Merze"
          image={merzeImage}
          description="A full-stack e-commerce application with product browsing, cart management, order placement, and address handling. Focused on building a complete, RESTful frontend-backend workflow with reusable UI components."
          tech={["React", "React Router", "Node.js", "Express.js", "MongoDB", "REST APIs", "Bootstrap"]}
          demo = {"https://my-ecommerce-frontend-khaki.vercel.app/"}
          loom = {"https://www.loom.com/share/25adf0ed43c242d1adc0fad96495302f"}
          github = {"https://github.com/Rakeshneopane/my-ecommerce-frontend.git"}
        /> 

       

      </div>
    </section>
  );
}
