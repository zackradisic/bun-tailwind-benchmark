import "./style.css";
import React from "react";

const App: React.FC = () => {
  const fetchData = async () => {
    const response = await fetch("/api/users");
    const data = await response.json();
    console.log(data);
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Bun with Tailwind</h1>
      <p className="text-lg text-gray-700 mb-4">Quick API Fetch Example</p>
      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Fetch Users
      </button>
      <div className="mt-4 p-4 border rounded bg-white shadow">
        <h2 className="text-2xl font-semibold">User Data:</h2>
        <div className="mt-2" id="user-data"></div>
      </div>
    </div>
  );
};

export default App;
