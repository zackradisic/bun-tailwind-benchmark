import "./style.css";
import React from "react";

const App = () => {
  const fetchData = async () => {
    const response = await fetch("/api/users");
    const data = await response.json();
    console.log(data);
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with Tailwind!</h1>
      <p className="text-lg text-gray-700 mb-6">This is a demo component showcasing Bun's capabilities with React and TypeScript.</p>
      <button 
        className="px-8 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        onClick={fetchData}>
        Fetch Users
      </button>
      <div className="mt-8 bg-white p-4 shadow-md rounded">
        <h2 className="text-2xl font-semibold">User List:</h2>
        <ul className="list-disc list-inside">
          {/* List items would be rendered here */}
        </ul>
      </div>
    </div>
  );
};

export default App;
