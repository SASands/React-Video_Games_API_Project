import React, {useEffect, useState } from 'react';
import { Chart } from "react-google-charts";
import Linechart from "./Components/LineChart.jsx"




function App() {
  
  const [VideoGames, setVideoGames] useState([]);

  useEffect(() => {
    getVideoGames();
  }, []);

  async function getVideoGames(){
    try{
      debugger;
      const response = await axios.get('https://localhost:7260/api/games/alldata');
      setVideoGames(response.data);
    } catch(ex){
      console.log(`ERROR in VideoGames EXCEPTION: ${ex}`)
    }
  }
  
  return (
    <div>
      Linechart VideoGames={VideoGames}
    </div>

  );
}

export default App;
