import React, { Component } from 'react';

class Key_List extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            books : [{title:'the prince',author:'najem',price:20},{title:'the king',author:'amine',price:50},{title:'learn react',author:'mark',price:1000,}]
         }
    }

   rendrelist = (books) =>{
       return  books.map(book =>(
       <li>
            <b>title : </b>  {book.title}
                            <br/>    
                            <b>author : </b>{book.title}
                            <br/>
                            <b>price : </b>{book.price }
                            <hr></hr>            
       </li>))
   }



    render() {
        const title="Part 5";
                
        
        return ( 
            <div>
               <h1 style={{textAlign:"center"}}>{title} </h1>
                
                {
                this.state.books.map(book =>
                    <li>{book.title}</li>
                )
                }
                <br/>
               
                {
                    this.state.books.map(book =>(
                        <li>
                            <b>title : </b>  {book.title}
                            <br/>    
                            <b>author : </b>{book.title}
                            <br/>
                            <b>price : </b>{book.price }
                            <hr></hr>
                        </li>
                    ))
                }
                    <br/>
                {
                        this.rendrelist(this.state.books)
                }
            </div>
         );
    }
}
 
export default Key_List;