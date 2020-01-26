import React, { Component, useState } from "react";
import Data from "./Data";

import OverviewUI from "./OverviewUI"

const add = (a, b) => a + b
const average = values => values.reduce(add, 0) / values.length

const Overview = function() {
  const[ value, setValue] = useState()
  const[ student, setStudent] = useState()

  const exerciseNames = Data.map(item => item.title);
  const uniqueExerciseNames = exerciseNames.filter((name, index, names) => {
    // Truc om dubbele namen er uit te filteren
    return names.indexOf(name) === index;
  });
  const exerciseAverages = uniqueExerciseNames.map(name => {
    const exerciseValues = Data.filter(item => item.title === name);  

    const intensityAverage =
      average(exerciseValues.map(exercise => exercise.intensity))
    const funAverage =
      average(exerciseValues.map(exercise => exercise.fun))
    return {
      title: name,
      intensityAverage: intensityAverage,
      funAverage: funAverage
    }
  })
  const studentNames = Data.map(item => item.student);
    const uniqueStudentNames = studentNames.filter((name, index, names) => {
      // Truc om dubbele namen er uit te filteren
      return names.indexOf(name) === index;
      
    })

  const allExercisesPerStudent = uniqueStudentNames.map(name => {
    const filterExercises = Data.filter(item => item.title === name);  
    return {
      title: name,
    }
})

const clickhandler = function(event){
  setValue(event.target.value)

}
const clickStudenthandler = function(event){
  setStudent(event.target.value)
  console.log(student)
  console.log(event.target.value)
}


  return (
    <div>
      <OverviewUI 
        clickhandler={clickhandler} 
        clickStudenthandler={clickStudenthandler}
        allExercisesPerStudent={allExercisesPerStudent}  
        exerciseAverages={exerciseAverages} 
        value={value} 
        student={student}/>
    </div>
  );
};
export default Overview