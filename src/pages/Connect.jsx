import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";

export default function Connect() {
  const links = [
    {
      platform: "Email",
      value: "rakeshneopane@gmail.com",
      href: "mailto:rakeshneopane@gmail.com",
      icon: <FaEnvelope />,
    },
    {
      platform: "GitHub",
      value: "github.com/rakeshneopane",
      href: "https://github.com/rakeshneopane",
      icon: <FaGithub />,
    },
    {
      platform: "LinkedIn",
      value: "linkedin.com/rakesh-neopane",
      href: "https://www.linkedin.com/in/rakesh-neopane/",
      icon: <FaLinkedin />,
    },
    {
      platform: "Twitter",
      value: "@rakeshneopane",
      href: "https://twitter.com/rakeshneopane",
      icon: <FaXTwitter />,
    },
  ];

  return (
    <section id="connect" className="max-w-6xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold mb-3">Connect</h2>
        <p className="text-gray-600">
            Open to backend and full-stack roles — reach out if you're hiring,
    or just want to talk shop about Docker, Postgres, or debugging OAuth.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {links.map((item) => (
          <>
          <a
            key={item.platform}
            href={item.href}
            target={item.platform !== "Email" ? "_blank" : undefined}
            rel={item.platform !== "Email" ? "noreferrer" : undefined}
            className="border rounded-xl p-6 text-center
                       hover:shadow-lg hover:border-blue-400
                       hover:-translate-y-1 transition-all duration-200"
          >
            <div className="text-4xl mb-4 flex justify-center">
              {item.icon}
            </div>
            <h3 className="font-semibold mb-2">{item.platform}</h3>
            <p className="text-sm text-gray-600 break-all">
              {item.value}
            </p>
          </a>
          </>
        ))}
      </div>
    </section>
  );
}
