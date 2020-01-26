import React, {Component} from "react"
import { VictoryPie, VictoryLabel } from "victory";

function ProgressBar({percent}){
  
  

  
    return (
      <div>
        <svg viewBox="0 0 400 400" width="100%" height="100%">
          <VictoryPie
            standalone={false}
            animate={{ duration: 1000 }}
            width={400} height={400}
            data={[{ x: 1, y: percent }, { x: 2, y: 100 - percent }]}
            innerRadius={120}
            cornerRadius={25}
            labels={() => null}
            style={{
              data: { fill: ({ datum }) => {
                const color = datum.y > 50 ? "green" : "red";
                return datum.x === 1 ? color : "transparent";
              }
              }
            }}
          />
                     <VictoryLabel
                  textAnchor="middle" verticalAnchor="middle"
                  x={200} y={200}
                  text={`${Math.round(percent)}%`}
                  style={{ fontSize: 45 }}
                />
              
          
         
        </svg>
      </div>
    );
  
}


export default ProgressBar