import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function People() {
  const people = useSelector((state) => state.people.results);
  console.log("People ---->", people);

  return (
    <>
      <div className="container movies mb-5" style={{marginTop:"5%"}}>
        <h2 className="my-4">Popular People</h2>
        <div className="row row-cols-1 row-cols-md-4 row-cols-lg-5 g-4 mb-5">
          {people.map((p) => {
            const url_img = `https://image.tmdb.org/t/p/w500/${p.profile_path}`;
            return (
              <div className="col" key={p.id}>
                <div className="card" style={{height:"70vh"}}>
                  <img src={url_img} className="card-img-top" alt="person-img" />
                  <div className="card-body">
                    <h6 className="card-title"><Link to={`/actor/details/${p.id}`}>{p.name}</Link></h6>
                    <p className="card-text">{p.known_for.map((acting)=>{
                      return(
                        <span className="card-text fw-normal">{acting.title}{acting.name} , </span>
                      )
                    })}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default People;
