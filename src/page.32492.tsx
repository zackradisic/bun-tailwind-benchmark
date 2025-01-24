import React from "react";

const App: React.FC = () => {
  // Fetch data from API on the server side
  React.useEffect(() => {
    // Sample fetch to demonstrate API interaction
    fetch("/api/users")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <h1 className="text-4xl font-bold mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg mb-8">
        This is a fullstack application built with Bun, React, and TypeScript.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-2">Server Side</h2>
          <p className="text-gray-700">
            Fetching user data directly from our API endpoint.
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-2">Client Side</h2>
          <p className="text-gray-700">
            Rendering this component quickly with TailwindCSS for styling.
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
