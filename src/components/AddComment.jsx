
// "Authorization": 


// "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWYyZjQyOTcxYWZhZjAwMTkxNTY2YjEiLCJpYXQiOjE3MTA0MjEwMzMsImV4cCI6MTcxMTYzMDYzM30.mdhW34DJupGxsPXHc8EhRAELmWa4hYJWgXfGjzvtVt0"



import { Component } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
const url = "https://striveschool-api.herokuapp.com/api/comments/";

class AddComment extends Component {
  initialRecensioni = {
    comment: "",
    rate: "",
    elementId: this.props.asin,
  };

  state = {
    recensione: this.initialRecensioni,
  };

  putFetch = (e) => {
    e.preventDefault();

    fetch(url, {
      method: "POST",
      body: JSON.stringify(this.state.recensione),
      headers: {
        Authorization:
        
 "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWYyZjQyOTcxYWZhZjAwMTkxNTY2YjEiLCJpYXQiOjE3MTA0MjEwMzMsImV4cCI6MTcxMTYzMDYzM30.mdhW34DJupGxsPXHc8EhRAELmWa4hYJWgXfGjzvtVt0",
 "content-type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          window.alert("Recensione inserita con successo");
          this.setState({
            recensione: this.initialRecensioni,
          });
        } else {
          window.alert("Errore");
          throw new Error("Errore rilevato");
        }
      })

      .catch((error) => {
        console.log("Errore", error);
      });
  };

  render() {
    return (
      <>
        <h3 className="text-center">Inserisci Commento:</h3>
        <Form onSubmit={this.putFetch}>
          <Form.Group className="m-2 text-center">
            <Form.Label>Inserisci Commento</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              required
              onChange={(e) => {
                this.setState({
                  recensione: {
                    ...this.state.recensione,
                    comment: e.target.value,
                  },
                });
              }}
              value={this.state.recensione.comment}
            />
          </Form.Group>

          <Form.Group className="m-2 text-center">
            <Form.Label>Vota!</Form.Label>
            <Form.Select
              aria-label="Default select example"
              onChange={(e) => {
                this.setState({
                  recensione: {
                    ...this.state.recensione,
                    rate: e.target.value,
                  },
                });
              }}
              value={this.state.recensione.rate}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Select>
          </Form.Group>
          <Button variant="success" type="submit">
            Invia
          </Button>
        </Form>
      </>
    );
  }
}

export default AddComment;