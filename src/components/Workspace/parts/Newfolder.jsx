import { React, useEffect, useState } from "react";
import { Form, Text } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
// import Card from "react-bootstrap/Card";
// import { FaChevronDown } from "react-icons/fa";

function Newfolder() {
  function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log("totally custom!")
    );

   {/* <FaChevronDown size='15'/> */}
    return (
       
      <Form>
      
        <Form.Control
          type="text"
          placeholder="New Folder" defaultValue="New Folder"
          className="border-0"
          onClick={decoratedOnClick}
          style={{ background: "transparent", color: "black" }}
        />
        {children}
      </Form>
    );
  }

  return (
    <>
      <Accordion defaultActiveKey="0">
        <>
          <>
            <CustomToggle eventKey="0"></CustomToggle>
          </>
          <Accordion.Collapse eventKey="0">
            <>
              <Form.Control
                type="text"
                placeholder="New Folder" 
                className="border-0 ms-2"
                style={{ background: "transparent", color: "black" }}
              />
              <Form.Control
                type="text"
                placeholder="New Folder"
                className="border-0 ms-2"
                style={{ background: "transparent", color: "black" }}
              />
            </>
            
          </Accordion.Collapse>
        </>
      </Accordion>

      <div className="accordion" id="port-accordion">
  <div className="accordion-item">
    <h2 className="accordion-header" id="accordion-header-one">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-one" aria-expanded="false" aria-controls="collapse-one">
      NEW FOLDER
            </button>
    </h2>
      <div id="collapse-one" className="accordion-collapse collapse" aria-labelledby="accordion-header-one" data-bs-parent="#port-accordion" >
      <div className="accordion-body" data-hotspot="1">
        <div className="accordion" id="country-accordion-one">
          <div className="accordion-item" id="accordion-item-canada">
            <h2 className="accordion-header" id="accordion-header-canada">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-canada" aria-expanded="false" aria-controls="collapse-canada">Canada</button>
            </h2>
            <div id="collapse-canada" className="accordion-collapse collapse" aria-labelledby="accordion-header-canada" data-bs-parent="#country-accordion-one" >
              <div className="accordion-body">
                <p>Accordion content</p>
              </div>
            </div>
          </div>
          <div className="accordion-item" id="accordion-item-mexico">
            <h2 className="accordion-header" id="accordion-header-mexico">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-mexico" aria-expanded="false" aria-controls="collapse-mexico">Mexico</button>
            </h2>
            <div id="collapse-mexico" className="accordion-collapse collapse" aria-labelledby="accordion-header-mexico" data-bs-parent="#country-accordion-one" >
              <div className="accordion-body">
                <p>Accordion content</p>
              </div>
            </div>
          </div>
          <div className="accordion-item" id="accordion-item-united-states-of-america">
            <h2 className="accordion-header" id="accordion-header-united-states-of-america">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-united-states-of-america" aria-expanded="false" aria-controls="collapse-united-states-of-america">United States Of America</button>
            </h2>
            <div id="collapse-united-states-of-america" className="accordion-collapse collapse" aria-labelledby="accordion-header-united-states-of-america" data-bs-parent="#country-accordion-one" >
              <div className="accordion-body">
                <p>Accordion content</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

 
</div>
    </>
  );
}
export default Newfolder;
