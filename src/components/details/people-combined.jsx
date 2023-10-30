import React from 'react';
import { Link } from "react-router-dom";


function People_Acting({acting}) {

    const url_img_acting = `https://image.tmdb.org/t/p/w500/${acting?.poster_path}`;
    let img = acting.poster_path !== null ;

    const type = acting.media_type  == 'movie' ? `/movie/details/${acting.id}` : `/tv/details/${acting.id}` ;
    let date = acting.media_type == 'movie' ? acting.release_date : acting.first_air_date ;

    function formatDateYear(date) {
        const options = { day: '2-digit', month: 'short', year: 'numeric' };
        const formattedDate = new Date(date).toLocaleDateString('en-US', options);
        const [month, day, year] = formattedDate.split(' ');
        return `(${year})`;
    }

    return ( 
        <>
        <div className="col" key={acting.id}>
            <div className="card">
                <img src={img ? url_img_acting : `/assets/img/no-cover.png`} className="card-img-top" alt="tv-img" />
                <div className="card-body my-1">
                    <h6 className="card-title"><Link to={type}>{acting.name || acting.title}</Link> <span>{formatDateYear(date)}</span></h6>
                </div>
            </div>
        </div>
        </>
    );
}

export default People_Acting;