import React, { useState, useEffect } from 'react'

export default function BunFullstackDemo() {
  const [users, setUsers] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/users')
        const userData = await response.json()
        setUsers(userData)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching users:', error)
        setLoading(false)
      }
    }
    fetchUsers()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-4xl bg-white shadow-2xl rounded-3xl overflow-hidden transform transition-all hover:scale-105 duration-300">
        <div className="bg-gradient-to-r from-purple-600 to-blue-500 p-6">
          <h1 className="text-4xl font-extrabold text-white text-center tracking-tight">
            🚀 Bun Fullstack Magic
          </h1>
        </div>
        
        <div className="p-8">
          {loading ? (
            <div className="flex justify-center items-center space-x-4 animate-pulse">
              <div className="w-12 h-12 bg-purple-300 rounded-full"></div>
              <div className="w-12 h-12 bg-blue-300 rounded-full"></div>
              <div className="w-12 h-12 bg-purple-300 rounded-full"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {users.map((user, index) => (
                <div 
                  key={index} 
                  className="bg-gradient-to-tr from-blue-100 to-purple-100 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <h2 className="text-2xl font-bold text-purple-800 mb-2">
                    {user.name}
                  </h2>
                  <p className="text-gray-600 italic">
                    {user.email}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
        
        <div className="bg-gray-100 p-6 text-center">
          <p className="text-sm text-gray-500 flex items-center justify-center space-x-2">
            <span className="font-bold text-purple-600">Built with</span>
            <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-xs">
              Bun
            </span>
            <span className="px-3 py-1 bg-purple-500 text-white rounded-full text-xs">
              React
            </span>
            <span className="px-3 py-1 bg-indigo-500 text-white rounded-full text-xs">
              TypeScript
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}
