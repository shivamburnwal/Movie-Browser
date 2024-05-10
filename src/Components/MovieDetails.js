import React from "react";

const MovieDetails = ({ movie }) => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="img-fluid rounded"
            style={{ maxHeight: "500px", width: "auto" }}
          />
        </div>
        <div className="col-md-8">
          <div className="movie-details">
            <h1 className="mb-4">{movie.title}</h1>
            <p className="tagline">
              <strong>Tagline:</strong> {movie.tagline}
            </p>
            <p>
              <strong>Release Date:</strong> {movie.release_date}
            </p>
            {movie.genres && movie.genres.length > 0 && (
              <p>
                <strong>Genres:</strong>{" "}
                {movie.genres.map((genre) => genre.name).join(", ")}
              </p>
            )}
            <p className="overview">
              <strong>Overview:</strong> {movie.overview}
            </p>
            <p>
              <strong>Rating:</strong> {movie.vote_average} / 10
            </p>
            <p>
              <strong>Runtime:</strong> {movie.runtime} minutes
            </p>
            {movie.production_companies && movie.production_companies.length > 0 && (
              <p>
                <strong>Production Companies:</strong>{" "}
                {movie.production_companies.map((company) => company.name).join(", ")}
              </p>
            )}
            {movie.production_countries && movie.production_countries.length > 0 && (
              <p>
                <strong>Production Countries:</strong>{" "}
                {movie.production_countries.map((country) => country.name).join(", ")}
              </p>
            )}
            {movie.homepage && (
              <p>
                <strong>Website:</strong>{" "}
                <a href={movie.homepage} target="_blank" rel="noopener noreferrer">
                  {movie.homepage}
                </a>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
