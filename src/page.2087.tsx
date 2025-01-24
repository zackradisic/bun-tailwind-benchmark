import React from 'react';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Hello Bun with Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-8">This is a fullstack application using React and Bun!</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="p-6 max-w-sm bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800">Server Call</h2>
          <p className="mt-2 text-gray-600">Fetching data directly from the server is as easy as making an API call.</p>
          <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-400">Fetch Users</button>
        </div>
        <div className="p-6 max-w-sm bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800">Client Side</h2>
          <p className="mt-2 text-gray-600">Manage your state and update the UI seamlessly!</p>
          <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-400">Update State</button>
        </div>
        <div className="p-6 max-w-sm bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800">Tailwind Power</h2>
          <p className="mt-2 text-gray-600">Utilize Tailwind classes to create beautiful interfaces effortlessly.</p>
          <button className="mt-4 bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-400">Styled Button</button>
        </div>
      </div>
    </div>
  );
};

export default App;
