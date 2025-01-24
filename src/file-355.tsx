import React from "react";

const App = () => {
  const [data, setData] = React.useState<any>(null);

  React.useEffect(() => {
    fetch("/api/users")
      .then((response) => response.json())
      .then(setData);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen p-10 bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-5">Bun + Tailwind Integration</h1>
      <p className="text-xl text-gray-700 mb-5">Users fetched from the server:</p>
      <ul className="space-y-3">
        {data ? (
          data.map((user: any) => (
            <li key={user.id} className="bg-white shadow-lg rounded-lg p-5">
              <h2 className="text-2xl text-gray-800">{user.name}</h2>
              <p className="text-gray-500">{user.email}</p>
            </li>
          ))
        ) : (
          <li className="text-gray-500">Loading...</li>
        )}
      </ul>
    </div>
  );
};

export default App;
