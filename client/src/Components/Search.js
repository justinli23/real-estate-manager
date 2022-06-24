import React from "react";

function Search({handleHouseSearch}){

    return (
        <div className="searchbar">
            <label htmlFor="search">Search Homes</label>
            <input
                type="text"
                id="search"
                placeholder="Address or state"
                onChange={handleHouseSearch}
            />
        </div>
    )
}

export default Search;