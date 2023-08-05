import { getAllPlayers } from "../API/index";
import { useState, useEffect } from "react";
export default function AllPlayers() {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    async function fetchPlayers() {
      try {
        setPlayers(await getAllPlayers());
      } catch (error) {
        console.error(error);
      }
    }
    fetchPlayers();
  }, []);
  return (
    <>
      <p>All Players</p>
      {players.map((player) => {
        return (
          <div key={player.id}>
            <h4>{player.name}</h4>
          </div>
        );
      })}
    </>
  );
}
