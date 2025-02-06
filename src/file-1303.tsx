import "./style.css";
import React, { useState, useEffect } from 'react'

export default function BunFullstackDemo() {
  const [users, setUsers] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch('/api/users')
        const data = await response.json()
        setUsers(data)
        setLoading(false)
      } catch (err) {
        setError('Failed to fetch users')
        setLoading(false)
      }
    }
    fetchUsers()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-2xl overflow-hidden transform transition-all hover:scale-105 duration-300">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6">
          <h1 className="text-3xl font-extrabold text-white text-center tracking-tight">
            Bun Fullstack Demo 🚀
          </h1>
        </div>
        
        <div className="p-6">
          {loading ? (
            <div className="flex justify-center items-center space-x-4 animate-pulse">
              <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
              <div className="h-6 bg-gray-300 rounded w-3/4"></div>
            </div>
          ) : error ? (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
              {error}
            </div>
          ) : (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">User List</h2>
              {users.map((user, index) => (
                <div 
                  key={user.id} 
                  className="bg-gray-100 p-4 rounded-lg shadow-md hover:bg-gray-200 transition-colors duration-200 flex items-center space-x-4"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <p className="text-gray-800 font-medium">{user.name}</p>
                    <p className="text-gray-600 text-sm">{user.email}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="bg-gray-100 p-4 text-center">
          <p className="text-sm text-gray-600 italic">
            Built with 💖 using Bun, React & TypeScript
          </p>
        </div>
      </div>
    </div>
  )
}
