import React, {useEffect, useState } from 'react';
import axios from 'axios';
import VGChart from './Components/LineChart/VGChart';


function App() {
  
  const [videoGames, setVideoGames] = useState([]);

  useEffect(() => {
    getVideoGames();
  }, []);

  async function getVideoGames(){
    try{
      //debugger;
      const response = await axios.get('https://localhost:7260/api/games/allData');
      setVideoGames(response.data);
    } catch(ex){
      console.log(`ERROR in getVideoGames EXCEPTION: ${ex}`)
    }
  }
  
  return (
    <div>
      <VGChart videoGames={videoGames}/>
    </div>
  );
}

export default App;


// function App() {
//   return (
//     <Chart
//       chartType="LineChart"
//       width="100%"
//       height="400px"
//       data={data}
//       options={options}
//     />
//   )}