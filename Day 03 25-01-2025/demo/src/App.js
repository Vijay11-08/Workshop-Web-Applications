import './App.css';
import React from 'react';
import PersonDefaultDemo from './components/defaultprops';
import Person from './components/person_functionComponents';


export default function App() {
  const personInfo = {firstName: 'John', lastName: ' Smith'};
  const personJobInfo = {designation : 'sr. front end devloper ' , experience : '15 years experience'};

   return(
    // <>
    //     <PersonDefaultInfo/>
    //     <PersonDefaultInfo name="Vijay" gender="Male" designation="Founder">
    //     <PersonDefaultInfo name="Jay" gender="Male" designation="Co-Founder"/>
    //     <PersonDefaultInfo name="Keval" gender="Male" designation="Co-Founder"/>

    //   </>
    <Person personData={personInfo} personJobData={personJobInfo}/> 

   );

}
