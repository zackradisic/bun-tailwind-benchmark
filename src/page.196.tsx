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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">User List</h1>
      <ul className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        {data.length > 0 ? (
          data.map((user, index) => (
            <li key={index} className="p-4 border-b last:border-b-0">
              <span className="font-semibold">{user.name}</span> - {user.email}
            </li>
          ))
        ) : (
          <li className="text-center text-gray-500">No users found</li>
        )}
      </ul>
    </div>
  );
};

export default App;
