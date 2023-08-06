import { getAllPlayers } from "../API/index";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AllPlayers() {
  const [players, setPlayers] = useState([]);
  const navigate = useNavigate();
  const [searchName, setSearchName] = useState(null);

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

  useEffect(() => {
    async function searchForName() {
      try {
        setPlayers([]);
      } catch (error) {
        console.error(error);
      }
    }
    searchForName;
  }, [searchName]);

  async function handleSubmit(event) {
    event.preventDefault();
    if (searchName.length > 0) {
      let updatedPlayers = players.filter((player) => {
        setSearchName(searchName.toLowerCase());
        let playerName = player.name.toLowerCase();
        if (playerName.includes(searchName)) {
          return player;
        }
      });
      setPlayers(updatedPlayers);
    } else {
      setPlayers(await getAllPlayers());
    }
  }
  return (
    <>
      <div className="gameContainer">
        <div className="pageTitle">
          <h1>All Players</h1>
        </div>
        <div className="searchBarContainer">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search..."
              id="searchBar"
              onChange={(e) => {
                setSearchName(e.target.value);
              }}
            />
            <button type="submit">🔍</button>
          </form>
        </div>
        <div className="contents allPlayers">
          {players.map((player) => {
            return (
              <div key={player.id} className="player">
                <div className="dogImg">
                  <img
                    src={player.imageUrl}
                    alt=""
                    width={"100px"}
                    height={"100px"}
                  />
                </div>
                <div id={player.id} className="dogInfo">
                  <h4>{player.name}</h4>
                  <button
                    onClick={() => {
                      navigate(`/players/${player.id}`);
                    }}
                  >
                    More Details
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
