import { Link, useNavigate } from "react-router-dom";
import SearchMoviesApi from "./Api";
import React, { useEffect, useCallback } from "react";

/**
 * @param {Object} props
 * @param {string} props.searchText
 * @param {function} props.setSearchText
 * @param {function} props.setSearchResults
 * @returns {React.ReactNode}
 */
const Navbar = ({ searchText, setSearchText, setSearchResults }) => {
  const navigate = useNavigate();

  const searchMovies = useCallback(() => {
    navigate("/search");
    if (searchText.trim() !== "") {
      SearchMoviesApi(searchText)
        .then((data) => {
          setSearchResults(() => data.results);
        })
        .catch((error) => {
          console.error("Fetch error:", error);
        });
    } else {
      setSearchResults(() => []);
      navigate("/");
    }
  }, [searchText, setSearchResults]);

  /**
   * @param {React.KeyboardEvent<HTMLInputElement>} e
   */
  const updateSearchText = (e) => {
    setSearchText(e.target.value);
  };

  /**
   * @param {React.KeyboardEvent<HTMLInputElement>} e
   */
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      searchMovies();
    }
  };

  /**
   * @param {React.KeyboardEvent<HTMLInputElement>} e
   */
  const handleSearchClick = (e) => {
    e.preventDefault()
    searchMovies();
  };

  useEffect(() => {
    if (!searchText.trim()) {
      setSearchResults(() => []);
      navigate("/");
    }
  }, [searchText, setSearchResults]);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Movies
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link disabled" to="/" aria-disabled="true">
                Coming Soon
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchText}
              onChange={updateSearchText}
              onKeyDown={handleKeyDown}
            />
            <button
              className="btn btn-outline-success"
              type="submit"
              onClick={handleSearchClick}
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
