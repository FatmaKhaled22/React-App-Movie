import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../config/instance";
import { Carousel } from '@trendyol-js/react-carousel';
import People_Acting from "./people-combined";
import "./details-people.css";

function Details_People() {
    
  const { id } = useParams();
  console.log("id from people :  --->", id);

  const [people, setPeople] = useState([]);
  const [acting, setActing] = useState([]);

  const url_img = `https://image.tmdb.org/t/p/w500/${people.profile_path}`;

  const popularInfo = () =>{
    axiosInstance.get(`/person/${id}`).then((res) => {
        console.log("details of people", res.data);
        setPeople(res.data);
    }).catch((err) => {
        console.log("error ---->", err);
    });
  }

  const popularActing = () =>{
    axiosInstance.get(`/person/${id}/combined_credits`).then((res) => {
        console.log("details of working_people", res.data);
        setActing(res.data.cast);
    }).catch((err) => {
        console.log("error ---->", err);
    });
  }

  useEffect(() => {
    popularInfo();
    popularActing();
  }, []);

  function formatDate(date) {
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    const formattedDate = new Date(date).toLocaleDateString('en-US', options);
    // Split the formatted date into day, month, and year parts
    const [month, day, year] = formattedDate.split(' ');
    return `${month} ${day} ${year}`;
  }

  function RightArrow(){
    return(<i className="bi bi-arrow-right-circle position-absolute top-50 start-100 translate-middle"></i>);
  }
    
  function LeftArrow(){
    return(<i className="bi bi-arrow-left-circle position-absolute top-50 start-0 translate-middle"></i>);
  }
  

  return (
    <>
    <div className="">
      <div className="container details-people">
        <div className="row m-5 g-5" key={people.id}>
          <div className="col-md-4 container-cover">
            <img className="card-img-top mb-md-0 rounded" src={url_img} alt="people Cover"/>
          </div>
          <div className="col-md-8">
            <h1>{people.name}</h1>
            <h4 className="my-4">Biography</h4>
            <p className="mb-5">{people.biography}</p>
            <ul className="info">
              <li>Known For : <span id="info">{people.known_for_department}</span></li>
              <li>Birthday : <span id="info">{formatDate(people.birthday)}</span></li>
              <li>Place of Birth : <span id="info">{people.place_of_birth}</span></li>
            </ul><hr/>
          </div>
        </div>
        <div className="container movies">
          <div className="row row-cols-1 row-cols-md-3 row-cols-lg-5 g-4 p-3 my-4">
            {/* <Carousel show={5} slide={1} swiping={true} rightArrow={<RightArrow/>} leftArrow={<LeftArrow/>} className="mt-0"> */}
              {acting.map((acting)=>{
                return(
                  <People_Acting acting={acting} key={acting.id}/>
                )
              })}
            {/* </Carousel> */}
          </div>
        </div>
      </div>
    </div>

    </>
  );
}

export default Details_People;