export default function Footer() {
  return (
    <footer className="border-t mt-16">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="font-medium text-gray-900">
            Rakesh Neopane
          </span>{" "}
          <em className="text-gray-500">— your developer</em>
        </p>

        <p>
          Built with{" "}
          <span className="font-medium text-gray-900">React</span>{" "}
          &{" "}
          <span className="font-medium text-gray-900">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
}
