
import React, { Component } from 'react';
import Componentprops from './component/component_and_props/component';
import './component/state_life_cycle/state'
import { State } from './component/state_life_cycle/state';


class APP extends Component {
  

  render() { 
    return ( 
    <React.Fragment>
        <Componentprops/>
        <hr style={{width:'100%',height:"2px",backgroundColor:"black"}}></hr>
        <State/>
    </React.Fragment> );
  }
}
 
export default APP;
