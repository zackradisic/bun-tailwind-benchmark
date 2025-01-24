import { useEffect, useState } from "react";

export default function BunFullstackDemo() {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState<{id: number, name: string}[]>([]);
  const [newUser, setNewUser] = useState("");

  useEffect(() => {
    fetch("/api/users")
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setIsLoading(false);
      });
  }, []);

  const addUser = async () => {
    const res = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ name: newUser }),
      headers: { "Content-Type": "application/json" }
    });
    const user = await res.json();
    setUsers([...users, user]);
    setNewUser("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="p-8">
          <div className="flex items-center space-x-4 mb-8">
            <img src="https://bun.sh/logo.svg" alt="Bun Logo" className="w-12 h-12 animate-spin-slow" />
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              Bun Fullstack App
            </h1>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Server-side Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition">
                <p className="text-gray-600">Built-in Bundler</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition">
                <p className="text-gray-600">TypeScript Support</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition">
                <p className="text-gray-600">Hot Reloading</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition">
                <p className="text-gray-600">SQL Integration</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex space-x-4">
              <input
                type="text"
                value={newUser}
                onChange={(e) => setNewUser(e.target.value)}
                placeholder="Add new user..."
                className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
              />
              <button
                onClick={addUser}
                className="px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition"
              >
                Add User
              </button>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">Users List</h3>
              {isLoading ? (
                <div className="animate-pulse flex space-x-4">
                  <div className="flex-1 space-y-4 py-1">
                    <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-300 rounded"></div>
                    <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                  </div>
                </div>
              ) : (
                <ul className="space-y-2">
                  {users.map(user => (
                    <li 
                      key={user.id}
                      className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition flex items-center justify-between"
                    >
                      <span className="text-gray-700">{user.name}</span>
                      <span className="text-sm text-gray-500">ID: {user.id}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
