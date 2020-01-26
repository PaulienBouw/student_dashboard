import React from "react"
import Data from "./Data"
import { VictoryBar, VictoryChart, VictoryAxis, VictoryGroup } from "victory";
import { useParams } from "react-router-dom";

      export const studentArray = name =>{
      return Data.filter(item => {
        return item.student === name;
      })
    }
function StudentUI(props){
//console.log(studentArray("Paulien").length) 

 const {name} = useParams()
 const data = studentArray(name)
		return(

      <div>
      <h1 className="headerStudent"> Dit zijn de opdrachten van <span>{name}</span></h1>
		<VictoryChart domainPadding={20}>
          <VictoryAxis />
          <VictoryAxis dependentAxis tickValues={[1, 2, 3, 4, 5]} />
          <VictoryGroup offset={20} id="victorygroup">
          {props.value !== "showOnlyIntensity" && 
            <VictoryBar
              id="fun"
              colorScale={"red"} 
              data={data} 
              x="title" 
              y="fun"
              animate={{ 
                  onLoad: { duration: 2000 }
                }} /> }
          {props.value !== "showOnlyFun" && 
            <VictoryBar 
              id="intensity"
              colorScale={"blue"}
              data={data}
              x="title"
              y="intensity"
              animate={{ 
                  onLoad: { duration: 2000 }
                }}
            /> }
       
            
          </VictoryGroup>
        </VictoryChart>
        </div>
		)
}
export default StudentUI