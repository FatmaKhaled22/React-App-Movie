import React from 'react';
import { Link } from "react-router-dom";


function People_Acting({acting}) {

    const url_img_acting = `https://image.tmdb.org/t/p/w500/${acting?.poster_path}`;
    const type = acting.media_type  == 'movie' ? `/movie/details/${acting.id}` : `/tv/details/${acting.id}` ;
    let img = acting.poster_path !== null ;

    return ( 
        <>
        <div className="col m-2" key={acting.id}>
            <div className="card">
                <img src={img ? url_img_acting : `/assets/img/no-cover.png`} className="card-img-top" alt="tv-img" />
                <div className="card-body my-1">
                    <h6 className="card-title"><Link to={type}>{acting.name}{acting.title}</Link></h6>
                    <p className="card-text">{acting.release_date}{acting.first_air_date}</p>
                </div>
            </div>
        </div>
        </>
    );
}

export default People_Acting;