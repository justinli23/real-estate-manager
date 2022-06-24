import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Search from "./Components/Search";
import SellHouse from "./Components/SellHouse";
import HouseGrid from "./Components/HouseGrid";

function App() {
  const [houses, setHouses] = useState([])
  const [filteredHouses, setFilteredHouses] = useState(houses)

  function handleHouseSearch(e){    
    const filteredHome=houses.filter(house=>{      
      return house.address.includes(e.target.value)           
    })
    setFilteredHouses(filteredHome)
  }
  useEffect(() =>{
    setFilteredHouses(houses)
  }, [houses]);
  
 
  useEffect(() => {
    fetch("/properties")
      .then((r) => r.json())
      .then((data) => setHouses(data));
  }, []);

  // function handleClick(e)=> {
    

  //   return (<Navigate to = "/HouseGrid/:id" />)
  // }

  // }


  return (
    <BrowserRouter>
    <Navbar />
    <br></br>
    <Search handleHouseSearch= {handleHouseSearch} />
      <div className="App">
      <Outlet />
        <Routes>
        <Route exact path={"/"} element={<HouseGrid handleHouseSearch={handleHouseSearch} houses={filteredHouses} Search={Search}/>} />
          <Route exact path={"/HouseGrid"} element={<HouseGrid handleHouseSearch={handleHouseSearch} houses={filteredHouses} Search={Search}/>} />
          <Route exact path={"/SellHouse"} element={<SellHouse handleHouseSearch={handleHouseSearch} houses={filteredHouses} Search={Search}/>} />
          <Route exact path={"/Login"}/>
          <Route exact path={"/HouseGrid/:id"} element={<HouseGrid handleHouseSearch={handleHouseSearch} houses={filteredHouses} Search={Search}/>} >
          </Route>    
        </Routes>
      </div>
    </BrowserRouter> 
  );
}

export default App;