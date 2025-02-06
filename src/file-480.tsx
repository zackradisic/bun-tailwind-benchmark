import "./style.css";
import React from "react";

const App: React.FC = () => {
  const [data, setData] = React.useState<any[]>([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/users");
      const result = await response.json();
      setData(result);
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">User List</h1>
      <ul className="bg-white shadow-md rounded-lg p-6 w-1/2">
        {data.length === 0 ? (
          <li className="text-gray-500">Loading...</li>
        ) : (
          data.map(user => (
            <li key={user.id} className="border-b py-2 px-4 hover:bg-gray-50">
              <span className="font-medium">{user.name}</span> - <span className="text-gray-600">{user.email}</span>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default App;
