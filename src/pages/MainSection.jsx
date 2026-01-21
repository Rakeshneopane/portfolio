export default function MainSection() {
  return (
    <section className="min-h-[80vh] flex items-center">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Rakesh Neopane
        </h1>

        <p className="text-lg text-blue-600 font-medium mb-6">
          Full Stack Developer
        </p>

        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Passionate full-stack developer crafting intuitive digital experiences
          with modern technologies. Specializing in React, Node.js, and MongoDB
          to build scalable and user-centered applications.
        </p>

        <div className="flex justify-center gap-4">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Contact Me
          </button>

          <button className="px-6 py-3 border rounded-lg hover:bg-gray-100 transition">
            Resume
          </button>
        </div>
      </div>
    </section>
  );
}
