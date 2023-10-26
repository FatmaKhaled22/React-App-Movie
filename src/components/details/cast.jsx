import React from "react";
import { Link } from "react-router-dom";

function Cast({cast}) {

  const url_img_cast = `https://image.tmdb.org/t/p/w500/${cast?.profile_path}`;
  let img = cast.poster_path !== null ;

  return (
    <>
      <div className="col p-1" key={cast.id}>
        <div className="card">
          <img src={img ? url_img_cast : "/assets/img/no-person.jpg"} className="card-img-top" alt="cast-img"/>
          <div className="card-body my-2">
            <h6 className="card-title">
              <Link to={`/actor/details/${cast.id}`}>{cast.name}</Link>
            </h6>
            <p className="card-text">{cast.character}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cast;
