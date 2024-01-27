import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../Components/Secondary/Header/Header";
import Hero from "../../Components/Secondary/Hero/Hero";
import api from "../../data/movies-api/api";

export default function GenrePage() {
  const { genre_id } = useParams(1);
  const [movies, setMovies] = useState(null);
  const [genres, setGenres] = useState(null);

  useEffect(() => {
    getMovies();
    getGenres();
  }, []);
  async function getMovies() {
    try {
      const res = await api.get(`/genres/${genre_id}/movies`);
      setMovies(res.data.data);
    } catch (error) {}
  }
  async function getGenres() {
    try {
      const res = await api.get("genres");
      setGenres(res.data);
    } catch (error) {}
  }
  function renderMovies() {
    if (movies === null) return "";
    return movies.map(({ title, poster, id }) => {
      return (
        <li key={id}>
          <div>{title}</div>
          <img src={poster} />
        </li>
      );
    });
  }
  function renderGenre() {
    if (genres === null) return "";
    return genres.map(({ name, id }) => {
      if (id == genre_id) {
        return <h1>{name}</h1>;
      } else {
        return "";
      }
    });
  }
  return (
    <>
      <Header />
      {movies !== null ? <Hero movie={movies[0]} /> : ""}
      <h1>{renderGenre()}</h1>
      <ul className="flex-x">{renderMovies()}</ul>
      <div>jkujffcghvjko</div>
    </>
  );
}
