// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';
 import Container from 'react-bootstrap/Container'
 import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
// import items from '../data/scifi.json'
 import SingleBook from './SingleBook';
// import { Component } from 'react'

import React from "react";


     let BookList= function (props) { 
        
        const books= props.books;

     return (
    // <Container fluid>
    //     <Row className='gy-3' >
           
    //            {
    //             // allininterno metto tutto quello che devo moltiplicare
    //            this.props.listalibri.map((book,index)=>{



    //                return (
    //                 <SingleBook libro={book} indice={index}></SingleBook>
                     
    //                    )

    //            })
            
    //            }
    //     </Row>
    // </Container>


        
          <Container fluid>
            <Row>
                { books.map(function(book,index){
               return <SingleBook key={index} book={book}/>

                })}
            </Row>
          </Container>
          
     )


     };


export default BookList;