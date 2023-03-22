import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [fetchedMovies, setFetchedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  //fetching data, not dummy
  async function fetchMoviesHandler() {
    setIsLoading(true);
    const response = await fetch("https://swapi.dev/api/films/");
    const data = await response.json();
    const transformedData = data.results.map((movieData) => {
      return {
        id: movieData.episode_id,
        title: movieData.title,
        openingText: movieData.opening_crawl,
        releaseDate: movieData.release_date,
      };
    });
    setFetchedMovies(transformedData);
    setIsLoading(false);
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && fetchedMovies.length > 0 && (
          <MoviesList movies={fetchedMovies} />
        )}
        {!isLoading && fetchedMovies.length === 0 && (
          <h1>Found no movies :(</h1>
        )}
        {isLoading && <h1>Data is loading, please wait. . .</h1>}
      </section>
    </React.Fragment>
  );
}

export default App;
