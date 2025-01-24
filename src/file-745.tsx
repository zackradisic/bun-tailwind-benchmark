import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-4">
        Welcome to My Bun & Tailwind App
      </h1>
      <p className="text-lg text-center text-gray-700 mb-8">
        Experience the speed of Bun with Tailwind CSS!
      </p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Get Started
      </button>
      <div className="mt-10 flex flex-wrap justify-center">
        <div className="bg-white shadow-md rounded-lg p-6 m-4 max-w-sm">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Fast API Response
          </h2>
          <p className="text-gray-600">
            Click the button below to fetch user data from the server.
          </p>
          <button 
            className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={async () => {
              const response = await fetch('/api/users');
              const data = await response.json();
              console.log(data);
            }}>
            Fetch Users
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
