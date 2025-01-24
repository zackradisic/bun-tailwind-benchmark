import React from 'react';

const FastAndSimpleDemo: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 p-10">
      <h1 className="text-4xl font-bold text-white mb-5">Build Fullstack Apps with Bun</h1>
      <p className="text-lg text-white mb-10">Experience unmatched speed and simplicity.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-white shadow-lg rounded-lg p-5 transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-semibold mb-2">Fast API Development</h2>
          <p>Seamlessly create robust APIs with minimal setup.</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-5 transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-semibold mb-2">Rich Frontend Integration</h2>
          <p>Utilize modern frameworks and libraries effortlessly.</p>
        </div>
      </div>
      <button className="mt-10 px-8 py-3 bg-white text-blue-600 font-bold rounded-full shadow-lg hover:bg-gray-200 transition">
        Get Started with Bun
      </button>
    </div>
  );
};

export default FastAndSimpleDemo;
