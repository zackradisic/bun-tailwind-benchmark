import React from "react";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-600 font-bold">
              Bun & Tailwind Integration
            </div>
            <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
              Build Fullstack Apps
            </a>
            <p className="mt-2 text-gray-500">
              Experience the rapid development with Bun and Tailwind CSS in your React applications. Enjoy fast server responses and a seamless styling experience in one package!
            </p>
              <div className="mt-6 flex items-center">
                <button className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none">
                  Get Started
                </button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
