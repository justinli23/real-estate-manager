import React from "react";

function Search({handleHouseSearch}){

    return (
        <div className="searchbar">
            <label htmlFor="search">Search Homes</label>
            <input
                type="text"
                id="search"
                placeholder="Type address or description"
                onChange={handleHouseSearch}
            />
        </div>
    )
}

export default Search;