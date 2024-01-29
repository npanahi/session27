import { Fragment, useState, useEffect } from "react";
import Header from "../../Components/Secondary/Header/Header";
import Hero from "../../Components/Secondary/Hero/Hero";
import MovieList from "../../Components/Secondary/MovieList/MovieList";
import api from "../../data/movies-api/api";
import GenrePage from "../genre-page/GenrePage";

const mainPapeImage =
  "https://is1-ssl.mzstatic.com/image/thumb/Features/v4/91/f3/63/91f363e1-845c-557b-6a13-5d0bfe4703a7/6ae14b27-b4b3-46f3-956c-e4b2ee50a94d.png/3358x1889sr.webp";

export default function MoviePage() {
  const [movies, setMovies] = useState(null);
  const [genres, setGenres] = useState(null);

  useEffect(() => {
    getMovies();
    getGenres();
  }, []);
  async function getMovies() {
    try {
      const res = await api.get(`movies`);
      setMovies(res.data.data);
    } catch (error) {}
  }
  async function getGenres() {
    try {
      const res = await api.get("genres");
      setGenres(res.data);
    } catch (error) {}
  }
  function renderGenre() {
    return genres.map(({ name, id }) => {
      return (
        <>
          <MovieList genreID={id} genreName={name} />
        </>
      );
    });
  }

  if (movies === null) {
    return "Loading ..";
  }

  return (
    <Fragment>
      <Header />
      {movies !== null ? <Hero movie={movies[0]} /> : ""}
      <div>{genres !== null ? renderGenre() : ""}</div>
    </Fragment>
  );
}
