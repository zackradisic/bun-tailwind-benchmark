import React from 'react';

const FastAndSimpleApp: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-5xl font-bold text-blue-600 mb-6">Build Fast with Bun!</h1>
      <p className="text-lg text-gray-700 mb-4">Creating fullstack applications has never been easier.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 max-w-sm bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-purple-500">Frontend Development</h2>
          <p className="mt-2 text-gray-600">Utilize Tailwind CSS for rapid styling.</p>
          <button className="mt-4 px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors duration-300">Get Started</button>
        </div>
        <div className="p-6 max-w-sm bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-green-500">Backend Development</h2>
          <p className="mt-2 text-gray-600">Easily handle API requests with Bun.</p>
          <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors duration-300">Learn More</button>
        </div>
      </div>
      <footer className="mt-10 p-4 text-center text-gray-500">
        <p>© 2023 Fast Apps with Bun</p>
      </footer>
    </div>
  );
};

export default FastAndSimpleApp;
