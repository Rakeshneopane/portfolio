export default function Footer() {
  return (
     <footer className="border-t mt-16">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="font-medium text-gray-900">
            Rakesh Neopane
          </span>
        </p>

        <div className="flex items-center gap-4">
          <a href="https://github.com/Rakeshneopane" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition">
            GitHub
          </a>
          <a href="https://linkedin.com/in/rakesh-neopane" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition">
            LinkedIn
          </a>
          <p>
            Built with{" "}
            <span className="font-medium text-gray-900">React</span>{" "}
            &{" "}
            <span className="font-medium text-gray-900">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
