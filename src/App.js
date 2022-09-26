import React, { Component } from 'react'
import img from "./hm.jpg"
export default class App extends Component {
  state = {
   person: {name: "hamida",
    bio:" ",
    imgsrc:img,
    profession:"ingenieur informatique"},
    show:"false",
    mountingTime : null,
    timeSnceMounting:null

  };
  handleClick=(e)=>{
    e.preventDefault();
    this.setState({show:!this.state.show})

    
  }
  componentDidMount() {
    this.setState({mountingTime : new Date()})

   setInterval(() => {
    const date = new Date();
    this.setState((prevstate) => ({
      timeSnceMounting : Math.floor((date- prevstate.mountingTime)/1000 )
    }));
    
   }, 1000); 
  }
 
  render() {
    return (
      <div>

        <button onClick={this.handleClick} >Show</button>
        
 
       {this.state.show? 

       <div className='container'>
          <div  className='Name'>
            <h1>hello {this.state.person.name}</h1>
          </div>
          <div  className='img'>
           <img style= {{width:"150px", height:"150px" }} src ={this.state.person.imgsrc}></img> 
          </div>
          <div  className='bio'>
            {this.state.person.bio}
          </div>
        <div  className='profession'>
          {this.state.person.profession}
          </div> 
        <div  className='mounting'>
        <h3>Time since mounting: {this.state.timeSnceMounting}</h3></div> 
        </div> : null}
      </div>
       )
  }
}



