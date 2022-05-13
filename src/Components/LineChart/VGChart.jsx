import React, {useEffect, useState } from 'react';
import { Chart } from "react-google-charts";

const options = {
  title: "Video Game Analyzation Chart",
  legend: { position: "bottom" },
};

const VGChart =  ({videoGames}) => {
    console.log(videoGames)

    // filter the video games by year. 
    let filteredGames = videoGames.filter(game => game.year > 2013);

    console.log("filteredGames", filteredGames)

    let platforms = filteredGames.map(game => game.platform)
    
    

    // uniq = [...new Set(array)];
    let singlePlatform = [...new Set(platforms)]
    console.log("mapped platform", singlePlatform)

    let platformArray = singlePlatform.map(platform => {
        let allGamesForPlatforms = filteredGames.filter(game => game.platform == platform)
          // now we need to loop through allGamesForPlatform and sum each games global sales
      
        return[platform, 10, "Fuschia"]
    })
    
  function GenerateChartData(){
    const data = [
      ["Platform", "Sales", {role: "style"}],
      ...platformArray

   
    ];
    console.log("Data", data)

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





