import React, { useState, useEffect } from 'react';
import "../index.css";
import './JobBoardComponent.js';

function App() {
   const [jobs, setJobs] = useState([]);

   
   useEffect(() => {
    fetch('your api url')
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      });
   }, []);


  return (
    <div>
      <p className="test">
        Hello World</p> 
      
    </div>
  );
}

export default App;
 