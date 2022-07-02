import React from "react";
import { useState } from "react";

function Invite() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <form>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Invite with link
          </label>
          <span className="d-flex">
            <input
              type="link"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="https://binplus.in"
            />
            <button className="btn btn-primary ms-1">Copy</button>
          </span>
        </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">
            Invite with email
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter Your  E-mail Address"
          />
          <small className="text-black">
            You can only invite people with an @smartpax.com email domain
          </small>
        </div>

        <div className="mb-3">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="option1"
            />
            <label className="form-check-label" for="inlineRadio1">
              Member
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value="option2"
            />
            <label className="form-check-label" for="inlineRadio2">
              Viewer(Readonly)
            </label>
          </div>
          <div className="form-check form-check-inline">
            <a className="invite-free"> FREE</a>
          </div>
        </div>

        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">
            Invite to specific team (optional)
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter Team Name"
          />
        </div>

        <div className="float-right">
          <button className="btn btn-primary">Invite</button>
        </div>
      </form>
      <br /> <br />
      <div className="modal-footer justify-content-center bg-gray mt-4">
        <span>
          You can also import your contacts from:
          <img src="gmail-dark-bg.svg" className="mx-2" alt="Gmail" />
          <img src="outlook.svg" className="mx-2" alt="Mail" />
        </span>
      </div>
    </>
  );
}
export default Invite;
