function RatingScale({ value }) {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div>
      {stars.map((star) => (value >= star ? <span key={star}>⭐</span> : null))}
    </div>
  );
}

export default RatingScale;