import { useState, useEffect} from 'react';
import HouseCard from "./HouseCard.js";
import {useParams, Link} from "react-router-dom";
import NoMatch from './NoMatch.js';

function HouseGrid({houses}) {
  


    let { id } = useParams(); 
    
 

    

    if (!id) {
        
        return <AllHouses />;        
    }   

  
    let singleHouse = houses.find((house) => house.id == id);
    

   
    

    function AllHouses() {
        return (
            
            <div className="main-container">
                <div className="results-container">                 
                <br></br>
                {houses.map((house) => {
                return <HouseCard key={house.id} house={house} />;
            })}</div>
            </div>
        );
    }
    
    if (!singleHouse) {
        
        return <NoMatch />;
    }
   

   

   
   return (

    <div>
        <h1> {singleHouse.address}</h1>            
            <img src={singleHouse.image}></img>
            <h2> {singleHouse.price} {singleHouse.rooms} {singleHouse.sq_ft}</h2>
    </div>

   )

}
export default HouseGrid;