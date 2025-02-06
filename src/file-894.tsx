import "./style.css";
import { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState<Array<{ id: number; name: string }>>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/users");
      const users = await response.json();
      setData(users);
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <nav className="bg-white shadow mb-8 p-4 rounded">
        <h1 className="text-2xl font-bold text-center">User Dashboard</h1>
      </nav>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.map(user => (
          <div key={user.id} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition">
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <p className="text-gray-500">User ID: {user.id}</p>
          </div>
        ))}
      </div>
      <footer className="mt-8 text-center text-gray-600">
        <p>Powered by Bun, React & Tailwind CSS</p>
      </footer>
    </div>
  );
};

export default App;
