import React, {useState} from 'react';
import SearchBar from "../src/components/search-bar"
import CarbonFootprint from "../src/components/carbon-footprint"
function App() {
 const [carbonFootprintNumber,setCarbonFootprintNumber] = useState();
  function onSubmit(e) {
    console.log(e)

    const returnedData = {"carbon": 1}
    setCarbonFootprintNumber(returnedData.carbon)
  }
  return (
    <div className="ui container">
      <SearchBar onSubmit={onSubmit} />
      {
        carbonFootprintNumber ? 
        <CarbonFootprint number={carbonFootprintNumber} />:
        null
      }
    </div >
  );
}

export default App;
