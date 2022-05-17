import React, {useEffect, useState } from 'react';
import { Chart } from "react-google-charts";

const options = {
  title: "Global sales for Year 2020-Current",
  legend: { position: "bottom" },
};

const VGChart =  ({newData}) => {
     
    let filteredGames = newData.filter(game => game.year > 2020);

    let platforms = filteredGames.map(game => game.platform)
    

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
          <h2>Video Game Analyzation Chart</h2>
          <Chart chartType="ColumnChart" options={options} width="100%" height="400px" data={GenerateChartData()}/>
        </div>
      );
}
      
export default VGChart;





