const apiURL = "https://fsa-puppy-bowl.herokuapp.com/api/2302-acc-pt-web-pt-d";

export const getAllPlayers = async () => {
  try {
    const response = await fetch(`${apiURL}/players`);
    const playersJson = await response.json();
    const allPlayers = playersJson.data.players;
    return allPlayers;
  } catch (error) {
    console.error("Trouble getting players", error);
  }
};

export const getSinglePlayer = async (id) => {
  try {
    const response = await fetch(`${apiURL}/players/${id}`);
    const playerJson = await response.json();
    const player = playerJson.data.player;
    return player;
  } catch (error) {
    console.error("Trouble getting single player", error);
  }
};

export const addNewPlayer = async (name, breed, status, team) => {
  try {
    const response = await fetch(`${apiURL}/players/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        breed: breed,
        status: status,
        team: team,
      }),
    });
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error("Error adding player to API", error);
  }
};

export const deletePlayer = async (id) => {
  try {
    const response = await fetch(`${apiURL}/players/${id}`, {
      method: "DELETE",
    });
    const result = await response.json();
    return result.success;
  } catch (error) {
    console.error("Error in deleting player", error);
  }
};
