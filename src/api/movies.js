import axios from "axios";

export const getMovies = async () => {
  const res = await axios.get("http://localhost:3001/movies");

  return res.data;
};
