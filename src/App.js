
import React, { Component } from 'react';
import Componentprops from './component/component_and_props/component';
import './component/state_life_cycle/state'
import { State } from './component/state_life_cycle/state';


import Event from './component/eventhandle/event';


class APP extends Component {
  

  render() { 
    return ( 
    <React.Fragment>
        <Componentprops/>
        <hr style={{width:'80%',height:"2px",backgroundColor:"black",marginLeft:"auto",marginRight:'auto'}}></hr>
        <State/>
        <hr style={{width:'80%',height:"2px",backgroundColor:"black",marginLeft:"auto",marginRight:'auto'}}></hr>
        <Event />
    </React.Fragment> );
  }
}
 
export default APP;
