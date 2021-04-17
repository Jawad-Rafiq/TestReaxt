
import './App.css';
import React,{useState} from 'react'
import fot from './Footer'

function App() {
  const [data,setData]=useState(null)
  function getData(val){
    setData(val.target.value)
  }
  return (
    <div className="App">
      
      <input type="text"  onChange={getData}/>
      <input type="text" value={data}/>
      <fot />
    </div>
    
  );
}

export default App;
