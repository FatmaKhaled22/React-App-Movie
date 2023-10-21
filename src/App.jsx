import { Route, Routes } from "react-router-dom";
import Home from "./components/home/home";
import Navbar from "./components/nav/nav";
import Footer from "./components/footer/footer";
import Details_Movie from "./components/details/details-movie";
import Movies_Top from "./components/movie-list/toprated";
import Movies_Upcom from "./components/movie-list/upcom";
import Movies_Now from "./components/movie-list/nowplaying";
import Movies_Pop from "./components/movie-list/popular";
import Tv_Pop from "./components/tv-list/poular";
import Details_Tv from "./components/details/details-tv";
import Tv_Top from "./components/tv-list/toprated";
import Tv_Air from "./components/tv-list/onair";
import Tv_Today from "./components/tv-list/today";
import Movies from "./components/movies/movies";
import Tv_Shows from "./components/tv-shows/tv-shows";
import Search from "./components/search/search";
import People from "./components/people/people";
import Trend_Movies from "./components/trending/trend-movie";
import Trend_Tv from "./components/trending/trend-tv";
import Details_People from "./components/details/details-people";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="/movies/popular" element={<Movies_Pop />} />
        <Route path="/movies/top_rated" element={<Movies_Top />} />
        <Route path="/movies/up_com" element={<Movies_Upcom />} />
        <Route path="/movies/now_playing" element={<Movies_Now />} />
        <Route path="/tv/popular" element={<Tv_Pop />} />
        <Route path="/tv/top_rated" element={<Tv_Top />} />
        <Route path="/tv/air" element={<Tv_Air />} />
        <Route path="/tv/today" element={<Tv_Today />} />
        <Route path="/trend_movies" element={<Trend_Movies />} />
        <Route path="/trend_tv" element={<Trend_Tv />} />
        ///////////////////////////////////////////////////////////////////
        <Route path="/movies" element={<Movies />} />
        <Route path="/tv" element={<Tv_Shows />} />
        <Route path="/people" element={<People />} />
        <Route path="/search" element={<Search />} />
        <Route path="/movie/details/:id" element={<Details_Movie />} />
        <Route path="/tv/details/:id" element={<Details_Tv />} />
        <Route path="/actor/details/:id" element={<Details_People />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
