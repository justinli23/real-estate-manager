import React from 'react';

function HouseCard({house}) {

    return (
            <div className="house-description">
                <h3 className="house-address">
                    {house.address} {house.description}
                </h3>
                <img src={house.image} alt={house.name} style={{border: "5px solid #89CFF0", "width":"200px", "height": "200px"}} >
                </img>
                <h5 className="house-squarefeet">{house.sq_ft}</h5>
                <h5 className="house-price">{house.price}</h5>                    
            </div>  
    )
}

export default HouseCard;