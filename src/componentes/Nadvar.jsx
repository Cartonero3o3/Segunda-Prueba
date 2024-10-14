import React from 'react';
import './Nadvar.css';  

function Nabvar() {
  return (
    <div className="navbar"> 
      <a href="#home" className="active">Location Air</a> 

      <div className="search-container"> 
        <input type="text" placeholder="Search.." />
        <button type="button">Search</button>
      </div>
    </div>
  );
}

export default Nabvar;
