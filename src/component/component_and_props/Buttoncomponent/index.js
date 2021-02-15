import React, { Component } from 'react';
import "./style.css"


class ButtonC extends Component {
    state = {  }
    render() { 
        return ( 
        <React.Fragment>
            <button type="submit"className="btn" 
                style={{backgroundColor :this.props.btncolor,color:this.props.textcolor,}}
                onClick={()=>this.props.onButtonClick(this.props.btncolor)} >
            {!!this.props.icon&&<span>{this.props.icon}</span>}
            {this.props.name}</button>
        </React.Fragment>
         );
    }
}
 
export default ButtonC;