import { getAllPlayers } from "../API/index";
import { useState, useEffect } from "react";
import { useNavigate} from "react-router-dom";
export default function AllPlayers() {
  const [players, setPlayers] = useState([]);
  const navigate = useNavigate();
  
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
            <button
              onClick={() => {
                navigate(`/players/${player.id}`);
              }}
            >
              More Details
            </button>
          </div>
        );
      })}
    </>
  );
}
