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
      <div className="gameContainer">
        <div className="pageTitle">
          <h1>Puppy</h1>
        </div>
        <div className="contents singlePlayer">
          <div className="playerImg">
            <img src={player.imageUrl} alt="" id="singleImg" />
          </div>
          <div className="playerInfo">
            <div className="playerName">
              <h3>Name: {player.name}</h3>
            </div>
            <div className="playerBreed">
              <h4>Breed: {player.breed}</h4>
            </div>
            <div className="playerStatus">
              <h4>Status: {player.status}</h4>
            </div>
          </div>
          <div className="buttonContainer">
            <button>Delete</button>
          </div>
        </div>
      </div>
    </>
  );
}
