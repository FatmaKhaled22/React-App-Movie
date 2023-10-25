import React from 'react';


function Pagination({page , setPage}) {

  const handleNext = () => {
    setPage(page + 1);
  };

  const handlePrev = () => {
    setPage(page - 1);
  };

    return (  
      <>
        <nav aria-label="Page navigation example"style={{marginLeft:"45%"}}>
          <ul className="pagination">
            <li className="page-item mx-2">
              <a className="page-link"  aria-label="Previous" 
              disabled={page === 0} onClick={()=>handlePrev()}>
                <span aria-hidden="true" className="paginate">Prev</span>
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" aria-label="Next" 
              onClick={()=>handleNext()}>
                <span aria-hidden="true" className="paginate">Next</span>
              </a>
            </li>
          </ul>
        </nav>
      </>
    );
}

export default Pagination;