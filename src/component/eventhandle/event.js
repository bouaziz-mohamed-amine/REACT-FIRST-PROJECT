import React, { Component } from 'react';

class Event extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title1:"event part 3 ",
            title2:"Part 3 done",
            isToggleOn: true,
            text: '',
            contain:'',

        }
    }

    handleclick=()=>this.setState({title:"change done",isToggleOn : !this.state.isToggleOn })
    handlechange=(event)=>{this.setState({text:event.target.value})}
    handleclick2=()=>{this.setState({contain : this.state.contain +'change done'} )}

   

    render() { 
        return ( <React.Fragment>
                <h1>{this.state.isToggleOn? this.state.title1:this.state.title2}</h1>   
                <button  onClick={this.handleclick} >change {this.state.isToggleOn? 'on' : "off"}</button>
                {this.state.isToggleOn? "" :<h1>{this.state.title2}</h1> }
                <div>
                <input type="text"  placeholder="please your name"  onChange={this.handlechange}></input>
                <div>
                <button type="submit" onClick={this.handleclick2}>handleinput</button>
                </div>
                <p>{this.state.text}{this.state.contain}</p>
                </div>
        </React.Fragment> );
    }
}
 
export default Event;