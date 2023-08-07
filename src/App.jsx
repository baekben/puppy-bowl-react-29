import "./App.css";
import AllPlayers from "./components/AllPlayers";
import NavBar from "./components/NavBar";
import NewPlayerForm from "./components/NewPlayerForm";
import SinglePlayer from "./components/SinglePlayer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [players, setPlayers] = useState([]);
  const [pickedPlayers, setPickedPlayers] = useState([]);
  return (
    <>
      <div className="titleContainer">
        <h1>
          Puppy Bowl{" "}
          <img
            src="\img\stock-dog.jpg"
            alt=""
            width={"100px"}
            height={"100px"}
          />
        </h1>
        <div className="headerImg">
          <img
            src="https://images.unsplash.com/photo-1597633611385-17238892d086?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt=""
            id="corgiHeader"
          />
        </div>
      </div>
      <div className="container">
        <BrowserRouter>
          <NavBar
            pickedPlayers={pickedPlayers}
            setPickedPlayers={setPickedPlayers}
          />
          <Routes>
            <Route
              path="/"
              element={
                <AllPlayers
                  pickedPlayers={pickedPlayers}
                  setPickedPlayers={setPickedPlayers}
                  players={players}
                  setPlayers={setPlayers}
                />
              }
            ></Route>
            <Route path="/players/new" element={<NewPlayerForm />}></Route>
            <Route
              path="/players/:id"
              element={
                <SinglePlayer
                  pickedPlayers={pickedPlayers}
                  setPickedPlayers={setPickedPlayers}
                  players={players}
                  setPlayers={setPlayers}
                />
              }
            ></Route>
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
