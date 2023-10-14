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
import Home_Tv from "./components/home/home-tv";
import Details_Tv from "./components/details/details-tv";
import Tv_Top from "./components/tv-list/toprated";
import Tv_Air from "./components/tv-list/onair";
import Tv_Today from "./components/tv-list/today";
import Home_Movie from "./components/home/home-movie";
import Movies from "./components/movies/movies";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />}>
          <Route path="/home/" element={<Movies_Pop />} />
          {/* <Route path="movie" element={<Home_Movie />}> */}
            <Route index path="popular" element={<Movies_Pop />} />
            <Route path="top_rated" element={<Movies_Top />} />
            <Route path="up_com" element={<Movies_Upcom />} />
            <Route path="now_playing" element={<Movies_Now />} />
          {/* </Route> */}

          {/* <Route path="tv" element={<Home_Tv />}> */}
            {/* <Route path="/home/tv/" element={<Tv_Pop />} /> */}
            <Route index path="popular" element={<Tv_Pop />} />
            <Route path="top_rated" element={<Tv_Top />} />
            <Route path="air" element={<Tv_Air />} />
            <Route path="today" element={<Tv_Today />} />
          </Route> 
        {/* </Route> */}
        ///////////////////////////////////////////////////////////////////
        <Route path="/movies" element={<Movies />}/>
        <Route path="/movie/details/:id" element={<Details_Movie />} />
        <Route path="/tv/details/:id" element={<Details_Tv />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
