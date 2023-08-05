import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <>
      <div id="navbar">
        <Link to="/">Home</Link>
        <Link to="/players/new">new</Link>
        <Link to="/players/:id">id</Link>
      </div>
    </>
  );
}
