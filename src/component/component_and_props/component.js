import React, { Component } from 'react';

import "./titlecomponent/index"
import Title from './titlecomponent/index';
import './Buttoncomponent/index';
import ButtonC from './Buttoncomponent/index';

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

/**
 * <React.Fragment>
                <Title/>
                
 */