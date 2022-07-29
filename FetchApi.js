import React from "react";


function FetchAPI() {
  
  const apiGet = () => {
    fetch("https://datausa.io/api/data?drilldowns=State&measures=Population")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        
      });
  };


  return (
    <div>
      My API <br />
      <button onClick={apiGet}>Fetch API</button>
      <br />
     
       
      </div>);}
       

export default FetchAPI