// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import api from "../../data/functions/moviesBaseCode";
// export default function MovieItem() {
//   const { id } = useParams();
//   const [movie, setMovie] = useState({});
//   useEffect(() => {
//     singleMovie();
//   }, []);

//   async function singleMovie() {
//     try {
//       const res = await api.get(`movies/${id}`);
//       setMovie(res.data);
//       console.log(res);
//     } catch (error) {}
//   }

//   return (
//     <>
//       <h1>{movie.title}</h1>
//       <h2>{movie.year}</h2>
//       <img src={movie.poster} />
//     </>
//   );
// }
