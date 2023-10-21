import React, { useEffect, useState } from "react";
import axiosInstance from "../../config/instance";
import Result_Search from "./result";

function Search() {

  const [searchValue, setSearchValue] = useState("");
  const [searchMulti, setSearchMulti] = useState([]);

  // const resultSearch = () => {
  //   const newSearchMovies = movies.filter((multi) =>
  //     multi.title.toLowerCase().includes(searchValue.toLowerCase())
  //   );
  //   setSearchMovies(newSearchMovies);
  // };

  const resultSearch = () => {
    axiosInstance.get('/search/multi', { 
      params: { query: `${searchValue}`} 
    }).then((res)=>{
      console.log("result of search -----> ", res.data);
      setSearchMulti(res.data.results);
    }).catch((err)=>{ 
      console.log("error ---->", err);
    });
  };

  useEffect(()=>{
    resultSearch();
  },[searchValue])


  return (
    <>
      <div className="container movies">
        <div className="mb-5 d-flex flex-row search-sec" style={{marginTop:"7%"}}>
          <input
            className="form-control form-control-lg rounded-start"
            type="text" placeholder="Search for a movie or tv show........."
            onChange={(e) => setSearchValue(e.target.value)} value={searchValue}
          />
          <button id="searchBtn" className="rounded-end"onClick={resultSearch}><i className="bi bi-search"></i></button>
        </div>
        <h2 className="mb-4">Search result of "{searchValue}"</h2>
        <div className="row row-cols-1 row-cols-md-4 row-cols-lg-5 g-4 mb-5">
          {searchMulti.length == 0 ? <h1 style={{textAlign:'center',width:'100%'}}>Search to show results</h1> : searchMulti.map((multi) => {
            return (
              <Result_Search multi={multi} key={multi.id}/>
            )
          })}
        </div>
      </div>
    </>
  );
}

export default Search;
