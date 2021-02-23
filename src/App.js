
import React, { Component } from 'react';
import Componentprops from './component/1_component_and_props/component';
import './component/2_state_life_cycle/state'
import { State } from './component/2_state_life_cycle/state';
import  './component/4_conditional_rendering/conditional'

import Event from './component/3_eventhandle/event';
import Conditional from './component/4_conditional_rendering/conditional';
import './component/5_lists_keys/list_event.js'
import Key_List from './component/5_lists_keys/list_event.js';
import Form from './component/6_form/form';
import Lifting from './component/7_lifting/lifting';


class APP extends Component {

  constructor(props) {
    super(props);
    this.state = { 
        books : [
            {id : 1,  title:'the prince',author:'najem',price:20},
            {id : 2,title:'the king',author:'amine',price:50},
            {id : 3, title:'learn react',author:'mark',price:1000,}
        ]
     }
}
  
  render() { 
    return ( 
    <React.Fragment>
        
        <Componentprops/>
        <hr style={{width:'80%',height:"2px",backgroundColor:"black",marginLeft:"auto",marginRight:'auto'}}></hr>
        <State/>
        <hr style={{width:'80%',height:"2px",backgroundColor:"black",marginLeft:"auto",marginRight:'auto'}}></hr>
        <Event />
        <hr style={{width:'80%',height:"2px",backgroundColor:"black",marginLeft:"auto",marginRight:'auto'}}></hr>
        <Conditional text="visivle" />
        <hr style={{width:'80%',height:"2px",backgroundColor:"black",marginLeft:"auto",marginRight:'auto'}}></hr>
        <Key_List/>   
        <hr style={{width:'80%',height:"2px",backgroundColor:"black",marginLeft:"auto",marginRight:'auto'}}></hr>
        <Form books={this.state.books}  />
        <hr style={{width:'80%',height:"2px",backgroundColor:"black",marginLeft:"auto",marginRight:'auto'}}></hr>
        <Lifting/>
    </React.Fragment> );
  }
}
 
export default APP;
