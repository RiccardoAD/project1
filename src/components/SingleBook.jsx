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


// import React from "react";
// import Card from "react-bootstrap/Card";
// import Col from "react-bootstrap/Col";
// import Button from "react-bootstrap/Button";

// class SingleBook extends React.Component {
// // parte selezione onclick card serch
// // 
//     state={
//         selected:false,
//     }
//     selectedBook=() =>{
//         this.setState((prevState)=>({selected: !prevState.selected}));
//     }
//   render() {
//     const { book } = this.props;
//     const {selected}=this.state;
//     return (
//       <Col xs={12} md={6} lg={3} className="my-3" key={book.asin}>
//         <Card style={{ height: "100%" }}>
//           <Card.Img variant="top" src={book.img} style={{ height: "15rem", objectFit: "contain" }} 
          
//         className={selected ? "selected-card": ""}
//           onClick={this.selectedBook} 
//           />
//           <Card.Body>
//             <Card.Title>{book.title}</Card.Title>
//             <Card.Text>{book.price}€</Card.Text>
//             <Button variant="dark">Acquista</Button>
//           </Card.Body>
//         </Card>
//       </Col>
//     );
//   }
// }

// export default SingleBook;

import { Component } from "react";
// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  selectedBook = () => {
    this.setState((prevState) => ({
      selected: !prevState.selected,
    }));
  };

  render() {
    const { asin, title, img, price } = this.props;
    const { selected } = this.state;

    return (
      <Col sm={6} lg={4} xl={3} key={asin}>
        <Card className="m-auto shadow" style={{ height: "fit-content", width: "300px" }}>
          <Card.Img
            variant="top"
            src={img}
            alt={title}
            style={{ objectFit: "cover", height: "400px" }}
            className={selected ? "selected-card" : ""} //se la foto è selezionata aggiungi la classe selected-car, altrimenti cancellala
            onClick={this.selectedBook}
          />
          <Card.Body className="d-flex flex-column justify-content-around">
            <Card.Title style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
              {title}
            </Card.Title>
            <Card.Text>
              <p>
                <span className="fw-bold">Price:</span> {price}$
              </p>
            </Card.Text>
            {/* <Button className="w-50" variant="success">
              Buy Now
            </Button> */}
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleBook;
