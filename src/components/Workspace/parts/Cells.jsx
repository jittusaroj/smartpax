import { React } from "react";
import { Form } from "react-bootstrap";

function Cells(props) {
  if(props.type=="status") {
    return (
      <>
        <Form>
          <Form.Select aria-label="" className="bg-secondary">
            <option className="mt-2 bg-gray text-white"> </option>
            <option className="mt-2 bg-green text-white"> DONE</option>
            <option className="mt-2 bg-orange text-white"> WORKING ON IT</option>
            <option className="mt-2 bg-red text-white"> STUCK</option>
            <option className="mt-2 bg-black text-white"> NO GO</option>
          </Form.Select>
        </Form>
        
        {/* <div className="dropdown">
          <a
            className="btn btn-secondary w-100 "
            href="#"
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {" "}
          </a>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <li>
              <a className="dropdown-item bg-green text-white" href="#">
              DONE
              </a>
            </li>
            <li>
              <a className="dropdown-item bg-orange text-white" href="#">
              WORKING ON IT
              </a>
            </li>
            <li>
              <a className="dropdown-item bg-red text-white" href="#">
                STUCK
              </a>
            </li>
            <li>
            
            </li>
            <li>
              <a className="dropdown-item bg-black text-white" href="#">
              NO GO
              </a>
            </li>

            <hr className="w-100"/>

            <center>Edit Labels</center>
            
          </ul>
        </div> */}
      </>
    );
  } else {
    return (
      <>
        <Form.Control
          type={props.type}
          placeholder={props.type}
          id="textfield1"
          defaultValue=""
        />
        {/* <Form.Control
          type="text"
          placeholder="New Cell"
          id="textfield1"
          defaultValue="New Cell"
        /> */}
        {/* <Form.Control
          type="number"
          placeholder="12345"
          id="textfield2"
          defaultValue="12345"
        />
        <Form.Control
          type="date"
          placeholder="Date"
          id="textfield4"
          defaultValue=""
        /> */}
      </>
    );
  }
}
export default Cells;
