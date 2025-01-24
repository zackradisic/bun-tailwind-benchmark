import React from 'react';

const FastFullstackDemo: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 p-10">
      <h1 className="text-4xl font-bold text-white mb-4 animate-bounce">
        Build Fast with Bun!
      </h1>
      <p className="text-lg text-gray-100 mb-8">
        Experience the speed of fullstack development at your fingertips.
      </p>
      <button className="bg-white text-blue-500 font-semibold py-2 px-4 rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
        Get Started
      </button>
      <div className="mt-10">
        <div className="flex space-x-4">
          <div className="bg-white rounded-lg p-5 shadow-md transition hover:shadow-lg">
            <h2 className="text-xl font-bold">Frontend</h2>
            <p className="text-gray-600">Revolutionary UI using React.</p>
          </div>
          <div className="bg-white rounded-lg p-5 shadow-md transition hover:shadow-lg">
            <h2 className="text-xl font-bold">Backend</h2>
            <p className="text-gray-600">Seamless API integration.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FastFullstackDemo;
