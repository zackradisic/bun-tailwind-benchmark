import React, { useState, useEffect } from 'react'

export default function BunFullstackShowcase() {
  const [users, setUsers] = useState<any[]>([])
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
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-4xl transform transition-all hover:scale-105 duration-300">
        <h1 className="text-4xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-8">
          Bun Fullstack Magic ⚡️
        </h1>

        <div className="grid grid-cols-2 gap-8">
          <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200 shadow-md">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Client Side</h2>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="font-medium text-gray-700">
                  React Component using TypeScript
                </p>
                <code className="text-sm text-green-600 block mt-2">
                  useState, useEffect hooks
                </code>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="font-medium text-gray-700">
                  Fetch API Integration
                </p>
                <code className="text-sm text-green-600 block mt-2">
                  /api/users endpoint
                </code>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 rounded-xl p-6 border-2 border-purple-200 shadow-md">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">Server Side</h2>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="font-medium text-gray-700">
                  Bun HTTP Server
                </p>
                <code className="text-sm text-green-600 block mt-2">
                  Bun.serve() with static routes
                </code>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="font-medium text-gray-700">
                  API Endpoint
                </p>
                <code className="text-sm text-green-600 block mt-2">
                  /api/users returns JSON
                </code>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">
            Users Data
          </h3>
          {loading ? (
            <div className="flex justify-center items-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-600"></div>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-4">
              {users.map((user, idx) => (
                <div 
                  key={idx} 
                  className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <p className="font-semibold text-gray-800">{user.name}</p>
                  <p className="text-sm text-gray-600">{user.email}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="text-center text-gray-600 text-sm">
        Built with 🔨 Bun + React + TypeScript + Tailwind
      </div>
    </div>
  )
}
