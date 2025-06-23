import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { useState } from 'react';

function filteredMovies(moviesArray, query) {
  return moviesArray.filter(movie => {
    const movieTitle = movie.title.toLowerCase();
    const movieDescription = movie.description.toLowerCase();
    return movieTitle.includes(query.trim().toLowerCase()) || movieDescription.includes(query.trim().toLowerCase());
  });
}

export const App = () => {
  const [query, setQuery] = useState('');

  const visibleMovies = filteredMovies(moviesFromServer, query);

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <div className="field">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="search-query" className="label">
              Search movie
            </label>

            <div className="control">
              <input
                onChange={(e) => {
                  setQuery(e.target.value);
                }}
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
              />
            </div>
          </div>
        </div>

        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
