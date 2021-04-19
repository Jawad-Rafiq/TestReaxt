import React from 'react';

class Register extends React.Component{
    constructor(props){
        super(props);
        this.state ={name:""};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        this.setState({name:event.target.value})
    }
    handleSubmit(event){
        alert('A name was submitted: '+this.state.name);
        
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
        // alert("DATA IS SUBMITTED")
     
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