import "./Hero.css";
export default function Hero({ movie }) {
  // console.log(newPoster);
  return (
    <div className="hero">
      <div className="container">
        <div className="img-wrapper img-100vh ">
          <img alt="" src={movie.poster} />
        </div>
      </div>
    </div>
  );
}
