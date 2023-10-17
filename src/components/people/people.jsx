import React from "react";
import { useSelector } from "react-redux";

function People() {
  const people = useSelector((state) => state.people.results);
  console.log("People ---->", people);

  return (
    <>
      <div className="container movies my-5">
        <div className="row row-cols-1 row-cols-md-4 row-cols-lg-5 g-4 mb-5">
          {people.map((p) => {
            const url_img = `https://image.tmdb.org/t/p/w500/${p.profile_path}`;
            return (
              <div className="col" key={p.id}>
                <div className="card">
                  <img src={url_img} className="card-img-top" alt="person-img" />
                  <div className="card-body my-2">
                    <h6 className="card-title">{p.name}</h6>
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
