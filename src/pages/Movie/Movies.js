import { getMovies } from "../../api/movies";
import { useQuery } from "react-query";
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Table, Spinner } from "reactstrap";
import { useNavigate, Link } from "react-router-dom";



const Movies = () =>{

    const { status, data: movies } = useQuery("movies", getMovies);
    
    const navigate = useNavigate();
    const goToMoviePage = () => {
        navigate("/movies/:movieId");
      };
    //console.log(movies)


    return(
        <div>
        <h1>Movies</h1>
        {status === "loading" ? (
            <Spinner>Loading...</Spinner>
            ) :  (movies?.map( ( { backdrop_path, title, overview,id})=> (
                        <div style={{width:"300px"}}>
                            <Card>
                                <CardImg top width="100%" src={backdrop_path} alt="Card image cap" />                          
                                <CardBody>
                                    <CardTitle>{title}</CardTitle>
                                    <CardText>{overview}</CardText>
                                    <Link to={`/movies/${id}`}>See movie</Link>
                                </CardBody>
                            </Card>
                        </div>
                        )
                    )
                )
        }          
    </div>  
    )
} 

export default Movies;