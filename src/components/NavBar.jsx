/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
export default function NavBar({ pickedPlayers, setPickedPlayers }) {
  return (
    <>
      <div className="sideBar">
        <div className="navbar">
          <Link to="/">Puppies</Link>
          <Link to="/players/new">Add Puppy</Link>
        </div>
        <div className="pickTitle">
          <h3 id="teamTitle">Picked Team</h3>
        </div>
        <div className="selectedTeam">
          <ul>
            {pickedPlayers.map((player) => {
              return (
                <li key={player.id}>
                  <p>{player.name}</p>
                </li>
              );
            })}
          </ul>
        </div>
        <button
          id="clearTeamBtn"
          onClick={() => {
            setPickedPlayers([]);
          }}
        >
          Clear Team
        </button>
      </div>
    </>
  );
}
