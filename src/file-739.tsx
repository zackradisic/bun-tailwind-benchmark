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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-green-500 p-8">
      <h1 className="text-4xl font-bold text-white mb-4">
        Welcome to Bun with Tailwind CSS!
      </h1>
      <p className="text-lg text-gray-200 mb-8">
        Build fullstack applications effortlessly.
      </p>
      <button className="px-4 py-2 bg-white text-blue-500 rounded-lg hover:bg-gray-200 transition duration-300">
        Fetch User Data
      </button>
      <div className="mt-8 p-5 bg-white rounded-lg shadow-lg text-gray-700">
        <h2 className="text-2xl font-semibold">User Data</h2>
        {/* User data will be displayed here */}
      </div>
    </div>
  );
};

export default App;
