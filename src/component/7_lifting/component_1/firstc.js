import React, { Component } from 'react';

class First extends Component {
     constructor(props) {
        super(props);
        this.state = { 

            books:this.props.books,
         }
    }

   

componentidupdate=()=>{
   const  book = this.state.books.find(({id}) => id === this.props.bookid) ; 
}

    render() { 
        const book = this.state.books.find( ({id}) => id === this.props.bookid);
        //console.log("amine"+book);
        return (  
        <div>
            {   book ? ( <li style={{listStyle:"none"}} key={book.id}>
                        <b>title :</b>{book.title}
                        <br></br>
                        <b>price : </b>{book.price}
                        <hr></hr>
                    </li>) 
                    :
             (<ul>
                {  
                    this.state.books.map(book =>(
                    <li style={{listStyle:"none"}} key={book.id}>
                        <b>title :</b>{book.title}
                        <br></br>
                        <b>price : </b>{book.price}
                        <hr></hr>
                    </li>)
                    )
                }
            </ul>)
            }
               
        </div> );
    }
}
 
export default First;