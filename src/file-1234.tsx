import React from 'react';

const App: React.FC = () => {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    fetch('/api/users')
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">User List</h1>
      <ul className="list-disc">
        {users.map((user: any) => (
          <li key={user.id} className="text-lg text-gray-800">{user.name}</li>
        ))}
      </ul>
      <div className="mt-8">
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
          Load More
        </button>
      </div>
    </div>
  );
};

export default App;
