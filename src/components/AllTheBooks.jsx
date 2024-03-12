
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import items from '../data/scifi.json'
// import { Component } from 'react'

     let AllTheBooks= function() { 
     return (
    <Container fluid>
        <Row  >
           
               {
                // allininterno metto tutto quello che devo moltiplicare
               items.map((libri)=>{



                   return (
                    
                       <Col>
                            <Card style={{ width: "14rem" }}>
                              <Card.Img variant="top" src={libri.img} style={{objectFit: 'contain' }}     />
                              <Card.Body>
                                <Card.Title>{libri.title}</Card.Title>
                                <Card.Text>
                                  <p>  {libri.category}   </p>
                                </Card.Text>
                                <ListGroup className="list-group-flush">
                                <ListGroup.Item><p> {libri.price} €  price</p></ListGroup.Item>
                              </ListGroup>
                               
                              </Card.Body>
                            </Card>
    
                       </Col>
                       )

               })
               }
            
        </Row>
    </Container>
  );
}

export default AllTheBooks;