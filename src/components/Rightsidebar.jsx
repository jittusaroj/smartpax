import React from "react";
import "../Css/Main.css";
import { Form } from "react-bootstrap";

function Rightsidebar() {
  return (
    <>
      <Form>
        {["radio"].map((type) => (
          <div key={`default-${type}`} className="mb-2 mt-4">
            <Form.Check
              label="Inbox Update"
              name="group1"
              type={type}
              id={`inline-${type}-1`}
            />
            <Form.Check
              label="I was mentioned"
              name="group1"
              type={type}
              id={`inline-${type}-2`}
            />
            <Form.Check
              label="All updates of QMS"
              name="group1"
              type={type}
              id={`inline-${type}-3`}
            />
            <Form.Check
              label="Bookmarked Update"
              name="group1"
              type={type}
              id={`inline-${type}-4`}
            />
          </div>
        ))}
      </Form>
    </>
  );
}
export default Rightsidebar;
