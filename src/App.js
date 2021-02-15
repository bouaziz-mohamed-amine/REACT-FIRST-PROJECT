
import React, { Component } from 'react';
import Componentprops from './component';
import ButtonC from './component/Buttoncomponent';
import Title from './component/titlecomponent';

class APP extends Component {
  state = {  amine: "bouaziz"}
  
  
  render() { 
    return ( <React.Fragment>
      
      <Componentprops/>
    
    </React.Fragment> );
  }
}
 
export default APP;
