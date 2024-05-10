import { Link } from "react-router-dom";
import Hero from "./Hero";
import placeholderImage from "../Images/fileNotFound.png";

const MovieCard = ({movie}) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

  return (
    <div className="col-lg-3 col-md-4 col-sm-6 col-12 my-4">
      <div className="card h-100 mx-1">
        <div
          className="card-img-container position-relative"
          style={{
            height: "400px",
            overflow: "hidden",
          }}
        >
          {movie.poster_path ? (
            <img
              src={imageUrl}
              className="card-img-top"
              alt={movie.original_title}
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
              }}
            />
          ) : (
            <div
              className="card-img-top d-flex align-items-center justify-content-center"
              style={{
                backgroundImage: `url(${placeholderImage})`,
                height: "400px",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              No Image Found
            </div>
          )}
        </div>
        <div className="card-body">
          <h5 className="card-title">{movie.original_title}</h5>
          <p
            className="card-text"
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {movie.overview}
          </p>
          <Link
            to={`/movies/${movie.id}`}
            className="btn btn-primary d-flex justify-content-center"
          >
            Show Details
          </Link>
        </div>
      </div>
    </div>
  );
};

const SearchView = ({ searchText, searchResults }) => {
  const title = `Searching for "${searchText}"`;
  const results = searchResults.map((result) => {
    return <MovieCard movie={result} key={result.id} />;
  });

  return (
    <>
      <Hero text={title} />
      {searchResults.length > 0 ? (
        <div className="container">
          <div className="row">{results}</div>
        </div>
      ) : (
        <div className="container-no-results">
          <div>No Results Found</div>
        </div>
      )}
    </>
  );
};

export default SearchView;
