import React, { useState, useEffect } from 'react';

const BunFullstackShowcase: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/users');
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch users', error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-4xl transform transition-all hover:scale-105 duration-300 ease-in-out">
        <h1 className="text-5xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200 hover:shadow-lg transition-all">
            <h2 className="text-2xl font-bold mb-4 text-blue-700">Server-Side</h2>
            <pre className="bg-blue-100 p-4 rounded-md text-sm overflow-x-auto">
              {`Bun.serve({
  static: { "/": homepage },
  async fetch(req) {
    if (req.url.endsWith("/api/users")) {
      return Response.json(
        await Bun.sql\`SELECT * FROM users\`
      )
    }
  }
})`}
            </pre>
          </div>
          
          <div className="bg-purple-50 p-6 rounded-xl border-2 border-purple-200 hover:shadow-lg transition-all">
            <h2 className="text-2xl font-bold mb-4 text-purple-700">Client-Side</h2>
            <pre className="bg-purple-100 p-4 rounded-md text-sm overflow-x-auto">
              {`const App = () => {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(setUsers);
  }, []);
  
  return <UserList users={users} />;
}`}
            </pre>
          </div>
        </div>
        
        <div className="mt-8 bg-gray-50 p-6 rounded-xl">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
            Users Fetched: {users.length}
          </h2>
          
          {loading ? (
            <div className="flex justify-center items-center space-x-4 animate-pulse">
              <div className="h-4 w-4 bg-blue-400 rounded-full"></div>
              <div className="h-4 w-4 bg-blue-400 rounded-full"></div>
              <div className="h-4 w-4 bg-blue-400 rounded-full"></div>
            </div>
          ) : (
            <ul className="grid grid-cols-3 gap-4">
              {users.map((user, index) => (
                <li 
                  key={index} 
                  className="bg-white p-4 rounded-lg shadow-md hover:bg-blue-50 transition-colors"
                >
                  {user.name || 'Anonymous User'}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      
      <div className="text-sm text-gray-500 text-center">
        Built with 🍞 Bun, React & TypeScript
      </div>
    </div>
  );
};

export default BunFullstackShowcase;
