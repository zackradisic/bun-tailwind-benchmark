import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Bun App!</h1>
      <p className="mb-8 text-lg">This application demonstrates Bun's incredible speed and simplicity.</p>
      
      <button className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-transform transform hover:scale-105">
        Click Me!
      </button>

      <div className="mt-8 p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold mb-2">Client & Server Integration</h2>
        <p className="mb-4">Fetch data from the server seamlessly using the Bun server.</p>
        <p className="mb-2">
          Make sure to check how easy it is to create fullstack apps using 
          <code className="bg-gray-200 px-1 rounded">Bun.serve()</code> for serving.
        </p>
        <p>
          API response: <span id="api-response" className="font-semibold"></span>
        </p>
      </div>
    </div>
  );
};

document.addEventListener("DOMContentLoaded", async () => {
  const root = document.getElementById("root");
  if (root) {
    const apiResponse = await fetch('/api/users');
    const users = await apiResponse.json();
    document.getElementById("api-response")!.innerText = JSON.stringify(users);
  }
});

export default App;
