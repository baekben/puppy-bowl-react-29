import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <>
      <div className="sideBar">
        <div className="navbar">
          <Link to="/">Puppies</Link>
          <Link to="/players/new">Add Puppy</Link>
        </div>
      </div>
    </>
  );
}
