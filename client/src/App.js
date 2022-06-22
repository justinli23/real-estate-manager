import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Search from "./Components/Search";
import SellHouse from "./Components/SellHouse";

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
        <Switch>
          <Route path={"/ListedHouses"} element={<ListedHouses handleHouseSearch={handleHouseSearch} houses={filteredHouses} Search={Search}/>} />
            <h1>Test Route</h1>
         
          <Route path={"/SellHouse"} element={<SellHouse handleHouseSearch={handleHouseSearch} houses={filteredHouses} Search={Search}/>} />
            <h1>Testing </h1>     
          <Route path="/Login">
            <h1>Welcome Username </h1>
          </Route>    
        </Switch>
      </div>
    </BrowserRouter> 
  );
}

export default App;