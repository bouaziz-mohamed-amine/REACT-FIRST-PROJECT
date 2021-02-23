import React, { Component } from 'react';

class Seconde extends Component {
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
            ]
         }
    }
  
    rendreoption= (books) =>(
            books.map(book =><option key={book.id} value={book.id}>{book.title}</option>)
    );

    handleselet= ( e )=>console.log("welcom"+e.target.value )  ;
    
   /**
    * handlechage=(e)=>this.props.onbookchange(e.target.value); 
    */
    

    render() { 
        return ( 
        <div>
        <select onChange={ (e)=> this.props.onbookchange(e.target.value) }>
        {
            this.rendreoption(this.state.books)
        }
        </select>
        </div> );
    }
}
 
export default Seconde;