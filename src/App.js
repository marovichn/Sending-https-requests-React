import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [fetchedMovies, setFetchedMovies] = useState([]);

  //fetching data, not dummy
  async function fetchMoviesHandler() {
    const response = await fetch("https://swapi.dev/api/films/");
    const data = await response.json();
    setFetchedMovies(data.results);
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={fetchedMovies} />
      </section>
    </React.Fragment>
  );
}

export default App;
