import "./App.css";
import AllPlayers from "./components/AllPlayers";
import NavBar from "./components/NavBar";
import NewPlayerForm from "./components/NewPlayerForm";
import SinglePlayer from "./components/SinglePlayer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="titleContainer">
        <h1>Puppy Bowl</h1>
      </div>
      <div className="container">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<AllPlayers />}></Route>
            <Route path="/players/new" element={<NewPlayerForm />}></Route>
            <Route path="/players/:id" element={<SinglePlayer />}></Route>
          </Routes>
        </BrowserRouter>
        <div className="footer">
          <h3>Ben Baek</h3>
        </div>
      </div>
    </>
  );
}

export default App;
