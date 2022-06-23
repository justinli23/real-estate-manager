import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Search from "./Components/Search";
import SellHouse from "./Components/SellHouse";
import AllHouses from "./Components/AllHouses";

function App() {
  const [houses, setHouses] = useState([])
  const [filteredHouses, setFilteredHouses] = useState(houses)

  function handleHouseSearch(e){
    const filteredHome=houses.filter(house=>{
      return house.full_address.toLowerCase().includes(e.target.value.toLowerCase())
      || house.name.toLowerCase().includes(e.target.value.toLowerCase())
      || house.description.toLowerCase().includes(e.target.value.toLowerCase());
    })
    setFilteredHouses(filteredHome)
  }
  useEffect(() =>{
    setFilteredHouses(houses)
  }, [houses]);
  
 
  // useEffect(() => {
  //   fetch("/houses")
  //     .then((r) => r.json())
  //     .then((data) => setHouses(data));
  // }, []);


  return (
    <BrowserRouter>
    <Navbar />
    <br></br>
    <Search handleHouseSearch= {handleHouseSearch} />
      <div className="App">
        <Routes>
          <Route exact path={"/"} element={<AllHouses handleHouseSearch={handleHouseSearch} houses={filteredHouses} Search={Search}/>} />            
          <Route exact path={"/AllHouses.js"} element={<AllHouses handleHouseSearch={handleHouseSearch} houses={filteredHouses} Search={Search}/>} />                      
          <Route exact path={"/SellHouse"} element={<SellHouse handleHouseSearch={handleHouseSearch} houses={filteredHouses} Search={Search}/>} />              
          <Route exact path="/Login">             
          </Route>    
        </Routes>
      </div>
    </BrowserRouter> 
  );
}

export default App;