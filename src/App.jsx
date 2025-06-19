import { useState } from "react";
import reactLogo from "./assets/react.svg";
import jestLogo from "./assets/jest-logo.png";
import "./App.css";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

function App() {
  const [users, setUsers] = useState([]);

  const handleSave = (data) => {
    setUsers((prev) => [...prev, data]);
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={jestLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h2>Jest x React</h2>
      <div className="card">
        <UserForm onSubmit={handleSave} />
        <UserList users={users} />
      </div>
      <p className="read-the-docs">React Unit Testing</p>
    </>
  );
}

export default App;
