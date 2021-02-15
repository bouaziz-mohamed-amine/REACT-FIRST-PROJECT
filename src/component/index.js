import React, { Component } from 'react';
import ButtonC from './Buttoncomponent';
import Title from './titlecomponent';

class Componentprops extends Component {
    
    getButton = (props) => alert(props);

    render() { 
        return (  
            <React.Fragment>
                <Title/>
                <ButtonC name="Mohamed amine" btncolor="blue" textcolor="white" onButtonClick={this.getButton} />
                <ButtonC name="bouaziz"btncolor="green" textcolor="white" onButtonClick={this.getButton} />
                <ButtonC name="bouaziz" btncolor="aquamarine" textcolor="grey" icon="+" onButtonClick={this.getButton} />
            </React.Fragment>
        );
    }
}
 
export default Componentprops;

