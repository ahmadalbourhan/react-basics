import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=1");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setUser(data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, []);

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div>
      {Object.keys(user).length > 0 ? (
        <div style={{ padding: "40px" }}>
          <h1>Customer data</h1>
          <h2>
            Name: {user.results[0].name.first} {user.results[0].name.last}
          </h2>
          <img src={user.results[0].picture.large} alt="User" />
        </div>
      ) : (
        <h1>Data pending...</h1>
      )}

      {error && <p>Error: {error}</p>}

      <button onClick={handleRefresh}>
        Refresh Page
      </button>
    </div>
  );
}

export default App;
