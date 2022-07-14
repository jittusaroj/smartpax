import { React,  } from "react";
import { Form } from "react-bootstrap";

function Cells() {
   
      
       return (
    <>
    

    <Form.Control type="text" placeholder="New Cell" id="textfield1" defaultValue="New Cell" />
    <Form.Control type="number" placeholder="12345" id="textfield2" defaultValue="12345" />
    <Form.Control type="text" placeholder="Text" id="textfield3" defaultValue="Status" />
    <Form.Control type="Date" placeholder="Date" id="textfield4" defaultValue="" />
             
          

          
   

    </>
       );
    }
    export default Cells;