import React, { useState, useEffect } from 'react'

export default function BunFullstackShowcase() {
  const [users, setUsers] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/users')
        const data = await response.json()
        setUsers(data)
        setLoading(false)
      } catch (error) {
        console.error('Failed to fetch users', error)
        setLoading(false)
      }
    }
    fetchUsers()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="w-full max-w-4xl bg-white shadow-2xl rounded-3xl overflow-hidden transform transition-all hover:scale-105 duration-300">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6">
          <h1 className="text-4xl font-extrabold text-white text-center tracking-tight animate-pulse">
            Bun Fullstack Showcase 🚀
          </h1>
        </div>
        
        <div className="p-8 space-y-6">
          {loading ? (
            <div className="flex justify-center items-center space-x-4 animate-bounce">
              <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
              <div className="w-8 h-8 bg-purple-500 rounded-full"></div>
              <div className="w-8 h-8 bg-pink-500 rounded-full"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {users.map((user, index) => (
                <div 
                  key={index} 
                  className="bg-gradient-to-tr from-white via-gray-50 to-gray-100 
                             border border-gray-200 rounded-xl p-6 
                             shadow-md hover:shadow-xl transition-all duration-300 
                             transform hover:-translate-y-2 cursor-pointer"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center text-white font-bold">
                      {user.name[0]}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">{user.name}</h3>
                      <p className="text-sm text-gray-500">{user.email}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="text-center bg-white/50 backdrop-blur-md p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Built with 🔥 Bun, React & TypeScript
        </h2>
        <div className="flex justify-center space-x-4">
          <div className="px-4 py-2 bg-blue-500 text-white rounded-full">Simple</div>
          <div className="px-4 py-2 bg-purple-500 text-white rounded-full">Fast</div>
          <div className="px-4 py-2 bg-pink-500 text-white rounded-full">Powerful</div>
        </div>
      </div>
    </div>
  )
}
