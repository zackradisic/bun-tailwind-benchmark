import React, { useState } from 'react';

const BunFullstackDemo: React.FC = () => {
  const [users, setUsers] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchUsers = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/users');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Failed to fetch users', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-2xl transform transition-all hover:scale-105 duration-300">
        <h1 className="text-4xl font-extrabold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
          ⚡ Bun Fullstack Magic ⚡
        </h1>
        
        <div className="grid grid-cols-2 gap-6 mb-8">
          <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200 hover:shadow-lg transition-all">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Server</h2>
            <pre className="text-sm text-gray-700 overflow-x-auto">
              {`Bun.serve({
  fetch(req) {
    if (req.url.endsWith('/api/users')) {
      return Response.json(['Alice', 'Bob', 'Charlie'])
    }
  }
})`}
            </pre>
          </div>
          
          <div className="bg-purple-50 p-6 rounded-xl border-2 border-purple-200 hover:shadow-lg transition-all">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">Client</h2>
            <button 
              onClick={fetchUsers}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all"
            >
              {isLoading ? 'Loading...' : 'Fetch Users'}
            </button>
          </div>
        </div>
        
        {users.length > 0 && (
          <div className="bg-green-50 p-6 rounded-xl border-2 border-green-200 animate-fade-in">
            <h3 className="text-2xl font-bold text-green-700 mb-4">Users</h3>
            <ul className="space-y-2">
              {users.map((user, index) => (
                <li 
                  key={index} 
                  className="bg-white p-3 rounded-lg shadow-sm text-gray-700 hover:bg-green-100 transition-all"
                >
                  {user}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      
      <div className="text-center text-sm text-gray-600">
        Built with 
        <span className="mx-2 font-bold text-blue-600">Bun</span> 
        🥟 
        <span className="mx-2 font-bold text-purple-600">React</span>
        <span className="block mt-2 text-xs">Simple. Fast. Delightful.</span>
      </div>
    </div>
  );
};

export default BunFullstackDemo;
