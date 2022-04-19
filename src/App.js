import { useState } from "react";
import "./App.css";
import { strengthCheck } from "./strength";

function App() {
  const [password, setPassword] = useState("");
  // const [strength, setStrength] = useState(0);
  strengthCheck("Srikar@1234");
  return (
    <div className="App">
      <h1>Password Checker</h1>
      <p>{strengthCheck(password)}</p>
      <div>
        <div>
          <label>Password:</label>
          <input
            type="text"
            placeholder="Password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div
          style={{
            width: "10rem",
            height: "0.8rem",
            backgroundColor: "gray",
            display: "inline-block",
            borderRadius: "2rem",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: `${strengthCheck(password)}%`,
              height: "100%",
              backgroundColor: `${
                strengthCheck(password) > 70
                  ? "green"
                  : strengthCheck(password) > 30
                  ? "orange"
                  : "red"
              }`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default App;
