import React, {useEffect, useState } from 'react';
import axios from 'axios';
import VGChart from './Components/GameChart/VGChart';
import SearchBar from './Components/SearchBar/SearchBar';
import GDChart from './Components/GameDetailsChart/GDChart';

function App() {
  
  const [videoGames, setVideoGames] = useState([]);
  // after all games are filtered we save the result here in searchGames
  const [searchGames , setSearchGames ] = useState([]);
  // TODO make another chart compoenent but remove the 2013 filter logic 
  // then pass down searchGames into this new "GameDetailsChart"
 

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
      <SearchBar setSearchGames={setSearchGames} getVideoGames={getVideoGames} videoGames={videoGames}/>
      <GDChart searchGames={searchGames} getVideoGames={getVideoGames}/>
    </div>
  );
}

export default App;

