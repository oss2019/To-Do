import React from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const Dialog = ({ show, setShow, todos, setTodos, close }) => {

    const [title, setTitle] = React.useState("");
    const [subtitle, setSubtitle] = React.useState("");
    const [desc, setDesc] = React.useState("");

    const [error, setError] = React.useState(false);
  
    const handleClose = () => setShow(false);

    const handleSubmit = () => {
      if(title !== "") {
        setError(false);
        const todo = {
          title: title,
          subtitle: subtitle,
          body: desc
        }
        setTodos([ ...todos, todo ]);
        close(false);
      } else {
        setError(true);
      }
    }
  
    return (
      <>  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Add Todo</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
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
              <Button variant="primary" onClick={handleSubmit}>Done</Button>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    );
  }
  
export default Dialog;