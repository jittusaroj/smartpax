import { React, useEffect, useState } from "react";
import { Form, Text } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Card from "react-bootstrap/Card";
import { FaChevronDown } from "react-icons/fa";

function Newfolder() {
  function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log("totally custom!")
    );

    return (
      //   <button
      //     type="button"
      //     style={{ backgroundColor: 'pink' }}
      //     onClick={decoratedOnClick}
      //   >
      //     {children}
      //   </button>

      <Form>
        {/* <FaChevronDown size='15'/> */}
        <Form.Control
          type="text"
          placeholder="New Folder"
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

      {/* <div className="team-font mt-2">
        <Dropdown className="d-inline mx-2">
          <Dropdown.Toggle
            id="dropdown-autoclose-true"
            style={{
              backgroundColor: "transparent",
              border: "0px solid",
              color: "black",
            }}
          >
            <Form.Control type="text" placeholder="New Folder" className="border-0" style={{background:'transparent', color:'black',}} />
          </Dropdown.Toggle>

          <Dropdown.Menu>
          <Dropdown.Item href="#">New Folder</Dropdown.Item>
            <Dropdown.Item href="#">New Board</Dropdown.Item>
   
          </Dropdown.Menu>
        </Dropdown>
      </div> */}
    </>
  );
}
export default Newfolder;
