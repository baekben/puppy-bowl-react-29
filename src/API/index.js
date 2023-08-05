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
