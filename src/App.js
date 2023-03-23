import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [fetchedMovies, setFetchedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  //fetching data, not dummy
  async function fetchMoviesHandler() {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("https://swapi.dev/api/film/");
      if (!response.ok) {
        throw new Error("Error " + response.status + " !!!");
      }
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
    } catch (err) {
      setError(err.message);
    }
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
        {!isLoading && error && <p>{error}</p>}
        {isLoading && <h1>Data is loading, please wait. . .</h1>}
      </section>
    </React.Fragment>
  );
}

export default App;
