import React, { useState, useEffect } from 'react';

export default function BunFullstackShowcase() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Failed to fetch users', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-white shadow-2xl rounded-3xl overflow-hidden transform transition-all duration-300 hover:scale-105">
        <div className="p-8 bg-gradient-to-r from-blue-500 to-indigo-600">
          <h1 className="text-4xl font-extrabold text-white text-center mb-4 tracking-tight animate-pulse">
            Bun Fullstack Magic ✨
          </h1>
          <p className="text-xl text-blue-100 text-center mb-6">
            Blazing Fast React + TypeScript + Bun
          </p>
        </div>

        <div className="p-6">
          {loading ? (
            <div className="flex justify-center items-center space-x-4 animate-bounce">
              <div className="w-5 h-5 bg-blue-500 rounded-full"></div>
              <div className="w-5 h-5 bg-indigo-500 rounded-full"></div>
              <div className="w-5 h-5 bg-purple-500 rounded-full"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {users.map((user, index) => (
                <div 
                  key={index} 
                  className="bg-gradient-to-tr from-blue-100 to-indigo-200 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <h3 className="text-2xl font-bold text-indigo-800 mb-2">
                    {user.name || 'Anonymous User'}
                  </h3>
                  <p className="text-blue-600 font-medium">
                    {user.email || 'No email provided'}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="bg-gray-100 p-6 text-center">
          <div className="inline-flex items-center space-x-2 bg-blue-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-600 transition-all">
            <span className="text-lg font-semibold">Built with Bun 🚀</span>
          </div>
        </div>
      </div>
    </div>
  );
}
