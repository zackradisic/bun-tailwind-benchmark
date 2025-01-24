import React from "react";

const App: React.FC = () => {
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
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-500 mb-4">User List</h1>
      <ul className="bg-white shadow-lg rounded-lg divide-y divide-gray-200 w-1/2">
        {data.map(user => (
          <li key={user.id} className="p-4 flex justify-between items-center hover:bg-gray-50">
            <span className="text-lg text-gray-800">{user.name}</span>
            <span className="text-sm text-gray-500">{user.email}</span>
          </li>
        ))}
      </ul>
      <footer className="mt-8 text-sm text-gray-600">
        <p>Built with <span className="font-bold text-blue-600">Bun</span> and <span className="font-bold text-purple-600">Tailwind CSS</span></p>
      </footer>
    </div>
  );
};

export default App;
