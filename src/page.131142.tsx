import React, { useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'

export default function BunFullstackShowcase() {
  const [users, setUsers] = useState<Array<{id: number, name: string}>>([])
  const [loading, setLoading] = useState(true)
  const [serverTime, setServerTime] = useState<string>('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [usersResponse, timeResponse] = await Promise.all([
          fetch('/api/users'),
          fetch('/api/time')
        ])
        
        const userData = await usersResponse.json()
        const timeData = await timeResponse.json()
        
        setUsers(userData)
        setServerTime(timeData.time)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error)
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-100 to-purple-100 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="w-full max-w-4xl bg-white shadow-2xl rounded-3xl overflow-hidden transform transition-all hover:scale-[1.01]">
        <div className="p-8 bg-gradient-to-r from-blue-500 to-purple-600">
          <h1 className="text-4xl font-extrabold text-white tracking-tight text-center">
            🚀 Bun Fullstack Magic
          </h1>
        </div>
        
        <div className="p-8 space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-xl shadow-md">
              <h2 className="text-2xl font-bold text-blue-800 mb-4">Server Info</h2>
              <p className="text-blue-600 font-semibold">
                Current Server Time: 
                <span className="ml-2 text-blue-900">{serverTime || 'Loading...'}</span>
              </p>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-xl shadow-md">
              <h2 className="text-2xl font-bold text-purple-800 mb-4">User Data</h2>
              {loading ? (
                <div className="flex items-center justify-center space-x-3 animate-pulse">
                  <div className="w-4 h-4 bg-purple-300 rounded-full"></div>
                  <div className="w-4 h-4 bg-purple-300 rounded-full"></div>
                  <div className="w-4 h-4 bg-purple-300 rounded-full"></div>
                </div>
              ) : (
                <ul className="space-y-2">
                  {users.map(user => (
                    <li 
                      key={user.id} 
                      className="text-purple-700 font-medium bg-purple-100 p-2 rounded-lg hover:bg-purple-200 transition-colors"
                    >
                      {user.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          
          <div className="bg-green-50 p-6 rounded-xl shadow-md text-center">
            <h3 className="text-xl font-bold text-green-800 mb-4">
              Bun: Fullstack Development Made Simple
            </h3>
            <p className="text-green-600">
              Seamlessly integrating server and client with TypeScript, React, and lightning-fast performance.
            </p>
          </div>
        </div>
      </div>
      
      <div className="text-center text-gray-500 text-sm">
        Built with ❤️ using Bun, React, and Tailwind
      </div>
    </div>
  )
}
