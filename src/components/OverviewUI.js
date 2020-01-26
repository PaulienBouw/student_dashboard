import React from "react"
import { VictoryBar, VictoryChart, VictoryAxis, VictoryGroup } from "victory";


function OverviewUI(props){
	return(
		<div>
         <VictoryChart domainPadding={20}>
          <VictoryAxis />
          <VictoryAxis dependentAxis tickValues={[1, 2, 3, 4, 5]} />
          <VictoryGroup offset={20} id="victorygroup">
          {props.value !== "showOnlyIntensity" && 
            <VictoryBar
              id="fun"
              colorScale={"red"} 
              data={props.exerciseAverages} 
              x="title" 
              y="funAverage"
              animate={{ 
                  onLoad: { duration: 2000 }
                }} /> }
          {props.value !== "showOnlyFun" && 
            <VictoryBar 
              id="intensity"
              colorScale={"blue"}
              data={props.exerciseAverages}
              x="title"
              y="intensityAverage"
              animate={{ 
                  onLoad: { duration: 2000 }
                }}
            /> }
       
            
          </VictoryGroup>
        </VictoryChart>
        <form onClick={props.clickhandler}>
           <input id="showOnlyFun" type="radio" name="filterGraphic" value="showOnlyFun" /> Laat plezier zien<br/>
           <input id="showOnlyIntensity" type="radio" name="filterGraphic" value="showOnlyIntensity" /> Laat moeilijkheid zien<br/>
           <input id="showAll" type="radio" name="filterGraphic" value="showAll" /> Laat alles zien<br/>
        </form>
      </div>
		)

}


export default OverviewUI