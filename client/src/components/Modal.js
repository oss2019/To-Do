import React from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const Dialog = ({ show, setShow, notes, setnotes, close }) => {

    const [title, setTitle] = React.useState("");
    const [subtitle, setSubtitle] = React.useState("");
    const [desc, setDesc] = React.useState("");

    const [error, setError] = React.useState(false);
  
    const handleClose = () => setShow(false);

   

    const handleSubmit = (event) => {
      const note = {
        title: title,
        subtitle: subtitle,
        body: desc,
      }
      event.preventDefault();
      if(title !== "") {
        setError(false);
        close(false);
      } else {
        setError(true);
      }
      try {
        addNote(note);
      } catch (error) {
        console.log(error)
      }
    }

    const addNote = async (note) => {
      const response = await fetch("http://localhost:3001/", {
        method: "POST",
        body: JSON.stringify(note),
        headers: {
          "Content-Type": "application/json",
        },
        Credentials: "include",
      });
      const data = await response.json();
      setnotes([ ...notes, {title : data.title, subtitle : data.subtitle, body : data.body, _id  : data._id} ]);
      console.log(data);

    };
  
    return (
      <>  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Add note</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Enter title" onChange={(e) => setTitle(e.target.value)} />
                {error && (
                  <Form.Text className="text-muted red">
                    Please enter a title
                  </Form.Text>
                )}
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Subtitle(optional)</Form.Label>
                <Form.Control type="text" placeholder="Enter subtitle" onChange={(e) => setSubtitle(e.target.value)} />
              </Form.Group>
              
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Description(optional)</Form.Label>
                <Form.Control type="text" placeholder="Enter description" onChange={(e) => setDesc(e.target.value)} />
              </Form.Group>
              <Button type='submit' variant="primary">Done</Button>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    );
  }
  
export default Dialog;