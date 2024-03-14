// import { useState, useEffect } from "react";
// import Row from "react-bootstrap/Row";
// import Container from "react-bootstrap/Container";
// import { Col, Placeholder } from "react-bootstrap";
// import AddComment from "./AddComment";
// import CommentsList from "./CommentsList";

// const CommentArea = ({ bookId }) => {
//   const [comments, setComments] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     setLoading(true);
//     fetchComments();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [bookId]);

//   const fetchComments = () => {
//     const myUrl = "https://striveschool-api.herokuapp.com/api/comments/";
//     console.log(bookId);
//     fetch(myUrl + "/" + bookId, {
//       headers: {
//         Authorization:

//      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWYyZjQyOTcxYWZhZjAwMTkxNTY2YjEiLCJpYXQiOjE3MTA0MjEwMzMsImV4cCI6MTcxMTYzMDYzM30.mdhW34DJupGxsPXHc8EhRAELmWa4hYJWgXfGjzvtVt0"
    
//     },
//     })
//       .then((response) => {
//         if (response.ok) {
//           setLoading(false);
//           return response.json();
//         } else {
//           throw new Error("Failed to fetch comments");
//         }
//       })
//       .then((data) => {
//         setComments(data);
//         console.log(data);
//       })
//       .catch((error) => {
//         console.error("Error fetching comments:", error);
//       });
//   };

//   const handleCommentAdded = () => {
//     fetchComments();
//   };

//   return (
//     <Container>
//       <Row>
//         <Col>
//           <h5 className="text-end">Reviews</h5>
//           {loading ? (
//             <Row className="d-flex flex-column gy-4">
//               <Col>
//                 <Placeholder animation="glow">
//                   <Placeholder xs={5} /> <Placeholder xs={4} />{" "}
//                   <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
//                   <Placeholder xs={8} />
//                 </Placeholder>
//               </Col>
//               <Col>
//                 <Placeholder animation="glow">
//                   <Placeholder xs={7} />
//                   <Placeholder xs={4} /> <Placeholder xs={6} />
//                   <Placeholder xs={8} />
//                   <Placeholder xs={8} />
//                 </Placeholder>
//               </Col>
//               <Col>
//                 <Placeholder animation="glow">
//                   <Placeholder xs={4} /> <Placeholder xs={4} />
//                   <Placeholder xs={5} />
//                   <Placeholder xs={4} />
//                 </Placeholder>
//               </Col>
//             </Row>
//           ) : comments.length === 0 ? (
//             <Col>
//               <p>No reviews about this book</p>
//               <AddComment bookId={bookId} onCommentAdded={handleCommentAdded} />
//             </Col>
//           ) : (
//             <>
//               <Container>
//                 <Row className="listComments  border-bottom border-light-subtle">
//                   <Col>
//                     <CommentsList
//                       comments={comments}
//                       onCommentAdded={handleCommentAdded}
//                     />
//                   </Col>
//                 </Row>
//                 <Col>
//                   <AddComment
//                     bookId={bookId}
//                     onCommentAdded={handleCommentAdded}
//                   />
//                 </Col>
//               </Container>
//             </>
//           )}
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default CommentArea;
// import { Component } from "react";

// import ListGroup from "react-bootstrap/ListGroup";

//  class CommentArea extends Component {
//     state = {
//         comments : []

//     }
//     fetchComments = () => {
//          fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.props.asin}`, {
//               headers: {
//                 Authorization:
        
//              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWYyZjQyOTcxYWZhZjAwMTkxNTY2YjEiLCJpYXQiOjE3MTA0MjEwMzMsImV4cCI6MTcxMTYzMDYzM30.mdhW34DJupGxsPXHc8EhRAELmWa4hYJWgXfGjzvtVt0"
            
//             },
//             })
//               .then((response) => {
//                 if (response.ok) {
                  
//                   return response.json();
//                 } else {
//                   throw new Error("Failed to fetch comments");
//                 }
//               })
//               .then((comments) => {
//                 this.setState({comments});
//                 console.log("comments",comments);

            
                
//               })
//               .catch((error) => {
//                 console.error("Error fetching comments:", error);
//               });
//           };

// componentDidMount(){
//     this.fetchComments()
// }
// render(){
//     return (
//         <div>
//             <ListGroup>
//                 <h3>comments</h3>
//                 {
//                     this.state.comments.map((comment,index)=>(
//                         <ListGroup.Item  key={index}>
//                             <p>{comment.comment}</p>
//                             <p>user: {comment.author}</p>
//                             <p> <strong>vote</strong>{comment.rate}</p>
//                         </ListGroup.Item>
//                     ))
//                 }
//             </ListGroup>
//         </div>



//     )



//  }

//  }
 
// export default CommentArea;




import { Component } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";

const url = "https://striveschool-api.herokuapp.com/api/comments/";

class CommentArea extends Component {
  state = {
    arrayOfComments: [],
  };

  FetchComments = () => {
    fetch(url + this.props.asin, {
      headers: {
        Authorization:
       
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWYyZjQyOTcxYWZhZjAwMTkxNTY2YjEiLCJpYXQiOjE3MTA0MjEwMzMsImV4cCI6MTcxMTYzMDYzM30.mdhW34DJupGxsPXHc8EhRAELmWa4hYJWgXfGjzvtVt0"
            
       
        
    },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore rilevato");
        }
      })
      .then((fetchApiInfo) => {
        this.setState({
          arrayOfComments: fetchApiInfo,
        });
      })
      .catch((error) => {
        console.log("Errore", error);
      });
  };

  componentDidMount() {
    this.FetchComments();
  }
  render() {
    return (
      <div>
        <CommentsList arrayOfComments={this.state.arrayOfComments} />
        <AddComment asin={this.props.asin} />
      </div>
    );
  }
}

export default CommentArea;

