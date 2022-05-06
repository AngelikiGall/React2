import { Navigate, useParams } from "react-router-dom";
import { getMovie, deleteMovie, editMovie } from "../../api/movies";
import { useQuery } from "react-query";
import { Spinner } from "reactstrap";
import { Button } from 'reactstrap';
import { useNavigate } from "react-router-dom";
import './Movie.css';

const Movie = () => {
  const { movieId } = useParams();
  const { status, data} = useQuery(
    ["movie", movieId],
    () => getMovie(movieId)
  );

  let navigate = useNavigate(); 

 console.log(status);

 const handleDelete = async (movieId) => {
   console.log("delete id", movieId);
   await deleteMovie(movieId);
 }
  
 const handleEdit = async (movieId) => {
  navigate("edit-movie");
  console.log("edit id", movieId);
  await editMovie(movieId);

}

  return  (

    <div>
      {status === "loading" ? (
      <Spinner>Loading...</Spinner>
      ) : (
      <div class="movie-container">
        <h1>Movie details</h1>
        <div class="movie-title">
          <h2 class="title">{data.title}</h2>
          <div class="edit">
            <span>
              <Button color="danger" onClick={() => handleDelete(data.id)}>Delete</Button>
            </span>
            <span class="edit-btn">
              <Button color="primary" onClick={() => handleEdit(data.id)}>Edit</Button>
            </span>
          </div>
        </div>
        <label>Tagline: </label><span>{data.tagline}</span>
        <div>
          <label>Stars: </label><span>{data.vote_average}</span>
          <label class="label">IMDB:</label><a href={data.homepage} target="_blank">IMDB Link</a>
        </div>
        <h4>Overview:</h4>
        <p>{data.overview}</p>
        <img src={data.poster_path}></img>
      </div>
      )}
    </div>
  );
};

export default Movie; 