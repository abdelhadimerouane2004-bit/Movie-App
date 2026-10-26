import RatingScale from "./RatingScale";
import "../styles/index.css";

function MovieItem({ name, category, rating, topMovie, img }) {
  return (
    <div className="box">
      <div className="Parent">
        <img src={img} style={{width:"300px", height:"300px"}}/>
        {topMovie && <span>🔥 Top Movie</span>}

        <h3>{name}</h3>

        <p>Catégorie : {category}</p>

        <RatingScale value={rating} />
        <button className="Btn">Watch</button>
      </div>
    </div>
  );
}

export default MovieItem;
