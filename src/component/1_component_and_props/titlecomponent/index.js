import React, { Component } from 'react';

export default class Title extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <h1>LEARN REACT with {this.props.name}</h1>
            </React.Fragment>
         );
    }
}
 