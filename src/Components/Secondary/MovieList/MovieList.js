import { useEffect, useState } from "react";
import axios from "axios";
import api from "../../../data/movies-api/api";
import { Link } from "react-router-dom";
export default function MovieList({ genreID, genreName }) {
  const [movies, setMovies] = useState(null);
  const [metadata, setMetadata] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [test, setTest] = useState([
    "aval",
    "dovom",
    "sevom",
    "chaharom",
    "panjom",
  ]);
  useEffect(() => {
    getMovies();
  }, []);
  async function getMovies() {
    // console.log(genreID + genreName);
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
  // arr = [1,2,3,8,4,5,]

  // 1=>3

  function shuffle(arr) {
    if (arr === null) return [];
    let newArray = [...arr];
    for (let i = 0; i < newArray.length; i++) {
      const newI = Math.trunc(Math.random() * (i + 1));
      let holder = newArray[i];
      newArray[i] = newArray[newI];
      newArray[newI] = holder;
    }
    return newArray;
  }

  function renderTest() {
    const newTest = shuffle(test);
    console.log("renderTest");
    // setTest(newTest);
    return newTest.map(() => {
      return <li>{newTest.join("---")}</li>;
    });
  }

  function renderList() {
    const newMovies = shuffle(movies);
    return newMovies.map(({ title, poster, id }) => {
      return (
        <li>
          <img src={poster} alt="poster" />
          <Link to={`/movies/${id}`}>
            <p>{title}</p>
          </Link>
        </li>
      );
    });
  }
  console.log("return");
  return (
    <div className="movie-list">
      <div className="container">
        <div className="list">
          <Link to={`genres/${genreID}`}>
            <h1>{genreName}</h1>
          </Link>
          <ul className="flex-x gap-10">
            {movies === null ? "" : renderList()}
          </ul>
        </div>
        {/* <div>{test.join("++++")}</div>
        <ul>{renderTest()}</ul> */}
      </div>
      <button onClick={getMovies}>LOAD MORE</button>
    </div>
  );
}
