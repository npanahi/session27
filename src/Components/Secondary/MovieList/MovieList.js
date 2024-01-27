import { useEffect, useState } from "react";
import axios from "axios";
import api from "../../../data/movies-api/api";
import { Link } from "react-router-dom";
export default function MovieList({ movies }) {
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
          <ul className="flex-x gap-10">{renderList()}</ul>
        </div>
      </div>
    </div>
  );
}
