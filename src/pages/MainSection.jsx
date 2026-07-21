import Resume from "../assets/Rakesh-Neopane-resume.pdf"

export default function MainSection() {
  return (
    <section id="about" className="min-h-[80vh] flex items-center">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-6xl sm:text-6xl font-bold mb-4">
          Rakesh Neopane
        </h1>

        <p className="text-lg text-blue-600 font-medium mb-6">
          Full Stack Developer
        </p>

        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          I'm a self-taught full-stack developer who spent two years in Trust & Safety at ByteDance
before deciding to build software instead of just reasoning about the systems behind it.
Since then I've shipped four production applications end-to-end — architecting REST APIs,
wiring up authentication and authorization, and getting real users' data flowing through
React, Node.js, and MongoDB.
<br />
<br />

Lately I've been pulled toward the layer underneath the app: containerizing services with
Docker, deploying and debugging them on AWS, and building a Python/FastAPI microservice
from scratch to get hands-on with a language and infrastructure stack outside my comfort
zone. That's the direction I'm leaning — backend and cloud infrastructure — and I'm looking
for a team where I can keep going deeper there.
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="#connect"
            //href="mailto:rakeshneopane@gmail.com?subject=Portfolio Contact&body=Hi Rakesh,%0D%0A%0D%0AI came across your portfolio and would like to connect."
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Contact Me
          </a>

          <a
            href={Resume}
            target="_blank" rel="noopener noreferrer"
            className="px-6 py-3 border rounded-lg hover:bg-gray-100 transition">
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}
