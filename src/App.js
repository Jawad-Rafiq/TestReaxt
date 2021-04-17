
import './App.css';
import React,{useState} from 'react' 
// import the useState from package react . States are like dynamic variables that react can read and write, in our case we cant use normal variables because react only load variables at once and check the state during the running time 

function App() {
  const [data,setData]=useState(null) 
  //data is the state name and setData is the function which is used to set its value and useState(null) means its initial value is null
  function getData(val){
    //here val is same as event so it get all the properties of that item in our case it get all the value of that input
    setData(val.target.value)
    //here set the value by using its function and get its value by using the target.value
  }
  return (
    <div className="App">
      
      <input type="text"  onChange={getData}/>
      {/*Use the onChange function to get value on every change on text field and on that call the function which set the value of state*/}
      <input type="text" value={data}/>
      {/*Give that state as value to second text that copied the first text field data*/}
    </div>
    
  );
}

export default App;
