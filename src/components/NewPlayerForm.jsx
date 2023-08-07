import { addNewPlayer } from "../API";
import { useState } from "react";
export default function NewPlayerForm() {
  const [name, setName] = useState();
  const [breed, setBreed] = useState();
  const [status, setStatus] = useState();
  const [team, setTeam] = useState();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      addNewPlayer(name, breed, status, team);
      setSuccess(true);
    } catch (error) {
      console.error("Error adding new player", error);
      setError(error);
    }
  }
  return (
    <>
      <div className="gameContainer newPlayer">
        <div className="pageTitle">
          <h1>New Puppy</h1>
        </div>
        {error && <p>{error.message}</p>}
        <div className="contents newPlayer">
          <div className="formContent">
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
                  placeholder="Bench or Field"
                  onChange={(e) => {
                    if (
                      e.target.value.toLowerCase().includes("bench") ||
                      e.target.value.toLowerCase().includes("field")
                    ) {
                      setStatus(e.target.value);
                    } else {
                      setStatus("Bench");
                    }
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
              <label>
                <button type="submit">Submit</button>
              </label>
            </form>
          </div>
        </div>

        {success && <p>Response submitted</p>}
      </div>
    </>
  );
}
