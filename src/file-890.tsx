import React from "react";

const App = () => {
  const [users, setUsers] = React.useState([]);
  
  React.useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("/api/users");
      const data = await response.json();
      setUsers(data);
    };

    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-5">User List</h1>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4 text-left text-gray-600">ID</th>
              <th className="py-2 px-4 text-left text-gray-600">Name</th>
              <th className="py-2 px-4 text-left text-gray-600">Email</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map(user => (
                <tr key={user.id} className="border-b hover:bg-gray-100">
                  <td className="py-2 px-4">{user.id}</td>
                  <td className="py-2 px-4">{user.name}</td>
                  <td className="py-2 px-4">{user.email}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3} className="text-center py-2">No users found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <footer className="mt-8">
        <p className="text-gray-500">Powered by Bun, React, and TypeScript</p>
      </footer>
    </div>
  );
};

export default App;
