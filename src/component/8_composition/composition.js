import React, { Component } from 'react';
import ComOne from './compoOne/com_1';
import ComTwo from './compoTwo/com_2';

class Composition extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>

            <h1 style={{textAlign:"center"}}>PART 8 </h1>
            <ComOne/>
            <ComTwo/>

        </div> );
    }
}
 
export default Composition;