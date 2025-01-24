import React from 'react';

const BunDemo: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Build Fast with Bun!</h1>
      <p className="text-lg text-gray-700 mb-8">Experience seamless fullstack development with easy integrations.</p>
      <div className="flex justify-around w-full max-w-4xl p-4 bg-white shadow-lg rounded-lg">
        <div className="flex flex-col items-center p-4">
          <h2 className="text-2xl font-semibold text-green-600">Frontend</h2>
          <p className="text-gray-500">Create stunning UIs with React + Tailwind CSS</p>
          <button className="mt-4 px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600">
            Get Started
          </button>
        </div>
        <div className="flex flex-col items-center p-4">
          <h2 className="text-2xl font-semibold text-purple-600">Backend</h2>
          <p className="text-gray-500">Serve APIs effortlessly with Bun's built-in support</p>
          <button className="mt-4 px-4 py-2 font-semibold text-white bg-purple-500 rounded-lg hover:bg-purple-600">
            Learn More
          </button>
        </div>
      </div>
      <footer className="mt-12 text-center">
        <p className="text-sm text-gray-600">Powered by Bun</p>
      </footer>
    </div>
  );
};

export default BunDemo;
