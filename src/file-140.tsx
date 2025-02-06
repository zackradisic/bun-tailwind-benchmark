import "./style.css";
import React from "react";

const Showcase: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500">
      <h1 className="text-5xl font-bold text-white mb-5">
        Welcome to Bun with TailwindCSS!
      </h1>
      <p className="text-xl text-gray-200 mb-10">
        Fast & Simple Fullstack Development
      </p>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
        <div className="bg-white p-5 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold">Client Side</h2>
          <p className="text-gray-600">
            Handle routing and UI with Next.js and Tailwind CSS effortlessly.
          </p>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold">Bun Server</h2>
          <p className="text-gray-600">
            API calls and serving static files is a breeze with Bun.
          </p>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold">Fast Development</h2>
          <p className="text-gray-600">
            Re-build and serve your application with instant feedback.
          </p>
        </div>
      </div>
      <footer className="mt-10">
        <p className="text-sm text-gray-300">Built with ❤️ using Bun & TailwindCSS</p>
      </footer>
    </div>
  );
};

export default Showcase;
