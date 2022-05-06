import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { getMovies } from "../../api/movies";
import { Table, Spinner } from "reactstrap";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { status, data: movies } = useQuery("movies", getMovies);

  const navigate = useNavigate();


 const goToMoviesPage = () => {
 navigate("/movies");
 };

  return (
    <div>
      <h1>Dashboard</h1>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Release Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {status === "loading" ? (
            <Spinner>Loading...</Spinner>
          ) : (
            movies?.map(({ id, title, release_date }) => (
              <tr key={id}>
                <th scope="row">{id}</th>
                <td>{title}</td>
                <td>{release_date}</td>
                <td>
                  <Link to={`/movies/${id}`}>View movie</Link>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
      <button type="button" class="btn btn-primary" onClick={goToMoviesPage}>View all movies</button>
    </div>
  );
};

export default Dashboard;
