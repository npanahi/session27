import { useEffect, useState } from "react";
import axios from "axios";
import api from "../../../data/movies-api/api";
import { Link } from "react-router-dom";
export default function MovieList({ genreID, genreName }) {
  const [movies, setMovies] = useState(null);
  const [metadata, setMetadata] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    getMovies();
  }, []);
  async function getMovies() {
    console.log(genreID + genreName);
    try {
      const res = await api.get(
        `/genres/${genreID}/movies?page=${currentPage}`
      );
      setCurrentPage(currentPage + 1);
      setMetadata(res.data.metadata);

      if (movies === null) {
        setMovies(res.data.data);
      } else {
        movies.push(...res.data.data);
        setMovies(movies);
        // setMovies({ data: [...movies.data, ...res.data.data] });
        // console.log(movies);
      }
    } catch (error) {}
  }

  function renderList() {
    return movies.map(({ title, poster, id }) => {
      return (
        <li className="col-5">
          <img src={poster} alt="poster" />
          <Link to={`/movies/${id}`}>
            <p>{title}</p>
          </Link>
        </li>
      );
    });
  }
  return (
    <div className="movie-list">
      <div className="container">
        <div className="list">
          <h1>{genreName}</h1>
          <ul className="flex-x gap-10">
            {movies === null ? "" : renderList()}
          </ul>
        </div>
      </div>
      <button onClick={getMovies}>LOAD MORE</button>
    </div>
  );
}
