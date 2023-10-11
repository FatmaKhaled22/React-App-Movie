import { Route, Routes } from "react-router-dom";
import Home from "./components/home/home";
import Navbar from "./components/nav/nav";
import Footer from "./components/footer/footer";
import Details from "./components/details-movie/details";
import Movies_Top from "./components/home/movies/toprated";
import Movies_Upcom from "./components/home/movies/upcom";
import Movies_Now from "./components/home/movies/nowplaying";
import Movies_Pop from "./components/home/movies/popular";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />}>
          <Route path="/home/" element={<Movies_Pop />} />
          <Route index path="/home/popular" element={<Movies_Pop />} />
          <Route path="/home/top_rated" element={<Movies_Top />} />
          <Route path="/home/up_com" element={<Movies_Upcom />} />
          <Route path="/home/now_playing" element={<Movies_Now />} />
        </Route>
        <Route path="/details/:id" element={<Details />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
