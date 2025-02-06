import "./style.css";
import React from "react";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to My Bun App!</h1>
      <p className="text-lg text-gray-700 mb-8">Building a fullstack app just got easier!</p>
      
      <div className="flex space-x-4">
        <button className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded">Fetch Users</button>
        <button className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded">Fetch Posts</button>
      </div>
      
      <div className="mt-8 w-full max-w-md">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Email</th>
            </tr>
          </thead>
          <tbody>
            {/* Assuming we have a user data array */}
            {[{ name: "John Doe", email: "john@example.com" }, { name: "Jane Doe", email: "jane@example.com" }].map((user, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b">{user.name}</td>
                <td className="py-2 px-4 border-b">{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
