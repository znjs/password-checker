import { useState } from "react";
import "./App.css";

function App() {
  const [password, setPassword] = useState("");
  return (
    <div className="App">
      <h1>Password Checker</h1>
      <input
        type="text"
        placeholder="Password..."
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>
  );
}

export default App;
