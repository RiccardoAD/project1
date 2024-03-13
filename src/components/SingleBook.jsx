// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
// import items from '../data/scifi.json'
// import { Component } from 'react'
// import book from "../data/horror.json"





// class SingleBook extends Component {
//     render () {
//         //  const{book}= this.props

//         return (
//             <Col xs={6} md={4} lg={3} key={this.props.indice}  >
//             <Card>
//               <Card.Img variant="top" src={this.props.libro.img} style={{objectFit: 'cover', height:"50%",width:"100%" }}     />
//               <Card.Body>
//                 <Card.Title style={{overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap"}}>{this.props.libro.title}</Card.Title>
//                 <Card.Text>
//                     {this.props.libro.category} 
//                 </Card.Text>
//                 <ListGroup className="list-group-flush">
//                 <ListGroup.Item> {this.props.libro.price}  <strong> €  price</strong></ListGroup.Item>
//               </ListGroup>
//               <Button variant="primary"> compra </Button>
//               </Card.Body>
//             </Card>
           
//             </Col>
//         )
//     }
// }
// export default SingleBook;

// class SingleBook extends Component {
//     render () {
//           const{book}= this.props

//         return (
//             <Col xs={6} md={4} lg={3} key={book.asin}  >
//             <Card     >
//               <Card.Img variant="top" src={book.libro.img} style={{objectFit: 'cover', height:"50%",width:"100%" }}     />
//               <Card.Body>
//                 <Card.Title style={{overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap"}}>{book.libro.title}</Card.Title>
//                 <Card.Text>
//                   <p>  {book.libro.category}   </p>
//                 </Card.Text>
//                 <ListGroup className="list-group-flush">
//                 <ListGroup.Item><p> {book.libro.price}  <strong> €  price</strong></p></ListGroup.Item>
//               </ListGroup>
//               <Button variant="primary"> compra </Button>
//               </Card.Body>
//             </Card>
           
//             </Col>
//         )
//     }
// }
// export default SingleBook;


import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

class SingleBook extends React.Component {
  render() {
    const { book } = this.props;
    return (
      <Col xs={12} md={6} lg={3} className="my-3" key={book.asin}>
        <Card style={{ height: "100%" }}>
          <Card.Img variant="top" src={book.img} style={{ height: "15rem", objectFit: "contain" }} />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
            <Card.Text>{book.price}€</Card.Text>
            <Button variant="dark">Acquista</Button>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleBook;

