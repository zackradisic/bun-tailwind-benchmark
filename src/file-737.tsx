import "./style.css";
import React, { useState } from 'react'

export default function BunFullstackDemo() {
  const [users, setUsers] = useState<{id: number, name: string}[]>([])
  const [loading, setLoading] = useState(false)

  const fetchUsers = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/users')
      const userData = await response.json()
      setUsers(userData)
    } catch (error) {
      console.error('Failed to fetch users', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col items-center justify-center p-8">
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-xl transform transition-all hover:scale-105 duration-300">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6 text-center">
          Bun Fullstack Demo
        </h1>
        
        <div className="flex space-x-4 mb-6">
          <button 
            onClick={fetchUsers}
            disabled={loading}
            className={`flex-1 px-6 py-3 rounded-lg font-bold text-white transition-all duration-300 ${
              loading 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800 shadow-md hover:shadow-lg'
            }`}
          >
            {loading ? 'Fetching...' : 'Fetch Users'}
          </button>
        </div>

        {users.length > 0 && (
          <div className="bg-gray-50 rounded-lg p-4 max-h-64 overflow-y-auto">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">Users</h2>
            <ul className="space-y-2">
              {users.map(user => (
                <li 
                  key={user.id} 
                  className="bg-white border border-gray-200 rounded-md p-3 flex items-center shadow-sm hover:shadow-md transition-all"
                >
                  <span className="font-medium text-gray-800">{user.name}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {loading && (
          <div className="flex justify-center items-center py-6">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          </div>
        )}
      </div>

      <div className="mt-8 text-sm text-gray-600 text-center max-w-xl">
        <p className="italic">
          Built with Bun 🚀 - Seamless fullstack development using TypeScript, React, and Tailwind
        </p>
      </div>
    </div>
  )
}
