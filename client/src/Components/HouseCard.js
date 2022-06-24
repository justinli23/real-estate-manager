import React from 'react';
import {Link} from 'react-router-dom'


function HouseCard({house}) {
    return (
            <div className="house-description">
                <h3 className="house-address">
                    {house.address} {house.description}
                </h3>
                <Link 
            to={`/HouseGrid/${house.id}`}>                
            <img src={house.image} alt={house.name} style={{border: "5px solid #89CFF0", "width":"200px", "height": "200px"}} >
                </img>
                </Link>
                <h5 className="house-squarefeet">{house.sq_ft} square feet</h5>
                <h5 className="house-price">${house.price} Dollars</h5>
            </div>
    )
}
export default HouseCard;