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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white shadow-2xl rounded-3xl overflow-hidden transform transition-all duration-300 hover:scale-105">
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6">
          <h1 className="text-4xl font-extrabold text-white text-center tracking-tight">
            Bun Fullstack Demo 🚀
          </h1>
        </div>
        
        <div className="p-8">
          {loading && (
            <div className="flex justify-center items-center space-x-3 animate-pulse">
              <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
              <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
              <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
            </div>
          )}

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
              {error}
            </div>
          )}

          {!loading && !error && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Users</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {users.map((user, index) => (
                  <div 
                    key={index} 
                    className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
                  >
                    <p className="text-lg font-semibold text-gray-800">{user.name}</p>
                    <p className="text-sm text-gray-600">{user.email}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="bg-gray-100 p-4 text-center">
          <p className="text-sm text-gray-600">
            Built with 🍞 Bun, React & TypeScript
          </p>
        </div>
      </div>
    </div>
  )
}
