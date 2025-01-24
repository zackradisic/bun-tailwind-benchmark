import React, { useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'

export default function BunFullstackShowcase() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data)
        setLoading(false)
      })
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-6 font-sans">
      <div className="bg-white shadow-2xl rounded-3xl w-full max-w-4xl p-8 space-y-6 transform transition-all hover:scale-[1.01]">
        <header className="text-center">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-600 mb-4">
            Bun Fullstack Magic ✨
          </h1>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            Seamlessly combining server-side power with client-side reactivity
          </p>
        </header>

        <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            User Directory
          </h2>
          
          {loading ? (
            <div className="flex justify-center items-center space-x-3 animate-pulse">
              <div className="h-4 w-4 bg-blue-400 rounded-full"></div>
              <div className="h-4 w-4 bg-blue-400 rounded-full"></div>
              <div className="h-4 w-4 bg-blue-400 rounded-full"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {users.map((user, index) => (
                <div 
                  key={index} 
                  className="bg-white shadow-md rounded-lg p-4 border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <h3 className="text-lg font-semibold text-gray-800">{user.name}</h3>
                  <p className="text-gray-500">{user.email}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="text-center mt-6">
          <div className="inline-flex items-center bg-green-50 text-green-700 px-4 py-2 rounded-full">
            <span className="mr-2">🚀</span>
            Built with Bun, React & TypeScript
          </div>
        </div>
      </div>
    </div>
  )
}
