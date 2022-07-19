import { React, useEffect, useState } from "react";
import { Form, Text, Button } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import Modal from 'react-bootstrap/Modal';

function Textmodal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


  return (
    <>
 
        <Modal.Header closeButton>
          {/* <Modal.Title closeButton></Modal.Title> */}
        </Modal.Header>
        <Modal.Body> 
            <Form>
            <Form.Control defaultValue={1}></Form.Control>
            <br/>
            <Form.Control  as="textarea" rows={8} ></Form.Control>
            </Form>
        
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      {/* </Modal> */}

    </>
  );
}
export default Textmodal;
