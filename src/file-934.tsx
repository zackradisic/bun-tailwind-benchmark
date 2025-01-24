import React from "react";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun!</h1>
      <p className="text-xl text-gray-700 mb-8">
        This is a demo showcasing Bun's Tailwind integration.
      </p>
      <button className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out">
        Get Started
      </button>
      <div className="mt-10 p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-2">Server Response:</h2>
        <div id="server-response" className="border p-2 rounded">
          {/* This is where server data will be displayed */}
        </div>
      </div>
    </div>
  );
};

// Client-side rendering
if (typeof window !== "undefined") {
  const root = document.getElementById("root");
  if (root) {
    const renderApp = async () => {
      const response = await fetch("/api/users"); // Example API request
      const data = await response.json();
      document.getElementById("server-response")!.innerHTML = JSON.stringify(data, null, 2);
    };
    
    renderApp();
  }
}

export default App;
