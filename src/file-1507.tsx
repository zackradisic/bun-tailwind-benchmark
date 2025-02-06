import "./style.css";
import React from "react";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4 text-blue-600">Welcome to Bun!</h1>
      <p className="text-lg text-gray-700 mb-8">
        This is a fullstack application built with Bun, React, and TypeScript.
      </p>
      <div className="p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-2 text-green-500">API Data:</h2>
        <div className="space-y-2">
          {/* Simulating API call and displaying data */}
          <ResponseComponent />
        </div>
      </div>
    </div>
  );
};

const ResponseComponent = () => {
  const [data, setData] = React.useState<any[]>([]);
  
  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/users');
      const result = await response.json();
      setData(result);
    };
    fetchData();
  }, []);
  
  return (
    <ul className="list-disc pl-5">
      {data.length > 0 ? (
        data.map((user, index) => (
          <li key={index} className="text-gray-800">{user.name}</li>
        ))
      ) : (
        <li className="text-gray-600">Loading...</li>
      )}
    </ul>
  );
};

export default App;
