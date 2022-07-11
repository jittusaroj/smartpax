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
    </>
  );
}
export default Newfolder;
