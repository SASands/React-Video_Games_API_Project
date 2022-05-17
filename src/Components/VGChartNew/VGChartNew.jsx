import React, {useEffect, useState } from 'react';
import { Chart } from "react-google-charts";

const options = {
  title: "Historical Global sales for all Platforms",
  legend: { position: "bottom" },
};

const VGChartNew =  ({videoGames}) => {
     
    let filteredGames = videoGames.filter(game => game.year);

    let platforms = filteredGames.map(game => game.platform);
    

    let singlePlatform = [...new Set(platforms)]
  
    let platformArray = singlePlatform.map(platform => {
        let allGamesForPlatforms = filteredGames.filter(game => game.platform == platform)
    let sumGlobalSales = allGamesForPlatforms.map(game =>{
      return(game.globalSales)
     
    })
      .reduce((firstIndex, lastIndex) => (firstIndex + lastIndex))
   
        return[platform, sumGlobalSales, "Yellow"]
    })
    
  function GenerateChartData(){
    const data = [
      ["Platform", "Sales", {role: "style"}],
      ...platformArray

    ];
    
    return data;
  }  
  return (    
        <div>
          <h2>Highest Sales per Platform</h2>
          <Chart chartType="ColumnChart" options={options} width="100%" height="400px" data={GenerateChartData()}/>
        </div>
      );
}
      
export default VGChartNew;





