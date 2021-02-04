import React from "react";
import "./styles.css";
import SayHiClass from "./SayHiClass";
import SayHiFunction from "./SayHiFunction";

export default function App() {
  const [name, setName] = React.useState("Homer");
  return (
    <div className="App">
      <label>
        <strong>Say hi to:</strong>
      </label>
      <select value={name} onChange={e => setName(e.target.value)}>
        <option value="Homer">Homer</option>
        <option value="Bart">Bart</option>
        <option value="Lisa">Lisa</option>
        <option value="Marge">Marge</option>
        <option value="Maggie">Maggie</option>
      </select>
      <SayHiClass name={name} />
      <SayHiFunction name={name} />
    </div>
  );
}
