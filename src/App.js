
import './App.css';
import React,{useState} from 'react'

function App() {
  const [data,setData]=useState(null)
  function getData(val){
    setData(val.target.value)
  }
  return (
    <div className="App">
      <input type="text" id="first" name="firstText" onChange={getData}/>
      <input type="text" id="copy" name="CopyText" value={data}/>
      
    </div>
  );
}

export default App;
