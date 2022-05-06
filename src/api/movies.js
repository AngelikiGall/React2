import axios from "axios";

export const getMovies = async () => {
  const res = await axios.get("http://localhost:3001/movies");

  return res.data;
};

export const getMovie = async (id) => {
  const res = await axios.get(`http://localhost:3001/movies/${id}`);
  return res.data;
};

export const deleteMovie = async (id) => {
  const res = await axios.delete(`http://localhost:3001/movies/${id}`);
  return res.data;
};

export const editMovie = async (id) => {
  console.log("id", id);
  const res = await axios.put(`http://localhost:3001/movies/${id}/edit`);
  return res.data;
};

export const addMovie = async (movie) => {
  const res = await axios.post(`http://localhost:3001/movies`, movie);
  return res.data;
};