import "./style.css";
import React from 'react';

const App: React.FC = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch('/api/users')
      .then(response => response.json())
      .then(users => setData(users))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold pb-4 text-blue-600">User List</h1>
      <ul className="bg-white shadow-md rounded-lg p-4">
        {data.map((user: any, index: number) => (
          <li key={index} className="py-2 border-b border-gray-300">
            <span className="font-medium">{user.name}</span> - <span className="text-gray-600">{user.email}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
