import React from "react";
import './Navbar.css'
import { Link } from "react-router-dom"

function Navbar() {

    return (
        <nav>
            <ul className="list">
                <li className="navigation" >
                    <Link className="navigation" to= "/HouseGrid" >Find Homes</Link>
                </li>    
                <li className="navigation" >
                    <Link className="navigation" to= "/SellHouse">List Your House</Link>
                </li>   
                <li className="navigation" >
                    <Link className="navigation" to= "/Login">Login</Link>
                </li>   
            </ul>            
        </nav>
    )
}

export  default Navbar