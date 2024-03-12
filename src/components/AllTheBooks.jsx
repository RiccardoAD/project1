import Button from 'react-bootstrap/Button';
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
        <Row className='gy-3' >
           
               {
                // allininterno metto tutto quello che devo moltiplicare
               items.map((libri,index)=>{



                   return (
                    
                       <Col xs={6} md={4} lg={3} key={libri.asin}  >
                            <Card     >
                              <Card.Img variant="top" src={libri.img} style={{objectFit: 'cover', height:"50%",width:"100%" }}     />
                              <Card.Body>
                                <Card.Title style={{overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap"}}>{libri.title}</Card.Title>
                                <Card.Text>
                                  <p>  {libri.category}   </p>
                                </Card.Text>
                                <ListGroup className="list-group-flush">
                                <ListGroup.Item><p> {libri.price}  <strong> €  price</strong></p></ListGroup.Item>
                              </ListGroup>
                              <Button variant="primary"> compra </Button>
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