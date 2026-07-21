import {
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiBootstrap,
  SiShadcnui,
  SiExpress,
  SiNodedotjs,
  SiMongodb,
  SiMongoose,
  SiJsonwebtokens,
  SiPython,
  SiFlask,
  SiSqlalchemy,
  SiPostgresql,
  SiDocker,
  SiVercel,
  SiRender,
  SiGit,
  SiGithub,
  SiGooglechrome,
  SiGithubactions,
  SiZod,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaAws, FaUniversalAccess } from "react-icons/fa";
import { HiOutlineShieldCheck } from "react-icons/hi2";
import { MdSpeed } from "react-icons/md";
import { BiTestTube } from "react-icons/bi";

export default function TechSection() {
  const techStack = [
    { name: "React", icon: SiReact },
    //{ name: "Next.js", icon: SiNextdotjs },
    { name: "Redux Toolkit", icon: SiRedux },
    { name: "TypeScript", icon: SiTypescript },
    { name: "JavaScript", icon: SiJavascript },

    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Bootstrap", icon: SiBootstrap },
    { name: "Shadcn/UI", icon: SiShadcnui },

    { name: "Node.js", icon: SiNodedotjs },
    { name: "Express", icon: SiExpress },
    { name: "JWT", icon: SiJsonwebtokens },
    //{ name: "Zod", icon: SiZod },
    { name: "Joi", icon: HiOutlineShieldCheck },

    { name: "MongoDB", icon: SiMongodb },
    { name: "Mongoose", icon: SiMongoose },
    { name: "PostgreSQL", icon: SiPostgresql },

    { name: "Python", icon: SiPython },
    //{ name: "Flask", icon: SiFlask },
    { name: "SQLAlchemy", icon: SiSqlalchemy },

    { name: "Docker", icon: SiDocker },
    { name: "AWS EC2", icon: FaAws },
    { name: "Vercel", icon: SiVercel },
    { name: "Render", icon: SiRender },
    { name: "CI/CD", icon: SiGithubactions },

    { name: "Git", icon: SiGit },
    { name: "GitHub", icon: SiGithub },
    { name: "VS Code", icon: VscVscode },
    { name: "Chrome DevTools", icon: SiGooglechrome },

    { name: "Testing", icon: BiTestTube },
    { name: "Accessibility", icon: FaUniversalAccess },
    { name: "Performance", icon: MdSpeed },
  ];

  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-20">
      <div className="text-center mb-14">
        <h2 className="text-5xl md:text-5xl font-bold mb-4">
          Tech Stack
        </h2>
        <p className="text-gray-600 text-lg">
          Technologies, frameworks, and tools I use to build scalable,
          performant, and accessible web applications.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        {techStack.map(({ name, icon: Icon }) => (
          <div
            key={name}
            className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <Icon className="text-5xl text-blue-600" />
            <span className="font-semibold text-center text-gray-800">
              {name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}