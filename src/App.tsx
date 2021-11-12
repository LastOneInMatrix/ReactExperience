import React, {useEffect, useState} from 'react';
import memoize from "lodash.memoize";
import './App.css';
import PeopleUseEffect from "./Components/PeopleUseEffect";



function App() {

  return (
    <div className="App">
       <PeopleUseEffect/>
    </div>
  );
}

export default App;
