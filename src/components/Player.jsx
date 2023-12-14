import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();
  const [name, setName] = useState("");
  const ClickHandler = () => {
    setName(playerName.current.value);
    playerName.current.value = "";
  };
  return (
    <section id="player">
      <h2>Welcome {name !== "" ? name : "Unknown Entity"}</h2>
      <p>
        <input type="text" ref={playerName} />
        <button onClick={ClickHandler}>Set Name</button>
      </p>
    </section>
  );
}
