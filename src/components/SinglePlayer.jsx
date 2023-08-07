/* eslint-disable react/prop-types */
import { getSinglePlayer, deletePlayer } from "../API";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
export default function SinglePlayer({ setPickedPlayers, pickedPlayers }) {
  const [player, setPlayer] = useState("");
  const navigate = useNavigate();
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

  function removePlayer(playerToRemove) {
    const team = pickedPlayers.filter((prevPlayer) => {
      prevPlayer.name !== playerToRemove.name;
    });
    setPickedPlayers(team);
    deletePlayer(playerToRemove.id);
    navigate(`/`);
  }
  return (
    <>
      <div className="gameContainer singlePlayer">
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
            <button onClick={() => removePlayer(player)}>Delete</button>
          </div>
        </div>
      </div>
    </>
  );
}
