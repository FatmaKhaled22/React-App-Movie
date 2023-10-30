import React from "react";
import Movie from "../movie-list/movie";
import { useSelector } from "react-redux";


function Favorites() {

  const Movies = useSelector((state) => state.favorite.favorites);

  const FavMovies = Movies.filter((element, index , self) => {
    return index === self.findIndex((movie) => (movie.id === element.id))
  });
  console.log("FavMovies ---->", FavMovies);

  return (
    <>
      <div className="container movies" style={{marginTop:"12vh"}}>
        <h3 className="mb-4">Favorites Movies</h3>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4 mb-5">
          {FavMovies.length == 0 ? <h2 style={{textAlign:'center',width:'100%' ,height:"32vh"}}>No Movies in Favorite list Yet</h2> : FavMovies.map((movie) => {
            return <Movie movie={movie} key={movie.id} isFav={true}/>
          })}
        </div>
      </div>
    </>
  );
}

export default Favorites;
