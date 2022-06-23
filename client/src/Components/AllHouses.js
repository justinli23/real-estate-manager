import { useState, useEffect} from 'react';
import HouseCard from "./HouseCard.js";

function AllHouses() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [houseData, setHouseData] = useState([]);

        useEffect(() => {
            fetch("/properties")
            .then((res) => res.json())
            .then((data) => {
                setHouseData(data);
                setIsLoaded(true);
            });
        }, []);

    if (!isLoaded) return <h2>Loading Housing Inventory...</h2>;

    return (
        <div className="main-container">
            <div className="results-container">
                {houseData.map((house) => {
                  return <HouseCard key={house.id} house={house}/>
                })}
            </div>
        </div>
    );
}

export default AllHouses;