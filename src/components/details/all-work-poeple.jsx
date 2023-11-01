import React, { useEffect, useState } from 'react';
import axiosInstance from '../../config/instance';
import People_Acting from './people-combined';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';


function All_Work_Acting() {

    const { id } = useParams();
    console.log("id from people :  --->", id);

    // const people = useSelector((state) => state.people.initialPeople.results.find((people)=> people.id == id));
    // console.log("People ---->", people);

    const [acting, setActing] = useState([]);
  
    useEffect(() => {
      axiosInstance.get(`/person/${id}/combined_credits`).then((res) => {
        console.log("details of working_people", res.data);
        setActing(res.data.cast);
      }).catch((err) => {
        console.log("error ---->", err);
      });
    }, []);


    return ( 
        <>
        <div className="container acting movies">
          <h2 className='mb-4'>Acting in</h2>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4 mb-5">
            {acting.map((acting)=>{
              return(
                <People_Acting acting={acting} key={acting.id}/>
              )
            })}
          </div>
        </div>
        </>
    );
}

export default All_Work_Acting;