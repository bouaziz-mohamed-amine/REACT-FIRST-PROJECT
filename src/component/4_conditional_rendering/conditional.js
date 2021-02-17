import React, { Component } from 'react';

class Conditional extends Component {
    
constructor(props) {
    super(props);
    this.state = { isvisible : false }
    }

HandleClick = ()=>this.setState({isvisible:!this.state.isvisible})

 render() { 
    return ( <React.Fragment>
        <h1   style={{textAlign:'center'}}>Part 4 </h1>
        {this.state.isvisible? <img  src='../logo192.png' alt="amine" style={{ marginLeft:"auto",display:'block',marginRight:'auto'}} /> : ''}
        <div>
        <button style={{padding:'10px',border:"none",borderRadius:"10px",backgroundColor:"red",color:"white",}}  onClick={this.HandleClick}  >visible {this.state.isvisible? 'true': 'false'}</button> 
        </div>      

    </React.Fragment> );
    }
}
 
export default Conditional;
//padding:'10px',borderradius: '10px',border: 'none',backgroundcolor: 'red',color: 'white','fontsize': '15px'