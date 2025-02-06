import "./style.css";
import React, { useState, useEffect } from 'react';

const FullstackBunDemo: React.FC = () => {
  const [serverData, setServerData] = useState<{ message: string; users: any[] }>({
    message: '',
    users: []
  });

  const [clientCounter, setClientCounter] = useState(0);

  useEffect(() => {
    const fetchServerData = async () => {
      try {
        const response = await fetch('/api/hello');
        const data = await response.json();
        setServerData(data);
      } catch (error) {
        console.error('Failed to fetch server data', error);
      }
    };

    fetchServerData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col items-center justify-center p-6 space-y-8 text-center">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-2xl transform transition-all hover:scale-105 duration-300">
        <h1 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
          Bun Fullstack Magic 🚀
        </h1>
        
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-blue-50 rounded-xl p-6 shadow-md">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Server Side</h2>
            <p className="text-gray-700 font-medium mb-4">
              {serverData.message || 'Fetching server data...'}
            </p>
            <ul className="space-y-2">
              {serverData.users.map((user, index) => (
                <li 
                  key={index} 
                  className="bg-blue-100 rounded-lg p-2 text-sm text-blue-800 hover:bg-blue-200 transition-colors"
                >
                  {user.name || 'User'}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-purple-50 rounded-xl p-6 shadow-md">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">Client Side</h2>
            <div className="flex flex-col items-center space-y-4">
              <p className="text-gray-700 font-medium">
                Counter: {clientCounter}
              </p>
              <div className="flex space-x-4">
                <button 
                  onClick={() => setClientCounter(c => c + 1)}
                  className="bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-600 transition-colors"
                >
                  Increment
                </button>
                <button 
                  onClick={() => setClientCounter(0)}
                  className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition-colors"
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-sm text-gray-600 italic">
        Built with Bun, React & TypeScript - Fullstack Simplicity!
      </div>
    </div>
  );
};

export default FullstackBunDemo;
