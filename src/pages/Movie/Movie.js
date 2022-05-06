import { useParams } from "react-router-dom";

const Movie = () => {
  const { movieId } = useParams();

  return <h1>Movie details</h1>;
};

export default Movie;
