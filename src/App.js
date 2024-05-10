import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import AboutView from "./Components/AboutView";
import SearchView from "./Components/SearchView";
import MovieView from "./Components/MovieView";
import NotFound from "./Components/NotFound";

function App() {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div>
      <Navbar
        searchText={searchText}
        setSearchText={setSearchText}
        searchResults={searchResults}
        setSearchResults={setSearchResults}
      />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/about" Component={AboutView} />
        <Route
          path="/search"
          element={
            <SearchView searchText={searchText} searchResults={searchResults} />
          }
        />
        <Route path="/movies/:id" Component={MovieView} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
