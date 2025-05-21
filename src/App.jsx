import { useState } from "react";

function App() {
  const [users, setUsers] = useState([
    { id: 1, name: "Alireza", age: 16 },
    { id: 2, name: "Mojtaba", age: 48 },
    { id: 3, name: "Marzie", age: 48 },
  ]);

  const [title, setTitle] = useState("");

  return (
    <div>
      <input
        type="text"
        name="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      {users.map((user) => (
        <div>
          <h3>
            {user.id} - {user.name} - {user.age}
          </h3>
        </div>
      ))}
    </div>
  );
}

export default App;
