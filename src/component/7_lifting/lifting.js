import React, { Component } from 'react';
import First from './component_1/firstc';
import Seconde from './component_2/second';

class Lifting extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            books:[
            {
                id:"1",
                title:"the king",
                price: 200,
            },
            {
                id:"2",
                title:"the legende",
                price: 2000,
            },
            {
                id:"3",
                title:"the vmaker",
                price: 100,
            }
        ] ,

        bookid: ''
    }
}
 getTargetbook=(book)=>this.setState({bookid:book,});

  getbook=() =>this.state.books.find( ({id}) => id === this.state.bookid ); 

    render() { 
        return ( 
        <div>
            <h1 style={{textAlign:"center"}}>PART 7 </h1>
            
            <First books={this.state.books}  bookid={this.state.bookid}  />
            
            <Seconde  onbookchange={this.getTargetbook} />
             
            <h1>YOUR BOOK IS  : { this.state.bookid && this.getbook().title}</h1>   
        </div> );
    }
}
 
export default Lifting;