import { movieList } from "../datas/movieList";
import MovieItem from "./MovieItem";
import "../styles/index.css";

function MovieList() {
  return (
    <div className="box2">
      {movieList.map((movie) => (
        <MovieItem key={movie.id} {...movie} />
      ))}
    </div>
  );
}

export default MovieList;
