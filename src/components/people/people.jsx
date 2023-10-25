import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPeople } from './../../services/people';
import { setPeople } from "../../store/reducer/people";
import Pagination from "../paginate/paginate";


function People() {

  const people = useSelector((state) => state.people.people);
  console.log("People ---->", people);

  // //////////////////////////////////////////////////////
  const [page, setPage] = useState(1);
  var dispatch = useDispatch();

  const fetchPeople = async (query) => {

    getPeople(query).then((response) => {
      const  people  = response.results;
      console.log("people after paginate --->",people);
      dispatch(setPeople(people));
      console.log("res paginate --->", response.results);
      console.log("page--->",page);
    }).catch((e) => {
      console.log("error in fetch person --> ",e);
    });
  };

  useEffect(() => {
    fetchPeople(page);
  }, [page]);


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

      {/* Pagination */} 
      <Pagination setPage={setPage} page={page}/>
      </div>
    </>
  );
}

export default People;
