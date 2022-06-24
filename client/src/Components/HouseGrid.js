import { useState, useEffect} from 'react';
import HouseCard from "./HouseCard.js";
import {useParams, Link} from "react-router-dom";
import NoMatch from './NoMatch.js';

function HouseGrid() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [houseData, setHouseData] = useState([]);


    let { id } = useParams(); 
    
    useEffect(() => {
        fetch("/properties")
        .then((res) => res.json())
        .then((data) => {
            setHouseData(data);
            setIsLoaded(true);
        });
    }, []);

    console.log(houseData)

    if (!id) {
        console.log("No id provided")
        return <AllHouses />;        
    }   

    // let singleHouse = getHouseById(id);
    let singleHouse = houseData.find((house) => house.id == id);
    

    function getHouseById(id) {
        // return houseData.find((house) => house.id === id);
        return houseData      
    }
    

    function AllHouses() {
        return (
            
            <div className="main-container">
                <div className="results-container">                 
                <br></br>
                {houseData.map((house) => {
                return <HouseCard key={house.id} house={house} />;
            })}</div>
            </div>
        );
    }
    
    if (!singleHouse) {
        console.log("Not single house")
        console.log(singleHouse)
        return <NoMatch />;
    }
   

    if (!isLoaded) return <h2>Loading Housing Inventory...</h2>;

   
   return (

    <div>
        <h1> {singleHouse.address}</h1>            
            <img src={singleHouse.image}></img>
            <h2> {singleHouse.price} {singleHouse.rooms} {singleHouse.sq_ft}</h2>
    </div>

   )

}
export default HouseGrid;