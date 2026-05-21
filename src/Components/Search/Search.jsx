import React from "react";

function Search() {
  const getAGame = (id) => {
    fetch(`/api/game/0`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const getAGameError = () => {
    fetch(`/api/game/13`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const getAllGames = () => {
    fetch(`/api/game/`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const getFiltersIGuess = () => {
    const filtersList = {
      platform: ["ns", "ps1"],
      rating: ["e10", "t"],
      minPrice: 90,
    };
    fetch(`/api/game/`, {
      method: "POST",
      body: JSON.stringify({ filters: filtersList }),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <div>
      <h1>Search</h1>
      <button onClick={getAGame}>getAGame</button>
      <button onClick={getAGameError}>getAGameError</button>
      <button onClick={getAllGames}>getAllGames</button>
      <button onClick={getFiltersIGuess}>getFiltersIGuess</button>
    </div>
  );
}

export default Search;
