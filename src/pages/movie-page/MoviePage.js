import { Fragment, useState, useEffect } from "react";
import Header from "../../Components/Secondary/Header/Header";
import Hero from "../../Components/Secondary/Hero/Hero";
import MovieList from "../../Components/Secondary/MovieList/MovieList";
import api from "../../data/movies-api/api";

const mainPapeImage =
  "https://is1-ssl.mzstatic.com/image/thumb/Features/v4/91/f3/63/91f363e1-845c-557b-6a13-5d0bfe4703a7/6ae14b27-b4b3-46f3-956c-e4b2ee50a94d.png/3358x1889sr.webp";

export default function MoviePage() {
  const [movies, setMovies] = useState(null);
  const [metadata, setMetadata] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getAPI();
  }, []);
  async function getAPI() {
    try {
      const res = await api.get(`movies?page=${currentPage}`);
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
  // function onClicks() {
  //   getAPI();
  // }
  if (movies === null) {
    return "Loading ..";
  }
  console.log(movies);
  console.log(metadata);
  return (
    <Fragment>
      <Header />
      {movies !== null ? <Hero movie={movies[0]} /> : ""}
      <MovieList movies={movies} />
      <MovieList movies={movies} />
      <button onClick={getAPI}>LOAD MORE</button>
    </Fragment>
  );
}
