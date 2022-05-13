import React, {useEffect, useState } from 'react';
import { Chart } from "react-google-charts";

const options = {
  title: "Video Game Analyzation Chart",
  legend: { position: "bottom" },
};

const VGChart =  ({videoGames}) => {

  function GenerateChartData(){
    const data = [
      ["Platform", "Sales", {role: "style"}],
      ["PS3", 1000, "Black"],
      ["DS", 460, "Blue"],
      ["x360", 1120, "Red"],
      ["PS2", 540, "Green"],
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





