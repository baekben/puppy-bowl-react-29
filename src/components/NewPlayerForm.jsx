import { addNewPlayer } from "../API";
import { useState } from "react";
export default function NewPlayerForm() {
  const [name, setName] = useState();
  const [breed, setBreed] = useState();
  const [status, setStatus] = useState("bench");
  const [team, setTeam] = useState();
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      addNewPlayer(name, breed, status, team);
    } catch (error) {
      console.error("Error adding new player", error);
    }
  }
  return (
    <>
      <p>new player form</p>
      <form onSubmit={handleSubmit}>
        <label>
          Name:{" "}
          <input
            value={name}
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </label>
        <label>
          Breed:{" "}
          <input
            value={breed}
            type="text"
            onChange={(e) => {
              setBreed(e.target.value);
            }}
          />
        </label>
        <label>
          Status:{" "}
          <input
            value={status}
            type="text"
            defaultValue={"bench"}
            onChange={(e) => {
              setStatus(e.target.value);
            }}
          />
        </label>
        <label>
          Team:{" "}
          <input
            value={team}
            type="text"
            onChange={(e) => {
              setTeam(e.target.value);
            }}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
