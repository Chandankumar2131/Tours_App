import React, { useState } from "react";
import data from "./Data"
import Tours from "./Tours";
import Header from "./Header";
// import  "./App.css";


export default function App() {
  const [tours, setTours] = useState(data);
  function removeTour(id){
    const newTours= tours.filter(tour=>tour.id!==id); 
        setTours(newTours);
    }
     if(tours.length===0){
        return(
            <div className='refres'>
                <h2>No Tours Left</h2>
                <button className="btn-white" onClick={()=>setTours(data)}>
                    refresh 
                </button>
            </div>
        );
      }
  return (
    <div className="App">
     <div className="sticky-header">
  <div className="header-container">
    <Header />
  </div>
</div>

       
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  )
} ;
