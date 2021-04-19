import React from 'react';
//import the react packages
class Register extends React.Component{
    //Component are crated from react package
    constructor(props){
        super(props);
        this.state ={name:""};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        //In react bind is required for each function that is created in class
    }
    handleChange(event){
        this.setState({name:event.target.value})
        //update the state on changes
    }
    handleSubmit(event){
        alert('A name was submitted: '+this.state.name);
        //on click of submition that fucntion will execute API call axios can be used but i used the fetch
        let data=this.state;
    fetch("http://localhost:4000/add",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        "Accept":"application/json"
      },
      body:JSON.stringify(data)
    }).then((result)=>{
     
        console.log("RESP",result)
     
    }).catch(err => { console.log("Error",err)})
    
        event.preventDefault();
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" id="name" value={this.state.value} onChange={this.handleChange}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}

export default Register