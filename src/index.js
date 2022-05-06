import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import Movie from "./pages/Movie/Movie";
import AddMovie from "./pages/Movie/AddMovie";
import Error404 from "./pages/Error404/Error404";
import Header from "./components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Movies from "./pages/Movie/Movies";

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/movies/:movieId" element={<Movie />} />
          <Route path="/add-movie" element={<AddMovie />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
