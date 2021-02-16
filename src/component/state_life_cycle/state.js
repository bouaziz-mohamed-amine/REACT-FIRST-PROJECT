import React, { Component } from 'react';

export  class State extends Component {
    
 constructor(){
     super();
     this.state={
         text :'state part 2 ',
         count:0,
     }
 }


 changestate=()=>this.setState({
    ...this.state,
    text:"done"});   

render(){
  return (
      
    <div>
       <p>{this.state.text}</p>
       <br/>
       <button type='submit' onClick={()=> this.changestate() } >change text</button>
    </div>
    );
    }

}
 
 
 
 