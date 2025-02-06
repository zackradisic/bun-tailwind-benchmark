import "./style.css";
import React, { useState, useEffect } from 'react';

export default function BunFullstackShowcase() {
  const [users, setUsers] = useState([]);
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
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-4xl bg-white shadow-2xl rounded-3xl overflow-hidden transform transition-all hover:scale-105 duration-300">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6">
          <h1 className="text-4xl font-extrabold text-white text-center tracking-tight animate-pulse">
            ⚡ Bun Fullstack React Demo
          </h1>
        </div>

        <div className="p-8">
          {loading ? (
            <div className="flex items-center justify-center space-x-4 animate-bounce">
              <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
              <div className="w-8 h-8 bg-purple-500 rounded-full"></div>
              <div className="w-8 h-8 bg-pink-500 rounded-full"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {users.map((user, index) => (
                <div 
                  key={index} 
                  className="bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <h2 className="text-xl font-bold text-gray-800 mb-2">
                    {user.name}
                  </h2>
                  <p className="text-sm text-gray-600">
                    {user.email}
                  </p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                      {user.role}
                    </span>
                    <span className="text-xs text-gray-500">
                      ID: {user.id}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="bg-gray-100 p-4 text-center">
          <p className="text-sm text-gray-600">
            Built with 🌟 Bun, React & TypeScript
          </p>
        </div>
      </div>
    </div>
  );
}
