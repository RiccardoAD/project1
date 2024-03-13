// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';
 import Container from 'react-bootstrap/Container'
 import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
// import items from '../data/scifi.json'
 import SingleBook from './SingleBook';
// import { Component } from 'react'
import  Form  from 'react-bootstrap/Form';
import Horror from "../data/horror.json"
import React from "react";


     class BookList extends  React.Component{
        state={
            searchName:"",
        } 
        hanndleSearch = (event) => {
            this.setState({searchName: event.target.value })
        }
        render(){
        const {searchName} = this.state;
        const filteredBooks= Horror.filter((book)=>book.title.toLowerCase().includes(searchName.toLowerCase()));

     return (  
     <Container fluid>
        <Form.Group className="py-3">
          <Form.Label className="ps-1 fs-4">Search Your Book!</Form.Label>
          <Form.Control
            type="text"
            placeholder="Search books..."
            value={searchName}
            onChange={this.handleSearch}
            className=" w-50 border-3 border-black"
          />
        </Form.Group>
        <Row className="gy-3">
          {filteredBooks.map((book) => (
            <SingleBook
              key={book.asin}
              asin={book.asin}
              title={book.title}
              img={book.img}
              price={book.price}
              category={book.category}
            />
          ))}
        </Row>
      </Container>
    );
  }
}

export default BookList;

  


        
    






//      let BookList= function (props) { 
        
//         const books= props.books;

//      return (
//     // <Container fluid>
//     //     <Row className='gy-3' >
           
//     //            {
//     //             // allininterno metto tutto quello che devo moltiplicare
//     //            this.props.listalibri.map((book,index)=>{



//     //                return (
//     //                 <SingleBook libro={book} indice={index}></SingleBook>
                     
//     //                    )

//     //            })
            
//     //            }
//     //     </Row>
//     // </Container>


        
//           <Container fluid>
//             <Row>
//                 { books.map(function(book,index){
//                return <SingleBook key={index} book={book}/>

//                 })}
//             </Row>
//           </Container>
          
//      )


//      };


// export default BookList;