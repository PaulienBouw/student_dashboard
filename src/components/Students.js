import React, {Component, useState } from "react"
import StudentsData from "./StudentsData"
import Data from "./Data"
import StudentUI, {studentArray} from "./StudentUI"
import ProgressBar from "./ProgressBar"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function Students(){ 
	
	

	const exerciseNames = Data.map(item => item.title);
	  const uniqueExerciseNames = exerciseNames.filter((name, index, names) => {
	    // Truc om dubbele namen er uit te filteren
	    return names.indexOf(name) === index;
	    
	  });
//	console.log(uniqueExerciseNames.length)
	const[ totalPercent, setTotalPercent ] = useState(uniqueExerciseNames.length)
	//console.log(totalPercent)
	
     
   

	  function Home() {
  return (
    <div className="studentgallery">            
      {StudentsData.map(student => (
      
        <div key={student.id} className="portret">
          <Link to={`/students/${student.name}`}>
          
          
          <div>
            <h2>{student.name}</h2>
            <p>{student.age} jaar</p>
            <p>uit {student.city}</p>
            <ProgressBar percent={studentArray(student.name).length / totalPercent * 100}  />
          </div>  
          <img src={student.photo} />
          </Link>
        </div>
        
          ))}
            
  </div>
  )
}


return (
    
      <div>
        <Switch>
        <Route exact path="/students">
            <Home />
          </Route>
             <Route path="/students/:name" >
              <StudentUI />
             </Route>
            
         
          		
          
        </Switch>
      </div>

  );
}





export default Students