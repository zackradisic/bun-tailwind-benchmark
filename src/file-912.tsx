import "./style.css";
import React from "react";

const FastAndSimpleDemo: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800">
      <h1 className="text-5xl font-bold text-indigo-600 mb-4">Build Fast with Bun</h1>
      <p className="text-lg text-center max-w-lg mb-8">
        Experience the speed and simplicity of fullstack development with Bun and TailwindCSS.
      </p>
      <div className="flex flex-wrap justify-center">
        <div className="p-4 bg-white shadow-md rounded-lg m-2 w-64">
          <h2 className="text-xl font-semibold text-gray-700">Simple Setup</h2>
          <p className="text-gray-600">
            Get started by integrating Bun with your favorite frontend framework effortlessly.
          </p>
        </div>
        <div className="p-4 bg-white shadow-md rounded-lg m-2 w-64">
          <h2 className="text-xl font-semibold text-gray-700">Versatile Routing</h2>
          <p className="text-gray-600">
            Use HTML imports to set up routes easily with no extra configuration.
          </p>
        </div>
        <div className="p-4 bg-white shadow-md rounded-lg m-2 w-64">
          <h2 className="text-xl font-semibold text-gray-700">Seamless API Integration</h2>
          <p className="text-gray-600">
            Handle API requests directly and efficiently in your fullstack application.
          </p>
        </div>
      </div>
      <footer className="mt-8">
        <p className="text-sm text-gray-500">Ready to get started? Dive into Bun documentation!</p>
      </footer>
    </div>
  );
};

export default FastAndSimpleDemo;
