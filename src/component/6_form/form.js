import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {value : '',selected : '',form:''}
        
  }

  handleChange=(event)=> { 
    this.setState({value: event.target.value});
  }

  handleSubmit=(event)=> {
     alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
  handleChange2=(e)=> console.log("amine"+e.target.value);
  handleselected=(e)=> this.setState({selected:e.target.value});
  rendreselect= (books) =>{
    return (
    <select onChange={this.handleselected}>
         {books.map(book =><option key={book.id}>{book.title}</option>)}
    </select>)
  }
    handleform=(e)=>this.setState({form:e.target.value});
    handleform_2=(e)=>{alert("bouaziz"+ this.state.form);e.preventDefault()};


    render() { 
        return ( <React.Fragment>
            <h1 style={{textAlign:"center"}}>Part 6 </h1>
            <p>form  {this.state.value}</p>
            
            <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <div><textarea  onChange={this.handleChange2}></textarea></div>
        <div>
        {
          this.rendreselect(this.props.books)
        }
        </div>
        <h1>selected books : {this.state.selected}</h1>
        <input type="submit" value="Submit" />
        <p>form perfect</p>
      </form>
        <p>{this.state.form}</p>
        <form  onChange={this.handleform} onSubmit={this.handleform_2} >
          <input type="Text"  placeholder=" enter your name"  />
          <input type="submit" value="submit" />
        </form>

        </React.Fragment> );
    }
}
 
export default Form ;


