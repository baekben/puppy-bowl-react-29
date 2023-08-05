import { getSinglePlayer } from "../API";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
export default function SinglePlayer() {
  const [player, setPlayer] = useState("");
  let { id } = useParams();
  useEffect(() => {
    async function fetchPlayer() {
      try {
        setPlayer(await getSinglePlayer(id));
      } catch (error) {
        console.error(error);
      }
    }
    fetchPlayer();
  }, [id]);
  return (
    <>
      <p>single player</p>
      <div>
        <h3>{player.name}</h3>
        <button>Delete</button>
      </div>
    </>
  );
}
