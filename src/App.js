
import React, { Component } from 'react';
import Componentprops from './component/1_component_and_props/component';
import './component/2_state_life_cycle/state'
import { State } from './component/2_state_life_cycle/state';
import  './component/4_conditional_rendering/conditional'

import Event from './component/3_eventhandle/event';
import Conditional from './component/4_conditional_rendering/conditional';


class APP extends Component {
  

  render() { 
    return ( 
    <React.Fragment>
        
        <Componentprops/>
        <hr style={{width:'80%',height:"2px",backgroundColor:"black",marginLeft:"auto",marginRight:'auto'}}></hr>
        <State/>
        <hr style={{width:'80%',height:"2px",backgroundColor:"black",marginLeft:"auto",marginRight:'auto'}}></hr>
        <Event />
        <hr style={{width:'80%',height:"2px",backgroundColor:"black",marginLeft:"auto",marginRight:'auto'}}></hr>
        <Conditional />
    </React.Fragment> );
  }
}
 
export default APP;
