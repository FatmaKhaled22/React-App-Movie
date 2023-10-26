import React from 'react';
import { Link } from 'react-router-dom';


function Result_Search({multi}) {

    const url_img = `https://image.tmdb.org/t/p/w500/${multi?.poster_path}`;
    const url_img2 = `https://image.tmdb.org/t/p/w500/${multi?.profile_path}`;
    
    const type = multi.media_type  == 'movie' ? `/movie/details/${multi.id}` : multi.media_type  == 'tv' ? `/tv/details/${multi.id}` : `/actor/details/${multi.id}`;

    const type_img = multi.media_type  == 'person' ;

    return ( 
      <>
        <Link to={type}>
          <div className="col" key={multi.id}>
            <div className="card">
              <img src={type_img ? url_img2 : url_img} className="card-img-top" alt="multi-img" />
              <div className="card-body">
                <h6 className="card-title">{multi.title}{multi.name}</h6>
                <p className="card-text mb-2">{multi.release_date}{multi.first_air_date}</p>
              </div>
            </div>
          </div>
        </Link>
      </>
    );
}

export default Result_Search;