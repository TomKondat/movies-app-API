import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import Header from "./features/layout/Header";
import MovieList from "./features/movie/MovieList";
import SingleMovie from "./features/movie/SingleMovie";
import "./App.css";

const App = () => {
  const [moviesArr, setMoviesArr] = useState([]);
  const handleSearch = (searchValue) => {
    fetchMovies().then((data) => {
      const filtered = data.filter((movie) =>
        movie.Title.toLowerCase().includes(searchValue.toLowerCase())
      );
      setMoviesArr(filtered);
    });
  };
  const fetchMovies = async () => {
    const url = `https://omdbapi.com/?s=dark&apikey=f19969c4`;
    const { data } = await axios.get(url);
    return data.Search;
  };
  useEffect(() => {
    fetchMovies().then((data) => setMoviesArr(data));
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Header handleSearch={handleSearch} />
        <main className="container">
          <Routes>
            <Route path="/" element={<MovieList movies={moviesArr} />} />

            <Route
              path="/:movieId"
              element={<SingleMovie movies={moviesArr} />}
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
