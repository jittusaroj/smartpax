import { React, useEffect, useState } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";

function Personaltab(props) {
  var url = process.env.REACT_APP_LOCAL_API;
  const [title, setTitle] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [skype, setSkype] = useState("");
  const [location, setLocation] = useState("");
  const [birthday, setBirthday] = useState("");
  const [worka, setWorka] = useState("");
  const [timezone, setTimezone] = useState("");

  useEffect(() => {
    setTitle(props.data.title);
    setPhone(props.data.phone);
    setEmail(props.data.email);
    setSkype(props.data.skype);
    setLocation(props.data.location);
    setBirthday(props.data.dob);
    setWorka(props.data.work_anniversary);
    setTimezone(props.data.timezone);
  }, [
    props.data.title,
    props.data.phone,
    props.data.email,
    props.data.skype,
    props.data.location,
    props.data.dob,
    props.data.work_anniversary,
    props.data.timezone,
  ]);

  const updateProfile = (e) => {
    axios
      .put(
        url + "/users/" + props.data.id,
        {
          title: title,
          phone: phone,
          email: email,
          skype: skype,
          location: location,
          dob: birthday,
          work_anniversary: worka,
          timezone: timezone,
        },
        {
          "Content-Type": "application/json",
        }
      )
      .then((user) => {
        console.log(user);
        window.location.reload();

        // return title;
        //  notify('Successfully updated', 'success')
      });
  };

  return (
    <>
      <section
        className="tab-pane fade show active"
        id="personal_info"
        role="tabpanel"
        aria-labelledby="home-tab"
      >
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <h5>Overview </h5>
            <div className="d-flex mb-2">
              <div className="icon-section">
                <i className="fa fa-user"></i>
              </div>
              <div className="input-field">
                <a data-bs-toggle="modal" data-bs-target="#add_title">
                  <span className="fw-bolder">Title:</span>{" "}
                  <span id="title">
                    {props.data.title ? props.data.title : "N/A"}{" "}
                  </span>{" "}
                </a>
                <i
                  className="bx bx-copy-alt ms-5 copy text-blue fs-5"
                  data-clipboard-target="#title"
                ></i>
              </div>
            </div>
            <div className="d-flex mb-2">
              <div className="icon-section">
                <i className="fa fa-envelope"></i>
              </div>
              <div className="input-field">
                <a data-bs-toggle="modal" data-bs-target="#add_email">
                  <span className="fw-bolder">Email:</span>
                  {props.data.email ? props.data.email : "N/A"}
                </a>
                <i
                  className="bx bx-copy-alt ms-5 copy text-blue fs-5"
                  data-clipboard-target="#"
                ></i>
              </div>
            </div>
            <div className="d-flex mb-2">
              <div className="icon-section">
                <i className="fa fa-phone"></i>
              </div>
              <div className="input-field">
                <a data-bs-toggle="modal" data-bs-target="#add_mobile">
                  <span className="fw-bolder">Mobile number:</span>{" "}
                  {props.data.phone ? props.data.phone : "N/A"}{" "}
                </a>
              </div>
            </div>
            <div className="d-flex mb-2">
              <div className="icon-section">
                <i className="fa fa-skype"></i>
              </div>
              <div className="input-field">
                <a data-bs-toggle="modal" data-bs-target="#add_skype">
                  <span className="fw-bolder">Skype: </span>
                  {props.data.skype ? props.data.skype : "N/A"}{" "}
                </a>
              </div>
            </div>
            <div className="d-flex mb-2">
              <div className="icon-section">
                <i className="fa fa-map"></i>
              </div>
              <div className="input-field">
                <a data-bs-toggle="modal" data-bs-target="#add_location">
                  <span className="fw-bolder">Location: </span>
                  {props.data.location ? props.data.location : "N/A"}{" "}
                </a>
              </div>
            </div>
            <div className="d-flex mb-2">
              <div className="icon-section">
                <i className="fa fa-clock-o"></i>
              </div>
              <div className="input-field">
                <a data-bs-toggle="modal" data-bs-target="#add_timezone">
                  <span className="fw-bolder">Timezone: </span>{" "}
                  {props.data.timezone ? props.data.timezone : "N/A"}
                </a>
                <i
                  className="bx bx-copy-alt ms-5 copy text-blue fs-5"
                  data-clipboard-target="#"
                ></i>
              </div>
            </div>
            <div className="d-flex mb-2">
              <div className="icon-section">
                <i className="fa fa-gift"></i>
              </div>
              <div className="input-field">
                <a data-bs-toggle="modal" data-bs-target="#add_birthday">
                  <span className="fw-bolder">Birthday: </span>{" "}
                  {props.data.dob ? props.data.dob : "N/A"}
                </a>
              </div>
            </div>
            <div className="d-flex mb-2">
              <div className="icon-section">
                <i className="fa fa-calendar"></i>
              </div>
              <div className="input-field">
                <a data-bs-toggle="modal" data-bs-target="#add_workanniversary">
                  <span className="fw-bolder">Work Anniversary: </span>{" "}
                  {props.data.work_anniversary
                    ? props.data.work_anniversary
                    : "N/A"}
                </a>
              </div>
            </div>
            <hr />
            <p>
              Nothing to show here : Joining teams helps you keep track on
              projects you're interested in, and lets people know what you're
              about. Explore all teams
            </p>
          </div>
          <div className="col-md-3"></div>
        </div>
      </section>

      {/* <!--modals-->
           <!--info modal--> */}
      <div
        className="modal fade"
        id="add_title"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog profile-modal">
          <div className="modal-content">
            <div className="modal-header border-top-blue border-bottom-0">
              <h5 className="modal-title" id="exampleModalLabel">
                {" "}
                Title
              </h5>
              <button
                type="button"
                className="btn-close custum-close-btn"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    defaultValue={title}
                    placeholder="Text"
                  />
                </Form.Group>

                <Button
                  variant="primary float-right"
                  type="button"
                  onClick={(e) => updateProfile()}
                >
                  Submit
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
      {/* <!--info_modal-->
           <!--email modal--> */}
      <div
        className="modal fade"
        id="add_email"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog profile-modal">
          <div className="modal-content">
            <div className="modal-header border-top-blue border-bottom-0">
              <h5 className="modal-title" id="exampleModalLabel">
                {" "}
                Email
              </h5>
              <button
                type="button"
                className="btn-close custum-close-btn"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <Form>
                <Form.Group className="mb-2 row" controlId="formBasicEmail">
                  <Form.Label className="col-sm-5">Current Email</Form.Label>
                  <Form.Text className="col-sm-7  fs-5 color-black">
                    {props.data.email}
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-2 row" controlId="formBasicEmail">
                  <Form.Label className="col-sm-5">New Email</Form.Label>
                  <Form.Text className="col-sm-7">
                    <Form.Control
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                      defaultValue={email}
                      placeholder="Email"
                    />
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-2 row" controlId="formBasicEmail">
                  <Form.Label className="col-sm-5">Password</Form.Label>
                  <Form.Text className="col-sm-7">
                    <Form.Control
                      type="password"
                      placeholder="Enter Password"
                    />
                  </Form.Text>
                </Form.Group>

                <Button
                  variant="primary float-right"
                  type="button"
                  onClick={(e) => updateProfile()}
                >
                  Change Email Address
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
      {/* <!--email-->
           <!--mobile modal--> */}
      <div
        className="modal fade"
        id="add_mobile"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog profile-modal">
          <div className="modal-content">
            <div className="modal-header border-top-blue border-bottom-0">
              <h5 className="modal-title" id="exampleModalLabel">
                {" "}
                Email
              </h5>
              <button
                type="button"
                className="btn-close custum-close-btn"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <Form>
                <Form.Group className="mb-2 row" controlId="formBasicEmail">
                  <Form.Label className="col-sm-5">Mobile</Form.Label>
                  <Form.Text className="col-sm-7">
                    <Form.Control
                      type="number"
                      onChange={(e) => setPhone(e.target.value)}
                      defaultValue={phone}
                      placeholder="Mobile no."
                    />
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check
                    type="checkbox"
                    label="Send me App download link"
                  />
                </Form.Group>

                <Button
                  variant="primary float-right"
                  type="button"
                  onClick={(e) => updateProfile()}
                >
                  Save
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
      {/* <!--mobile modal-->
             <!--skype modal--> */}
      <div
        className="modal fade"
        id="add_skype"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog profile-modal">
          <div className="modal-content">
            <div className="modal-header border-top-blue border-bottom-0">
              <h5 className="modal-title" id="exampleModalLabel">
                {" "}
                Skype
              </h5>
              <button
                type="button"
                className="btn-close custum-close-btn"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="text"
                    onChange={(e) => setSkype(e.target.value)}
                    defaultValue={skype}
                    placeholder="Skype"
                  />
                </Form.Group>

                <Button
                  variant="primary float-right"
                  type="button"
                  onClick={(e) => updateProfile()}
                >
                  Save
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
      {/* <!--skype-->
             <!--location modal--> */}
      <div
        className="modal fade"
        id="add_location"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog profile-modal">
          <div className="modal-content">
            <div className="modal-header border-top-blue border-bottom-0">
              <h5 className="modal-title" id="exampleModalLabel">
                {" "}
                Location
              </h5>
              <button
                type="button"
                className="btn-close custum-close-btn"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="text"
                    onChange={(e) => setLocation(e.target.value)}
                    defaultValue={location}
                    placeholder="Location"
                  />
                </Form.Group>

                <Button
                  variant="primary float-right"
                  type="button"
                  onClick={(e) => updateProfile()}
                >
                  Save
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
      {/* <!--location-->
             <!--timezone modal--> */}
      <div
        className="modal fade"
        id="add_timezone"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog profile-modal">
          <div className="modal-content">
            <div className="modal-header border-top-blue border-bottom-0">
              <h5 className="modal-title" id="exampleModalLabel">
                {" "}
                Time Zone
              </h5>
              <button
                type="button"
                className="btn-close custum-close-btn"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Select
                    aria-label="Default select example"
                    onChange={(e) => setTimezone(e.target.value)}
                    defaultValue={timezone}
                  >
                    <option>(GMT-12:00) International Date Line West</option>
                    <option value="1">(GMT-11:00) American Samoa</option>
                    <option value="2">(GMT-11:00) American Samoa</option>
                    <option value="3">(GMT-11:00) American Samoa</option>
                  </Form.Select>
                </Form.Group>

                <Button
                  variant="primary float-right"
                  type="button"
                  onClick={(e) => updateProfile()}
                >
                  Save
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
      {/* <!--timezone-->
             <!--birthday modal--> */}
      <div
        className="modal fade"
        id="add_birthday"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog profile-modal">
          <div className="modal-content">
            <div className="modal-header border-top-blue border-bottom-0">
              <h5 className="modal-title" id="exampleModalLabel">
                {" "}
                Birthday{" "}
              </h5>
              <button
                type="button"
                className="btn-close custum-close-btn"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="date"
                    onChange={(e) => setBirthday(e.target.value)}
                    defaultValue={birthday}
                    placeholder="Birthday"
                  />
                </Form.Group>

                <Button
                  variant="primary float-right"
                  type="button"
                  onClick={(e) => updateProfile()}
                >
                  Save
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
      {/* <!--birthday-->
             <!--work anniversary modal--> */}
      <div
        className="modal fade"
        id="add_workanniversary"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog profile-modal">
          <div className="modal-content">
            <div className="modal-header border-top-blue border-bottom-0">
              <h5 className="modal-title" id="exampleModalLabel">
                {" "}
                When did you join smartpax{" "}
              </h5>
              <button
                type="button"
                className="btn-close custum-close-btn"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="date"
                    onChange={(e) => setWorka(e.target.value)}
                    defaultValue={worka}
                    placeholder=""
                  />
                </Form.Group>

                <Button
                  variant="primary float-right"
                  type="button"
                  onClick={(e) => updateProfile()}
                >
                  Save
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
      {/* <!--work anniversary--> */}
      {/* <!--modals--> */}
    </>
  );
}
export default Personaltab;
