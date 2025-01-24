import React, { useState, useEffect } from 'react';

const BunFullstackShowcase: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [serverTime, setServerTime] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await fetch('/api/users');
        const userData = await userResponse.json();
        setUsers(userData);

        const timeResponse = await fetch('/api/time');
        const timeData = await timeResponse.json();
        setServerTime(timeData.time);
        setLoading(false);
      } catch (error) {
        console.error('Fetch error:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center justify-center p-6 space-y-8">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-4xl transform transition-all hover:scale-105 duration-300">
        <h1 className="text-4xl font-extrabold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
          Bun Fullstack Magic ✨
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Server Information Section */}
          <div className="bg-blue-50 rounded-lg p-6 border-2 border-blue-200 hover:shadow-lg transition-all">
            <h2 className="text-2xl font-bold mb-4 text-blue-700">Server Details</h2>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <span className="font-semibold text-blue-600">Server Time:</span>
                {loading ? (
                  <div className="animate-pulse h-4 bg-blue-300 rounded w-24"></div>
                ) : (
                  <span className="text-gray-700">{serverTime}</span>
                )}
              </div>
              <div className="flex items-center space-x-3">
                <span className="font-semibold text-blue-600">Runtime:</span>
                <span className="text-gray-700">Bun v1.x</span>
              </div>
            </div>
          </div>

          {/* Users Section */}
          <div className="bg-purple-50 rounded-lg p-6 border-2 border-purple-200 hover:shadow-lg transition-all">
            <h2 className="text-2xl font-bold mb-4 text-purple-700">Users</h2>
            {loading ? (
              <div className="space-y-2">
                {[1, 2, 3].map((_, index) => (
                  <div key={index} className="animate-pulse h-6 bg-purple-300 rounded"></div>
                ))}
              </div>
            ) : (
              <ul className="space-y-2">
                {users.map((user, index) => (
                  <li 
                    key={index} 
                    className="bg-white p-2 rounded shadow-sm hover:bg-purple-100 transition-colors"
                  >
                    {user.name || 'Anonymous User'}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="flex space-x-4 items-center opacity-70 hover:opacity-100 transition-opacity">
        <span className="text-lg font-semibold">Built with:</span>
        <div className="flex space-x-2">
          {['Bun', 'React', 'TypeScript', 'Tailwind'].map((tech) => (
            <span 
              key={tech} 
              className="px-3 py-1 bg-white rounded-full text-sm font-medium shadow-md"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BunFullstackShowcase;
