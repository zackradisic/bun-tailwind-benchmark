import "./style.css";
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
        console.error('Failed to fetch users', error)
        setLoading(false)
      }
    }
    fetchUsers()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all hover:scale-[1.01]">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6">
          <h1 className="text-4xl font-extrabold text-white text-center tracking-tight animate-pulse">
            Bun Fullstack Showcase 🚀
          </h1>
        </div>
        
        <div className="p-8">
          {loading ? (
            <div className="flex justify-center items-center space-x-4 animate-bounce">
              <div className="w-5 h-5 bg-blue-500 rounded-full"></div>
              <div className="w-5 h-5 bg-purple-500 rounded-full"></div>
              <div className="w-5 h-5 bg-pink-500 rounded-full"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {users.map((user, index) => (
                <div 
                  key={user.id || index} 
                  className="bg-gradient-to-tr from-white to-gray-100 border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                      {user.name?.charAt(0) || '?'}
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
                      <p className="text-gray-500">{user.email}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        
        <div className="bg-gray-100 p-4 text-center text-sm text-gray-600">
          Built with ❤️ using Bun, React & TypeScript
        </div>
      </div>
    </div>
  )
}
