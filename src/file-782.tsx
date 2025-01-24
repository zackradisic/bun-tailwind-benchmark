import React from "react";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun + Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-8">Building fullstack applications has never been easier.</p>
      <div className="space-x-4">
        <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
          Get Started
        </button>
        <button className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition duration-300">
          Learn More
        </button>
      </div>
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Your API is ready!</h2>
        <p className="text-base text-gray-600">
          Fetch data with ease, just like the API request below:
        </p>
        <pre className="bg-gray-200 p-4 rounded-lg mt-2">
          <code className="text-gray-800">
            {`fetch('/api/users').then(response => response.json()).then(data => console.log(data));`}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default App;
