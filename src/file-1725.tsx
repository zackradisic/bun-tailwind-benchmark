import "./style.css";
import React from 'react';

const FastFullstackApp: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun!</h1>
      <p className="text-lg text-gray-700 mb-8">
        Experience the speed and simplicity of building fullstack applications.
      </p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="p-5 bg-white shadow-md rounded-lg hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-semibold text-green-500">Fast Development</h2>
          <p className="text-gray-600">
            Bun allows you to rapidly build and iterate on your applications.
          </p>
        </div>
        <div className="p-5 bg-white shadow-md rounded-lg hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-semibold text-pink-500">Simplicity</h2>
          <p className="text-gray-600">
            With intuitive APIs, you can focus more on coding and less on setup.
          </p>
        </div>
        <div className="p-5 bg-white shadow-md rounded-lg hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-semibold text-purple-500">Integrated Tooling</h2>
          <p className="text-gray-600">
            Direct support for bundling frontend and backend applications.
          </p>
        </div>
      </div>
      <footer className="mt-10">
        <p className="text-gray-500">&copy; {new Date().getFullYear()} Bun Framework</p>
      </footer>
    </div>
  );
};

export default FastFullstackApp;
