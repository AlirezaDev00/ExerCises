import React, { Profiler, useState } from "react";

function App() {
  const [users, setUsers] = useState([
    { id: 1, name: "Alireza", age: 16 },
    { id: 2, name: "Mojtaba", age: 48 },
    { id: 3, name: "Marzie", age: 48 },
  ]);

  const [title, setTitle] = useState("");

  const render_handler = (
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime
  ) => {
    console.log(
      id,
      phase,
      actualDuration,
      baseDuration,
      startTime,
      commitTime,
      "rendered"
    );
  };

  return (
    <div>
      <input
        type="text"
        name="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      {users.map((user) => (
        <Profiler key={user.id}  id="user_div" onRender={render_handler}>
          <div>
            <h3>
              {user.id} - {user.name} - {user.age}
            </h3>
          </div>
        </Profiler>
      ))}
    </div>
  );
}

export default App;
