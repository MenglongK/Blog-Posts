import Link from "next/link";

export default function Home() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center gradient-bg overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div
          className="absolute top-3/4 right-1/4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <div className="animate-fadeInUp">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-black/70 mb-6">
            Welcome to the
            <span className="block bg-linear-to-r from-indigo-200 to-purple-200 bg-clip-text text-black/70">
              Daily Posts
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-black/70 mb-8 max-w-3xl mx-auto">
            Transform your business with cutting-edge solutions and professional
            expertise that drives real results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/posts">
              <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-50 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center cursor-pointer">
                <i data-lucide="rocket" className="w-5 h-5"></i>
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
