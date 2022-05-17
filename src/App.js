import React, {useEffect, useState } from 'react';
import axios from 'axios';
import VGChart from './Components/VideoGameChart/VGChart';
import SearchBar from './Components/SearchBar/SearchBar';
import GDChart from './Components/GameDetailsChart/GDChart';
import GDTable from './Components/GameDetailTable/GDTable';
import VGChartNew from './Components/VGChartNew/VGChartNew'

function App() {
  
  const [videoGames, setVideoGames] = useState([]);
  // after all games are filtered we save the result here in the searchGames Hook
  const [searchGames , setSearchGames ] = useState([]);
  const [newData, setNewData] = useState ([]);
 

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
      <VGChart newData={newData}/>
      <VGChartNew videoGames={videoGames}/>
      <SearchBar setSearchGames={setSearchGames} getVideoGames={getVideoGames} videoGames={videoGames}/>
      <GDChart searchGames={searchGames} getVideoGames={getVideoGames}/>
      <GDTable searchGames={searchGames} getVideoGames={getVideoGames}/>
    </div>
  );
}

export default App;

