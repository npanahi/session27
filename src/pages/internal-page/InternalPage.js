import Header from "../../Components/Secondary/Header/Header";
import { Fragment } from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../data/movies-api/api";
import Hero from "../../Components/Secondary/Hero/Hero";
export default function InternalPage() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    singleMovie();
  }, []);

  async function singleMovie() {
    try {
      const res = await api.get(`movies/${id}`);
      setMovie(res.data);
      console.log(res);
    } catch (error) {}
  }
  if (movie === null) {
    return "Loading...";
  }
  return (
    <Fragment>
      <Header />
      {movie !== undefined ? <Hero movie={movie} /> : ""}
      <div>{movie.imdb_rating}</div>
      <h1>{movie.title}</h1>
      <h2>{movie.year}</h2>
      <img src={movie.poster} />
    </Fragment>
  );
}
