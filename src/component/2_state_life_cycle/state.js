import React, { Component } from 'react';

export  class State extends Component {
    
 constructor(){
     super();
     this.state={
         text :'state part 2 ',
         count:0,
         visible: false ,
     }
 }


 changestate=()=>this.setState({
    ...this.state,
    text:"done",
    visible:true,
    count :this.state.count+1,
});   

render(){
  return (
    <div>
       <p>{this.state.text}</p>
       <p>{this.state.visible? this.state.count: ''}</p>
       <br/>
       <button type='submit' onClick={()=> this.changestate() } >change text</button>
    </div>
    );
    }

}
 
 
 
 