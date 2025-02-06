import "./style.css";
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        Welcome to Bun with TailwindCSS!
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        This is a fast and simple integration of Bun, React, and TailwindCSS.
      </p>
      <button className="px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition ease-in-out duration-300">
        Click Me!
      </button>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 w-full max-w-4xl">
        <div className="p-4 bg-white border rounded-lg shadow hover:shadow-lg transition ease-in-out duration-300">
          <h2 className="text-xl font-semibold text-green-600">Client Side</h2>
          <p className="text-gray-600">
            The client part of your app is rendered here using React components styled with TailwindCSS.
          </p>
        </div>
        <div className="p-4 bg-white border rounded-lg shadow hover:shadow-lg transition ease-in-out duration-300">
          <h2 className="text-xl font-semibold text-purple-600">Server Side</h2>
          <p className="text-gray-600">
            Insert your API calls to the server, which can use Bun’s server capabilities to handle requests.
          </p>
        </div>
      </section>
    </div>
  );
};

export default App;
