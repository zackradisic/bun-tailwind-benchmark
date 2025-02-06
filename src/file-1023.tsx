import "./style.css";
import React, { useState, useEffect } from 'react';

export default function BunFullstackshowcase() {
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-white shadow-2xl rounded-2xl overflow-hidden transform transition-all hover:scale-105 duration-300">
        <div className="bg-blue-600 text-white p-6 flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mr-3" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 18.636A8.214 8.214 0 0118 16.75c.995 0 1.922.144 2.75.41V4.75a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v14.103z" />
            </svg>
            Bun Fullstack React
          </h1>
          <div className="flex space-x-2">
            <span className="bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold">TypeScript</span>
            <span className="bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold">React</span>
          </div>
        </div>
        
        <div className="p-6">
          {loading ? (
            <div className="flex justify-center items-center space-x-3 animate-pulse">
              <div className="h-8 w-8 bg-blue-300 rounded-full"></div>
              <div className="h-8 w-64 bg-blue-200 rounded"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {users.map((user, index) => (
                <div 
                  key={user.id} 
                  className="bg-blue-50 p-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center">
                      {user.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-blue-800">{user.name}</h3>
                      <p className="text-blue-600 text-sm">{user.email}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        
        <div className="bg-blue-100 p-4 text-center">
          <p className="text-blue-800 font-medium">
            Built with ⚡ Bun - Blazing Fast JavaScript Runtime
          </p>
        </div>
      </div>
    </div>
  );
}
